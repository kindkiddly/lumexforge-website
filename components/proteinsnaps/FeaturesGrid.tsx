import { FEATURE_CARDS } from "@/lib/proteinsnaps/constants";
import Image from "next/image";
import Link from "next/link";
import { FeatureIcon } from "./FeatureIcon";
import { FadeInUp } from "./animations/FadeInUp";

const HOME_FEATURE_HIGHLIGHTS = FEATURE_CARDS.slice(0, 4);

/** Homepage feature card thumbnails — same order as HOME_FEATURE_HIGHLIGHTS / SCREENSHOT_SLIDES. */
const HOME_FEATURE_CARD_IMAGES = [
  { src: "/images/proteinsnaps/PS-3.webp", alt: "AI meal recognition screen" },
  { src: "/images/proteinsnaps/PS-8.webp", alt: "Daily nutrition and macro tracking dashboard" },
  { src: "/images/proteinsnaps/PS-4.webp", alt: "Personalized AI coach insights" },
  { src: "/images/proteinsnaps/PS-2.webp", alt: "Workout logging and strength tracking" },
] as const;

export function FeaturesGrid() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="ps-divider absolute inset-x-0 top-0 mx-auto max-w-4xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center">
          <div className="ps-glass-text ps-3d-card rounded-2xl mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00e6a8]">
              Features
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Everything You Need to Hit Your Goals
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#555555]">
              From AI meal scanning to workout tracking — ProteinSnaps is your complete
              nutrition and fitness companion.
            </p>
          </div>
        </FadeInUp>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {HOME_FEATURE_HIGHLIGHTS.map((feature, i) => (
            <FadeInUp key={feature.title} delay={i * 0.05}>
              <article className="ps-home-feature-card ps-3d-card h-full rounded-2xl p-5 sm:p-6">
                <FeatureIcon name={feature.icon} />
                <h3 className="mt-4 text-sm font-semibold text-[#1A1A1A] sm:text-base">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#555555] sm:text-sm">
                  {feature.description}
                </p>
                <div className="relative mt-4 h-[130px] w-full overflow-hidden rounded-xl">
                  <Image
                    src={HOME_FEATURE_CARD_IMAGES[i].src}
                    alt={HOME_FEATURE_CARD_IMAGES[i].alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                    className="object-cover"
                  />
                </div>
              </article>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.25} className="mt-10 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00e6a8] transition-colors hover:text-[#00c2ff]"
          >
            Explore all 12 features
            <span aria-hidden="true">→</span>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
