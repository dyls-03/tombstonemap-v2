"use client";

import FloatingNavbar from "@/components/layout/FloatingNavBar";

export default function PageError() {
  return (
    <main className="min-h-screen bg-black px-6 pt-28 pb-16 text-white">
      <FloatingNavbar />
      <section className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <h1 className="text-2xl font-semibold">This page couldn&apos;t load</h1>
        <p className="mt-3 text-white/60">Please try again in a moment.</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-5 rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-cyan-200"
        >
          Try again
        </button>
      </section>
    </main>
  );
}
