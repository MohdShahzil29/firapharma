"use client";

import { getImageProps } from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { BannerSlide } from "@/lib/banners";

const INTERVAL = 6000;

function Banner({ slide, priority }: { slide: BannerSlide; priority: boolean }) {
  const common = { alt: slide.alt, sizes: "100vw", priority };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: slide.desktop });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: slide.mobile });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop} />
      <source srcSet={mobile} />
      <img {...rest} alt={slide.alt} className="h-full w-full object-cover" />
    </picture>
  );
}

/** Image-only banner carousel: 1920×720 on desktop, 900×720 on mobile. */
export default function HeroCarousel({ slides }: { slides: BannerSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      className="relative overflow-hidden bg-mist"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="relative aspect-[5/4] md:aspect-[8/3]">
        {slides.map((s, i) => {
          const active = i === index;
          return (
            <Link
              key={s.id}
              href={s.href}
              inert={!active}
              className={`absolute inset-0 transition-opacity duration-1000 ${active ? "z-10 opacity-100" : "z-0 opacity-0"}`}
            >
              <Banner slide={s} priority={i === 0} />
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 py-1.5 md:absolute md:bottom-5 md:left-1/2 md:z-20 md:-translate-x-1/2 md:py-0">
        {slides.map((s, i) => (
          <button key={s.id} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`} className="h-6 py-2.5">
            <span className={`block h-1 rounded-full transition-all ${i === index ? "w-10 bg-navy-800" : "w-6 bg-navy-800/30"}`} />
          </button>
        ))}
      </div>
    </section>
  );
}
