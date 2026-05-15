"use client";

import dynamic from "next/dynamic";

const TombstoneMap = dynamic(() => import("./TombstoneMap"), {
  ssr: false,
});

export default function MapClient() {
  return <TombstoneMap />;
}