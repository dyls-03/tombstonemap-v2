import FloatingNavbar from "@/components/layout/FloatingNavBar";

export default function SpotsPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-28 text-white">
      <FloatingNavbar />

      <section className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
          Explore
        </p>
        <h1 className="mt-3 text-4xl font-bold">Spots</h1>
        <p className="mt-4 max-w-2xl text-white/60">
          Browse cliff jumps, swim spots, waterfalls and outdoor locations.
        </p>
      </section>
    </main>
  );
}