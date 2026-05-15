export default function FloatingNavbar() {
    return (
      <header className="fixed left-1/2 top-5 z-[1000] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-5 py-3 text-white shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              ⛰
            </div>
  
            <div>
              <h1 className="text-sm font-bold tracking-wide">Tombstone Map</h1>
              <p className="text-xs text-white/45">Cliff jump locations</p>
            </div>
          </div>
  
          <div className="hidden items-center gap-2 md:flex">
            <a className="rounded-lg bg-white/10 px-3 py-2 text-sm" href="#">
              Map
            </a>
            <a className="rounded-lg px-3 py-2 text-sm text-white/65 hover:bg-white/10 hover:text-white" href="/spots">
              Spots
            </a>
            <a className="rounded-lg px-3 py-2 text-sm text-white/65 hover:bg-white/10 hover:text-white" href="/about">
              About
            </a>
          </div>
  
          <button className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-300">
            Sign in
          </button>
        </nav>
      </header>
    );
  }