import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Section } from "@/components/ui/Section";
import { FOUNDER } from "@/lib/constants";

export function Founder() {
  return (
    <Section id="founder">
      <AnimatedSection className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-12 text-center">
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent-primary/10 blur-[60px]" aria-hidden="true" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent-secondary/10 blur-[50px]" aria-hidden="true" />

          <p className="eyebrow mb-5">Leadership</p>
          <h2 className="heading-section">Founded With Vision</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground-secondary">
            LumexForge was founded by <span className="text-foreground font-medium">{FOUNDER}</span> with a mission to create innovative digital products that empower people and businesses through technology.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10 text-sm font-bold text-foreground">
              AR
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">{FOUNDER}</p>
              <p className="text-xs text-foreground-muted">Founder</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
