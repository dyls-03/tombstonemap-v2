"use client";

import { useMemo, useState } from "react";
import FloatingNavbar from "@/components/layout/FloatingNavBar";
import locations from "@/data/locations.json";
import { createSpotId } from "@/utils/createSpotId";
import Link from "next/link";

type Spot = {
  name: string;
  lat: number;
  lng: number;
  country: string;
  region: string;
  type: string;
  heights?: number[];
};

export default function SpotsPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("all");
  const [region, setRegion] = useState("all");
  const [type, setType] = useState("all");

  const spots = locations as Spot[];

  const countries = useMemo(
    () => [...new Set(spots.map((spot) => spot.country))].sort(),
    [spots]
  );

  const regions = useMemo(
    () =>
      [
        ...new Set(
          spots
            .filter((spot) => country === "all" || spot.country === country)
            .map((spot) => spot.region)
        ),
      ].sort(),
    [spots, country]
  );

  const types = useMemo(
    () => [...new Set(spots.map((spot) => spot.type))].sort(),
    [spots]
  );

  const filteredSpots = useMemo(() => {
    const query = search.toLowerCase().trim();

    return spots.filter((spot) => {
      const matchesSearch =
        !query ||
        spot.name.toLowerCase().includes(query) ||
        spot.country.toLowerCase().includes(query) ||
        spot.region.toLowerCase().includes(query) ||
        spot.type.toLowerCase().includes(query);

      const matchesCountry = country === "all" || spot.country === country;
      const matchesRegion = region === "all" || spot.region === region;
      const matchesType = type === "all" || spot.type === type;

      return matchesSearch && matchesCountry && matchesRegion && matchesType;
    });
  }, [spots, search, country, region, type]);

  function resetFilters() {
    setSearch("");
    setCountry("all");
    setRegion("all");
    setType("all");
  }

  return (
    <main className="min-h-screen bg-black px-6 pt-28 pb-16 text-white">
      <FloatingNavbar />

      <section className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
          Explore
        </p>

        <h1 className="mt-3 text-4xl font-bold">Spots</h1>

        <p className="mt-4 max-w-2xl text-white/60">
            Browse cliff jumping spots in a clean list view.
        </p>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs tracking-wide text-white/35 backdrop-blur">
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-300/60" />
            Click a spot to view more information
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-3 md:grid-cols-4">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search spots..."
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-300/60"
            />

            <select
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                setRegion("all");
              }}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/60"
            >
              <option value="all">All countries</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/60"
            >
              <option value="all">All regions</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/60"
            >
              <option value="all">All types</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-white/50">
            <p>
              Showing{" "}
              <span className="font-semibold text-cyan-300">
                {filteredSpots.length}
              </span>{" "}
              of {spots.length} spots
            </p>

            <button
              onClick={resetFilters}
              className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200"
            >
              Reset filters
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {filteredSpots.map((spot) => {
            const spotId = createSpotId(spot.lat, spot.lng);

            return (
              <Link href={`/spots/${spotId}`} key={spotId}>
                <article className="cursor-pointer rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/[0.07]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-white">
                        {spot.name}
                      </h2>

                      <p className="mt-1 text-sm text-white/50">
                        {spot.region}, {spot.country}
                      </p>
                    </div>

                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">
                      {spot.type}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-sm text-white/55">
                    {spot.heights && spot.heights.length > 0 && (
                      <p>
                        Heights:{" "}
                        <span className="text-white/80">
                          {spot.heights.join("m, ")}m
                        </span>
                      </p>
                    )}

                    <p className="text-xs text-white/35">
                      {spot.lat.toFixed(4)}, {spot.lng.toFixed(4)}
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {filteredSpots.length === 0 && (
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center text-white/50">
            No spots found.
          </div>
        )}
      </section>
    </main>
  );
}