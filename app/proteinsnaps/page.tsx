import { AIFeaturesSection } from "@/components/proteinsnaps/AIFeaturesSection";
import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { FeaturesGrid } from "@/components/proteinsnaps/FeaturesGrid";
import { HeroSection } from "@/components/proteinsnaps/HeroSection";
import { HowItWorksSection } from "@/components/proteinsnaps/HowItWorksSection";
import { ScreenshotsSection } from "@/components/proteinsnaps/ScreenshotsSection";
import { homeMetadata } from "@/lib/proteinsnaps/metadata";

export const metadata = homeMetadata;

export default function ProteinSnapsHomePage() {
  return (
    <>
      <HeroSection />
      <ScreenshotsSection />
      <FeaturesGrid />
      <HowItWorksSection />
      <AIFeaturesSection />
      <DownloadCTA />
    </>
  );
}
