import type { NavLink } from "@/types";

export const SITE_NAME = "LumexForge";
export const SITE_URL = "https://lumexforge.com";
export const FOUNDER = "A.R Mirani";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  products: [
    { label: "ProteinSnaps", href: "/products#proteinsnaps" },
    { label: "PostHunt", href: "/products#posthunt" },
    { label: "AMMORA", href: "/products#ammora" },
    { label: "MiPaw", href: "/products#mipaw" },
    { label: "ADMINA", href: "/products#admina" },
    { label: "GhostWriterHunt", href: "/products#ghostwriterhunt" },
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
};

export const CONTACT_EMAILS = {
  business: "hello@lumexforge.com",
  support: "support@lumexforge.com",
  privacy: "privacy@lumexforge.com",
};
