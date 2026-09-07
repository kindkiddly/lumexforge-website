import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { HowItWorksSection } from "@/components/proteinsnaps/HowItWorksSection";
import { PageHero } from "@/components/proteinsnaps/PageHero";
import { FadeInUp } from "@/components/proteinsnaps/animations/FadeInUp";
import { howItWorksMetadata } from "@/lib/proteinsnaps/metadata";

export const metadata = howItWorksMetadata;

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="Nutrition Tracking Made Simple"
        description="ProteinSnaps turns meal tracking from a chore into a three-step habit — snap, track, and achieve."
      />
      <HowItWorksSection />
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 text-center">
              <p className="text-base leading-relaxed text-foreground-secondary">
                Whether you&apos;re cutting, bulking, or maintaining — ProteinSnaps
                adapts to your goals with personalized AI coaching, smart insights,
                and tools like Fill the Gap and Morning Briefing to keep you on track
                every single day.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>
      <DownloadCTA />
    </>
  );
}
