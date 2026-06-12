import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

const defaultDescription =
  "LumexForge is an independent technology studio creating software, AI-powered solutions, intelligent agents, automation systems, and digital platforms.";

const defaultKeywords = [
  "LumexForge",
  "technology studio",
  "software development",
  "AI solutions",
  "automation",
  "digital products",
  "ProteinSnap",
  "AMORA",
  "KePaso",
];

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LumexForge | Building the Next Generation of Digital Products",
    template: "%s | LumexForge",
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  authors: [{ name: "A.R Mirani", url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: "LumexForge | Building the Next Generation of Digital Products",
    description: defaultDescription,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "LumexForge | Building the Next Generation of Digital Products",
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function createMetadata({
  title,
  description = defaultDescription,
  path = "",
  noTemplate = false,
}: {
  title: string;
  description?: string;
  path?: string;
  noTemplate?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = noTemplate ? title : title;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: noTemplate ? title : `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: noTemplate ? title : `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

export const homeMetadata = createMetadata({
  title: "Building the Next Generation of Digital Products",
  description: defaultDescription,
  path: "/",
});

export const productsMetadata = createMetadata({
  title: "Products",
  description:
    "Explore LumexForge's growing ecosystem of software, AI solutions, automation systems, and digital experiences.",
  path: "/products",
});

export const aboutMetadata = createMetadata({
  title: "About",
  description:
    "Learn about LumexForge, an independent technology studio building innovative software, AI tools, and digital platforms.",
  path: "/about",
});

export const contactMetadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with LumexForge for partnerships, business inquiries, or support.",
  path: "/contact",
});

export const privacyMetadata = createMetadata({
  title: "Privacy Policy",
  description:
    "LumexForge privacy policy covering data collection, usage, security, and your rights.",
  path: "/privacy",
});

export const termsMetadata = createMetadata({
  title: "Terms of Service",
  description:
    "LumexForge terms of service governing use of our website and products.",
  path: "/terms",
});
