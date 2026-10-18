import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary } from "@/content/dictionaries";
import { site } from "@/content/site";

export function ShopTeaser({ dict }: { dict: Dictionary }) {
  const followUrl = site.social.github || site.social.linkedin;

  return (
    <section id="shop" className="mx-auto max-w-4xl px-4 py-16">
      <div className="rounded-xl border border-border/60 p-8">
        <Badge variant="outline">{dict.shop.badge}</Badge>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          {dict.shop.heading}
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">{dict.shop.body}</p>
        <div className="mt-6">
          <Link
            href={followUrl || "#contact"}
            target={followUrl ? "_blank" : undefined}
            rel={followUrl ? "noopener noreferrer" : undefined}
            className={buttonVariants({ variant: "outline" })}
          >
            {dict.shop.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
