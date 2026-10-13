import { Icon, categoryIcon } from "./ui";
import { categories, products } from "@/lib/data";

export default function ProductCard({ p }: { p: (typeof products)[number] }) {
  const cat = categories.find((c) => c.id === p.category)!;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:border-brand-500 hover:shadow-md">
      <div className="relative grid h-36 place-items-center bg-brand-50">
        <Icon name={categoryIcon[p.category]} className="h-14 w-14 text-brand-600" />
        <span className="absolute left-3 top-3 rounded bg-white px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-wide text-navy-800">
          {cat.name}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-navy-800">{p.name}</h3>
        <p className="mt-1 flex-1 text-sm text-slate-600">{p.composition}</p>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
          <span className="font-semibold text-brand-600">{p.therapy}</span>
          <span className="text-slate-500">Pack: {p.pack}</span>
        </div>
      </div>
    </article>
  );
}
