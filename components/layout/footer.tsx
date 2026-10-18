import Link from "next/link";
import { Mail } from "lucide-react";
import type { Dictionary } from "@/content/dictionaries";
import { site } from "@/content/site";

export function Footer({ dict }: { dict: Dictionary }) {
  // ค่าคงที่แทน new Date() เพราะหน้านี้ถูก prerender แบบ static — แก้ปีเมื่อถึงปีใหม่
  const year = 2026;

  return (
    <footer id="contact" className="border-t border-border/60">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          {dict.contact.heading}
        </h2>
        <p className="mt-2 max-w-md text-muted-foreground">
          {dict.contact.body}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
          >
            <Mail className="size-4" />
            {dict.contact.emailCta}
          </Link>
          {site.social.github && (
            <Link
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              GitHub
            </Link>
          )}
          {site.social.linkedin && (
            <Link
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              LinkedIn
            </Link>
          )}
          {site.social.line && (
            <Link
              href={site.social.line}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              LINE
            </Link>
          )}
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          &copy; {year} {site.name}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
