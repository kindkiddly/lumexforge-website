import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { IMAGES } from "@/lib/images";
import Image from "next/image";

export function KePasoFeature() {
  return (
    <div id="kepaso-feature" className="mt-16">
      <AnimatedSection>
        <SectionHeader
          eyebrow="KePaso"
          title="Built for Connection"
          description="KePaso brings people together through innovative digital experiences designed for meaningful collaboration."
          align="left"
          className="mb-10 sm:mb-12"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-background-secondary aspect-[16/10]">
          <Image
            src={IMAGES.kepasoArtwork2}
            alt="KePaso platform — people connecting through conversation"
            fill
            sizes="(max-width: 1024px) 100vw, 1280px"
            className="object-contain object-center"
          />
        </div>
      </AnimatedSection>
    </div>
  );
}
