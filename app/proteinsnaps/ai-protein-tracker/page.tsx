import { AIFeaturesSection } from "@/components/proteinsnaps/AIFeaturesSection";
import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { PageHero } from "@/components/proteinsnaps/PageHero";
import { ZoomRevealText } from "@/components/proteinsnaps/animations/ZoomRevealText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Protein Tracker — ProteinSnaps",
  description:
    "The smartest way to track protein. AI detects your meal nutrition instantly from a photo — no manual entry, no barcodes needed.",
  openGraph: {
    title: "AI Protein Tracker — ProteinSnaps",
    description:
      "The smartest way to track protein. AI detects your meal nutrition instantly from a photo — no manual entry, no barcodes needed.",
    url: "https://proteinsnaps.lumexforge.com/ai-protein-tracker",
    siteName: "ProteinSnaps",
    images: [{ url: "/images/proteinsnaps/PS-1.webp", width: 1080, height: 1920 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Protein Tracker — ProteinSnaps",
    description:
      "The smartest way to track protein. AI detects your meal nutrition instantly from a photo — no manual entry, no barcodes needed.",
    images: ["/images/proteinsnaps/PS-1.webp"],
  },
};

const TRACKER_FEATURES = [
  {
    title: "Real-Time Macro Dashboard",
    description:
      "See protein, carbs, fats, and calories update instantly as you log meals throughout the day.",
  },
  {
    title: "Protein-First Goals",
    description:
      "Set protein targets that matter for your cut, bulk, or maintenance phase — and track progress visually.",
  },
  {
    title: "AI-Powered Estimates",
    description:
      "Meal photos are analyzed by AI to estimate nutrition when you don't have exact data.",
  },
  {
    title: "Fill the Gap",
    description:
      "Know exactly how much protein and macros you still need before the day ends.",
  },
  {
    title: "Weekly Trends",
    description:
      "Spot patterns in your nutrition with smart insights and trend analysis over time.",
  },
  {
    title: "Personalized Coaching",
    description:
      "Get AI coaching tailored to your goals, progress, and eating habits.",
  },
];

export default function AIProteinTrackerPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Protein Tracker"
        title="Track Protein Smarter with AI"
        description="ProteinSnaps combines intelligent meal recognition with real-time macro tracking — so hitting your protein goals feels effortless."
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TRACKER_FEATURES.map((item, i) => (
              <ZoomRevealText key={item.title} delay={i * 0.08}>
                <article className="ps-glow-card h-full rounded-2xl p-6">
                  <h2 className="text-lg font-semibold text-[#00e6a8]">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                    {item.description}
                  </p>
                </article>
              </ZoomRevealText>
            ))}
          </div>
        </div>
      </section>
      <AIFeaturesSection />
      <DownloadCTA />
    </>
  );
}
