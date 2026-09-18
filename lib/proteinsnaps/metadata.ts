import type { Metadata } from "next";
import { PROTEINSNAPS, SEO_KEYWORDS } from "./constants";

const OG_IMAGE = `${PROTEINSNAPS.lumexforgeUrl}/images/proteinsnaps/PSL-1.webp`;

function createProteinSnapsMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${PROTEINSNAPS.domain}${path}`;
  const fullTitle = `${title} | ${PROTEINSNAPS.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...SEO_KEYWORDS],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: PROTEINSNAPS.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${PROTEINSNAPS.name} — AI-Powered Nutrition & Fitness`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

export const homeMetadata = createProteinSnapsMetadata({
  title: "AI Meal Tracker & Protein Tracking App",
  description:
    "ProteinSnaps — AI-powered nutrition and gym companion. Snap meals, track macros, log workouts, monitor progress and get personalized AI coaching — all in one app for iOS and Android.",
  path: "/",
});

export const featuresMetadata = createProteinSnapsMetadata({
  title: "Features",
  description:
    "ProteinSnaps — AI-powered nutrition and gym companion. Snap meals, track macros, log workouts, monitor progress and get personalized AI coaching — all in one app for iOS and Android.",
  path: "/features",
});

export const howItWorksMetadata = createProteinSnapsMetadata({
  title: "How It Works",
  description:
    "ProteinSnaps — AI-powered nutrition and gym companion. Snap meals, track macros, log workouts, monitor progress and get personalized AI coaching — all in one app for iOS and Android.",
  path: "/how-it-works",
});

export const aiTrackerMetadata = createProteinSnapsMetadata({
  title: "AI Protein Tracker",
  description:
    "ProteinSnaps — AI-powered nutrition and gym companion. Snap meals, track macros, log workouts, monitor progress and get personalized AI coaching — all in one app for iOS and Android.",
  path: "/ai-protein-tracker",
});

export const mealScannerMetadata = createProteinSnapsMetadata({
  title: "AI Meal Scanner",
  description:
    "ProteinSnaps — AI-powered nutrition and gym companion. Snap meals, track macros, log workouts, monitor progress and get personalized AI coaching — all in one app for iOS and Android.",
  path: "/meal-scanner",
});

export const workoutNutritionMetadata = createProteinSnapsMetadata({
  title: "Workout Nutrition",
  description:
    "ProteinSnaps — AI-powered nutrition and gym companion. Snap meals, track macros, log workouts, monitor progress and get personalized AI coaching — all in one app for iOS and Android.",
  path: "/workout-nutrition",
});

export const blogMetadata = createProteinSnapsMetadata({
  title: "Blog",
  description:
    "ProteinSnaps — AI-powered nutrition and gym companion. Snap meals, track macros, log workouts, monitor progress and get personalized AI coaching — all in one app for iOS and Android.",
  path: "/blog",
});
