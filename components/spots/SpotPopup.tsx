"use client";

import { Popup } from "react-map-gl/mapbox";
import { TYPE_COLOURS } from "@/lib/typeColours";
import type { Spot } from "@/types/location";

type Props = {
  spot: Spot;
  onClose: () => void;
};

export default function SpotPopup({ spot, onClose }: Props) {
  const typeKey = spot.type?.toLowerCase().trim() ?? "other";
  const colour = TYPE_COLOURS[typeKey] ?? TYPE_COLOURS.other;

  return (
    <Popup
      longitude={spot.lng}
      latitude={spot.lat}
      anchor="bottom"
      closeOnClick={false}
      onClose={onClose}
      className="tombstone-popup"
      offset={18}
    >
      <div className="w-72 rounded-2xl border border-white/10 bg-black/90 p-4 text-white shadow-2xl backdrop-blur-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: colour }}
            >
              {spot.type}
            </p>

            <h2 className="mt-2 text-lg font-bold leading-tight">
              {spot.name}
            </h2>

            <p className="mt-1 text-sm text-white/50">
              {spot.region}, {spot.country}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full px-2 text-white/35 hover:bg-white/10 hover:text-white"
          >
            ×
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-xl border border-white/10 bg-white/5 p-2">
            <p className="text-white/35">Latitude</p>
            <p className="mt-1 text-white/75">{spot.lat.toFixed(4)}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-2">
            <p className="text-white/35">Longitude</p>
            <p className="mt-1 text-white/75">{spot.lng.toFixed(4)}</p>
          </div>
        </div>

        {spot.heights && spot.heights.length > 0 && (
            <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                Heights
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                {spot.heights.map((height) => (
                    <span
                    key={height}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70"
                    >
                    {height}m
                    </span>
                ))}
                </div>
            </div>
        )}

        {spot.notes && (
          <p className="mt-4 text-sm leading-6 text-white/65">
            {spot.notes}
          </p>
        )}

        {spot.tags && spot.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {spot.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/65"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Popup>
  );
}