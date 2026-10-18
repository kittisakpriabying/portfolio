export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    projects: string;
    services: string;
    shop: string;
    contact: string;
    toggleTheme: string;
    openMenu: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    heading: string;
    body: string;
    skillsHeading: string;
    education: string;
  };
  projects: {
    heading: string;
    subheading: string;
    viewDemo: string;
    viewCode: string;
  };
  services: { heading: string; subheading: string; cta: string };
  shop: { heading: string; badge: string; body: string; cta: string };
  contact: { heading: string; body: string; emailCta: string };
  footer: { rights: string };
};

const en: Dictionary = {
  meta: {
    title: "Kittisak Priabying — Software Engineer & Freelancer",
    description:
      "Portfolio of Kittisak Priabying, a software engineer building backend services and web apps. Freelance work and upcoming source-code products.",
  },
  nav: {
    about: "About",
    projects: "Projects",
    services: "Services",
    shop: "Shop",
    contact: "Contact",
    toggleTheme: "Toggle theme",
    openMenu: "Open menu",
  },
  hero: {
    kicker: "Software Engineer",
    title: "I build fast, reliable software — and take on freelance work.",
    subtitle:
      "3.5+ years building backend services and web apps — currently shipping loyalty-platform microservices for 3M+ users at Ascend Group.",
    ctaPrimary: "View projects",
    ctaSecondary: "Get in touch",
  },
  about: {
    heading: "About",
    body:
      "I'm a software engineer with 3.5+ years of experience building web applications and backend services, working mainly in Go, Node.js, and Next.js. I care about clean code, system performance, and being upfront with clients about what actually works.",
    skillsHeading: "Skills",
    education: "B.Eng. Computer Engineering — Khon Kaen University",
  },
  projects: {
    heading: "Projects",
    subheading: "A selection of things I've built.",
    viewDemo: "Live demo",
    viewCode: "Source",
  },
  services: {
    heading: "Services & Pricing",
    subheading:
      "What I can help you build with Go, Node.js, and Next.js — and rough starting prices.",
    cta: "Discuss your project",
  },
  shop: {
    heading: "Shop",
    badge: "Coming soon",
    body:
      "I'm packaging some of my own tools and source code as products you'll be able to buy directly. Follow along on social for the launch.",
    cta: "Follow for updates",
  },
  contact: {
    heading: "Let's work together",
    body: "Have a project in mind or a question? Reach out directly.",
    emailCta: "Email me",
  },
  footer: {
    rights: "All rights reserved.",
  },
};

export default en;
