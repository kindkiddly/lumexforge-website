import { FadeInUp } from "./animations/FadeInUp";

export function CompanionIntroSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="ps-divider absolute inset-x-0 top-0 mx-auto max-w-4xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center">
          <div className="ps-glass-text ps-3d-card mx-auto max-w-3xl rounded-2xl">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Your Complete AI Fitness &amp; Nutrition Companion
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-foreground-secondary sm:text-lg">
              ProteinSnaps is an AI-powered fitness and nutrition app for iOS and Android
              designed to help you build healthier habits, increase your protein intake, and
              achieve your body transformation goals. Whether you are trying to lose weight,
              build muscle, improve your nutrition, or maintain a healthy lifestyle,
              ProteinSnaps gives you intelligent tools that make tracking simple and
              effective. Snap a photo of your meal and AI instantly calculates your calories,
              protein, carbs and fats. Log workouts, track progress photos, monitor body
              measurements, and get personalized daily coaching — all in one app.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
