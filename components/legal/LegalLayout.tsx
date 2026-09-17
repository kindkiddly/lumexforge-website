import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Container } from "@/components/ui/Container";

/** Italicize the last word for Playfair emphasis in legal headings */
function withItalicEmphasis(text: string) {
  const words = text.trim().split(/\s+/);
  if (words.length <= 1) {
    return <em>{text}</em>;
  }
  const last = words.pop()!;
  return (
    <>
      {words.join(" ")} <em>{last}</em>
    </>
  );
}

interface LegalLayoutProps {
  title: string;
  breadcrumbLabel: string;
  lastUpdated?: string;
  beforeTitle?: React.ReactNode;
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  breadcrumbLabel,
  lastUpdated,
  beforeTitle,
  children,
}: LegalLayoutProps) {
  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <Container className="max-w-legal">
        <AnimatedSection>
          <nav
            aria-label="Breadcrumb"
            className="mb-6 font-sans text-sm font-normal text-foreground-secondary"
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

          {beforeTitle}

          <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {withItalicEmphasis(title)}
          </h1>
          {lastUpdated && (
            <p className="mt-3 font-sans text-base font-normal text-foreground-secondary">
              Last updated: {lastUpdated}
            </p>
          )}
        </AnimatedSection>

        <AnimatedSection
          className="mt-10 space-y-10 font-sans text-base font-normal leading-[1.7] text-foreground-secondary"
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
        {withItalicEmphasis(title)}
      </h2>
      <div className="mt-4 space-y-4 font-sans text-base font-normal leading-[1.7]">
        {children}
      </div>
    </section>
  );
}
