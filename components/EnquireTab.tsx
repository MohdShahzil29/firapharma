import Link from "next/link";

// Vertical tab pinned to the right edge, like a corporate "notice" tab
export default function EnquireTab() {
  return (
    <Link
      href="/contact"
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rounded-r-md bg-navy-800 px-2.5 py-5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition hover:bg-brand-600 md:block [writing-mode:vertical-rl] rotate-180"
    >
      Enquire Now
    </Link>
  );
}
