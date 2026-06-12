import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { Section } from "@/components/ui/Section";
import { WHY_CARDS } from "@/lib/constants";

const accentBars = [
  "bg-accent-primary",
  "bg-accent-secondary",
  "bg-success",
  "bg-gradient-to-r from-accent-primary to-accent-secondary",
];

export function WhyLumexForge() {
  return (
    <Section id="why-lumexforge" className="bg-background-secondary/40">
      <SectionHeader
        eyebrow="Our Approach"
        title="Why LumexForge"
      />

      <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_CARDS.map((card, index) => (
          <StaggerItem key={card.title}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 h-full transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
              <div className={`mb-5 h-1 w-10 rounded-full ${accentBars[index]} transition-all duration-500 group-hover:w-14`} />
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{card.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-foreground-secondary">
                {card.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
