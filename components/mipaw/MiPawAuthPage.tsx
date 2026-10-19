import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Container } from "@/components/ui/Container";
import type { ReactNode } from "react";

type MiPawAuthPageProps = {
  title: string;
  children: ReactNode;
};

export function MiPawAuthPage({ title, children }: MiPawAuthPageProps) {
  return (
    <div className="pb-12 pt-8 lg:pb-16 lg:pt-10">
      <Container className="max-w-legal">
        <AnimatedSection>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
        </AnimatedSection>
        <AnimatedSection
          className="mt-8 space-y-6 font-sans text-base font-normal leading-[1.7] text-foreground-secondary"
          delay={0.1}
        >
          {children}
        </AnimatedSection>
      </Container>
    </div>
  );
}
