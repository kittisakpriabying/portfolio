import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { ShopTeaser } from "@/components/sections/shop-teaser";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n-config";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <Hero dict={dict} />
      <About dict={dict} />
      <Projects locale={locale as Locale} dict={dict} />
      <Services locale={locale as Locale} dict={dict} />
      <ShopTeaser dict={dict} />
    </>
  );
}
