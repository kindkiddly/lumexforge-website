import { BlurRevealText } from "./animations/BlurRevealText";
import { FadeInUp } from "./animations/FadeInUp";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-0">
      <div className="ps-hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="mb-6">
            <div className="ps-title-strip mx-auto text-center">
              <h1 className="text-[2rem] font-bold leading-[1.2] tracking-[-0.02em] text-[#1A1A1A] lg:text-[2.5rem]">
                <BlurRevealText text={title} />
              </h1>
            </div>
            <p className="mx-auto mt-3 max-w-2xl font-serif text-lg font-normal italic tracking-[0.02em] text-[#555555]">
              {description}
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
