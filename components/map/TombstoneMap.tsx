"use client";

import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

import spots from "@/data/locations.json";
import { TYPE_COLOURS } from "@/lib/typeColours";
import type { Spot } from "@/types/location";

export default function TombstoneMap() {
  const typedSpots = spots as Spot[];

  const validSpots = typedSpots.filter(
    (spot) =>
      typeof spot.lat === "number" &&
      typeof spot.lng === "number" &&
      !Number.isNaN(spot.lat) &&
      !Number.isNaN(spot.lng)
  );

  return (
    <div className="absolute inset-0 z-0">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: -3,
          latitude: 54.5,
          zoom: 5.5,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      >
        {validSpots.map((spot) => {
          const typeKey = spot.type?.toLowerCase().trim() ?? "other";
          const colour = TYPE_COLOURS[typeKey] ?? TYPE_COLOURS.other;

          return (
            <Marker
              key={`${spot.name}-${spot.lat}-${spot.lng}`}
              longitude={spot.lng}
              latitude={spot.lat}
              anchor="center"
            >
              <div className="group relative">
                <div className="relative">
                    <div 
                        className="absolute inset-0 z-0 rounded-full blur-md opacity-90"
                        style={{
                            backgroundColor: colour,
                            transform: "scale(0.75)",
                        }}
                    />

                
                    <button
                    className="relative z-10 h-3.5 w-3.5 rounded-full border border-white/80"
                    style={{
                        backgroundColor: colour,
                        boxShadow: `0 0 18px ${colour}`,
                    }}
                    />
                </div>

                <div className="pointer-events-none absolute left-1/2 top-6 z-50 hidden w-48 -translate-x-1/2 rounded-xl border border-white/10 bg-black/90 p-3 text-white shadow-2xl backdrop-blur-md group-hover:block">
                  <p className="text-sm font-semibold">{spot.name}</p>

                  <p className="mt-1 text-xs text-white/50">
                    {spot.region}, {spot.country}
                  </p>

                  <p
                    className="mt-2 text-xs uppercase tracking-[0.2em]"
                    style={{ color: colour }}
                  >
                    {spot.type}
                  </p>
                </div>
              </div>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
}