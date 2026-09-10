import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { PageHero } from "@/components/proteinsnaps/PageHero";
import { ParallaxBand } from "@/components/proteinsnaps/ParallaxBand";
import { ScreenshotsSection } from "@/components/proteinsnaps/ScreenshotsSection";
import { FadeInUp } from "@/components/proteinsnaps/animations/FadeInUp";
import { HOW_IT_WORKS_STEPS, SCREENSHOT_SLIDES } from "@/lib/proteinsnaps/constants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How It Works — ProteinSnaps",
  description:
    "Snap a meal, track your nutrition and let AI coach you to better results. See how ProteinSnaps works in 3 simple steps.",
  openGraph: {
    title: "How It Works — ProteinSnaps",
    description:
      "Snap a meal, track your nutrition and let AI coach you to better results. See how ProteinSnaps works in 3 simple steps.",
    url: "https://proteinsnaps.lumexforge.com/how-it-works",
    siteName: "ProteinSnaps",
    images: [{ url: "/images/proteinsnaps/PS-3.webp", width: 1080, height: 1920 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works — ProteinSnaps",
    description:
      "Snap a meal, track your nutrition and let AI coach you to better results. See how ProteinSnaps works in 3 simple steps.",
    images: ["/images/proteinsnaps/PS-3.webp"],
  },
};

const VISUAL_STEP_SRC = [
  "/images/proteinsnaps/PS-3.webp",
  "/images/proteinsnaps/PS-5.webp",
  "/images/proteinsnaps/PS-4.webp",
] as const;

const VISUAL_STEPS = VISUAL_STEP_SRC.map((src, i) => ({
  ...HOW_IT_WORKS_STEPS[i],
  slide: SCREENSHOT_SLIDES.find((s) => s.src === src)!,
}));

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="Nutrition Tracking Made Simple"
        description="ProteinSnaps turns meal tracking from a chore into a three-step habit — snap, track, and achieve."
      />
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c2ff]">
              How It Works
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Three Steps to Better Nutrition
            </h2>
          </FadeInUp>
          <div className="relative mt-16 grid gap-12 lg:grid-cols-3">
            <div
              className="pointer-events-none absolute left-[16.67%] right-[16.67%] z-0 hidden h-px lg:top-[calc(33.5rem+2rem+2.5rem)] lg:block"
              aria-hidden="true"
            >
              <div className="h-full bg-gradient-to-r from-[#00e6a8]/50 via-[#00c2ff]/50 to-[#00e6a8]/50" />
            </div>
            {VISUAL_STEPS.map((step, i) => (
              <FadeInUp key={step.step} delay={i * 0.1} className="text-center">
                <div className="relative mx-auto w-[280px] shrink-0">
                  <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-[#00e6a8]/20 to-[#00c2ff]/10 blur-2xl" />
                  <div className="relative rounded-[2rem] border-[3px] border-white/10 bg-[#0a0f18] p-2 ps-glow-frame shadow-2xl">
                    <div className="absolute left-1/2 top-2 z-10 h-1 w-16 -translate-x-1/2 rounded-full bg-white/20" />
                    <div className="relative mt-4 aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-black">
                      <Image
                        src={step.slide.src}
                        alt={step.slide.feature}
                        width={280}
                        height={497}
                        loading="lazy"
                        sizes="280px"
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                  </div>
                </div>
                <span className="relative z-10 mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#00e6a8]/30 bg-[#00e6a8]/10 text-lg font-bold text-[#00e6a8]">
                  {step.step}
                </span>
                <h2 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                  {step.description}
                </p>
                <p className="mt-5 font-serif text-lg font-semibold text-foreground">
                  {step.slide.feature}
                </p>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-foreground-secondary">
                  {step.slide.description}
                </p>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
      <ParallaxBand
        imageSrc="/images/proteinsnaps/PSL-4.webp"
        minHeight="40vh"
      />
      <ScreenshotsSection />
      <DownloadCTA />
    </>
  );
}
