import FloatingNavbar from "@/components/layout/FloatingNavBar";
import locations from "@/data/locations.json";
import type { Spot } from "@/types/location";
import { createSpotId } from "@/utils/createSpotId";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
    params: Promise<{
      spotId: string;
    }>;
  };

export default async function SpotDetailPage({ params }: PageProps) {
    const {spotId} = await params;
  
    const spots = locations as Spot[];

  const spot = spots.find(
    (spot) => createSpotId(spot.lat, spot.lng) === spotId
  );

  if (!spot) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 pt-28 pb-16 text-white">
      <FloatingNavbar />

      <section className="mx-auto max-w-5xl">
        <Link
          href="/spots"
          className="text-sm text-white/40 transition hover:text-cyan-300"
        >
          ← Back to spots
        </Link>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
                Spot
              </p>

              <h1 className="mt-3 text-4xl font-bold">{spot.name}</h1>

              <p className="mt-3 text-white/50">
                {spot.region}, {spot.country}
              </p>
            </div>

            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              {spot.type}
            </span>
          </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
                <InfoTile label="Latitude" value={spot.lat.toFixed(5)} />
                <InfoTile label="Longitude" value={spot.lng.toFixed(5)} />

                <a
                    href={`https://www.google.com/maps?q=${spot.lat},${spot.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[86px] items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/20"
                >
                    Open in Maps
                </a>
            </div>

            <div className="mt-4">
                <InfoTile
                    label="Heights"
                    value={
                    spot.heights?.length
                        ? `${spot.heights.join("m, ")}m`
                        : "Unknown"
                    }
                />
            </div>      
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
            <InfoSection title="Notes">
                {spot.notes ?? "No notes have been added yet."}
            </InfoSection>

            <InfoSection title="Access notes">
                {spot.accessNotes ?? "No access notes have been added yet."}
            </InfoSection>
        </div>

      </section>
    </main>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-white/35">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

function InfoSection({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-xl">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-3 text-white/60">{children}</p>
      </section>
    );
  }