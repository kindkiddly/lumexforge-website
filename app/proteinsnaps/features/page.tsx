import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { FeatureIcon } from "@/components/proteinsnaps/FeatureIcon";
import { PageHero } from "@/components/proteinsnaps/PageHero";
import { FadeInUp } from "@/components/proteinsnaps/animations/FadeInUp";
import { FEATURE_CARDS, SCREENSHOT_SLIDES } from "@/lib/proteinsnaps/constants";
import type { Metadata } from "next";
import Image from "next/image";

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
    images: [{ url: "/images/proteinsnaps/PS-7.webp", width: 1080, height: 1920 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features — ProteinSnaps",
    description:
      "AI meal recognition, workout tracking, personalized coaching, body measurements and more. Everything you need to reach your fitness goals.",
    images: ["/images/proteinsnaps/PS-7.webp"],
  },
};

const FEATURE_SCREENSHOT_SRC = [
  "/images/proteinsnaps/PS-2.webp",
  "/images/proteinsnaps/PS-6.webp",
  "/images/proteinsnaps/PS-10.webp",
] as const;

const FEATURE_SCREENSHOTS = FEATURE_SCREENSHOT_SRC.map(
  (src) => SCREENSHOT_SLIDES.find((slide) => slide.src === src)!
).filter(Boolean);

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Built for Serious Nutrition Tracking"
        description="Every tool you need to snap meals, track protein, train smarter, and achieve your fitness goals — powered by AI."
      />
      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ps-glow-frame">
              <Image
                src="/images/proteinsnaps/PSL-1.webp"
                alt="ProteinSnaps complete fitness dashboard"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </FadeInUp>
        </div>
      </section>
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
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-12">
            {FEATURE_SCREENSHOTS.map((slide, i) => (
              <FadeInUp key={slide.src} delay={i * 0.1} className="text-center">
                <div className="relative mx-auto w-[280px] shrink-0">
                  <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-[#00e6a8]/20 to-[#00c2ff]/10 blur-2xl" />
                  <div className="relative rounded-[2rem] border-[3px] border-white/10 bg-[#0a0f18] p-2 ps-glow-frame shadow-2xl">
                    <div className="absolute left-1/2 top-2 z-10 h-1 w-16 -translate-x-1/2 rounded-full bg-white/20" />
                    <div className="relative mt-4 aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-black">
                      <Image
                        src={slide.src}
                        alt={slide.feature}
                        fill
                        sizes="280px"
                        className="object-contain object-center"
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
      <DownloadCTA />
    </>
  );
}
