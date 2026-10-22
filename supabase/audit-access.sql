-- Read-only security audit. Run in the Supabase SQL Editor as postgres.
-- Returns one JSON value. Does not change tables, policies, grants or spot data.
with client_roles as (
  select oid, rolname, rolsuper, rolbypassrls
  from pg_roles
  where rolname in ('anon', 'authenticated')
), spot_table as (
  select oid, relowner, relrowsecurity, relforcerowsecurity
  from pg_class
  where oid = 'public.spots'::regclass
)
select jsonb_build_object(
  'spots_rls_enabled', (select relrowsecurity from spot_table),
  'spots_force_rls', (select relforcerowsecurity from spot_table),
  'roles', (
    select jsonb_agg(jsonb_build_object(
      'role', r.rolname,
      'superuser', r.rolsuper,
      'bypasses_rls', r.rolbypassrls,
      'owns_spots', r.oid = t.relowner,
      'member_of_table_owner', pg_has_role(r.oid, t.relowner, 'MEMBER'),
      'member_of_service_role', pg_has_role(r.oid, 'service_role'::regrole, 'MEMBER'),
      'can_create_in_public', has_schema_privilege(r.oid, 'public', 'CREATE'),
      'can_select', has_table_privilege(r.oid, t.oid, 'SELECT'),
      'can_insert', has_table_privilege(r.oid, t.oid, 'INSERT'),
      'can_update', has_table_privilege(r.oid, t.oid, 'UPDATE'),
      'can_delete', has_table_privilege(r.oid, t.oid, 'DELETE'),
      'can_truncate', has_table_privilege(r.oid, t.oid, 'TRUNCATE'),
      'can_reference', has_table_privilege(r.oid, t.oid, 'REFERENCES'),
      'can_create_trigger', has_table_privilege(r.oid, t.oid, 'TRIGGER'),
      'can_insert_any_column', has_any_column_privilege(r.oid, t.oid, 'INSERT'),
      'can_update_any_column', has_any_column_privilege(r.oid, t.oid, 'UPDATE'),
      'selectable_columns', (
        select jsonb_agg(a.attname order by a.attnum)
        from pg_attribute a
        where a.attrelid = t.oid
          and a.attnum > 0 and not a.attisdropped
          and has_column_privilege(r.oid, t.oid, a.attnum, 'SELECT')
      )
    ) order by r.rolname)
    from client_roles r cross join spot_table t
  ),
  'spots_policies', (
    select jsonb_agg(jsonb_build_object(
      'name', policyname,
      'roles', roles,
      'command', cmd,
      'permissive', permissive,
      'using', qual,
      'with_check', with_check
    ) order by policyname)
    from pg_policies
    where schemaname = 'public' and tablename = 'spots'
  ),
  'other_readable_public_relations', coalesce((
    select jsonb_agg(jsonb_build_object(
      'role', r.rolname, 'name', c.relname, 'kind', c.relkind,
      'rls_enabled', c.relrowsecurity
    ) order by r.rolname, c.relname)
    from client_roles r
    cross join pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public'
      and c.relkind in ('r', 'p', 'v', 'm')
      and c.relname <> 'spots'
      and has_any_column_privilege(r.oid, c.oid, 'SELECT')
  ), '[]'::jsonb),
  'callable_public_security_definer_functions', coalesce((
    select jsonb_agg(jsonb_build_object(
      'role', r.rolname,
      'function', p.oid::regprocedure::text,
      'returns', pg_get_function_result(p.oid),
      'settings', p.proconfig
    ) order by r.rolname, p.proname)
    from client_roles r
    cross join pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public'
      and p.prosecdef
      and has_function_privilege(r.oid, p.oid, 'EXECUTE')
  ), '[]'::jsonb),
  'updated_at_function', (
    select jsonb_build_object(
      'security_definer', p.prosecdef,
      'returns_trigger', p.prorettype = 'trigger'::regtype,
      'settings', p.proconfig,
      'anon_can_execute', has_function_privilege('anon', p.oid, 'EXECUTE'),
      'authenticated_can_execute', has_function_privilege('authenticated', p.oid, 'EXECUTE')
    )
    from pg_proc p
    where p.oid = 'public.set_spot_updated_at()'::regprocedure
  )
) as security_audit;
