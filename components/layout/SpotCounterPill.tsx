import { Spot } from "@/types/location";
import spots from "@/data/locations.json";

export default function SpotCounterPill() {
    const typedSpots = spots as Spot[];
    
    const validSpotCount = typedSpots.filter(
        (spot) =>
            typeof spot.lat === "number" &&
            typeof spot.lng === "number" &&
            !Number.isNaN(spot.lat) &&
            !Number.isNaN(spot.lng)       
    ).length;

    return (
        <div className="fixed left-1/2 top-[5.7rem] z-[999] -translate-x-1/2">
            <div className="rounded-md border border-emerald-400/70 bg-emerald-500/10 px-4 py-1.5 shadow-[0_0_18px_rgba(16,185,129,0.15)] backdrop-blur-md">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-300">
                    Spots: {validSpotCount}
                </p>
            </div>
        </div>
    )
}