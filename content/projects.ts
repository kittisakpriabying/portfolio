import type { Locale } from "@/lib/i18n-config";

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
};

// เรียงจากล่าสุดไปเก่าสุด — แก้/เพิ่มผลงานของคุณที่นี่
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
  },
  {
    slug: "truck-monitoring",
    title: {
      en: "Truck Monitoring Web Application",
      th: "ระบบติดตามรถบรรทุกแบบเรียลไทม์",
    },
    description: {
      en: "Real-time truck tracking platform with geofencing alerts and GPS integration for logistics fleet management.",
      th: "แพลตฟอร์มติดตามรถบรรทุกแบบเรียลไทม์ พร้อมแจ้งเตือน geofencing และเชื่อมต่อ GPS สำหรับบริหารขนส่ง",
    },
    tags: ["Next.js", "Node.js", "SQL Server", "GPS"],
  },
  {
    slug: "hotel-reservations-prediction",
    title: {
      en: "Hotel Reservations Prediction",
      th: "โมเดลทำนายการยกเลิกการจองโรงแรม",
    },
    description: {
      en: "Machine learning classification model predicting hotel booking cancellations using exploratory data analysis.",
      th: "โมเดล machine learning สำหรับทำนายการยกเลิกการจองโรงแรม ด้วยการทำ exploratory data analysis",
    },
    tags: ["Python", "Pandas", "scikit-learn"],
  },
  {
    slug: "ites-web-application",
    title: {
      en: "ITES Web Application",
      th: "ระบบวางแผนขนส่ง ITES",
    },
    description: {
      en: "Freight planning platform commissioned for full UI and database design, deployed for production use.",
      th: "แพลตฟอร์มวางแผนขนส่งสินค้า รับผิดชอบออกแบบ UI และฐานข้อมูลทั้งระบบ ใช้งานจริงในการผลิต",
    },
    tags: ["React", "Django", "SQL Server"],
  },
  {
    slug: "club19",
    title: {
      en: "CLUB19 Web Application",
      th: "เว็บแอป CLUB19",
    },
    description: {
      en: "COVID-19 and vaccination tracker for Thailand with responsive design.",
      th: "เว็บแอปติดตามสถานการณ์โควิด-19 และการฉีดวัคซีนของไทย ออกแบบรองรับทุกหน้าจอ",
    },
    tags: ["Next.js", "Node.js", "Firebase"],
    demoUrl: "https://club19-web.firebaseapp.com",
  },
];
