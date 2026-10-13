import type { StaticImageData } from "next/image";
// Designed banner images (source: design/banners.html, render with `node design/render-banners.mjs`).
// Static imports give each file a content-hashed URL, so a re-rendered banner never shows a stale cached copy.
import b1d from "@/public/images/banners/banner-1-desktop.png";
import b1m from "@/public/images/banners/banner-1-mobile.png";
import b2d from "@/public/images/banners/banner-2-desktop.png";
import b2m from "@/public/images/banners/banner-2-mobile.png";
import b3d from "@/public/images/banners/banner-3-desktop.png";
import b3m from "@/public/images/banners/banner-3-mobile.png";
import b4d from "@/public/images/banners/banner-4-desktop.png";
import b4m from "@/public/images/banners/banner-4-mobile.png";
import b5d from "@/public/images/banners/banner-5-desktop.png";
import b5m from "@/public/images/banners/banner-5-mobile.png";
import b6d from "@/public/images/banners/banner-6-desktop.png";
import b6m from "@/public/images/banners/banner-6-mobile.png";

export type BannerSlide = {
  id: string;
  desktop: StaticImageData; // 1920×720
  mobile: StaticImageData; // 900×720
  alt: string;
  href: string;
};

export const homeBanners: BannerSlide[] = [
  { id: "family", desktop: b1d, mobile: b1m, alt: "Quality care for every family — Fira Pharmaceuticals", href: "/about" },
  {
    id: "prices",
    desktop: b2d,
    mobile: b2m,
    alt: "Proven molecules, honest prices — tablets, capsules, syrups, injectables, topicals and drops",
    href: "/products",
  },
  {
    id: "quality",
    desktop: b3d,
    mobile: b3m,
    alt: "Quality in every batch — raw material, in-process and finished product testing",
    href: "/about#quality",
  },
];

export const productBanners: BannerSlide[] = [
  { id: "tablets", desktop: b4d, mobile: b4m, alt: "Tablets & capsules product range", href: "/products?c=tablets" },
  { id: "syrups", desktop: b5d, mobile: b5m, alt: "Syrups & suspensions product range", href: "/products?c=syrups" },
  { id: "injectables", desktop: b6d, mobile: b6m, alt: "Critical care injectables product range", href: "/products?c=injectables" },
];
