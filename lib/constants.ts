import type { BuildCard, NavLink, Product, RoadmapItem, WhyCard } from "@/types";

export const SITE_NAME = "LumexForge";
export const SITE_URL = "https://lumexforge.com";
export const FOUNDER = "A.R Mirani";
export const TAGLINE = "Building the Next Generation of Digital Products";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const PRODUCTS: Product[] = [
  {
    id: "proteinsnap",
    name: "ProteinSnap",
    description:
      "AI-powered nutrition and fitness platform designed to simplify meal tracking, nutrition analysis, and performance monitoring.",
    status: "Launching",
    variant: "proteinsnap",
  },
  {
    id: "amora",
    name: "AMORA",
    description: "Next-generation digital experience currently under development.",
    status: "Coming Soon",
    variant: "amora",
  },
  {
    id: "kepaso",
    name: "KePaso",
    description: "Innovative platform currently in development.",
    status: "Coming Soon",
    variant: "kepaso",
  },
  {
    id: "future",
    name: "Future Products",
    description:
      "New innovations and digital experiences currently in exploration and development.",
    status: "Coming Soon",
    variant: "future",
  },
];

export const BUILD_CARDS: BuildCard[] = [
  {
    title: "Mobile Applications",
    description:
      "Native and cross-platform apps built for performance, usability, and scale.",
    icon: "mobile",
  },
  {
    title: "AI Solutions",
    description:
      "Intelligent systems that leverage machine learning and AI to solve complex problems.",
    icon: "ai",
  },
  {
    title: "Intelligent Agents",
    description:
      "Autonomous agents that automate workflows and enhance productivity.",
    icon: "agent",
  },
  {
    title: "Automation Systems",
    description:
      "End-to-end automation that streamlines operations and reduces manual effort.",
    icon: "automation",
  },
  {
    title: "Digital Platforms",
    description:
      "Scalable platforms that connect users, data, and services seamlessly.",
    icon: "platform",
  },
  {
    title: "Future Technologies",
    description:
      "Exploring emerging technologies to build what's next in digital innovation.",
    icon: "future",
  },
];

export const WHY_CARDS: WhyCard[] = [
  {
    title: "Innovation First",
    description: "We focus on creating products that solve real problems.",
  },
  {
    title: "Design Driven",
    description: "Exceptional user experience is built into every product.",
  },
  {
    title: "Future Focused",
    description: "We build with long-term vision and scalability.",
  },
  {
    title: "Quality Obsessed",
    description: "Every detail matters.",
  },
];

export const VALUES = [
  {
    title: "Innovation",
    description: "Pushing boundaries with technology that creates meaningful change.",
  },
  {
    title: "Quality",
    description: "Every product reflects our commitment to excellence and craft.",
  },
  {
    title: "Impact",
    description: "Building solutions that empower people and businesses worldwide.",
  },
  {
    title: "Integrity",
    description: "Transparent, ethical, and focused on long-term relationships.",
  },
];

export const ROADMAP: RoadmapItem[] = [
  {
    year: "2026",
    items: ["ProteinSnap", "AMORA", "KePaso", "Future Products"],
  },
];

export const FOOTER_LINKS = {
  products: [
    { label: "ProteinSnap", href: "/products#proteinsnap" },
    { label: "AMORA", href: "/products#amora" },
    { label: "KePaso", href: "/products#kepaso" },
  ],
  company: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "Support", href: "mailto:support@lumexforge.com" },
  ],
};

export const CONTACT_EMAILS = {
  business: "hello@lumexforge.com",
  support: "support@lumexforge.com",
  privacy: "privacy@lumexforge.com",
};
