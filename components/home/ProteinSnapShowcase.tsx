import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Section } from "@/components/ui/Section";
import { IMAGES } from "@/lib/images";
import Image from "next/image";

export function ProteinSnapShowcase() {
  return (
    <Section id="proteinsnap-showcase">
      <SectionHeader
        eyebrow="ProteinSnap"
        title="AI-Powered Nutrition"
        description="A glimpse at ProteinSnap — simplifying meal tracking, nutrition analysis, and performance monitoring."
        align="left"
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <AnimatedSection>
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.08] bg-background-secondary">
            <div className="relative aspect-[9/16] max-h-[640px] w-full">
              <Image
                src={IMAGES.proteinsnapMobile}
                alt="ProteinSnap mobile app screenshot"
                fill
                sizes="(max-width: 1024px) 80vw, 400px"
                className="object-contain object-center"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-background-secondary aspect-[16/10]">
            <Image
              src={IMAGES.proteinsnapScreenshot2}
              alt="ProteinSnap app interface screenshot"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center"
            />
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
