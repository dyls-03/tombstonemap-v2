"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Map", href: "/" },
  { label: "Spots", href: "/spots" },
  { label: "Guides", href: "/guides" },
];

const aboutItems = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/about/contact" },
  { label: "Privacy", href: "/about/privacy" },
  { label: "Disclaimer", href: "/about/disclaimer" },
];

export default function FloatingNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/spots" || href === "/guides") {
      return pathname === href || pathname.startsWith(`${href}/`);
    }
    return pathname === href;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileAboutOpen(false);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) setIsMobileAboutOpen(false);
    setIsMobileMenuOpen((isOpen) => !isOpen);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-[999] bg-black/35 backdrop-blur-[2px] md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <header className="fixed left-1/2 top-4 z-[1000] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 md:top-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/75 px-4 py-3 text-white shadow-2xl backdrop-blur-xl md:px-5">
          <Link href="/" className="flex min-w-0 items-center gap-3" onClick={closeMobileMenu}>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              ▲
            </div>

            <div className="min-w-0">
              <h1 className="truncate text-sm font-bold tracking-wide">
                Tombstone Map
              </h1>

              <p className="truncate text-xs text-white/45">
                Cliff jump map
              </p>
            </div>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={
                  isActive(item.href)
                    ? "rounded-lg bg-white/10 px-3 py-2 text-sm text-white"
                    : "rounded-lg px-3 py-2 text-sm text-white/65 hover:bg-white/10 hover:text-white"
                }
              >
                {item.label}
              </Link>
            ))}

            <div className="group relative">
              <button
                type="button"
                aria-haspopup="true"
                className={
                  pathname.startsWith("/about")
                    ? "rounded-lg bg-white/10 px-3 py-2 text-sm text-white"
                    : "rounded-lg px-3 py-2 text-sm text-white/65 hover:bg-white/10 hover:text-white"
                }
              >
                About
              </button>

              <div className="invisible absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="rounded-2xl border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur-xl">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={
                        pathname === item.href
                          ? "block rounded-xl bg-white/10 px-4 py-2 text-sm text-white"
                          : "block rounded-xl px-4 py-2 text-sm text-white/65 hover:bg-white/10 hover:text-white"
                      }
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/support"
              aria-current={pathname.startsWith("/support") ? "page" : undefined}
              className={
                pathname.startsWith("/support")
                  ? "rounded-lg bg-white/10 px-3 py-2 text-sm text-white"
                  : "rounded-lg px-3 py-2 text-sm text-white/65 hover:bg-white/10 hover:text-white"
              }
            >
              Support
            </Link>
          </nav>

          <button type="button" className="hidden rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-300 md:block">
            Sign in
          </button>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 transition hover:bg-cyan-400/20 md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute top-[calc(100%+0.5rem)] max-h-[calc(100dvh-6.5rem)] w-full overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-black/95 p-2 text-white shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="grid grid-cols-2 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={
                    isActive(item.href)
                      ? "rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white"
                      : "rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                  }
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                aria-expanded={isMobileAboutOpen}
                aria-controls="mobile-about-navigation"
                className={
                  pathname.startsWith("/about")
                    ? "flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white"
                    : "flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                }
                onClick={() => setIsMobileAboutOpen((isOpen) => !isOpen)}
              >
                <span>About</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isMobileAboutOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              {isMobileAboutOpen && (
                <div
                  id="mobile-about-navigation"
                  className="col-span-2 grid grid-cols-2 gap-1 rounded-xl border border-white/10 bg-white/[0.04] p-1"
                >
                  {aboutItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={
                        pathname === item.href
                          ? "rounded-lg bg-white/10 px-3 py-2.5 text-sm font-medium text-white"
                          : "rounded-lg px-3 py-2.5 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
                      }
                      onClick={closeMobileMenu}
                    >
                      {item.href === "/about" ? "Overview" : item.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/support"
                aria-current={pathname === "/support" ? "page" : undefined}
                className={
                  pathname === "/support"
                    ? "rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white"
                    : "rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                }
                onClick={closeMobileMenu}
              >
                Support
              </Link>
            </div>

            <div className="mt-2 border-t border-white/10 pt-2">
              <button type="button" className="w-full rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-300">
                Sign in
              </button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
