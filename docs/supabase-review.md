# Supabase migration review — 22 October 2026

## Outcome

The migration exposes no application write endpoint and uses a server-only,
publishable-key client. Live anonymous insert, update, delete and upsert probes
were denied with PostgreSQL error `42501` (HTTP 401). The probes used empty
payloads or a verified nonexistent UUID, so no spot was changed. The published
row count remained 439 before and after these checks.

The owner's hosted SQL audit result also confirms SELECT-only access for both
`anon` and `authenticated`, RLS enabled, and a single policy exposing only
published spots. Neither role owns the table, bypasses RLS or inherits owner or
service-role permissions.

The owner also supplied the definition of `public.rls_auto_enable()`. It is an
event-trigger function that enables RLS on newly created public tables, with a
fixed search path and safely quoted identifiers. It provides no ordinary API
entry point for modifying spots. The database access review has no remaining
permission findings within the inspected scope.

A complete security sign-off is still pending because the existing dependency
tree has known security advisories, including critical advisories for Next.js.
These require separate dependency remediation.

## Code and behaviour verified

- Spot data is read only through the shared server module. Both list and detail
  queries explicitly filter `status = published`; RLS remains the database
  enforcement layer, including requests made directly to the Data API.
- No secret key, database password, session token or authenticated user's cookie
  is used by the read client. It rejects non-publishable keys. No Supabase
  environment values appeared in the built browser JavaScript or checked HTML
  responses. `.env.local` is ignored and untracked.
- The moved spot browser matches the original layout and filtering code apart
  from receiving props and using permanent IDs and stored, encoded slugs.
- Browser automation passed search, country, region, type/tag, reset and empty
  results; detail notes, optional-field fallbacks and Maps links; 439 markers,
  map popups and their stored URLs; and a 390-pixel mobile layout. No uncaught
  browser exceptions were recorded.
- HTTP checks passed for the homepage, list, detail pages and all four hardcoded
  guide destinations. Missing spots returned HTTP 404. A root loading boundary
  was deliberately omitted to preserve that status.
- The original JSON and all existing URLs are retained. Initial live comparison
  matched every text/array field, order and slug; tiny coordinate representation
  differences are documented in `supabase.md`.
- Production build and TypeScript passed. ESLint reported no errors and six
  existing warnings in `components/LogoLoop.tsx`.
- All 19 Vitest tests passed. A separate production server with a dummy invalid
  key returned HTTP 500, rendered the retry screen in the browser and did not
  expose the dummy credential. The real environment file was not modified.

## Corrections made during review

- Pagination no longer mistakes a short response for the final page when a
  project's configured API row cap is below the requested page size. It uses
  the returned total and advances by the actual number of rows received.
- Database requests now have a 15-second timeout.
- Database slugs are encoded when inserted into links.
- Regression tests cover a reduced row cap, incomplete results, missing counts,
  aborted requests and attempts to inject filter parameters through a slug.

## Existing dependency findings

`npm audit --omit=dev` reported 25 affected dependency entries: 2 critical,
17 high, 4 moderate and 2 low. Including development dependencies reported 30:
2 critical, 20 high, 6 moderate and 2 low. No Supabase package was reported.
Every reported package version was unchanged from commit `fb6ae33`, before the
Supabase dependency was installed. Dependency files were not changed by this
review.

Next.js is pinned to `16.2.6`. The maintainers identify, among other issues:

- [Windows-hosted remote code execution](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36), patched in `16.3.3`. This is relevant to a reachable Windows-hosted server; it is not a claim that Vercel runs Windows.
- [AVIF image optimization remote code execution](https://github.com/vercel/next.js/security/advisories/GHSA-2xp9-vwfh-vxw4), patched in `16.3.3`. The current spot implementation has no photo uploads or AVIF image inputs.
- [Image optimization SSRF](https://github.com/vercel/next.js/security/advisories/GHSA-cjq9-62q9-8jv4), patched in `16.3.8`. The advisory says applications without `images.remotePatterns` are unaffected; this project has none configured.

The audit recommends Next.js `16.4.2`. Framework updates should keep
`eslint-config-next` aligned and pass the installed version's documented checks.
The `proxy-addr` critical entry is pulled through the existing `shadcn` CLI's MCP
and Express dependencies, which the application does not import. An installed
package advisory does not by itself prove that the affected path is reachable
through this site's routes.

Do not use a forced blanket audit fix: the current audit also suggests major
downgrades of `shadcn` and `eslint-config-next`. Updates need to be selected and
tested deliberately.

## Hosted database access audit

The owner supplied the read-only `supabase/audit-access.sql` result on 22 October
2026. Both `anon` and `authenticated` have SELECT and no INSERT, UPDATE, DELETE,
TRUNCATE, REFERENCES or TRIGGER grants. Neither has column-level write grants or
permission to create objects in `public`. Neither is a superuser, has BYPASSRLS,
owns spots or belongs to its owner or service role. No other readable public
relations were reported. No test accounts or privileged API keys were created.

RLS is enabled. The only spots policy is SELECT for both roles with
`status = 'published'`. A null `with_check` is expected for a SELECT policy.
`spots_force_rls = false` does not let these non-owner roles bypass RLS; FORCE
RLS concerns the table owner.

The original schema grants SELECT for the entire published row. A direct API
caller can therefore read timestamps, ordering and `created_by`, even though the
application does not select them. Existing imported `created_by` values are null.
Keep private account information in separate protected tables; review column
grants before exposing future author information.

`set_spot_updated_at()` is an invoker-security trigger function with an empty
search path. Trigger functions cannot be invoked as ordinary functions to obtain
write privileges. Default EXECUTE grants on it are unnecessary but do not grant
INSERT, UPDATE or DELETE on spots.

The owner supplied and we inspected the definition of `rls_auto_enable()`. It
returns `event_trigger`, uses PL/pgSQL with SECURITY DEFINER and
`search_path = pg_catalog`, and follows the purpose of the example in
[Supabase's event-trigger documentation](https://supabase.com/docs/guides/database/postgres/event-triggers).
It inspects table-creation events, restricts its work to the public schema and
enables RLS with `format('%I.%I', ...)` identifier quoting. It does not insert,
update or delete spot records. PostgreSQL prevents event-trigger functions from
being called as ordinary functions, so its EXECUTE grants do not expose an
ordinary privileged RPC. The public roles also cannot create objects in the
schema. No function invocation or remote permission changes were needed.

Its exception handler logs failures without rethrowing them. New tables must
still have RLS explicitly enabled and verified; automatic enablement should not
be the only check. RLS on the existing spots table is already confirmed enabled.

For future read-only reinspection:

```sql
select pg_get_functiondef('public.rls_auto_enable()'::regprocedure)
  as function_definition;
```

The access audit now includes function return types so EXECUTE grants on trigger
functions can be distinguished from ordinary callable functions.

## Existing local-service limitations

The local environment has no Upstash Redis credentials, so the existing live
viewer counter is not fully configured locally. Vercel analytics script paths
return 404 under local `next start`; the migration does not change these services.
Vercel deployment settings and project Dashboard membership were not inspected.
