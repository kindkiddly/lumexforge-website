import { BlurRevealText } from "./animations/BlurRevealText";
import { FadeInUp } from "./animations/FadeInUp";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div className="ps-hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <FadeInUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00e6a8]">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            <BlurRevealText text={title} />
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-secondary">
            {description}
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
