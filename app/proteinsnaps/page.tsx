import { AIFeaturesSection } from "@/components/proteinsnaps/AIFeaturesSection";
import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { FeaturesGrid } from "@/components/proteinsnaps/FeaturesGrid";
import { HeroSection } from "@/components/proteinsnaps/HeroSection";
import { HowItWorksSection } from "@/components/proteinsnaps/HowItWorksSection";
import { ParallaxImage } from "@/components/proteinsnaps/ParallaxImage";
import { ScreenshotsCarousel3D } from "@/components/proteinsnaps/ScreenshotsCarousel3D";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProteinSnaps — AI Nutrition & Fitness Tracker",
  description:
    "Track meals with AI, log workouts, get personalized coaching and see real progress. ProteinSnaps is your all-in-one fitness companion.",
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
    title: "ProteinSnaps — AI Nutrition & Fitness Tracker",
    description:
      "Track meals with AI, log workouts, get personalized coaching and see real progress. ProteinSnaps is your all-in-one fitness companion.",
    url: "https://proteinsnaps.lumexforge.com/",
    siteName: "ProteinSnaps",
    images: [{ url: "/images/proteinsnaps/PS-1.webp", width: 1080, height: 1920 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProteinSnaps — AI Nutrition & Fitness Tracker",
    description:
      "Track meals with AI, log workouts, get personalized coaching and see real progress. ProteinSnaps is your all-in-one fitness companion.",
    images: ["/images/proteinsnaps/PS-1.webp"],
  },
};

export default function ProteinSnapsHomePage() {
  return (
    <>
      <HeroSection />
      <ScreenshotsCarousel3D />
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <ParallaxImage src="/images/proteinsnaps/BG-1.webp" />
        </div>
        <div className="relative z-10">
          <FeaturesGrid />
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
    </>
  );
}
