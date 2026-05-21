import FloatingNavbar from "@/components/layout/FloatingNavBar";

export const metadata = {
    title: "What is Cold Water Shock? | Tombstone Map",
    description:
      "Learn what cold water shock is, why it happens and how to reduce the risks during outdoor swimming and cliff jumping.",
  };
  
  export default function ColdWaterShockPage() {
    return (
      <main className="min-h-screen bg-black px-6 py-32 text-white">
        <FloatingNavbar/>
        <div className="mx-auto max-w-4xl">
          
          <div className="mb-10">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300/70">
              Safety Guide
            </p>
  
            <h1 className="text-5xl font-bold tracking-tight">
              What is Cold Water Shock?
            </h1>
  
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              Cold water shock is the body’s sudden physical response to entering
              cold water. It can affect breathing, movement and decision making
              within seconds, even for strong swimmers.
            </p>
          </div>
  
          <div className="space-y-6">
            
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                What Happens During Cold Water Shock?
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Sudden immersion in cold water can trigger an involuntary gasp
                reflex, rapid breathing, increased heart rate and temporary loss
                of breathing control. This can happen extremely quickly and may
                make it difficult to stay calm or swim effectively.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                Even relatively mild outdoor water temperatures can trigger cold
                water shock, especially if the body is unprepared.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Why It Can Be Dangerous
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Panic, disorientation and breathing difficulty can all increase
                the risk of drowning. Cold water may also reduce muscle control
                and swimming ability surprisingly quickly.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                Jumping unexpectedly into very cold water can make the initial
                shock response significantly worse.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Reducing the Risk
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Gradually entering the water, understanding conditions beforehand
                and wearing suitable thermal protection such as a wetsuit may help
                reduce the intensity of cold water shock.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                Taking time to acclimatise, avoiding alcohol and never swimming
                alone are also important safety considerations.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Safety Swimmers and Spotters
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Having confident swimmers, spotters or safety swimmers nearby can
                be extremely valuable in cold-water environments. If somebody
                becomes overwhelmed or struggles after entering the water, rapid
                assistance may be critical.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                At more serious jumps or colder locations, some groups choose to
                have designated safety swimmers already in the water before jumps
                take place.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Know When to Walk Away
              </h2>
  
              <p className="leading-relaxed text-white/65">
                If the water feels dangerously cold, conditions look poor or
                confidence is low, the safest option may simply be not to jump.
                Outdoor conditions can change rapidly and there is never any shame
                in deciding not to continue.
              </p>
            </section>
  
            <section className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold text-red-200">
                Important Reminder
              </h2>
  
              <p className="leading-relaxed text-red-100/75">
                Cold water can be dangerous regardless of swimming ability or
                previous experience. Tombstone Map does not guarantee the safety
                of any location or activity shown on the platform.
              </p>
            </section>
          </div>
        </div>
      </main>
    );
  }