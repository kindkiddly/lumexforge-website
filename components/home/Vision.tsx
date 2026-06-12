import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Section } from "@/components/ui/Section";

export function Vision() {
  return (
    <Section id="vision" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent-primary/[0.03] to-transparent" aria-hidden="true" />

      <AnimatedSection className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <p className="eyebrow mb-6">Our Vision</p>
          <h2 className="heading-section text-balance">
            Building Technology That{" "}
            <span className="text-gradient-accent">Creates Impact</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-secondary sm:text-xl">
            We believe technology should solve real problems, create opportunities,
            and improve lives. Every product we build is designed with innovation,
            quality, and meaningful impact at its core.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Solve Problems", desc: "Real challenges, real solutions" },
            { label: "Create Opportunity", desc: "Unlock new possibilities" },
            { label: "Improve Lives", desc: "Technology that matters" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-center"
            >
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <p className="mt-1 text-xs text-foreground-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}
