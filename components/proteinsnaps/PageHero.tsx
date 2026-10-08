import { BlurRevealText } from "./animations/BlurRevealText";
import { FadeInUp } from "./animations/FadeInUp";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-10 pb-0 sm:pt-12 sm:pb-0">
      <div className="ps-hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <FadeInUp>
          <div
            className="mx-auto w-fit text-center"
            style={{
              background: "rgba(255, 255, 255, 0.45)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.7)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.9) inset",
              borderRadius: "20px",
              padding: "24px 40px",
            }}
          >
            <div className="ps-title-strip mx-auto text-center">
              <h1 className="font-serif text-3xl font-semibold tracking-tight text-[#1A1A1A] sm:text-4xl">
                <BlurRevealText text={title} />
              </h1>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#555555]">
              {description}
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
