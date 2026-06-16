import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Container } from "@/components/ui/Container";

interface LegalLayoutProps {
  title: string;
  breadcrumbLabel: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  breadcrumbLabel,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <Container className="max-w-legal">
        <AnimatedSection>
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm text-foreground-secondary"
          >
            <Link
              href="/"
              className="transition-colors hover:text-accent-secondary"
            >
              Home
            </Link>
            <span className="mx-2 text-foreground-muted">/</span>
            <span className="text-foreground">{breadcrumbLabel}</span>
          </nav>

          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          {lastUpdated && (
            <p className="mt-3 text-base text-foreground-secondary">
              Last updated: {lastUpdated}
            </p>
          )}
        </AnimatedSection>

        <AnimatedSection
          className="mt-10 space-y-10 text-base leading-[1.75] text-foreground-secondary"
          delay={0.1}
        >
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
      <h2 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-[1.75]">{children}</div>
    </section>
  );
}
