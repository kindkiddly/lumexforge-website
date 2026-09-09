import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { PageHero } from "@/components/proteinsnaps/PageHero";
import { ScreenshotsSection } from "@/components/proteinsnaps/ScreenshotsSection";
import { FadeInUp } from "@/components/proteinsnaps/animations/FadeInUp";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Meal Scanner — ProteinSnaps",
  description:
    "Snap any meal and get instant nutrition analysis. Calories, protein, carbs and fat detected automatically with 98% confidence.",
  openGraph: {
    title: "AI Meal Scanner — ProteinSnaps",
    description:
      "Snap any meal and get instant nutrition analysis. Calories, protein, carbs and fat detected automatically with 98% confidence.",
    url: "https://proteinsnaps.lumexforge.com/meal-scanner",
    siteName: "ProteinSnaps",
    images: [{ url: "/images/proteinsnaps/PS-1.webp", width: 1080, height: 1920 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Meal Scanner — ProteinSnaps",
    description:
      "Snap any meal and get instant nutrition analysis. Calories, protein, carbs and fat detected automatically with 98% confidence.",
    images: ["/images/proteinsnaps/PS-1.webp"],
  },
};

const SCANNER_STEPS = [
  "Open ProteinSnaps and tap Snap a Meal",
  "Point your camera at your plate or upload a photo",
  "AI identifies foods and estimates protein, carbs, fats, and calories",
  "Review, adjust if needed, and save to your daily log",
];

export default function MealScannerPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Meal Scanner"
        title="Snap Any Meal. Know Your Macros."
        description="ProteinSnaps AI food scanner identifies meals from photos and estimates nutrition in seconds — no manual searching required."
      />
      <ScreenshotsSection />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeInUp>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ps-glow-frame">
                <Image
                  src="/images/proteinsnaps/PSL-3.webp"
                  alt="ProteinSnaps AI meal scanner in action"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                How the AI Food Scanner Works
              </h2>
              <ol className="mt-6 space-y-4">
                {SCANNER_STEPS.map((step, i) => (
                  <li key={step} className="flex gap-4 text-foreground-secondary">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#00e6a8]/30 bg-[#00e6a8]/10 text-sm font-bold text-[#00e6a8]">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-base leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </FadeInUp>
          </div>
        </div>
      </section>
      <DownloadCTA />
    </>
  );
}
