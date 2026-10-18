import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary } from "@/content/dictionaries";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-20 pb-16 sm:pt-28">
      <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
        {dict.hero.kicker}
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        {dict.hero.title}
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">
        {dict.hero.subtitle}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="#projects" className={buttonVariants({ size: "lg" })}>
          {dict.hero.ctaPrimary}
        </Link>
        <Link
          href="#contact"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          {dict.hero.ctaSecondary}
        </Link>
      </div>
    </section>
  );
}
