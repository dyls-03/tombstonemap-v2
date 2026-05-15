"use client";

import { useState } from "react";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/45 px-4 backdrop-blur-sm">
      <div className="max-w-md rounded-2xl border border-white/10 bg-black/90 p-6 text-white shadow-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
          New version
        </p>

        <h2 className="mt-3 text-2xl font-bold">Welcome to Tombstone Map v2</h2>

        <p className="mt-4 text-sm leading-6 text-white/65">
          This is the new and improved version of Tombstone Map, rebuilt with a
          cleaner design, faster map experience, and a better foundation for new
          future features like user-submitted spots, private locations, filters, and
          improved spot details.
        </p>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-6 w-full rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-300 hover:bg-cyan-400/20"
        >
          Explore the map
        </button>
      </div>
    </div>
  );
}