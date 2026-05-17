import FloatingNavbar from "@/components/layout/FloatingNavBar";
import LogoLoop from "@/components/LogoLoop";
import Link from "next/link";

export default function AboutPage() {

  const logos = [
    { src: "https://cdn.simpleicons.org/react/white", alt: "React", href: "https://react.dev/" },
    { src: "https://cdn.simpleicons.org/docker/white", alt: "Docker", href: "https://www.docker.com/" },
    { src: "https://cdn.simpleicons.org/git/white", alt: "Git", href: "https://git-scm.com/" },
    { src: "https://cdn.simpleicons.org/github/white", alt: "GitHub", href: "https://github.com/" },
    { src: "https://cdn.simpleicons.org/githubcopilot/white", alt: "GitHub Copilot", href: ""},
    { src: "https://cdn.simpleicons.org/nextdotjs/white", alt: "Next.js", href: "https://nextjs.org/" },
    { src: "https://cdn.simpleicons.org/typescript/white", alt: "TypeScript", href: "https://www.typescriptlang.org/" },
    { src: "https://cdn.simpleicons.org/vercel/white", alt: "Vercel", href: "https://vercel.com/" },
  ];

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-28 text-white">
      <FloatingNavbar />

      <section className="mx-auto max-w-6xl">
        {/* HERO */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
            About
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            About Tombstone Map
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/70">
            Tombstone Map is a modern community-driven platform for discovering
            cliff jumping spots around the world.
          </p>

          <p className="mt-4 max-w-3xl text-white/50">
            Built for explorers, travellers, climbers, and adrenaline seekers -
            the goal is simple: help people discover incredible places while
            promoting responsible exploration and safer adventures.
          </p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-2xl font-bold text-cyan-300">300+</p>
              <p className="mt-1 text-sm text-white/50">Spots</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-2xl font-bold text-cyan-300">30+</p>
              <p className="mt-1 text-sm text-white/50">Countries</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-2xl font-bold text-cyan-300">V2</p>
              <p className="mt-1 text-sm text-white/50">Current Version</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-2xl font-bold text-cyan-300">24/7</p>
              <p className="mt-1 text-sm text-white/50">Active Development</p>
            </div>
          </div>
        </div>

        {/* WHAT IS IT */}
        <section className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-orange-300/70">
              The Platform
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Built for adventure
            </h2>

            <p className="mt-4 leading-relaxed text-white/65">
              Tombstone Map is currently a personal project to save and organise
              cliff jumping locations but my hopes are it will evolve into a much larger
              platform for adventure spot discovery.
            </p>

            <p className="mt-4 leading-relaxed text-white/65">
              The map includes detailed spot information such as coordinates,
              jump heights, access notes, spot types, and soon community-added
              details to help users find and explore locations more easily.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/70">
              Spot Types
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Explore different locations
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Cliffs",
                "Rope Swings",  
                "Bridges",
                "Waterfalls",
                "Quarries",
                "Diving Boards",
                "Trees",
                "Roofs",
              ].map((spot) => (
                <div
                  key={spot}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70"
                >
                  {spot}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY THE NAME */}
        <section className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
            the origin
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Why the name “Tombstone”?
          </h2>

          <div className="mt-6 space-y-4 text-white/65 leading-relaxed">
            <p>
              “Tombstoning” is a British slang term for the extreme practice of cliff
              jumping - especially jumps into water from cliffs, bridges,
              quarries, or other high places.
            </p>

            <p>
              The name is believed to come from the upright posture jumpers take
              while entering the water - resembling a falling tombstone.
              Another theory traces the phrase back to Tombstone Rock at Stoke
              Point in Wembury, Devon, England, where people were known to jump
              into the sea below.
            </p>

            <p>
              Others believe the name became associated with the activity due to
              the serious injuries and fatalities associated with the sport.
            </p>

            <p className="text-white/50">
              Tombstone Map embraces the adventurous side of cliff jumping
              culture while strongly promoting responsible exploration, safety,
              respect for nature, and informed decision-making.
            </p>
          </div>
        </section>

        {/* SAFETY */}
        <section className="mt-14 rounded-3xl border border-red-500/20 bg-red-500/[0.05] p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-red-300/70">
            Safety & Responsibility
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Explore responsibly
          </h2>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <p className="leading-relaxed text-white/65">
                Cliff jumping involve serious risk. Water depth, currents, 
                weather conditions, landing zones,
                and access routes can change at any time.
              </p>

              <p className="mt-4 leading-relaxed text-white/65">
                Information on Tombstone Map may become outdated or incomplete,
                and all activities are performed entirely at your own risk.
              </p>
            </div>

            <div>
              <ul className="space-y-3 text-white/70">
                <li>• Always inspect landing areas yourself</li>
                <li>• Never jump alone</li>
                <li>• Respect local laws and communities</li>
                <li>• Use appropriate equipment where required</li>
                <li>• Leave places better than you found them</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TECH / PROJECT */}
<section className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
  <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.25em] text-purple-300/70">
        The Project
      </p>

      <h2 className="mt-3 max-w-2xl text-3xl font-semibold">
        Built with modern web technologies
      </h2>

      <p className="mt-5 leading-relaxed text-white/65">
        Tombstone Map V2 was rebuilt from the ground up as a fast,
        responsive, and scalable mapping platform focused on adventure
        spot discovery.
      </p>

      <p className="mt-4 leading-relaxed text-white/65">
        The application is built using modern technologies including Next.js,
        React, TypeScript, Tailwind CSS, Mapbox, and Vercel, with continuous
        updates and improvements being actively developed.
      </p>

      <p className="mt-4 leading-relaxed text-white/50">
        The long-term goal is to create the best global platform for
        discovering, documenting, and sharing cliff jumping and outdoor
        adventure locations.
      </p>
    </div>

    <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">
      <a
        href="https://github.com/dyls-03/tombstonemap-v2"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-purple-400 px-6 py-3 text-center font-medium text-black transition hover:bg-purple-300"
      >
        View GitHub Repo
      </a>

    </div>
  </div>

  <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 px-4 py-5">
    <LogoLoop
      logos={logos}
      speed={70}
      direction="left"
      logoHeight={36}
      gap={56}
      pauseOnHover
      scaleOnHover
      fadeOut
      fadeOutColor="#050505"
    />
  </div>
</section>

        {/* FUTURE */}
        <section className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
            The Future
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Constantly evolving
          </h2>

          <p className="mt-5 max-w-3xl leading-relaxed text-white/65">
            Tombstone Map V2 is being actively developed with plans for
            community submissions, photo uploads, verified spot updates,
            personal accounts, private spots, advanced filtering, and much
            more.
          </p>

          <p className="mt-4 max-w-3xl leading-relaxed text-white/65">
            The long-term vision is to create the best global platform for
            discovering and documenting adventure locations.
          </p>
        </section>

        {/* FOOTER */}
        <section className="mt-14 flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10 text-center backdrop-blur-xl">
          <h2 className="text-3xl font-bold">
            Discover hidden spots around the world
          </h2>

          <p className="mt-4 max-w-2xl text-white/65">
            Explore the map, discover new locations, and help build the future
            of adventure spot discovery.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-black transition hover:bg-cyan-300"
            >
              Open Map
            </Link>

            <Link
              href="/spots"
              className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 font-medium text-white transition hover:bg-white/[0.08]"
            >
              Browse Spots
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}