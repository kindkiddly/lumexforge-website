import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientMesh } from "@/components/shared/GradientMesh";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { FOUNDER, VALUES } from "@/lib/constants";
import { aboutMetadata } from "@/lib/metadata";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
      <GradientMesh variant="section" className="top-0 h-[60vh]" />

      <Container>
        <PageHeader
          eyebrow="About Us"
          title="About LumexForge"
          description="An independent technology studio transforming ambitious ideas into exceptional digital products."
        />

        <AnimatedSection className="mt-16" delay={0.1}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5 text-lg leading-relaxed text-foreground-secondary">
              <p>
                LumexForge is an independent technology studio focused on building
                innovative software, AI-powered tools, intelligent agents, automation
                systems, digital platforms, and future technologies.
              </p>
              <p>
                Founded by <span className="text-foreground font-medium">{FOUNDER}</span>,
                LumexForge was established to transform ambitious ideas into exceptional
                digital products.
              </p>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-foreground-secondary">
              <p>
                The company is committed to innovation, quality, usability, and
                long-term impact.
              </p>
              <p>
                As the ecosystem grows, LumexForge will continue exploring new
                technologies and creating products that empower people and businesses
                worldwide.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20" delay={0.15}>
          <div className="text-center">
            <p className="eyebrow mb-4">What Drives Us</p>
            <h2 className="heading-section">Our Values</h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                <span className="text-2xl font-bold text-accent-primary/40 transition-colors group-hover:text-accent-primary/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20" delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-accent-primary/10 via-white/[0.02] to-accent-secondary/5 p-8 sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-primary/10 blur-[60px]" aria-hidden="true" />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="eyebrow mb-3">Mission</p>
                <p className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl max-w-lg">
                  Create technology that empowers, simplifies, and inspires.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.05] text-lg font-bold text-foreground">
                  AR
                </div>
                <div>
                  <p className="font-semibold text-foreground">{FOUNDER}</p>
                  <p className="text-sm text-foreground-muted">Founder &amp; Vision</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
