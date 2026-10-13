import type { CategoryId } from "@/lib/data";

// Line illustrations for each dosage form (64×64, stroke-based so they take `currentColor`).
const art: Record<CategoryId, React.ReactNode> = {
  tablets: (
    <>
      {/* blister strip */}
      <rect x="6" y="14" width="34" height="44" rx="5" />
      <circle cx="16" cy="24" r="4.5" />
      <circle cx="30" cy="24" r="4.5" />
      <circle cx="16" cy="36" r="4.5" />
      <circle cx="30" cy="36" r="4.5" />
      <circle cx="16" cy="48" r="4.5" />
      <path d="M26 48h8" strokeDasharray="2 3" />
      {/* loose tablet */}
      <ellipse cx="49" cy="47" rx="10" ry="5" />
      <path d="M39 47v3c0 2.8 4.5 5 10 5s10-2.2 10-5v-3" />
      <path d="M44 47h10" />
    </>
  ),
  capsules: (
    <>
      <g transform="rotate(-40 26 30)">
        <rect x="8" y="22" width="36" height="16" rx="8" />
        <path d="M26 22v16" />
        <path d="M14 27h6" />
      </g>
      <g transform="rotate(25 42 46)">
        <rect x="26" y="38" width="32" height="14" rx="7" />
        <path d="M42 38v14" />
        <path d="M31 42h5" />
      </g>
    </>
  ),
  syrups: (
    <>
      <path d="M17 6h14v7H17z" />
      <path d="M15 13h18l3 7v34a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V20z" />
      <path d="M12 30h24M12 46h24" />
      <path d="M18 38h8" />
      {/* measuring cup */}
      <path d="M42 36h14l-2 20a3 3 0 0 1-3 2h-4a3 3 0 0 1-3-2z" />
      <path d="M44 44h4M45 50h3" />
    </>
  ),
  injectables: (
    <>
      {/* vial */}
      <path d="M9 10h14v6H9z" />
      <path d="M11 16h10v4l3 4v28a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V24l3-4z" />
      <path d="M8 34h16" />
      <path d="M8 44h16" />
      {/* syringe */}
      <g transform="rotate(45 44 32)">
        <path d="M39 10h10M44 10v6" />
        <rect x="38" y="16" width="12" height="28" rx="2" />
        <path d="M38 24h5M38 30h5M38 36h5" />
        <path d="M42 44h4v4h-4zM44 48v10" />
      </g>
    </>
  ),
  topicals: (
    <>
      {/* tube */}
      <path d="M10 8h22l-2 38H12z" />
      <path d="M10 8h22" strokeWidth="4" />
      <path d="M14 46v6h14v-6" />
      <path d="M17 52v5h8v-5" />
      <path d="M15 20h12M15 26h8" />
      {/* jar */}
      <rect x="38" y="34" width="20" height="6" rx="2" />
      <path d="M39 40h18v14a3 3 0 0 1-3 3H42a3 3 0 0 1-3-3z" />
      <path d="M43 47h10" />
    </>
  ),
  drops: (
    <>
      {/* dropper bottle */}
      <path d="M21 6c3 0 5 2 5 5v5H16v-5c0-3 2-5 5-5z" />
      <path d="M14 16h14v6H14z" />
      <path d="M13 22h16l2 6v26a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4V28z" />
      <path d="M11 36h20" />
      <path d="M16 44h10" />
      {/* drops */}
      <path d="M47 14s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" />
      <path d="M47 40s5 6 5 9.5a5 5 0 0 1-10 0c0-3.5 5-9.5 5-9.5z" />
    </>
  ),
};

export default function CategoryArt({ id, className = "" }: { id: CategoryId; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {art[id]}
    </svg>
  );
}
