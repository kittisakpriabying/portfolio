import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n-config";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === locales[0] ? 1 : 0.9,
  }));
}
