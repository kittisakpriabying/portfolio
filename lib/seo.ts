import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/content/dictionaries";
import { site } from "@/content/site";

export function buildMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);

  const languages = Object.fromEntries(
    locales.map((l) => [l, `${site.url}/${l}`])
  );

  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages,
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${site.url}/${locale}`,
      siteName: site.name,
      locale: locale === "th" ? "th_TH" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}
