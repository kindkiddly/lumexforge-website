import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientMesh } from "@/components/shared/GradientMesh";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function ContactCTA() {
  return (
    <Section id="contact-cta" className="relative">
      <GradientMesh variant="cta" />
      <AnimatedSection className="relative mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 sm:p-12 lg:p-16 text-center backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5" aria-hidden="true" />
          <div className="relative">
            <p className="eyebrow mb-5">Get Started</p>
            <h2 className="heading-section text-balance">
              Let&apos;s Build The Future
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-foreground-secondary">
              Have an idea, question, partnership opportunity, or business inquiry?
              We&apos;d love to hear from you.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Contact Us
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href="/products" variant="secondary" size="lg">
                View Products
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
