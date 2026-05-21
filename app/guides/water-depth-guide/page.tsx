import FloatingNavbar from "@/components/layout/FloatingNavBar";

export const metadata = {
    title: "How to Inspect Water Depth | Tombstone Map",
    description:
      "A guide to checking water depth, inspecting hazards and understanding changing outdoor conditions before cliff jumping.",
  };
  
  export default function WaterDepthGuidePage() {
    return (
      <main className="min-h-screen bg-black px-6 py-32 text-white">
        <FloatingNavbar/>
        <div className="mx-auto max-w-4xl">
          
          <div className="mb-10">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300/70">
              Safety Guide
            </p>
  
            <h1 className="text-5xl font-bold tracking-tight">
              How to Inspect Water Depth
            </h1>
  
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              Inspecting water depth properly is one of the most important safety
              steps before cliff jumping or entering unfamiliar outdoor swimming
              locations.
            </p>
          </div>
  
          <div className="space-y-6">
            
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Never Assume a Spot is Safe
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Just because a location was previously safe does not mean it is
                safe the next time you visit. Water levels, rocks, debris,
                currents and submerged hazards can change significantly over time
                due to weather, tides and natural movement.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                Every location should be inspected again before use, even if you
                or somebody else has jumped there before.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Check the Landing Area First
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Before jumping, enter the water safely and inspect the landing
                zone thoroughly. Look for rocks, submerged branches, shallow
                sections and sudden depth changes that may not be visible from
                above.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                Visibility in outdoor water can often be misleading, especially in
                darker water, moving rivers or shaded areas.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Star Fishing
              </h2>
  
              <p className="leading-relaxed text-white/65">
                A common inspection technique sometimes referred to as “star
                fishing” involves diving below the landing area and spreading your
                arms and legs outward to check for nearby obstacles around you.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                This can help identify submerged hazards that may not be visible
                from the surface, however it should never replace careful overall
                inspection of the entire landing zone.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Understanding Safe Depth
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Required water depth depends on jump height, body position and
                water conditions. Higher jumps require significantly deeper water
                to reduce impact risk safely.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                As a general rule, deeper is always safer. Never rely on rough
                guesses or assumptions when assessing depth.
              </p>
            </section>
  
            <section className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold text-red-200">
                Important Reminder
              </h2>
  
              <p className="leading-relaxed text-red-100/75">
                Outdoor water environments can change rapidly and unpredictably.
                Tombstone Map does not guarantee the safety or accuracy of any
                location shown on the platform.
              </p>
            </section>
          </div>
        </div>
      </main>
    );
  }