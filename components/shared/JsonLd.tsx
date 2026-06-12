import { CONTACT_EMAILS, FOUNDER, SITE_NAME, SITE_URL } from "@/lib/constants";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description:
      "Independent technology studio creating software, AI-powered solutions, intelligent agents, automation systems, and digital platforms.",
    founder: {
      "@type": "Person",
      name: FOUNDER,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: CONTACT_EMAILS.business,
        contactType: "customer service",
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
