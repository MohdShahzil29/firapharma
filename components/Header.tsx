"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, topLinks } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => {
    const path = href.split(/[?#]/)[0];
    if (href.includes("#")) return false;
    return path === "/" ? pathname === "/" : pathname.startsWith(path);
  };

  return (
    <>
      {/* Top bar — split into three like a corporate group bar */}
      <div className="bg-navy-800">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-1 px-2 py-2 sm:gap-2 sm:px-5 lg:px-8">
          {topLinks.map((l) => {
            const active = l.match(pathname);
            return (
              <Link
                key={l.title}
                href={l.href}
                className={`rounded-full px-2 py-2 text-center leading-tight transition sm:py-2.5 ${
                  active ? "bg-brand-50 text-navy-800" : "text-white hover:bg-white/10"
                }`}
              >
                <span className="block text-[0.72rem] font-bold sm:text-base">{l.title}</span>
                <span className={`block text-[0.65rem] sm:text-sm ${active ? "text-navy-700" : "text-white/80"}`}>
                  {l.sub}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-white transition-shadow ${
          scrolled ? "border-transparent shadow-[0_2px_12px_rgba(20,32,96,0.1)]" : "border-slate-200"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" aria-label="Fira Pharmaceuticals home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden h-full items-center lg:flex">
            {nav.map((item) => (
              <div key={item.label} className="group relative flex h-full items-center">
                <Link
                  href={item.href}
                  className={`flex h-full items-center gap-1 border-b-[3px] px-4 pt-[3px] text-[0.95rem] font-semibold transition-colors ${
                    isActive(item.href)
                      ? "border-brand-500 text-navy-800"
                      : "border-transparent text-slate-700 hover:text-brand-600"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg className="h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full w-60 border-t-[3px] border-brand-500 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-5 py-2.5 text-sm text-slate-700 transition hover:bg-mist hover:text-brand-600"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-md bg-brand-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-600 sm:inline-flex"
            >
              Let&apos;s Connect
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="relative grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-navy-800 lg:hidden"
            >
              <span className={`absolute h-0.5 w-5 bg-current transition ${open ? "rotate-45" : "-translate-y-1.5"}`} />
              <span className={`absolute h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute h-0.5 w-5 bg-current transition ${open ? "-rotate-45" : "translate-y-1.5"}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
            <div className="px-5 py-4">
              {nav.map((item) => (
                <div key={item.label} className="border-b border-slate-100 py-3">
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-1 text-lg font-semibold text-navy-800">
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mt-1 grid grid-cols-2 gap-x-4">
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="py-1.5 text-sm text-slate-600">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 block rounded-md bg-brand-500 py-3.5 text-center font-bold text-white"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
