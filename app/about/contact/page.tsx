import FloatingNavbar from "@/components/layout/FloatingNavBar";

export default function ContactPage() {
    return (
      <main className="min-h-screen bg-black px-6 py-32 text-white">
        <FloatingNavbar />
        <div className="mx-auto max-w-4xl">
          
          <div className="mb-8">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300/70">
              Tombstone Map
            </p>
  
            <h1 className="text-5xl font-bold tracking-tight">
              Contact
            </h1>
          </div>
  
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            
            <p className="mb-6 text-lg leading-relaxed text-white/75">
              Tombstone Map is currently an independent project focused on
              building a modern platform for discovering outdoor adventure and
              cliff jumping locations around the world.
            </p>
  
            <p className="mb-6 leading-relaxed text-white/60">
              Dedicated contact channels are not yet available, however future
              updates will include support options, feedback submissions and
              community reporting tools.
            </p>
  
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <p className="text-sm leading-relaxed text-cyan-200/80">
                Contact details and community support features are currently in
                development and unavailable.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }