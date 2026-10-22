"use client";

import dynamic from "next/dynamic";
import type { Spot } from "@/types/location";

const TombstoneMap = dynamic(() => import("./TombstoneMap"), {
  ssr: false,
});

export default function MapClient({ spots }: { spots: Spot[] }) {
  return <TombstoneMap spots={spots} />;
}
