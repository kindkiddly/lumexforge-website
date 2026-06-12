import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Container } from "@/components/ui/Container";

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <Container className="max-w-3xl">
        <AnimatedSection>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          {lastUpdated && (
            <p className="mt-2 text-sm text-foreground-secondary">
              Last updated: {lastUpdated}
            </p>
          )}
        </AnimatedSection>

        <AnimatedSection className="mt-10 space-y-8 text-foreground-secondary" delay={0.1}>
          {children}
        </AnimatedSection>
      </Container>
    </div>
  );
}

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed">{children}</div>
    </section>
  );
}
