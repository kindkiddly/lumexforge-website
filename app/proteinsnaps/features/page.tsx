import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { FeatureIcon } from "@/components/proteinsnaps/FeatureIcon";
import { PageHero } from "@/components/proteinsnaps/PageHero";
import { FadeInUp } from "@/components/proteinsnaps/animations/FadeInUp";
import { FEATURE_CARDS } from "@/lib/proteinsnaps/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — ProteinSnaps",
  description:
    "AI meal recognition, workout tracking, personalized coaching, body measurements and more. Everything you need to reach your fitness goals.",
  openGraph: {
    title: "Features — ProteinSnaps",
    description:
      "AI meal recognition, workout tracking, personalized coaching, body measurements and more. Everything you need to reach your fitness goals.",
    url: "https://proteinsnaps.lumexforge.com/features",
    siteName: "ProteinSnaps",
    images: [{ url: "/images/proteinsnaps/PS-1.webp", width: 1080, height: 1920 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features — ProteinSnaps",
    description:
      "AI meal recognition, workout tracking, personalized coaching, body measurements and more. Everything you need to reach your fitness goals.",
    images: ["/images/proteinsnaps/PS-1.webp"],
  },
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Built for Serious Nutrition Tracking"
        description="Every tool you need to snap meals, track protein, train smarter, and achieve your fitness goals — powered by AI."
      />
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURE_CARDS.map((feature, i) => (
              <FadeInUp key={feature.title} delay={i * 0.04}>
                <article className="ps-glow-card h-full rounded-2xl p-7">
                  <FeatureIcon name={feature.icon} className="h-7 w-7" />
                  <h2 className="mt-5 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                    {feature.description}
                  </p>
                </article>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
      <DownloadCTA />
    </>
  );
}
