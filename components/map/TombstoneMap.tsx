"use client";

import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

export default function TombstoneMap() {
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
        <Marker longitude={-2.445} latitude={50.546}>
          <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
        </Marker>
      </Map>
    </div>
  );
}