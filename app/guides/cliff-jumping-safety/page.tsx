import FloatingNavbar from "@/components/layout/FloatingNavBar";

export const metadata = {
    title: "How to Cliff Jump Safely | Tombstone Map",
    description:
      "A beginner-friendly guide to cliff jumping safety, water inspection and responsible outdoor decision making.",
  };
  
  export default function CliffJumpingSafetyPage() {
    return (
      <main className="min-h-screen bg-black px-6 py-32 text-white">
        <FloatingNavbar/>
        <div className="mx-auto max-w-4xl">
          
          <div className="mb-10">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300/70">
              Safety Guide
            </p>
  
            <h1 className="text-5xl font-bold tracking-tight">
              How to Cliff Jump Safely
            </h1>
  
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              Cliff jumping can be extremely dangerous if proper precautions are
              not taken. This guide covers some of the most important safety
              considerations before entering any outdoor jumping location.
            </p>
          </div>
  
          <div className="space-y-6">
            
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Never Jump Blind
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Never jump into water that has not been properly inspected first.
                Water depth, hidden rocks, submerged branches and debris can all
                create serious hazards that may not be visible from above. 
              </p>
              <p className="leading-relaxed text-white/65">
                Just because you&apos;ve jumped in a spot before, does not mean it&apos;s
                safe to jump again without depth checking first. 
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Inspect Conditions First
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Outdoor conditions can change rapidly depending on weather,
                rainfall, tides and currents. A location that appeared safe
                previously may no longer be safe on another day.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Start Small
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Beginners should always start from lower heights and gradually
                build confidence. Larger jumps increase impact forces and reduce
                the margin for error significantly.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Never Go Alone
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Visiting outdoor swimming and cliff jumping locations with other
                people is strongly recommended. In an emergency, having others
                nearby may be critical.
              </p>
            </section>
  
            <section className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold text-red-200">
                Important Reminder
              </h2>
  
              <p className="leading-relaxed text-red-100/75">
                Tombstone Map does not guarantee the safety or accuracy of any
                location listed on the platform. Always assess locations yourself
                and make responsible decisions based on current conditions.
              </p>
            </section>
          </div>
        </div>
      </main>
    );
  }