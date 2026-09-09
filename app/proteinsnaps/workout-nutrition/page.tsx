import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { PageHero } from "@/components/proteinsnaps/PageHero";
import { FadeInUp } from "@/components/proteinsnaps/animations/FadeInUp";
import { StaggerWords } from "@/components/proteinsnaps/animations/StaggerWords";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Workout Nutrition — ProteinSnaps",
  description:
    "Fuel your workouts smarter. Track nutrition, log training and get AI recommendations built around your workout schedule.",
  openGraph: {
    title: "Workout Nutrition — ProteinSnaps",
    description:
      "Fuel your workouts smarter. Track nutrition, log training and get AI recommendations built around your workout schedule.",
    url: "https://proteinsnaps.lumexforge.com/workout-nutrition",
    siteName: "ProteinSnaps",
    images: [{ url: "/images/proteinsnaps/PS-2.webp", width: 1080, height: 1920 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workout Nutrition — ProteinSnaps",
    description:
      "Fuel your workouts smarter. Track nutrition, log training and get AI recommendations built around your workout schedule.",
    images: ["/images/proteinsnaps/PS-2.webp"],
  },
};

const WORKOUT_FEATURES = [
  {
    title: "Workout Logging",
    description: "Record exercises, sets, reps, and training sessions with a clean interface built for consistency.",
  },
  {
    title: "Gym & Strength Focus",
    description: "Designed for lifters who need to fuel training with precise protein and macro targets.",
  },
  {
    title: "Nutrition Sync",
    description: "Connect what you eat with how you train — see how nutrition supports your performance.",
  },
  {
    title: "Recovery Insights",
    description: "Track protein intake around workouts to optimize muscle recovery and growth.",
  },
  {
    title: "Progress Tracking",
    description: "Monitor body measurements, progress photos, and strength trends alongside nutrition.",
  },
  {
    title: "AI Coach for Athletes",
    description: "Get coaching that understands your training volume and adjusts nutrition guidance accordingly.",
  },
];

export default function WorkoutNutritionPage() {
  return (
    <>
      <PageHero
        eyebrow="Workout Nutrition"
        title="Fuel Your Training with Precision"
        description="Connect workout tracking with intelligent nutrition in ProteinSnaps — built for gym-goers and strength athletes."
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              <StaggerWords text="Train Hard. Eat Smart." />
            </h2>
          </FadeInUp>
          <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
            <FadeInUp>
              <div className="relative aspect-[9/16] max-h-[560px] w-full max-w-sm overflow-hidden rounded-2xl ps-glow-frame">
                <Image
                  src="/images/proteinsnaps/PS-2.webp"
                  alt="ProteinSnaps workout and nutrition tracking"
                  fill
                  sizes="400px"
                  className="object-cover object-top"
                />
              </div>
            </FadeInUp>
            <div className="grid gap-4 sm:grid-cols-2">
              {WORKOUT_FEATURES.map((item, i) => (
                <FadeInUp key={item.title} delay={i * 0.06}>
                  <article className="ps-glow-card h-full rounded-2xl p-5">
                    <h3 className="font-semibold text-[#00c2ff]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      {item.description}
                    </p>
                  </article>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>
      <DownloadCTA />
    </>
  );
}
