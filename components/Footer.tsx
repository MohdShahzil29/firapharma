import Link from "next/link";
import Logo from "./Logo";
import { categories, site } from "@/lib/data";

const company = [
  { label: "About Us", href: "/about" },
  { label: "Vision & Mission", href: "/about#vision" },
  { label: "Quality Assurance", href: "/about#quality" },
  { label: "Partner With Us", href: "/#partner" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/75">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="inline-block rounded-md bg-white px-4 py-3">
            <Logo />
          </div>
          <p className="mt-6 max-w-sm leading-relaxed">
            Quality generic medicines for every household — manufactured to global standards, priced for India.
          </p>
        </div>

        <FooterCol title="Quick Links" className="lg:col-span-2">
          {company.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="transition hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Products" className="lg:col-span-3">
          {categories.map((c) => (
            <li key={c.id}>
              <Link href={`/products?c=${c.id}`} className="transition hover:text-white">
                {c.name}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Contact" className="lg:col-span-3">
          <li>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition hover:text-white">
              {site.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="transition hover:text-white">
              {site.email}
            </a>
          </li>
          <li className="text-white/50">{site.hours}</li>
        </FooterCol>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-white/50 sm:flex-row sm:justify-between lg:px-8">
          <p>© 2026 {site.legalName}. All rights reserved.</p>
          <p>We Care for Your Health</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, className, children }: { title: string; className: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h4 className="font-bold text-white">{title}</h4>
      <span className="mt-2 block h-0.5 w-10 bg-brand-500" />
      <ul className="mt-5 space-y-2.5">{children}</ul>
    </div>
  );
}
