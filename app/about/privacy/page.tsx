import FloatingNavbar from "@/components/layout/FloatingNavBar";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <FloatingNavbar />
      <div className="mx-auto max-w-4xl">
        
        <div className="mb-8">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300/70">
            Tombstone Map
          </p>

          <h1 className="text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          
          <p className="mb-6 text-lg leading-relaxed text-white/75">
            Tombstone Map respects user privacy and aims to collect as little
            personal information as possible while providing outdoor mapping
            and adventure discovery features.
          </p>

          <div className="space-y-6 text-white/60">
            
            <div>
              <h2 className="mb-2 text-xl font-semibold text-white">
                Analytics & Usage Data
              </h2>

              <p className="leading-relaxed">
                Basic anonymous analytics and technical information may be
                collected to help improve site performance, reliability and
                user experience.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-white">
                Location Permissions
              </h2>

              <p className="leading-relaxed">
                If enabled by the user, location access is used only to display
                the user&apos;s current position on the map and improve nearby
                navigation features.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-white">
                Future Features
              </h2>

              <p className="leading-relaxed">
                Future versions of Tombstone Map may introduce optional user
                accounts, saved locations and community features. This privacy
                policy will be updated accordingly as new functionality is
                added.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="text-sm leading-relaxed text-cyan-200/80">
              By continuing to use Tombstone Map, you acknowledge this privacy
              policy and any future updates made to improve transparency and
              user safety.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}