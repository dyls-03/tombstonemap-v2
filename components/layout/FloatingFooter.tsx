import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/about/contact" },
  { label: "Privacy", href: "/about/privacy" },
  { label: "Disclaimer", href: "/about/disclaimer" },
];

export default function FloatingFooter() {
  return (
    <footer className="fixed bottom-4 left-1/2 z-[1000] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl border border-white/10 bg-black/70 px-4 py-2 text-xs text-white/50 shadow-2xl backdrop-blur-xl">
        <span className="text-white/35">
          © 2026 Tombstone Map
        </span>

        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition hover:text-cyan-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}