import { describe, expect, it } from "vitest";
import locations from "../../data/locations.json";

type LocationType = {
  name?: unknown;
  lat?: unknown;
  lng?: unknown;
  region?: unknown;
  country?: unknown;
  type?: unknown;
  heights?: unknown;
};

const validTypes = ["cliff", "board", "bridge", "swing", "platform", "tree", "roof"] as const;

describe("locations.json", () => {
  it("all locations have the required fields", () => {
    const spots = locations as LocationType[];

    expect(Array.isArray(spots)).toBe(true);

    for (const spot of spots) {
      expect(spot.name, "name is required").toEqual(expect.any(String));
      expect(spot.region, `${spot.name} region is required`).toEqual(expect.any(String));
      expect(spot.country, `${spot.name} country is required`).toEqual(expect.any(String));
      expect(spot.lat, `${spot.name} lat is required`).toEqual(expect.any(Number));
      expect(spot.lng, `${spot.name} lng is required`).toEqual(expect.any(Number));
      expect(spot.type, `${spot.name} type is required`).toEqual(expect.any(String));
    }
  });

  it("all locations have valid values", () => {
    const spots = locations as LocationType[];

    for (const spot of spots) {
      expect((spot.name as string).trim(), "name cannot be empty").not.toBe("");
      expect((spot.region as string).trim(), `${spot.name} region cannot be empty`).not.toBe("");
      expect((spot.country as string).trim(), `${spot.name} country cannot be empty`).not.toBe("");

      expect(spot.lat, `${spot.name} lat must be between -90 and 90`).toBeGreaterThanOrEqual(-90);
      expect(spot.lat, `${spot.name} lat must be between -90 and 90`).toBeLessThanOrEqual(90);

      expect(spot.lng, `${spot.name} lng must be between -180 and 180`).toBeGreaterThanOrEqual(-180);
      expect(spot.lng, `${spot.name} lng must be between -180 and 180`).toBeLessThanOrEqual(180);

      expect(validTypes, `${spot.name} has invalid type`).toContain(spot.type);
    }
  });

  it("heights is optional, but must be an array of numbers if present", () => {
    const spots = locations as LocationType[];

    for (const spot of spots) {
      if (spot.heights === undefined) continue;

      expect(Array.isArray(spot.heights), `${spot.name} heights must be an array`).toBe(true);

      for (const height of spot.heights as unknown[]) {
        expect(typeof height, `${spot.name} height must be a number`).toBe("number");
      }
    }
  });

  it("does not contain duplicate spot names in the same region/country", () => {
    const spots = locations as LocationType[];
    const seen = new Set<string>();

    for (const spot of spots) {
      const key = `${spot.name}-${spot.region}-${spot.country}`.toLowerCase();

      expect(seen.has(key), `Duplicate spot found: ${key}`).toBe(false);

      seen.add(key);
    }
  });
});