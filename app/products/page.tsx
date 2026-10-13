import type { Metadata } from "next";
import { Suspense } from "react";
import ProductBrowser from "@/components/ProductBrowser";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui";
import { productBanners } from "@/lib/banners";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse Fira Pharmaceuticals' generic range — tablets, capsules, syrups, injectables, topicals and drops.",
};

export default function ProductsPage() {
  return (
    <>
      <HeroCarousel slides={productBanners} />
      <section className="py-14 lg:py-20">
        <div className="mx-auto mb-10 max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-brand-600">Product Catalogue</p>
          <h1 className="mt-2 text-3xl font-extrabold text-navy-800 sm:text-[2.6rem]">Our Products</h1>
          <span className="mt-4 block h-1 w-14 rounded-full bg-brand-500" />
        </div>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Suspense
            fallback={
              // Server-rendered full list, shown until the filterable browser hydrates
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((p) => (
                  <ProductCard key={p.name} p={p} />
                ))}
              </div>
            }
          >
            <ProductBrowser />
          </Suspense>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-lg bg-navy-800 p-8 text-white sm:p-10 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-2xl font-bold">Need the full product list with rates?</h3>
              <p className="mt-1 text-white/75">Get our latest catalogue and price list for distributors & stockists.</p>
            </div>
            <Button href="/contact" variant="white">
              Request Catalogue
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
