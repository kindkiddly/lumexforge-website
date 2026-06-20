import type { Metadata } from "next";
import { IMAGES } from "./images";
import { SITE_NAME, SITE_URL } from "./constants";

const ogImageUrl = `${SITE_URL}${IMAGES.og}`;

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
  icons: {
    icon: [{ url: IMAGES.favicon, sizes: "32x32", type: "image/png" }],
    apple: [{ url: IMAGES.appleTouchIcon, sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: "LumexForge | Building the Next Generation of Digital Products",
    description: defaultDescription,
    url: SITE_URL,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "LumexForge — Building the Next Generation of Digital Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LumexForge | Building the Next Generation of Digital Products",
    description: defaultDescription,
    images: [ogImageUrl],
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
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: noTemplate ? title : `${title} | ${SITE_NAME}`,
      description,
      images: [ogImageUrl],
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
    "AMORA privacy policy — how LumexForge collects, uses, and protects your memories, conversations, and voice data.",
  path: "/privacy",
});

export const termsMetadata = createMetadata({
  title: "Terms of Service",
  description:
    "AMORA terms of service — eligibility, acceptable use, voice cloning, subscriptions, and disclaimers.",
  path: "/terms",
});

export const proteinsnapPrivacyMetadata = createMetadata({
  title: "ProteinSnap Privacy Policy",
  description:
    "ProteinSnap privacy policy — how LumexForge collects, uses, and protects your nutrition, fitness, and meal data.",
  path: "/proteinsnap-privacy",
});

export const proteinsnapTermsMetadata = createMetadata({
  title: "ProteinSnap Terms of Service",
  description:
    "ProteinSnap terms of service — eligibility, AI disclaimers, subscriptions, acceptable use, and liability.",
  path: "/proteinsnap-terms",
});
