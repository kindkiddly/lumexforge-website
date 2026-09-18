import { AIFeaturesSection } from "@/components/proteinsnaps/AIFeaturesSection";
import { CompanionIntroSection } from "@/components/proteinsnaps/CompanionIntroSection";
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
      <div className="hidden justify-center bg-[#050811] py-3 lg:flex">
        <div className="ps-pill">
          <b>New</b> Now available on iOS & Android
        </div>
      </div>
      <div className="hidden ps-ticker-wrap lg:block">
        <div className="ps-ticker-track">
          <div className="ps-ticker-item">
            🔥 <span>50,000+</span> Meals Tracked
          </div>
          <div className="ps-ticker-dot" />
          <div className="ps-ticker-item">
            🤖 <span>98%</span> AI Accuracy
          </div>
          <div className="ps-ticker-dot" />
          <div className="ps-ticker-item">
            ⭐ <span>4.8</span> Star Rating
          </div>
          <div className="ps-ticker-dot" />
          <div className="ps-ticker-item">
            💪 <span>14-Day</span> Streaks
          </div>
          <div className="ps-ticker-dot" />
          <div className="ps-ticker-item">
            📸 <span>1M+</span> Photos Analyzed
          </div>
          <div className="ps-ticker-dot" />
          <div className="ps-ticker-item">
            🏋️ <span>500,000+</span> Workouts Logged
          </div>
          <div className="ps-ticker-dot" />
          <div className="ps-ticker-item">
            🎯 <span>85%</span> Goal Achievement Rate
          </div>
          <div className="ps-ticker-dot" />
          <div className="ps-ticker-item">
            🔥 <span>50,000+</span> Meals Tracked
          </div>
          <div className="ps-ticker-dot" />
          <div className="ps-ticker-item">
            🤖 <span>98%</span> AI Accuracy
          </div>
          <div className="ps-ticker-dot" />
          <div className="ps-ticker-item">
            ⭐ <span>4.8</span> Star Rating
          </div>
          <div className="ps-ticker-dot" />
          <div className="ps-ticker-item">
            💪 <span>14-Day</span> Streaks
          </div>
          <div className="ps-ticker-dot" />
          <div className="ps-ticker-item">
            📸 <span>1M+</span> Photos Analyzed
          </div>
          <div className="ps-ticker-dot" />
          <div className="ps-ticker-item">
            🏋️ <span>500,000+</span> Workouts Logged
          </div>
          <div className="ps-ticker-dot" />
          <div className="ps-ticker-item">
            🎯 <span>85%</span> Goal Achievement Rate
          </div>
          <div className="ps-ticker-dot" />
        </div>
      </div>
      <ScreenshotsCarousel3D />
      <div className="relative">
        <div
          className="ps-parallax-bg-cover pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <ParallaxImage src="/images/proteinsnaps/BG-1.webp" />
        </div>
        <div className="relative z-10">
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
    </>
  );
}
