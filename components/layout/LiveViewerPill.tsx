"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function LiveViewerPill() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const viewerId =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `viewer-${window.performance.now()}`;

    const ping = async () => {
      try {
        const res = await fetch("/api/live-viewers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ viewerId }),
        });

        const data = await res.json();
        setCount(data.count);
      } catch {
        setCount(null);
      }
    };

    ping();

    const interval = window.setInterval(ping, 10_000);

    return () => window.clearInterval(interval);
  }, []);

  if (count === null) return null;

  return (
    <div className="fixed bottom-15 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-sm text-white shadow-lg backdrop-blur-md">
        <Eye className="h-4 w-4 text-purple-300" />
        <span className="font-semibold">{count}</span>
        <span className="text-white/70">watching</span>
      </div>
    </div>
  );
}