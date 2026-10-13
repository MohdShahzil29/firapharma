import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Button, Icon, PageBanner, SectionTitle } from "@/components/ui";
import { process, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story, vision and values of Fira Pharmaceuticals Pvt. Ltd.",
};

export default function AboutPage() {
  const processIcons = ["flask", "factory", "shield", "truck"] as const;
  return (
    <>
      <PageBanner
        title="About Us"
        crumb="About Us"
        image="/images/lab.jpg"
        sub="Making good medicine accessible — one honest, quality-tested strip at a time."
      />

      {/* Story */}
      <section id="story" className="scroll-mt-20 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionTitle label="Our Story" title="Small beginnings, big intent" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Fira Pharmaceuticals Pvt. Ltd. was founded to close a gap we saw every day at pharmacy counters — patients
                skipping or cutting short treatment because branded medicines cost too much.
              </p>
              <p>
                Our answer is a carefully chosen portfolio of generic formulations: the same proven molecules, produced at
                WHO-GMP certified facilities, tested batch by batch, and priced honestly.
              </p>
              <p>
                The arrow in our logo points one way — forward. Towards better access, better quality and a healthier
                India.
              </p>
            </div>
          </div>
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src="/images/doctor.jpg" alt="Doctor holding a stethoscope" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="scroll-mt-20 bg-paper py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal className="rounded-lg bg-navy-800 p-10 text-white">
            <Icon name="shield" className="h-10 w-10 text-brand-200" />
            <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-brand-200">Our Vision</h3>
            <p className="mt-3 text-2xl font-bold leading-snug">
              To be India&apos;s most trusted name in affordable generic medicines.
            </p>
          </Reveal>
          <Reveal delay={100} className="rounded-lg border border-slate-200 bg-white p-10">
            <Icon name="handshake" className="h-10 w-10 text-brand-500" />
            <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-brand-600">Our Mission</h3>
            <ul className="mt-3 space-y-3 text-lg text-slate-700">
              {[
                "Deliver quality-assured generics to every corner of the country",
                "Keep prices fair for patients and margins fair for partners",
                "Expand our portfolio with the therapies India needs most",
              ].map((t) => (
                <li key={t} className="flex gap-2.5">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-brand-500" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="scroll-mt-20 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle center label="Our Values" title="What we stand for" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="rounded-lg border-t-4 border-brand-500 bg-paper p-7">
                <h3 className="text-xl font-bold text-navy-800">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="scroll-mt-20 bg-paper py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            center
            label="Quality Assurance"
            title="No batch leaves untested"
            sub="Quality isn't a department at Fira — it's the process. Every product passes these checkpoints before it reaches a pharmacy shelf."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80} className="rounded-lg bg-white p-7 text-center shadow-sm">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <Icon name={processIcons[i]} className="h-8 w-8" />
                </span>
                <p className="mt-4 text-xs font-bold text-slate-400">STEP {p.step}</p>
                <h3 className="mt-1 text-lg font-bold text-navy-800">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/products" variant="navy">
              See Our Products
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
