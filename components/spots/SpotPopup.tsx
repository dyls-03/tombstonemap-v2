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
      anchor="top"
      closeOnClick={false}
      onClose={onClose}
      className="tombstone-popup"
    >
      <div className="w-72 text-white">
        <p
          className="text-xs uppercase tracking-[0.25em]"
          style={{ color: colour }}
        >
          {spot.type}
        </p>

        <h2 className="mt-2 text-lg font-bold">{spot.name}</h2>

        <p className="mt-1 text-sm text-white/55">
          {spot.region}, {spot.country}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/60">
          <div className="rounded-lg bg-white/5 p-2">
            <p className="text-white/35">Latitude</p>
            <p>{spot.lat}</p>
          </div>

          <div className="rounded-lg bg-white/5 p-2">
            <p className="text-white/35">Longitude</p>
            <p>{spot.lng}</p>
          </div>
        </div>

        {spot.notes && (
          <p className="mt-4 text-sm leading-6 text-white/70">
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