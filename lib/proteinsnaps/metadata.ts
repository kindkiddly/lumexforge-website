import type { Metadata } from "next";
import { PROTEINSNAPS, SEO_KEYWORDS } from "./constants";

const OG_IMAGE = `${PROTEINSNAPS.lumexforgeUrl}/images/proteinsnaps/proteinsnaps-og.webp`;
const PAGE_TITLE = "ProteinSnaps — AI Fitness & Nutrition App";
const PAGE_DESCRIPTION =
  "AI-powered nutrition and gym app. Snap meals, track macros, log workouts and get personalized AI coaching for iOS and Android.";

function createProteinSnapsMetadata({ path = "" }: { path?: string }): Metadata {
  const url = `${PROTEINSNAPS.domain}${path}`;

  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [...SEO_KEYWORDS],
    alternates: { canonical: url },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
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
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

export const homeMetadata = createProteinSnapsMetadata({ path: "/" });

export const featuresMetadata = createProteinSnapsMetadata({ path: "/features" });

export const howItWorksMetadata = createProteinSnapsMetadata({
  path: "/how-it-works",
});

export const aiTrackerMetadata = createProteinSnapsMetadata({
  path: "/ai-protein-tracker",
});

export const mealScannerMetadata = createProteinSnapsMetadata({
  path: "/meal-scanner",
});

export const workoutNutritionMetadata = createProteinSnapsMetadata({
  path: "/workout-nutrition",
});

export const blogMetadata = createProteinSnapsMetadata({ path: "/blog" });
