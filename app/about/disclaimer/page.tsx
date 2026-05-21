import FloatingNavbar from "@/components/layout/FloatingNavBar";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <FloatingNavbar />
      <div className="mx-auto max-w-4xl">
        
        <div className="mb-8">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300/70">
            Tombstone Map
          </p>

          <h1 className="text-5xl font-bold tracking-tight">
            Safety Disclaimer
          </h1>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          
          <p className="mb-6 text-lg leading-relaxed text-white/75">
            Tombstone Map is intended for informational and educational
            purposes only. Outdoor activities and locations shown on this
            platform may involve significant risk, including serious injury or
            death.
          </p>

          <div className="space-y-6 text-white/60">
            
            <div>
              <h2 className="mb-2 text-xl font-semibold text-white">
                User Responsibility
              </h2>

              <p className="leading-relaxed">
                Users are fully responsible for assessing conditions, water
                depth, weather, tides, currents, access permissions and all
                other safety factors before visiting or using any location shown
                on Tombstone Map.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-white">
                Accuracy of Information
              </h2>

              <p className="leading-relaxed">
                Information on this platform may be incomplete, outdated or
                inaccurate. Conditions at outdoor locations can change rapidly
                and without warning.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-white">
                Use At Your Own Risk
              </h2>

              <p className="leading-relaxed">
                By using Tombstone Map, users acknowledge that all activities
                are undertaken entirely at their own risk.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
            <p className="text-sm leading-relaxed text-red-200/80">
              Never rely solely on online information when making safety
              decisions in outdoor environments.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}