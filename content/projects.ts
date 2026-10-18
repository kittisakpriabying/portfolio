import type { Locale } from "@/lib/i18n-config";

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
};

// แก้/เพิ่มผลงานของคุณที่นี่ — เรียงจากล่าสุดไปเก่าสุด
export const projects: Project[] = [
  {
    slug: "crypto-swing-bot",
    title: {
      en: "Crypto Swing Trading Bot",
      th: "บอทเทรดคริปโตแบบ Swing",
    },
    description: {
      en: "A testnet trading bot with DCA, AI-assisted, and breakout strategies, plus Discord alerts.",
      th: "บอทเทรด testnet ที่รองรับกลยุทธ์ DCA, AI-assisted และ breakout พร้อมแจ้งเตือนผ่าน Discord",
    },
    tags: ["Python", "Trading", "Discord API"],
    codeUrl: "",
  },
  {
    slug: "project-two",
    title: {
      en: "Project Title",
      th: "ชื่อผลงาน",
    },
    description: {
      en: "Short description of what this project does and the problem it solves.",
      th: "คำอธิบายสั้น ๆ ว่าผลงานนี้ทำอะไร และแก้ปัญหาอะไร",
    },
    tags: ["Next.js", "TypeScript"],
    demoUrl: "",
    codeUrl: "",
  },
];
