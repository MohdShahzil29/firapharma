import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquireTab from "@/components/EnquireTab";
import { site } from "@/lib/data";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.legalName} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Fira Pharmaceuticals Pvt. Ltd. — quality generic medicines across tablets, capsules, syrups, injectables, topicals and drops. Affordable healthcare, trusted quality.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <EnquireTab />
      </body>
    </html>
  );
}
