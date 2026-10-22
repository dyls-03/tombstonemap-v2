import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));
vi.mock("next/server", () => ({ connection: vi.fn().mockResolvedValue(undefined) }));

import { getPublishedSpotBySlug, getPublishedSpots } from "../../lib/spots";

const row = {
  id: "d78f6245-547b-47d7-b9f8-448ba8c01886",
  slug: "existing-spot-url",
  name: "Test spot",
  region: "Howth",
  country: "Ireland",
  type: "cliff",
  lat: 53.38586536692246,
  lng: -6.048140400917386,
  heights: [2.5, 12],
  tags: ["platform"],
  notes: "Original description — keep all text.",
  access_notes: "Follow the coastal path.",
};

const fetchMock = vi.fn<typeof fetch>();

function response(data: unknown, status = 200, totalCount?: number) {
  const headers = new Headers({ "Content-Type": "application/json" });

  if (Array.isArray(data)) {
    headers.set("Content-Range", `*/${totalCount ?? data.length}`);
  }

  return new Response(JSON.stringify(data), {
    status,
    headers,
  });
}

beforeEach(() => {
  vi.stubEnv("SUPABASE_URL", "https://example.supabase.co");
  vi.stubEnv("SUPABASE_PUBLISHABLE_KEY", "sb_publishable_test");
  vi.stubGlobal("fetch", fetchMock);
});

afterEach(() => {
  fetchMock.mockReset();
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("published spot reads", () => {
  it("preserves coordinates, stored URLs, arrays and text while adapting access notes", async () => {
    fetchMock.mockResolvedValueOnce(response([row]));

    expect(await getPublishedSpots()).toEqual([
      {
        id: row.id,
        slug: row.slug,
        name: row.name,
        region: row.region,
        country: row.country,
        type: row.type,
        lat: row.lat,
        lng: row.lng,
        heights: row.heights,
        tags: row.tags,
        notes: row.notes,
        accessNotes: row.access_notes,
      },
    ]);

    const [input, options] = fetchMock.mock.calls[0];
    const url = new URL(String(input));
    expect(url.searchParams.get("status")).toBe("eq.published");
    expect(url.searchParams.get("order")).toBe("sort_order.asc,id.asc");
    expect(url.searchParams.get("select")).not.toContain("created_by");
    expect(options?.cache).toBe("no-store");
  });

  it("maps absent database values to optional fields without replacing empty arrays or strings", async () => {
    fetchMock.mockResolvedValueOnce(response([
      { ...row, heights: null, tags: null, notes: null, access_notes: null },
      { ...row, heights: [], tags: [], notes: "", access_notes: "" },
    ]));

    const spots = await getPublishedSpots();
    expect(spots[0]).toMatchObject({
      heights: undefined, tags: undefined, notes: undefined, accessNotes: undefined,
    });
    expect(spots[1]).toMatchObject({
      heights: [], tags: [], notes: "", accessNotes: "",
    });
  });

  it("continues reading after a full page instead of truncating the map and counter", async () => {
    const firstPage = Array.from({ length: 500 }, (_, index) => ({
      ...row, id: String(index), slug: `spot-${index}`,
    }));
    fetchMock
      .mockResolvedValueOnce(response(firstPage, 200, 501))
      .mockResolvedValueOnce(response([{ ...row, slug: "last-spot" }]));

    const spots = await getPublishedSpots();
    expect(spots).toHaveLength(501);
    expect(spots[500].slug).toBe("last-spot");
    const secondUrl = new URL(String(fetchMock.mock.calls[1][0]));
    expect(secondUrl.searchParams.get("offset")).toBe("500");
    expect(secondUrl.searchParams.get("limit")).toBe("500");
    expect(secondUrl.searchParams.get("status")).toBe("eq.published");
  });

  it("rejects partial results when a later page fails", async () => {
    fetchMock
      .mockResolvedValueOnce(response(Array.from({ length: 500 }, () => row), 200, 501))
      .mockResolvedValueOnce(response({ code: "42501", message: "Permission denied" }, 403));

    await expect(getPublishedSpots()).rejects.toThrow("Could not load spots");
  });

  it("handles a project API row cap smaller than the requested page size", async () => {
    fetchMock
      .mockResolvedValueOnce(response([row], 200, 2))
      .mockResolvedValueOnce(response([{ ...row, id: "second", slug: "second" }], 200, 2));

    expect(await getPublishedSpots()).toHaveLength(2);
    const secondUrl = new URL(String(fetchMock.mock.calls[1][0]));
    expect(secondUrl.searchParams.get("offset")).toBe("1");
    expect(secondUrl.searchParams.get("limit")).toBe("500");
  });

  it("rejects an unexpectedly empty page instead of returning an incomplete list", async () => {
    fetchMock
      .mockResolvedValueOnce(response([row], 200, 2))
      .mockResolvedValueOnce(response([], 200, 2));

    await expect(getPublishedSpots()).rejects.toThrow("Could not load spots");
  });

  it("rejects a response without the requested count instead of assuming it is complete", async () => {
    fetchMock.mockResolvedValueOnce(new Response(JSON.stringify([row]), {
      headers: { "Content-Type": "application/json" },
    }));

    await expect(getPublishedSpots()).rejects.toThrow("Could not load spots");
  });

  it("treats an aborted request as an error rather than a 404 or an empty result", async () => {
    fetchMock.mockRejectedValueOnce(new DOMException("Request aborted", "AbortError"));

    await expect(getPublishedSpotBySlug(row.slug)).rejects.toThrow("Could not load spot");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("looks up the stored slug and restricts detail reads to published spots", async () => {
    fetchMock.mockResolvedValueOnce(response([row]));

    expect(await getPublishedSpotBySlug(row.slug)).toMatchObject({
      slug: row.slug, accessNotes: row.access_notes,
    });
    const url = new URL(String(fetchMock.mock.calls[0][0]));
    expect(url.searchParams.get("slug")).toBe(`eq.${row.slug}`);
    expect(url.searchParams.get("status")).toBe("eq.published");
  });

  it("returns null for a successful detail read with no visible spot", async () => {
    fetchMock.mockResolvedValueOnce(response([]));

    await expect(getPublishedSpotBySlug("missing-spot")).resolves.toBeNull();
  });

  it("keeps a crafted slug in the equality value without changing the publication filter", async () => {
    fetchMock.mockResolvedValueOnce(response([]));
    const slug = "unknown&status=neq.published&or=(status.eq.draft)";

    await expect(getPublishedSpotBySlug(slug)).resolves.toBeNull();
    const url = new URL(String(fetchMock.mock.calls[0][0]));
    expect(url.searchParams.getAll("status")).toEqual(["eq.published"]);
    expect(url.searchParams.get("slug")).toBe(`eq.${slug}`);
    expect(url.searchParams.has("or")).toBe(false);
  });

  it("throws for a database failure rather than treating it as a missing spot", async () => {
    fetchMock.mockResolvedValueOnce(response({ code: "42501", message: "Permission denied" }, 403));

    await expect(getPublishedSpotBySlug(row.slug)).rejects.toThrow("Could not load spot");
  });

  it("returns an empty list when there are no published spots", async () => {
    fetchMock.mockResolvedValueOnce(response([]));

    await expect(getPublishedSpots()).resolves.toEqual([]);
  });

  it("fails before a request when configuration is missing", async () => {
    vi.stubEnv("SUPABASE_URL", "");

    await expect(getPublishedSpots()).rejects.toThrow("Set SUPABASE_URL");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects a secret key so public reads cannot accidentally bypass RLS", async () => {
    vi.stubEnv("SUPABASE_PUBLISHABLE_KEY", "sb_secret_test");

    await expect(getPublishedSpots()).rejects.toThrow("must be a publishable key");
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
