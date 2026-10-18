import { ImageResponse } from "next/og";
import { getDictionary } from "@/content/dictionaries";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#a1a1aa", letterSpacing: 2 }}>
          {site.name.toUpperCase()}
        </div>
        <div style={{ fontSize: 56, fontWeight: 600, marginTop: 24, maxWidth: 900 }}>
          {dict.hero.title}
        </div>
      </div>
    ),
    { ...size }
  );
}
