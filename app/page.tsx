import Image from "next/image";
import Link from "next/link";
import CategoryArt from "@/components/CategoryArt";
import Counter from "@/components/Counter";
import HeroCarousel from "@/components/HeroCarousel";
import { homeBanners } from "@/lib/banners";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { Button, Icon, SectionTitle } from "@/components/ui";
import { categories, products, site, stats, therapies, values } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroCarousel slides={homeBanners} />
      <Glance />
      <Range />
      <About />
      <Therapies />
      <Featured />
      <WhyFira />
      <Partner />
    </>
  );
}

/* ------------------------------------------------------------------ */

function Glance() {
  const icons = ["pill", "flask", "handshake", "truck"] as const;
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle center label="Fira at a Glance" title="Growing with every prescription" />
        <div className="mt-14 grid grid-cols-2 border-y border-slate-200 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className={`px-4 py-10 text-center ${i % 2 === 1 ? "border-l border-slate-200" : ""} ${
                i >= 2 ? "border-t border-slate-200 lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <Icon name={icons[i]} className="mx-auto h-9 w-9 text-brand-500" />
              <p className="mt-4 text-4xl font-extrabold text-navy-800 sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-medium text-slate-600">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Range() {
  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle label="Our Range" title="Every dosage form, one trusted name" />
          <Reveal>
            <Button href="/products" variant="outline">
              All Products
            </Button>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 80}>
              <Link
                href={`/products?c=${c.id}`}
                className="group relative flex h-56 flex-col justify-between rounded-[28px] border-[3px] border-navy-700 p-7 transition-colors duration-300 hover:border-brand-500"
              >
                {/* Marks that break the outline: capsule top-left, cross bottom-right */}
                <span className="absolute -top-[13px] left-9 flex items-center gap-1.5 bg-paper px-2.5" aria-hidden="true">
                  <span className="flex h-[22px] w-11 -rotate-12 overflow-hidden rounded-full border-[3px] border-navy-700 transition-colors duration-300 group-hover:border-brand-500">
                    <span className="w-1/2 bg-navy-700 transition-colors duration-300 group-hover:bg-brand-500" />
                  </span>
                </span>
                <span className="absolute -bottom-[15px] right-9 bg-paper px-2.5" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-navy-700 transition-colors duration-300 group-hover:text-brand-500" fill="currentColor">
                    <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z" />
                  </svg>
                </span>

                <div className="text-right">
                  <span className="text-xs font-bold tracking-[0.2em] text-brand-600">0{i + 1}</span>
                  <h3 className="mt-1 text-2xl font-extrabold text-navy-800">{c.name}</h3>
                  <p className="ml-auto mt-1 max-w-[15rem] text-sm leading-snug text-slate-500">{c.blurb}</p>
                </div>

                <div className="flex items-end justify-between">
                  <CategoryArt
                    id={c.id}
                    className="h-20 w-20 text-navy-700 transition-all sm:h-24 sm:w-24 duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:text-brand-500"
                  />
                  <span className="translate-x-2 text-sm font-bold text-brand-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    View range →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src="/images/lab.jpg" alt="Quality control laboratory" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 right-6 rounded-lg bg-navy-800 px-6 py-5 text-white shadow-lg sm:right-10">
            <p className="text-3xl font-extrabold">100%</p>
            <p className="text-sm text-white/80">Batch-tested before dispatch</p>
          </div>
        </Reveal>
        <div className="pt-6 lg:pt-0">
          <SectionTitle
            label="About Us"
            title="Healthcare that everyone can afford"
            sub="Fira Pharmaceuticals Pvt. Ltd. is an Indian pharmaceutical company focused on high-quality generic medicines. We believe good health shouldn't depend on the size of your wallet — so we make proven formulations available at every pharmacy counter."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Bio-equivalent generic formulations",
              "WHO-GMP certified manufacturing",
              "Wide therapeutic portfolio",
              "Transparent, partner-first pricing",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-slate-700">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Button href="/about" variant="navy">
              Know More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Therapies() {
  return (
    <section className="bg-navy-800 py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          light
          center
          label="Therapeutic Segments"
          title="Covering what matters most"
          sub="From everyday infections to chronic care — a portfolio built around the prescriptions doctors write most."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {therapies.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 60} className="bg-navy-800 p-7 transition hover:bg-navy-700">
              <span className="text-sm font-bold text-brand-200">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-bold">{t.name}</h3>
              <p className="mt-1.5 text-sm text-white/70">{t.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured() {
  const picks = categories.map((c) => products.find((p) => p.category === c.id)!).slice(0, 4);
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle label="Our Products" title="Featured formulations" />
          <Reveal>
            <Button href="/products" variant="outline">
              View Catalogue
            </Button>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {picks.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyFira() {
  const icons = ["shield", "rupee", "handshake", "truck"] as const;
  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle center label="Why Fira" title="Built on trust, batch after batch" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="h-full rounded-lg border-t-4 border-brand-500 bg-white p-7 shadow-sm">
                <Icon name={icons[i]} className="h-10 w-10 text-navy-800" />
                <h3 className="mt-5 text-xl font-bold text-navy-800">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partner() {
  return (
    <section id="partner" className="relative scroll-mt-20 overflow-hidden bg-navy-900">
      <Image src="/images/partner.jpg" alt="" fill sizes="100vw" className="object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/50" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <SectionTitle
            light
            label="Partner With Us"
            title="Grow your business with a brand that delivers"
            sub="We're expanding our network of distributors, stockists and PCD franchise partners across India — with competitive margins, promotional support and a portfolio your customers ask for."
          />
          <ul className="mt-8 grid gap-3 text-white sm:grid-cols-2">
            {["Monopoly rights in your area", "Promotional & visual aids", "Timely dispatch", "Attractive margins"].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <Icon name="check" className="h-5 w-5 shrink-0 text-brand-400" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact">Become a Partner</Button>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-semibold text-white/85 hover:text-white">
              or call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
