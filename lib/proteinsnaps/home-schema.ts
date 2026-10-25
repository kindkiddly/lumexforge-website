/** JSON-LD for ProteinSnaps homepage (SoftwareApplication + WebSite). */
export const HOME_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ProteinSnaps",
    operatingSystem: "iOS, Android",
    applicationCategory: "HealthApplication",
    description:
      "AI nutrition and gym app: snap a meal to estimate protein, calories and macros, log workouts and get AI coaching.",
    url: "https://proteinsnaps.lumexforge.com",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    downloadUrl: [
      "https://apps.apple.com/us/app/proteinsnaps/id6801353318",
      "https://play.google.com/store/apps/details?id=com.proteinsnap.app",
    ],
    publisher: {
      "@type": "Organization",
      name: "LumexForge",
      url: "https://lumexforge.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ProteinSnaps",
    url: "https://proteinsnaps.lumexforge.com",
  },
] as const;
