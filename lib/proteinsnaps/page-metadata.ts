import type { Metadata } from "next";
import { PROTEINSNAPS } from "./constants";

const OG = "/images/proteinsnaps/proteinsnaps-og.webp";

export function proteinSnapsPageMetadata({
  title,
  description,
  path,
  openGraphType = "website",
}: {
  title: string;
  description: string;
  path: string;
  openGraphType?: "website" | "article";
}): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${PROTEINSNAPS.domain}${canonicalPath === "/" ? "" : canonicalPath}`;
  const canonical =
    canonicalPath === "/" ? PROTEINSNAPS.domain : `${PROTEINSNAPS.domain}${canonicalPath}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url,
      siteName: PROTEINSNAPS.name,
      type: openGraphType,
      locale: "en_US",
      images: [
        {
          url: OG,
          width: 1200,
          height: 630,
          alt: `${PROTEINSNAPS.name}: AI-Powered Nutrition & Fitness`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG],
    },
    robots: { index: true, follow: true },
  };
}

export const PS_PAGE_SEO = {
  home: {
    title: "ProteinSnaps: AI Protein Tracker & Meal Photo Calorie App",
    description:
      "Snap a meal to see protein, calories and macros in seconds. Free AI nutrition and workout app for iPhone and Android.",
    path: "/",
  },
  features: {
    title: "ProteinSnaps Features: AI Meal Scan, Protein Ring & Coach",
    description:
      "Snap a Meal AI, Fill the Gap, AI Coach, protein ring, weekly summary, progress photos and workout logs. See everything ProteinSnaps does.",
    path: "/features",
  },
  howItWorks: {
    title: "How ProteinSnaps Works: Snap, Track, Hit Your Protein",
    description:
      "Take a photo, check the AI estimate, log it. See how ProteinSnaps tracks protein, macros and workouts in three simple steps.",
    path: "/how-it-works",
  },
  mealScanner: {
    title: "AI Meal Scanner: Calories & Protein from a Photo",
    description:
      "Point your camera at any meal and get an AI estimate of calories, protein, carbs and fat. Free on iPhone and Android with ProteinSnaps.",
    path: "/meal-scanner",
  },
  aiTracker: {
    title: "AI Protein Tracker App: Hit Your Daily Protein Goal",
    description:
      "A protein-first tracker app that logs meals from a photo and shows how much protein you have left today. Free for iPhone and Android.",
    path: "/ai-protein-tracker",
  },
  workoutNutrition: {
    title: "Workout Nutrition: Pre & Post-Workout Protein Guide",
    description:
      "What to eat before and after training, how much protein per meal, and how ProteinSnaps links your meals to your workouts.",
    path: "/workout-nutrition",
  },
  blog: {
    title: "ProteinSnaps Blog: Protein, Nutrition & Training Tips",
    description:
      "Practical guides on protein, high-protein meals, snacks, muscle building and AI food tracking. Science-based and easy to follow.",
    path: "/blog",
  },
} as const;
