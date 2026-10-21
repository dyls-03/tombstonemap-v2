-- Initial schema, already applied manually through the Supabase SQL Editor.
-- Use this migration for a new database; do not rerun it against the existing table.
begin;

create table public.spots (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (length(trim(slug)) > 0),
  name text not null check (length(trim(name)) > 0),
  region text not null check (length(trim(region)) > 0),
  country text not null check (length(trim(country)) > 0),
  type text not null check (
    type in ('cliff', 'board', 'bridge', 'platform', 'swing', 'tree', 'roof')
  ),
  lat double precision not null check (lat between -90 and 90),
  lng double precision not null check (lng between -180 and 180),
  heights numeric[],
  tags text[],
  notes text,
  access_notes text,
  status text not null default 'draft' check (
    status in ('draft', 'pending', 'published', 'archived')
  ),
  sort_order integer not null default 0 check (sort_order >= 0),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint spots_valid_heights check (
    heights is null or (
      array_position(heights, null) is null
      and 0 < all(heights)
      and 'Infinity'::numeric > all(heights)
    )
  ),
  constraint spots_valid_tags check (
    tags is null or (
      array_position(tags, null) is null
      and tags <@ array[
        'cliff', 'board', 'bridge', 'platform', 'swing', 'tree', 'roof'
      ]::text[]
    )
  )
);

create index spots_status_sort_order_idx
  on public.spots (status, sort_order, id);

create function public.set_spot_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger spots_set_updated_at
before update on public.spots
for each row execute function public.set_spot_updated_at();

alter table public.spots enable row level security;

revoke all privileges on table public.spots from public, anon, authenticated;
grant select on table public.spots to anon, authenticated;

create policy "Published spots are publicly readable"
on public.spots for select to anon, authenticated
using (status = 'published');

commit;
