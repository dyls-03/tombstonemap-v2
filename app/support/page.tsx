import FloatingNavbar from "@/components/layout/FloatingNavBar";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-28 text-white">
      <FloatingNavbar />

      <section className="mx-auto max-w-6xl">
        {/* HERO */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
            Support
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Support Tombstone Map
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-white/65">
            Tombstone Map is free to use and ad-free. If the map has helped you
            discover somewhere new, consider supporting the project to help
            cover running costs and keep the map growing.
          </p>
        </div>

        {/* MAIN SUPPORT CARD */}
        <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-orange-300/70">
                Keep it growing
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Help support the project
              </h2>

              <p className="mt-5 max-w-2xl leading-relaxed text-white/65">
                Support goes towards hosting, mapping services, development,
                maintenance and adding new locations to Tombstone Map.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-2xl font-bold text-cyan-300">£3</p>
                  <p className="mt-1 text-sm text-white/50">
                    Small support
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-2xl font-bold text-cyan-300">£5</p>
                  <p className="mt-1 text-sm text-white/50">
                    Helps cover costs
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-2xl font-bold text-cyan-300">£10</p>
                  <p className="mt-1 text-sm text-white/50">
                    Big support
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
                Ko-fi
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Support Tombstone Map
              </h3>

              <p className="mt-4 leading-relaxed text-white/60">
                Make a one-time contribution or support the project monthly
                through Ko-fi.
              </p>

              <a
                href="https://ko-fi.com/404dylan"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-full bg-cyan-400 px-6 py-3 text-center font-medium text-black transition hover:bg-cyan-300"
              >
                Support on Ko-fi
              </a>

              <p className="mt-4 text-center text-xs text-white/35">
                Payments are handled securely through Ko-fi.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT SUPPORT HELPS WITH */}
        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-300/70">
              Running costs
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Keeping Tombstone Map online
            </h2>

            <p className="mt-4 leading-relaxed text-white/60">
              Contributions help cover things like hosting, domains, mapping
              services and other infrastructure needed to keep the site
              available.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/70">
              Development
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Building new features
            </h2>

            <p className="mt-4 leading-relaxed text-white/60">
              Support also helps towards continued development, adding new
              spots, improving existing information and building new features.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}