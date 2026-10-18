import type { Locale } from "@/lib/i18n-config";

export type Service = {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  priceFrom: string; // ตัวอย่าง: "15,000 THB" — แก้ราคาเริ่มต้นของคุณเอง
  featured?: boolean;
};

// แก้รายการบริการและราคาเริ่มต้นของคุณที่นี่
export const services: Service[] = [
  {
    title: {
      en: "Landing page / portfolio site",
      th: "เว็บ Landing page / พอร์ตโฟลิโอ",
    },
    description: {
      en: "A fast, SEO-friendly marketing or portfolio site, built with Next.js.",
      th: "เว็บไซต์โปรโมทหรือพอร์ตโฟลิโอที่โหลดเร็วและทำ SEO ได้ดี ด้วย Next.js",
    },
    priceFrom: "8,000 THB",
  },
  {
    title: {
      en: "Full-stack web application",
      th: "เว็บแอปพลิเคชันแบบ Full-stack",
    },
    description: {
      en: "End-to-end product build: database, API, auth, and deployment.",
      th: "พัฒนาตั้งแต่ฐานข้อมูล, API, ระบบ auth จนถึง deploy ใช้งานจริง",
    },
    priceFrom: "35,000 THB",
    featured: true,
  },
  {
    title: {
      en: "Automation / bot development",
      th: "พัฒนาระบบ Automation / บอท",
    },
    description: {
      en: "Scripts and bots that automate repetitive tasks or monitor data.",
      th: "สคริปต์และบอทสำหรับทำงานซ้ำ ๆ โดยอัตโนมัติ หรือเฝ้าดูข้อมูล",
    },
    priceFrom: "10,000 THB",
  },
];
