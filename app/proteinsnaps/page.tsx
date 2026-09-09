import { AIFeaturesSection } from "@/components/proteinsnaps/AIFeaturesSection";
import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { FeaturesGrid } from "@/components/proteinsnaps/FeaturesGrid";
import { HeroSection } from "@/components/proteinsnaps/HeroSection";
import { HowItWorksSection } from "@/components/proteinsnaps/HowItWorksSection";
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
      <FeaturesGrid />
      <HowItWorksSection />
      <AIFeaturesSection />
      <DownloadCTA />
    </>
  );
}
