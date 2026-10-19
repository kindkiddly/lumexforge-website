import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

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

type MiPawLegalLayoutProps = {
  title: string;
  breadcrumbLabel: string;
  homeHref: string;
  effectiveDate?: string;
  children: React.ReactNode;
};

export function MiPawLegalLayout({
  title,
  breadcrumbLabel,
  homeHref,
  effectiveDate,
  children,
}: MiPawLegalLayoutProps) {
  return (
    <div className="pb-12 pt-8 lg:pb-16 lg:pt-10">
      <Container className="max-w-legal">
        <AnimatedSection>
          <nav
            aria-label="Breadcrumb"
            className="mb-6 font-sans text-sm font-normal text-foreground-secondary"
          >
            <Link
              href={homeHref}
              className="transition-colors hover:text-accent-secondary"
            >
              Home
            </Link>
            <span className="mx-2 text-foreground-muted">/</span>
            <span className="text-foreground">{breadcrumbLabel}</span>
          </nav>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {withItalicEmphasis(title)}
          </h1>
          {effectiveDate ? (
            <p className="mt-3 font-sans text-base font-normal text-foreground-secondary">
              Effective date: {effectiveDate}
            </p>
          ) : null}
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
