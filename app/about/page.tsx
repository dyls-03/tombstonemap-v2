import FloatingNavbar from "@/components/layout/FloatingNavBar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-28 text-white">
      <FloatingNavbar />

      <section className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
          About
        </p>
        <h1 className="mt-3 text-4xl font-bold">About Tombstone Map</h1>
        <p className="mt-4 max-w-2xl text-white/60">
        This site contains a cliff jumping map and list of cliff jumping locations around the world, with filters to help you find the perfect spot for your next jump.
        </p>
      </section>
    </main>
  );
}