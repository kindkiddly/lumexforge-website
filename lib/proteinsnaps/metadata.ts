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
    "ProteinSnaps is an AI-powered meal tracker and protein tracking app. Snap meals, track macros, get personalized AI coaching, and achieve your fitness goals.",
  path: "/",
});

export const featuresMetadata = createProteinSnapsMetadata({
  title: "Features",
  description:
    "Explore ProteinSnaps features — AI meal recognition, protein tracking, macro tracking, AI coach, workout logging, and smart nutrition insights.",
  path: "/features",
});

export const howItWorksMetadata = createProteinSnapsMetadata({
  title: "How It Works",
  description:
    "Learn how ProteinSnaps works — snap your meal, track your macros, and achieve your fitness goals with AI-powered nutrition tracking.",
  path: "/how-it-works",
});

export const aiTrackerMetadata = createProteinSnapsMetadata({
  title: "AI Protein Tracker",
  description:
    "ProteinSnaps AI protein tracker — intelligent macro tracking, personalized coaching, and smart nutrition insights powered by AI.",
  path: "/ai-protein-tracker",
});

export const mealScannerMetadata = createProteinSnapsMetadata({
  title: "AI Meal Scanner",
  description:
    "Snap any meal and let ProteinSnaps AI food scanner identify foods and estimate protein, carbs, fats, and calories instantly.",
  path: "/meal-scanner",
});

export const workoutNutritionMetadata = createProteinSnapsMetadata({
  title: "Workout Nutrition",
  description:
    "Connect workout tracking with nutrition in ProteinSnaps — fuel strength training, log gym sessions, and optimize recovery.",
  path: "/workout-nutrition",
});

export const blogMetadata = createProteinSnapsMetadata({
  title: "Blog",
  description:
    "ProteinSnaps blog — nutrition tips, fitness insights, and updates from the AI-powered meal tracking app.",
  path: "/blog",
});
