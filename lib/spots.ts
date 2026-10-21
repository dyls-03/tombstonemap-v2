import "server-only";

import { connection } from "next/server";
import type { Spot } from "@/types/location";
import { createSupabaseReadClient } from "./supabase/server";

const SPOT_COLUMNS =
  "id,slug,name,region,country,type,lat,lng,heights,tags,notes,access_notes";
const PAGE_SIZE = 500;

type SpotRow = Omit<Spot, "heights" | "tags" | "notes" | "accessNotes"> & {
  heights: number[] | null;
  tags: string[] | null;
  notes: string | null;
  access_notes: string | null;
};

function toSpot(row: SpotRow): Spot {
  const { access_notes, heights, tags, notes, ...spot } = row;

  return {
    ...spot,
    heights: heights ?? undefined,
    tags: tags ?? undefined,
    notes: notes ?? undefined,
    accessNotes: access_notes ?? undefined,
  };
}

export async function getPublishedSpots(): Promise<Spot[]> {
  // Fetch at request time so Dashboard edits appear after a page refresh.
  await connection();
  const supabase = createSupabaseReadClient();
  const spots: Spot[] = [];

  // Page explicitly so growth beyond the Data API's row limit loses no spots.
  for (let offset = 0; ; ) {
    const { data, error, count } = await supabase
      .from("spots")
      .select(SPOT_COLUMNS, { count: "exact" })
      .eq("status", "published")
      .order("sort_order")
      .order("id")
      .range(offset, offset + PAGE_SIZE - 1)
      .overrideTypes<SpotRow[], { merge: false }>();

    if (error || count === null || (data.length === 0 && offset < count)) {
      throw new Error("Could not load spots from Supabase.");
    }

    spots.push(...data.map(toSpot));

    offset += data.length;

    // A project can cap API responses below PAGE_SIZE. A short page alone
    // does not mean the list is complete.
    if (offset >= count) return spots;
  }
}

export async function getPublishedSpotBySlug(slug: string): Promise<Spot | null> {
  await connection();
  const { data, error } = await createSupabaseReadClient()
    .from("spots")
    .select(SPOT_COLUMNS)
    .eq("status", "published")
    .eq("slug", slug)
    .maybeSingle()
    .overrideTypes<SpotRow | null, { merge: false }>();

  if (error) {
    throw new Error("Could not load spot from Supabase.");
  }

  return data ? toSpot(data) : null;
}
