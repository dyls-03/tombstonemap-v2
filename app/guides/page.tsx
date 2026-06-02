import FloatingNavbar from "@/components/layout/FloatingNavBar";
import Link from "next/link";

const guides = [
  {
    title: "Cliff Jumping Safety",
    description:
      "Essential safety advice for assessing locations, checking conditions and making responsible decisions before jumping.",
    href: "/guides/cliff-jumping-safety",
    tag: "Safety",
  },
  {
    title: "Water Depth Guide",
    description:
      "A beginner-friendly guide to understanding depth, hazards, currents and why water conditions can change quickly.",
    href: "/guides/water-depth-guide",
    tag: "Conditions",
  },
  {
    title: "Red Bull Cliff Diving Spots",
    description:
      "A guide to famous Red Bull cliff diving and high diving locations around the world, including iconic competition venues and natural jumping spots.",
    href: "/guides/redbull-cliff-diving-spots",
    tag: "Spots",
  },
  {
    title: "What Gear to Bring",
    description:
      "Recommended equipment, essentials and useful items to consider when visiting outdoor swimming and cliff jumping locations.",
    href: "/guides/what-gear-to-bring",
    tag: "Gear",
  },
  {
    title: "What is Cold Water Shock?",
    description:
      "Learn how sudden cold-water exposure affects the body and why understanding cold water shock is important for outdoor safety.",
    href: "/guides/cold-water-shock",
    tag: "Safety",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
        <FloatingNavbar />
        <div className="mx-auto max-w-6xl">
            <div className="mb-10">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300/70">
                    Tombstone Map
                </p>

                <h1 className="text-5xl font-bold tracking-tight">
                    Adventure Guides
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/65">
                    Safety information, outdoor advice and beginner-friendly guides for
                    cliff jumping, swimming, rope swings and adventure locations.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {guides.map((guide) => (
                    <Link
                    key={guide.href}
                    href={guide.href}
                    className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-white/[0.06]"
                    >
                    <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-200/80">
                        {guide.tag}
                    </div>

                    <h2 className="mb-3 text-2xl font-semibold text-white group-hover:text-cyan-200">
                        {guide.title}
                    </h2>

                    <p className="leading-relaxed text-white/60">
                        {guide.description}
                    </p>

                    <div className="mt-6 text-sm font-medium text-cyan-300/80">
                        Read guide →
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    </main>
  );
}