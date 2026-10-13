"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ value, suffix = "", duration = 1800 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setN(value);
        return;
      }
      let start: number | undefined;
      const tick = (t: number) => {
        start ??= t;
        const p = Math.min((t - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        setN(Math.round(value * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
