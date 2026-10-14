import { CONTACT_EMAILS, FOUNDER, SITE_NAME, SITE_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${IMAGES.logo}`,
    description:
      "Independent technology studio creating software, AI-powered solutions, intelligent agents, automation systems, and digital platforms.",
    founder: {
      "@type": "Person",
      name: FOUNDER,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rosenberg",
      addressRegion: "TX",
      postalCode: "77469",
      addressCountry: "USA",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: CONTACT_EMAILS.business,
        contactType: "customer service",
        areaServed: "US",
      },
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}
