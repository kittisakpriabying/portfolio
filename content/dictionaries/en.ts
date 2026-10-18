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
  about: { heading: string; body: string; skillsHeading: string };
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
    title: "Kittisak Priabying — Full-Stack Developer & Freelancer",
    description:
      "Portfolio of Kittisak Priabying: full-stack projects, freelance services, and upcoming source-code products.",
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
    kicker: "Full-Stack Developer",
    title: "I build fast, reliable software — and take on freelance work.",
    subtitle:
      "I design and ship web apps end to end: from product idea to a deployed, maintainable codebase.",
    ctaPrimary: "View projects",
    ctaSecondary: "Get in touch",
  },
  about: {
    heading: "About",
    body:
      "I'm a developer who learns by building — shipping real projects rather than just studying theory. I care about clean, honest code and about being upfront with clients about what actually works.",
    skillsHeading: "Skills",
  },
  projects: {
    heading: "Projects",
    subheading: "A selection of things I've built.",
    viewDemo: "Live demo",
    viewCode: "Source",
  },
  services: {
    heading: "Services & Pricing",
    subheading: "What I can help you build, and rough starting prices.",
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
