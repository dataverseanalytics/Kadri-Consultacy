import type { MetadataRoute } from "next";
import { services } from "@/content/site";

const base = "https://kadriconsultancy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/about", "/work", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, changeFrequency: "monthly" as const, priority: p ? 0.8 : 1 })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
