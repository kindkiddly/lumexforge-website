import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { PageHero } from "@/components/proteinsnaps/PageHero";
import { FadeInUp } from "@/components/proteinsnaps/animations/FadeInUp";
import type { Metadata } from "next";
import Image from "next/image";

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
    images: [{ url: "/images/proteinsnaps/PS-8.webp", width: 1080, height: 1920 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Protein Tracker — ProteinSnaps",
    description:
      "The smartest way to track protein. AI detects your meal nutrition instantly from a photo — no manual entry, no barcodes needed.",
    images: ["/images/proteinsnaps/PS-8.webp"],
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
    title: "Daily Recovery Summary",
    description:
      "Review protein intake, hydration and workout completion in one end-of-day snapshot.",
  },
];

const TRACKER_SCREENSHOTS = [
  {
    src: "/images/proteinsnaps/PS-8.webp",
    alt: "Goal-Based Daily Tracking",
  },
  {
    src: "/images/proteinsnaps/PS-5.webp",
    alt: "Progress Analytics and Protein Trends",
  },
] as const;

export default function AIProteinTrackerPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Protein Tracker"
        title="Track Protein Smarter with AI"
        description="ProteinSnaps combines intelligent meal recognition with real-time macro tracking — so hitting your protein goals feels effortless."
      />
      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ps-glow-frame">
              <Image
                src="/images/proteinsnaps/PSL-7.webp"
                alt="ProteinSnaps daily macro and recovery summary"
                width={1536}
                height={1024}
                loading="lazy"
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeInUp>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-center gap-10">
              {TRACKER_SCREENSHOTS.map((screenshot, i) => (
                <FadeInUp key={screenshot.src} delay={i * 0.1}>
                  <div className="relative mx-auto w-[280px] shrink-0">
                    <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-[#00e6a8]/20 to-[#00c2ff]/10 blur-2xl" />
                    <div className="relative rounded-[2rem] border-[3px] border-white/10 bg-[#0a0f18] p-2 ps-glow-frame shadow-2xl">
                      <div className="absolute left-1/2 top-2 z-10 h-1 w-16 -translate-x-1/2 rounded-full bg-white/20" />
                      <div className="relative mt-4 aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-black">
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={280}
                          height={497}
                          loading="lazy"
                          sizes="280px"
                          className="h-full w-full object-contain object-center"
                        />
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {TRACKER_FEATURES.map((item, i) => (
                <FadeInUp key={item.title} delay={0.1 + i * 0.04}>
                  <article className="ps-glow-card h-full rounded-2xl p-6">
                    <h2 className="text-lg font-semibold text-[#00e6a8]">{item.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                      {item.description}
                    </p>
                  </article>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>
      <DownloadCTA />
    </>
  );
}
