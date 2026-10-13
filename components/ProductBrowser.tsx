"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { Icon, categoryIcon } from "./ui";
import { categories, products, type CategoryId } from "@/lib/data";

export default function ProductBrowser() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const raw = params.get("c");
  const active = categories.some((c) => c.id === raw) ? (raw as CategoryId) : "all";

  const setCategory = (id: CategoryId | "all") => {
    router.replace(id === "all" ? pathname : `${pathname}?c=${id}`, { scroll: false });
  };

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (active === "all" || p.category === active) &&
        (!q || [p.name, p.composition, p.therapy].some((s) => s.toLowerCase().includes(q))),
    );
  }, [active, query]);

  return (
    <>
      <div className="sticky top-20 z-30 -mx-5 border-y border-slate-200 bg-white px-5 py-3 lg:mx-0 lg:rounded-lg lg:border lg:px-3">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 [scrollbar-width:none]">
            <Chip on={active === "all"} onClick={() => setCategory("all")}>
              All <span className="opacity-60">{products.length}</span>
            </Chip>
            {categories.map((c) => (
              <Chip key={c.id} on={active === c.id} onClick={() => setCategory(c.id)}>
                <Icon name={categoryIcon[c.id]} className="h-4 w-4" />
                {c.name}
              </Chip>
            ))}
          </div>
          <label className="relative block lg:w-72">
            <svg viewBox="0 0 24 24" className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, salt or therapy…"
              className="w-full rounded-md border border-slate-300 bg-white py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            />
          </label>
        </div>
      </div>

      <p className="mt-8 text-sm text-slate-500">
        Showing {list.length} {list.length === 1 ? "product" : "products"}
      </p>

      {list.length ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-lg border border-dashed border-slate-300 py-20 text-center">
          <p className="text-xl font-bold text-navy-800">No products match “{query}”.</p>
          <p className="mt-2 text-slate-500">Try a different salt name — or ask us, we may have it.</p>
        </div>
      )}
    </>
  );
}

function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-semibold transition ${
        on ? "bg-navy-800 text-white" : "text-slate-700 hover:bg-mist"
      }`}
    >
      {children}
    </button>
  );
}
