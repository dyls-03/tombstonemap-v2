import Link from "next/link";

export default function SupportPill() {
  return (
    <Link
      href="/support"
      className="
        fixed bottom-9 right-4 z-50
        flex items-center gap-2
        rounded-full
        bg-[#f45d22]
        px-4 py-3
        text-sm font-semibold text-white
        shadow-lg
        transition
        hover:scale-105
        hover:bg-[#ff6a2f]
      "
    >
      ❤️ Support the Map
    </Link>
  );
}