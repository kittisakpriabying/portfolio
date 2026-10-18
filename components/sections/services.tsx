import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/content/dictionaries";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

export function Services({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section id="services" className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">
        {dict.services.heading}
      </h2>
      <p className="mt-2 text-muted-foreground">{dict.services.subheading}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.title.en}
            className={cn(service.featured && "border-foreground/30")}
          >
            <CardHeader>
              <CardTitle>{service.title[locale]}</CardTitle>
              <CardDescription>{service.description[locale]}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {locale === "th" ? "เริ่มต้น" : "From"}
              </p>
              <p className="text-lg font-medium">{service.priceFrom}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Link href="#contact" className={buttonVariants()}>
          {dict.services.cta}
        </Link>
      </div>
    </section>
  );
}
