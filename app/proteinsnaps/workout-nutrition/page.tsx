import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { PageHero } from "@/components/proteinsnaps/PageHero";
import { ParallaxImage } from "@/components/proteinsnaps/ParallaxImage";
import { FadeInUp } from "@/components/proteinsnaps/animations/FadeInUp";
import { StaggerWords } from "@/components/proteinsnaps/animations/StaggerWords";
import { BlogArticleLink } from "@/components/proteinsnaps/BlogArticleLink";
import { PS_PAGE_SEO, proteinSnapsPageMetadata } from "@/lib/proteinsnaps/page-metadata";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = proteinSnapsPageMetadata(PS_PAGE_SEO.workoutNutrition);

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
    description: "Connect what you eat with how you train and see how nutrition supports your performance.",
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
        description="Connect workout tracking with intelligent nutrition in ProteinSnaps, built for gym-goers and strength athletes."
      />
      <section className="relative py-8 sm:py-10">
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block"
          aria-hidden="true"
        >
          <ParallaxImage src="/images/proteinsnaps/BG-14.webp" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="ps-workout-hero-image-wrap relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
              <Image
                src="/images/proteinsnaps/hero-workout-mobile.webp"
                alt="ProteinSnaps gym and strength training"
                width={780}
                height={600}
                loading="lazy"
                sizes="100vw"
                className="ps-workout-hero-image-mobile h-full w-full object-cover object-center lg:hidden"
              />
              <Image
                src="/images/proteinsnaps/hero-workout.webp"
                alt="ProteinSnaps gym and strength training"
                width={1200}
                height={437}
                loading="lazy"
                sizes="(max-width: 1400px) 100vw, 1400px"
                className="hidden h-auto w-full object-contain object-center lg:block"
              />
            </div>
          </FadeInUp>
        </div>
      </section>
      <section className="ps-workout-features-section relative py-12 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <ParallaxImage src="/images/proteinsnaps/BG-7.webp" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-stretch gap-12 lg:grid lg:grid-cols-2 lg:items-start">
            <div className="ps-workout-cards-grid order-1 grid min-w-0 grid-cols-2 gap-4 lg:order-2">
              <FadeInUp className="ps-workout-train-slot col-span-2 h-full w-full min-w-0">
                <article className="ps-workout-glass-card ps-glow-card ps-glass-panel ps-3d-card box-border block h-full w-full min-w-0 rounded-2xl p-5 text-center">
                  <h2 className="font-serif text-3xl font-semibold leading-snug text-[#1A1A1A]">
                    <StaggerWords text="Train Hard. Eat Smart." />
                  </h2>
                </article>
              </FadeInUp>
              {WORKOUT_FEATURES.map((item, i) => (
                <FadeInUp key={item.title} delay={i * 0.06} className="h-full w-full min-w-0">
                  <article className="ps-workout-glass-card ps-glow-card ps-glass-panel ps-3d-card box-border block h-full w-full min-w-0 rounded-2xl p-5">
                    <h3 className="font-bold text-[#00c2ff]">{item.title}</h3>
                    <p className="mt-2 text-sm font-bold leading-relaxed text-[#555555]">
                      {item.description}
                    </p>
                  </article>
                </FadeInUp>
              ))}
            </div>
            <FadeInUp className="order-2 w-full min-w-0 lg:order-1">
              <div className="relative mx-auto aspect-[9/16] max-h-[560px] w-full max-w-sm overflow-hidden rounded-2xl ps-glow-frame lg:mx-0">
                <Image
                  src="/images/proteinsnaps/PS-2.webp"
                  alt="ProteinSnaps workout and nutrition tracking"
                  width={280}
                  height={497}
                  loading="lazy"
                  sizes="400px"
                  className="h-full w-full object-contain object-center"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="ps-glass-panel ps-3d-card rounded-2xl p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-[#1A1A1A]">
              Protein around your workouts
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#555555] sm:text-base">
              Most lifters do well with a balanced meal a few hours before training and a protein-rich
              meal or snack afterward. Aim for roughly 20–40 g of protein in that post-workout meal
              if it fits your day. Your total daily protein still matters most, spread across meals,
              not one perfect window.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#555555] sm:text-base">
              Use the{" "}
              <BlogArticleLink
                href="/protein-calculator"
                className="font-semibold text-[#00B386] underline-offset-2 hover:underline"
              >
                protein calculator
              </BlogArticleLink>{" "}
              for your daily target, pack{" "}
              <BlogArticleLink
                href="/blog/high-protein-low-calorie-snacks"
                className="font-semibold text-[#00B386] underline-offset-2 hover:underline"
              >
                high protein low calorie snacks
              </BlogArticleLink>{" "}
              for busy days, and pair training with{" "}
              <BlogArticleLink
                href="/blog/progressive-overload"
                className="font-semibold text-[#00B386] underline-offset-2 hover:underline"
              >
                progressive overload
              </BlogArticleLink>{" "}
              in the gym.
            </p>
          </div>
        </div>
      </section>
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <ParallaxImage src="/images/proteinsnaps/BG-11.webp" />
        </div>
        <div className="relative z-10">
          <DownloadCTA />
        </div>
      </div>
    </>
  );
}
