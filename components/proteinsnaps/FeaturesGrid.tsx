import { FEATURE_CARDS } from "@/lib/proteinsnaps/constants";
import { FeatureIcon } from "./FeatureIcon";
import { FadeInUp } from "./animations/FadeInUp";

export function FeaturesGrid() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="ps-divider absolute inset-x-0 top-0 mx-auto max-w-4xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00e6a8]">
            Features
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Hit Your Goals
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground-secondary">
            From AI meal scanning to workout tracking — ProteinSnaps is your complete
            nutrition and fitness companion.
          </p>
        </FadeInUp>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {FEATURE_CARDS.map((feature, i) => (
            <FadeInUp key={feature.title} delay={i * 0.05}>
              <article className="ps-glow-card h-full rounded-2xl p-5 sm:p-6">
                <FeatureIcon name={feature.icon} />
                <h3 className="mt-4 text-sm font-semibold text-foreground sm:text-base">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-foreground-secondary sm:text-sm">
                  {feature.description}
                </p>
              </article>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
