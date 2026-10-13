type Props = {
  className?: string;
  /** Render the wordmark next to the emblem */
  withText?: boolean;
  /** Light wordmark for dark backgrounds */
  light?: boolean;
};

export function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 92"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <ellipse cx="62" cy="50" rx="55" ry="37" fill="#1a96c9" stroke="#1b2766" strokeWidth="4.5" />
      <ellipse cx="62" cy="50" rx="47" ry="30" stroke="white" strokeOpacity="0.25" strokeWidth="1.2" />
      {/* script "f" */}
      <g stroke="white" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M76 26c-9-6-21-3-21 6 0 6 8 8 11 3" strokeWidth="4" />
        <path d="M66 35c-3 12-5 26-13 37" strokeWidth="4.5" />
        <path d="M53 72c-5 6-13 4-11-2 1-4 6-5 9-2" strokeWidth="3.5" />
        <path d="M50 49c6 1 14 0 22-3" strokeWidth="3" />
      </g>
      {/* arrow */}
      <path d="M64 52 128 14" stroke="#1b2766" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M136 9l-15 2.5 6.5 10.5z" fill="#1b2766" />
    </svg>
  );
}

export default function Logo({ className = "", withText = true, light = false }: Props) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Emblem className="h-11 w-auto shrink-0" />
      {withText && (
        <span className="leading-none">
          <span
            className={`block whitespace-nowrap text-[1.05rem] font-extrabold tracking-tight sm:text-[1.15rem] ${
              light ? "text-white" : "text-navy-800"
            }`}
          >
            Fira Pharmaceuticals
          </span>
          <span
            className={`mt-1 block whitespace-nowrap text-[0.55rem] font-semibold uppercase tracking-[0.22em] sm:text-[0.62rem] sm:tracking-[0.32em] ${
              light ? "text-brand-200" : "text-brand-600"
            }`}
          >
            Pvt. Ltd. · Generic Products
          </span>
        </span>
      )}
    </span>
  );
}
