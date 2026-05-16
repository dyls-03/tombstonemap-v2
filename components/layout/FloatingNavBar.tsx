"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Map", href: "/" },
  { label: "Spots", href: "/spots" },
  { label: "About", href: "/about" },
];

export default function FloatingNavbar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-1/2 top-5 z-[1000] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/75 px-5 py-3 text-white shadow-2xl backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
            ▲
          </div>

          <div>
            <h1 className="text-sm font-bold tracking-wide">Tombstone Map</h1>
            <p className="text-xs text-white/45">Cliff jump map</p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "rounded-lg bg-white/10 px-3 py-2 text-sm text-white"
                    : "rounded-lg px-3 py-2 text-sm text-white/65 hover:bg-white/10 hover:text-white"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-300">
          Sign in
        </button>
      </nav>
    </header>
  );
}