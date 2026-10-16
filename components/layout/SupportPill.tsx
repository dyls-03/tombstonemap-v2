import Link from "next/link";
import { Heart } from "lucide-react";

export default function SupportPill() {
  return (
    <Link
      href="/support"
      aria-label="Support the Map"
      title="Support the Map"
      className="
        fixed bottom-[max(4rem,calc(env(safe-area-inset-bottom)+1rem))] right-4 z-50
        flex h-12 w-12 items-center justify-center
        rounded-full
        bg-[#f45d22]
        text-sm font-semibold text-white
        shadow-lg
        transition
        hover:scale-105
        hover:bg-[#ff6a2f]
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-white
        md:bottom-9
        lg:h-auto lg:w-auto lg:gap-2
        lg:px-4 lg:py-3
      "
    >
      <Heart className="h-5 w-5 fill-current" aria-hidden="true" />
      <span className="hidden lg:inline">Support the Map</span>
    </Link>
  );
}
