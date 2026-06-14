import { ArtworkImage } from "@/components/shared/ArtworkImage";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Section } from "@/components/ui/Section";
import { IMAGES } from "@/lib/images";

export function FutureProductsSection() {
  return (
    <Section id="future-products" className="bg-background-secondary/40">
      <SectionHeader
        eyebrow="What's Next"
        title="Future Products"
        description="New innovations and digital experiences currently in exploration and development."
      />

      <AnimatedSection>
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] aspect-[21/9] sm:aspect-[2.5/1] min-h-[220px]">
          <ArtworkImage
            src={IMAGES.products.future}
            alt="Future LumexForge products abstract artwork"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
          <div className="absolute inset-0 flex items-center p-8 sm:p-12">
            <div className="max-w-lg">
              <p className="eyebrow mb-3">Coming Soon</p>
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Exploring what&apos;s next in digital innovation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-secondary sm:text-base">
                LumexForge continues to research emerging technologies and build products that create meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
