import { AIFeaturesSection } from "@/components/proteinsnaps/AIFeaturesSection";
import { CompanionIntroSection } from "@/components/proteinsnaps/CompanionIntroSection";
import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { FeaturesGrid } from "@/components/proteinsnaps/FeaturesGrid";
import { ProteinSnapsHero } from "@/components/proteinsnaps/ProteinSnapsHero";
import { HowItWorksSection } from "@/components/proteinsnaps/HowItWorksSection";
import { ParallaxImage } from "@/components/proteinsnaps/ParallaxImage";
import { ScreenshotsCarousel3D } from "@/components/proteinsnaps/ScreenshotsCarousel3D";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProteinSnaps: AI Fitness & Nutrition App",
  description:
    "AI-powered nutrition and gym app. Snap meals, track macros, log workouts and get personalized AI coaching for iOS and Android.",
  keywords: [
    "protein tracker",
    "AI meal scanner",
    "nutrition app",
    "workout tracker",
    "fitness app",
    "calorie tracker",
    "macro tracker",
  ],
  openGraph: {
    title: "ProteinSnaps: AI Fitness & Nutrition App",
    description:
      "AI-powered nutrition and gym app. Snap meals, track macros, log workouts and get personalized AI coaching for iOS and Android.",
    url: "https://proteinsnaps.lumexforge.com/",
    siteName: "ProteinSnaps",
    images: [{ url: "/images/proteinsnaps/proteinsnaps-og.webp", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProteinSnaps: AI Fitness & Nutrition App",
    description:
      "AI-powered nutrition and gym app. Snap meals, track macros, log workouts and get personalized AI coaching for iOS and Android.",
    images: ["/images/proteinsnaps/proteinsnaps-og.webp"],
  },
};

export default function ProteinSnapsHomePage() {
  return (
    <div className="bg-[#F2EDE4]">
      <ProteinSnapsHero />
      <div className="hidden justify-center bg-[#EDE8DF] py-3 text-[#1A1A1A] lg:flex">
        <div className="ps-pill">
          <b>New</b> Now available on iOS & Android
        </div>
      </div>
      <div className="ps-home-after-screenshots">
        <ScreenshotsCarousel3D />
      </div>
      <div className="relative">
        <div
          className="ps-parallax-bg-cover pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <ParallaxImage src="/images/proteinsnaps/BG-1.webp" />
        </div>
        <div className="relative z-10 ps-home-features-grid-wrap">
          <FeaturesGrid />
          <CompanionIntroSection />
        </div>
      </div>
      <HowItWorksSection />
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <ParallaxImage src="/images/proteinsnaps/BG-2.webp" />
        </div>
        <div className="relative z-10">
          <AIFeaturesSection />
        </div>
      </div>
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <ParallaxImage src="/images/proteinsnaps/BG-3.webp" />
        </div>
        <div className="relative z-10">
          <DownloadCTA />
        </div>
      </div>
    </div>
  );
}
