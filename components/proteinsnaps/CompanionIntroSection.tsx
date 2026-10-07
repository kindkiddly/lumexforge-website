import { FadeInUp } from "./animations/FadeInUp";

export function CompanionIntroSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="ps-divider absolute inset-x-0 top-0 mx-auto max-w-4xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center">
          <div className="ps-glass-text ps-3d-card mx-auto max-w-3xl rounded-2xl">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
              Your Complete AI Fitness &amp; Nutrition Companion
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
              ProteinSnaps is built for people who train hard and take nutrition seriously.
              Track meals, protein, and workouts in one intelligent app — and use tools like
              Fill the Gap when you&apos;re short on protein, or review your full 30-day meal
              history when you need real accountability. Everything you need, nothing you
              don&apos;t.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
