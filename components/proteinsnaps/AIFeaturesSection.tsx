import { AI_FEATURES } from "@/lib/proteinsnaps/constants";
import { FadeInUp } from "./animations/FadeInUp";
import { StaggerWords } from "./animations/StaggerWords";

export function AIFeaturesSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="ps-divider absolute inset-x-0 top-0 mx-auto max-w-4xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="overflow-hidden rounded-3xl border border-[#00c2ff]/20 bg-gradient-to-br from-[#00c2ff]/10 via-background-secondary to-[#00e6a8]/5 p-8 sm:p-12 ps-glow-frame">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c2ff]">
                Powered by AI
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                <StaggerWords text="Intelligence Built In" />
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {AI_FEATURES.map((feature, i) => (
                <FadeInUp key={feature.title} delay={i * 0.1}>
                  <div className="rounded-2xl border border-[#00c2ff]/15 bg-black/20 p-6 transition-colors hover:border-[#00c2ff]/35">
                    <h3 className="text-lg font-semibold text-[#00c2ff]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                      {feature.description}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
