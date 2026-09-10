import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { PageHero } from "@/components/proteinsnaps/PageHero";
import { FadeInUp } from "@/components/proteinsnaps/animations/FadeInUp";
import { SCREENSHOT_SLIDES } from "@/lib/proteinsnaps/constants";
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
    images: [{ url: "/images/proteinsnaps/PS-3.webp", width: 1080, height: 1920 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Meal Scanner — ProteinSnaps",
    description:
      "Snap any meal and get instant nutrition analysis. Calories, protein, carbs and fat detected automatically with 98% confidence.",
    images: ["/images/proteinsnaps/PS-3.webp"],
  },
};

const MEAL_SCANNER_SCREENSHOT_SRC = [
  "/images/proteinsnaps/PS-3.webp",
  "/images/proteinsnaps/PS-13.webp",
] as const;

const MEAL_SCANNER_SCREENSHOTS = MEAL_SCANNER_SCREENSHOT_SRC.map(
  (src) => SCREENSHOT_SLIDES.find((slide) => slide.src === src)!
).filter(Boolean);

const SCANNER_STEPS = [
  {
    title: "Open ProteinSnaps",
    description: "and tap Snap a Meal",
  },
  {
    title: "Point your camera at your plate",
    description: "or upload a photo",
  },
  {
    title: "AI identifies foods",
    description: "and estimates protein, carbs, fats, and calories",
  },
  {
    title: "Review, adjust if needed,",
    description: "and save to your daily log",
  },
];

export default function MealScannerPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Meal Scanner"
        title="Snap Any Meal. Know Your Macros."
        description="ProteinSnaps AI food scanner identifies meals from photos and estimates nutrition in seconds — no manual searching required."
      />
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-12">
            {MEAL_SCANNER_SCREENSHOTS.map((slide, i) => (
              <FadeInUp key={slide.src} delay={i * 0.1} className="text-center">
                <div className="relative mx-auto w-[280px] shrink-0">
                  <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-[#00e6a8]/20 to-[#00c2ff]/10 blur-2xl" />
                  <div className="relative rounded-[2rem] border-[3px] border-white/10 bg-[#0a0f18] p-2 ps-glow-frame shadow-2xl">
                    <div className="absolute left-1/2 top-2 z-10 h-1 w-16 -translate-x-1/2 rounded-full bg-white/20" />
                    <div className="relative mt-4 aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-black">
                      <Image
                        src={slide.src}
                        alt={slide.feature}
                        width={280}
                        height={497}
                        loading="lazy"
                        sizes="280px"
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-5 font-serif text-lg font-semibold text-foreground">
                  {slide.feature}
                </p>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-foreground-secondary">
                  {slide.description}
                </p>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ps-glow-frame">
              <Image
                src="/images/proteinsnaps/PSL-2.webp"
                alt="ProteinSnaps AI meal scanner in action"
                width={1536}
                height={1024}
                loading="lazy"
                sizes="100vw"
                className="h-full w-full object-contain"
              />
            </div>
          </FadeInUp>
          <FadeInUp delay={0.1} className="mt-12">
            <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              How the AI Food Scanner Works
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {SCANNER_STEPS.map((step, i) => (
                <FadeInUp key={step.title} delay={0.15 + i * 0.06}>
                  <article className="ps-glow-card h-full rounded-2xl p-6">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#00e6a8]/30 bg-[#00e6a8]/10 text-sm font-bold text-[#00e6a8]">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      {step.description}
                    </p>
                  </article>
                </FadeInUp>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>
      <DownloadCTA />
    </>
  );
}
