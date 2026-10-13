import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Icon, PageBanner } from "@/components/ui";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Fira Pharmaceuticals for product enquiries, distribution and franchise partnerships.",
};

export default function ContactPage() {
  const cards = [
    { label: "Call Us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, icon: "phone" as const },
    { label: "Email Us", value: site.email, href: `mailto:${site.email}`, icon: "mail" as const },
    { label: "Working Hours", value: site.hours, icon: "clock" as const },
  ];

  return (
    <>
      <PageBanner
        title="Let's Connect"
        crumb="Contact Us"
        image="/images/partner.jpg"
        sub="Product questions, distribution enquiries or franchise partnerships — our team is ready to help."
      />
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8">
          <div className="grid content-start gap-4 lg:col-span-5">
            {cards.map((c) => (
              <div key={c.label} className="flex gap-4 rounded-lg border border-slate-200 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <Icon name={c.icon} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-500">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-lg font-bold text-navy-800 hover:text-brand-600">
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg font-bold text-navy-800">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
