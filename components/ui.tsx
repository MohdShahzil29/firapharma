import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

export function SectionTitle({
  label,
  title,
  sub,
  center = false,
  light = false,
}: {
  label: string;
  title: ReactNode;
  sub?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`text-sm font-bold uppercase tracking-[0.15em] ${light ? "text-brand-200" : "text-brand-600"}`}>{label}</p>
      <h2 className={`mt-2 text-3xl font-extrabold leading-tight sm:text-[2.6rem] ${light ? "text-white" : "text-navy-800"}`}>
        {title}
      </h2>
      <span className={`mt-4 block h-1 w-14 rounded-full bg-brand-500 ${center ? "mx-auto" : ""}`} />
      {sub && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/75" : "text-slate-600"}`}>{sub}</p>}
    </Reveal>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "navy" | "outline" | "white";
}) {
  const styles = {
    primary: "bg-brand-500 text-white hover:bg-brand-600",
    navy: "bg-navy-800 text-white hover:bg-navy-700",
    outline: "border border-navy-800/25 text-navy-800 hover:border-navy-800",
    white: "bg-white text-navy-800 hover:bg-brand-50",
  }[variant];
  return (
    <Link href={href} className={`inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold transition ${styles}`}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

/** Inner-page banner: photo with navy overlay + breadcrumb */
export function PageBanner({ title, crumb, image, sub }: { title: string; crumb: string; image: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/40" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <nav className="text-sm text-white/70" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{crumb}</span>
        </nav>
        <h1 className="rise mt-4 text-4xl font-extrabold text-white sm:text-5xl">{title}</h1>
        {sub && <p className="rise mt-4 max-w-2xl text-lg text-white/80">{sub}</p>}
      </div>
    </section>
  );
}

export const icons = {
  pill: (
    <>
      <ellipse cx="12" cy="10" rx="9" ry="4.5" />
      <path d="M3 10v3.5c0 2.5 4 4.5 9 4.5s9-2 9-4.5V10" />
      <path d="M8 10h8" />
    </>
  ),
  capsule: (
    <>
      <rect x="2" y="8" width="20" height="8" rx="4" />
      <path d="M12 8v8" />
    </>
  ),
  bottle: (
    <>
      <path d="M9 2h6v4H9z" />
      <path d="M8 6h8l1 3v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9z" />
      <path d="M7 13h10" />
    </>
  ),
  syringe: (
    <>
      <path d="m18 2 4 4M17 7l3-3M19 9 8.7 19.3a1 1 0 0 1-1.4 0l-2.6-2.6a1 1 0 0 1 0-1.4L15 5" />
      <path d="m9 11 4 4M5 19l-3 3M14 4l6 6" />
    </>
  ),
  tube: (
    <>
      <path d="M7 3h10l-1 13H8z" />
      <path d="M10 16v3h4v-3M10 22h4" />
    </>
  ),
  drop: <path d="M12 2.7s7 7.3 7 12.3a7 7 0 0 1-14 0c0-5 7-12.3 7-12.3Z" />,
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  rupee: (
    <>
      <path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3a5 5 0 0 0 0-10" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a1 1 0 1 1-3-3l2.8-2.8a5.8 5.8 0 0 1 7.1-.9l.5.3a2 2 0 0 0 1.4.2L21 4" />
      <path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" />
    </>
  ),
  truck: (
    <>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.6a1 1 0 0 0-.2-.6l-3.5-4.4A1 1 0 0 0 17.5 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9V3" />
      <path d="M7 15h10" />
    </>
  ),
  factory: (
    <>
      <path d="M2 20V9l6 4V9l6 4V4h6v16z" />
      <path d="M2 20h20" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
};

export function Icon({ name, className = "h-6 w-6" }: { name: keyof typeof icons; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

export const categoryIcon = {
  tablets: "pill",
  capsules: "capsule",
  syrups: "bottle",
  injectables: "syringe",
  topicals: "tube",
  drops: "drop",
} as const;
