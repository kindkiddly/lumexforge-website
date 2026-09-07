export const PROTEINSNAPS = {
  name: "ProteinSnaps",
  tagline: "AI-Powered Nutrition & Fitness",
  description:
    "Snap meals, track protein and macros, get personalized AI coaching, and achieve your fitness goals — all in one intelligent app.",
  domain: "https://proteinsnaps.lumexforge.com",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.proteinsnap.app&pcampaignid=web_share",
  lumexforgeUrl: "https://www.lumexforge.com",
  privacyUrl: "https://www.lumexforge.com/proteinsnap-privacy",
  termsUrl: "https://www.lumexforge.com/proteinsnap-terms",
  deletionUrl: "https://www.lumexforge.com/proteinsnap-deletion",
} as const;

export const PROTEINSNAPS_NAV = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "AI Tracker", href: "/ai-protein-tracker" },
  { label: "Meal Scanner", href: "/meal-scanner" },
  { label: "Workout", href: "/workout-nutrition" },
  { label: "Blog", href: "/blog" },
] as const;

export const HERO_SLIDES = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/proteinsnaps/PSL-${i + 1}.webp`,
  alt: `ProteinSnaps app showcase slide ${i + 1}`,
}));

export const SCREENSHOT_SLIDES = [
  {
    src: "/images/proteinsnaps/PS-1.webp",
    feature: "AI Meal Recognition",
    description:
      "Point your camera at any meal and let AI instantly identify foods and estimate nutrition.",
    highlights: [
      "Photo-based food detection",
      "Automatic macro estimation",
      "Multi-item meal support",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-2.webp",
    feature: "Protein & Macro Tracking",
    description:
      "Track protein, carbs, fats, and calories with a clear daily dashboard built for results.",
    highlights: [
      "Daily macro rings",
      "Protein-first tracking",
      "Custom calorie goals",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-3.webp",
    feature: "Personalized AI Coach",
    description:
      "Get tailored coaching based on your goals, progress, and nutrition patterns.",
    highlights: [
      "Goal-aware guidance",
      "Smart recommendations",
      "Adaptive coaching",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-4.webp",
    feature: "Workout Tracking",
    description:
      "Log workouts, monitor training volume, and connect nutrition to performance.",
    highlights: [
      "Exercise logging",
      "Session history",
      "Training consistency",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-5.webp",
    feature: "Gym & Strength Training",
    description:
      "Built for lifters — track strength sessions and fuel your training with precision.",
    highlights: [
      "Strength-focused logging",
      "Workout nutrition sync",
      "Performance tracking",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-6.webp",
    feature: "Body Progress & Measurements",
    description:
      "Record body measurements and visualize changes over time with structured tracking.",
    highlights: [
      "Measurement logs",
      "Trend visualization",
      "Progress milestones",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-7.webp",
    feature: "Progress Photos",
    description:
      "Capture and compare progress photos to see real transformation over weeks and months.",
    highlights: [
      "Side-by-side comparisons",
      "Private photo storage",
      "Visual progress timeline",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-8.webp",
    feature: "Daily Briefings",
    description:
      "Start each day with a personalized nutrition briefing tailored to your goals.",
    highlights: [
      "Daily summary insights",
      "Goal progress updates",
      "Actionable tips",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-9.webp",
    feature: "Smart Nutrition Insights",
    description:
      "Discover patterns in your eating habits with intelligent analysis and suggestions.",
    highlights: [
      "Trend detection",
      "Nutrition gap alerts",
      "Weekly insights",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-10.webp",
    feature: "Fill the Gap",
    description:
      "Know exactly what to eat next to hit your remaining protein and macro targets.",
    highlights: [
      "Remaining macro calculator",
      "Smart food suggestions",
      "End-of-day optimization",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-11.webp",
    feature: "Morning Briefing & Plate Calculator",
    description:
      "Wake up to your daily plan and use the plate calculator to portion meals perfectly.",
    highlights: [
      "Morning goal overview",
      "Plate portion tool",
      "Meal planning assist",
    ],
  },
] as const;

export const FEATURE_CARDS = [
  {
    icon: "camera",
    title: "AI Meal Recognition",
    description:
      "Snap a photo and let AI identify foods and estimate macros in seconds.",
  },
  {
    icon: "chart",
    title: "Protein & Nutrition Tracking",
    description:
      "Track protein, carbs, fats, and calories with a clean daily dashboard.",
  },
  {
    icon: "coach",
    title: "Personalized AI Coach",
    description:
      "Receive coaching tailored to your goals, habits, and progress.",
  },
  {
    icon: "dumbbell",
    title: "Workout Tracking",
    description:
      "Log workouts and connect your training with nutrition performance.",
  },
  {
    icon: "gym",
    title: "Gym & Strength Training",
    description:
      "Built for strength athletes with focused workout and nutrition tools.",
  },
  {
    icon: "measure",
    title: "Body Progress & Measurements",
    description:
      "Track measurements and visualize body composition changes over time.",
  },
  {
    icon: "photo",
    title: "Progress Photos",
    description:
      "Capture and compare transformation photos in a private timeline.",
  },
  {
    icon: "briefing",
    title: "Daily Briefings",
    description:
      "Get a personalized daily nutrition summary to stay on track.",
  },
  {
    icon: "insights",
    title: "Smart Nutrition Insights",
    description:
      "Discover eating patterns and receive intelligent recommendations.",
  },
  {
    icon: "gap",
    title: "Fill the Gap",
    description:
      "See exactly what to eat to hit your remaining macro targets.",
  },
  {
    icon: "morning",
    title: "Morning Briefing",
    description:
      "Start your day with a clear overview of goals and priorities.",
  },
  {
    icon: "plate",
    title: "Plate Calculator",
    description:
      "Portion your meals perfectly with an intelligent plate calculator.",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Snap Your Meal",
    description:
      "Take a photo of your food or log manually. AI recognizes items and estimates nutrition instantly.",
  },
  {
    step: 2,
    title: "Track Your Macros",
    description:
      "Monitor protein, carbs, fats, and calories with real-time dashboards and smart insights.",
  },
  {
    step: 3,
    title: "Achieve Your Goals",
    description:
      "Follow personalized AI coaching, track workouts, and watch your progress compound over time.",
  },
] as const;

export const AI_FEATURES = [
  {
    title: "AI Coach",
    description:
      "Personalized guidance based on your goals, nutrition history, and training patterns.",
  },
  {
    title: "AI Meal Recognition",
    description:
      "Advanced computer vision identifies foods from photos and estimates macros automatically.",
  },
  {
    title: "Smart Insights",
    description:
      "Intelligent analysis of your eating habits with actionable recommendations every day.",
  },
] as const;

export const SEO_KEYWORDS = [
  "AI meal tracker",
  "protein tracker app",
  "fitness nutrition app",
  "macro tracking",
  "AI food scanner",
  "ProteinSnaps",
  "nutrition app",
  "meal tracking",
  "AI coach fitness",
] as const;
