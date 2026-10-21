# Supabase spot data

The map, counter, spot browser and detail pages read `public.spots` through
`lib/spots.ts`. The homepage shares one result between its map and counter.
`data/locations.json` is retained as the original import snapshot and test fixture;
editing it no longer changes the website.

## Local development

Install dependencies with `npm ci`. Set these values in the ignored `.env.local`:

```dotenv
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
NEXT_PUBLIC_MAPBOX_TOKEN=your-existing-mapbox-token
```

The Supabase connection runs only on the server and uses the publishable key so
RLS applies. A secret key, service-role key and database password are unnecessary.
The read client rejects keys without the `sb_publishable_` prefix.

Run `npm run dev`, then check `/`, `/spots`, and a spot detail page. Lists retain
the source order through `sort_order`, with UUIDs breaking ties. Reads explicitly
page through the Data API and request only display fields.
Pagination uses the reported total even if the project's row cap is lower than
the requested page size. Database requests have a 15-second timeout.

Data is fetched at request time without persistent caching. Full-page refreshes
show Dashboard changes without redeployment. An already-open page or a prefetched
client navigation can still show previously loaded data until refreshed.
Database failures show a retry screen; a successful detail lookup with no visible
record returns 404. There is no fallback to the JSON snapshot.

There is intentionally no ancestor `loading.tsx` boundary: streaming a loading
screen before a missing detail lookup completes would commit HTTP 200 before
Next.js can send the correct 404 status.

## Database setup and editing

`supabase/migrations/20261021000000_create_spots.sql` records the schema and RLS
already applied manually. Do not execute it again against the existing database.
If adopting the Supabase CLI later, reconcile migration history before pushing.

For now, use the Supabase Dashboard Table Editor to add, edit or delete spots.
Keep project access restricted to the owner. New spots default to `draft`; change
`status` to `published` to expose them. The public `anon` and `authenticated`
roles have SELECT only, restricted by RLS to published rows. Website write
operations and public accounts are not implemented.

Give new records a unique `slug`. Preserve an existing record's slug when editing
coordinates so bookmarks and guide links continue working. `id` is a permanent
database identity; it is distinct from the public slug. Heights are in metres.
`access_notes` is adapted to the UI's `accessNotes` property.

Initial live verification matched all 439 records' text, arrays, source order and
stored slugs, including all four hardcoded guide links. Some coordinates were
returned by the Data API rounded to 15 significant digits; the largest observed
difference from the JSON was about `5e-13` degrees (less than 0.1 micrometre).
No coordinates are rounded by the application. For an exact storage audit, compare
values inside PostgreSQL rather than comparing the API's decimal representation:

```sql
select
  lat = 41.07175999978111::double precision as latitude_preserved,
  lng = -111.9147907671101::double precision as longitude_preserved
from public.spots
where slug = '41p07176--111p91479';
```

## Vercel

1. Add `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` to the project's Vercel
   environment variables for Production and Preview. Preserve its existing
   `NEXT_PUBLIC_MAPBOX_TOKEN` and any other settings.
2. Redeploy after adding or changing environment variables.
3. Verify the published count, filters, map popups, existing guide links and a
   nonexistent spot URL before promoting the preview to production.
4. Verify RLS in Supabase separately: unpublished rows must be invisible to the
   application roles, and INSERT, UPDATE and DELETE must be denied. The SQL Editor
   normally runs as `postgres` and bypasses these public access rules.

Run `npm run test:run`, `npm run lint`, and `npm run build` before deployment.
The data-layer tests mock HTTP responses; they do not prove deployed RLS policies.
Run the read-only [access audit](../supabase/audit-access.sql) in the Dashboard
SQL Editor to inspect the actual grants, policies and role attributes for both
`anon` and `authenticated`. See [the security review](supabase-review.md) for the
checks performed and outstanding findings.

## Backups and future features

Keep periodic database exports; the original JSON only backs up the initial data.
Back up Storage files separately once photos exist. Monitor the free plan's
database, Storage and egress usage and its inactivity pausing policy.

Add Supabase Auth and owner policies when implementing an in-site editor. User
submissions should start pending and require owner approval. Photos, favourites
and reviews can reference the permanent spot UUID without changing public URLs.
