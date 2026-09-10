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

export const DESKTOP_SLIDES = [
  {
    headline: "Your All-in-One Fitness Partner.",
    description:
      "Track meals, workouts, protein and progress in one intelligent app built around your goals.",
    accentWords: ["Meals,", "Stay", "Goal."],
    name: "fadeUp",
    duration: 1.0,
    headlineClass: "font-sans font-extrabold not-italic",
    accentClass: "text-[#00E6A8]",
  },
  {
    headline: "Track Your Meals, Stay on Goal.",
    description:
      "Log every meal, see your 30-day nutrition history and stay consistent with your daily targets.",
    accentWords: ["Stronger", "Every", "Day."],
    name: "blurReveal",
    duration: 1.1,
    headlineClass: "font-sans font-black uppercase",
    accentClass: "text-white",
  },
  {
    headline: "Stronger Every Day.",
    description:
      "Log your workouts, track every set and rep, and build real strength with smart training guidance.",
    accentWords: ["AI", "Coach.", "Side."],
    name: "stagger",
    duration: 1.2,
    headlineClass: "font-serif font-light italic",
    accentClass: "text-[#00C2FF]",
  },
  {
    headline: "Your AI Coach. Always By Your Side.",
    description:
      "Get real-time nutrition and fitness guidance from your personal AI coach — smarter plans, better results.",
    accentWords: ["Mile", "Stronger", "You."],
    name: "zoomIn",
    duration: 0.9,
    headlineClass: "font-sans font-black tracking-tighter",
    accentClass: "text-[#00E6A8]",
  },
  {
    headline: "Every Mile Builds a Stronger You.",
    description:
      "Track your runs, monitor distance, pace and calories — and let AI coach you to your next personal best.",
    accentWords: ["Snap", "Track", "Achieve"],
    name: "sweepLeft",
    duration: 1.0,
    headlineClass: "font-sans font-extrabold uppercase tracking-widest",
    accentClass: "text-[#00C2FF]",
  },
  {
    headline: "Snap It. Track It. Achieve It.",
    description:
      "Point your camera at any meal and get instant nutrition analysis — calories, protein, carbs and fat in seconds.",
    accentWords: ["All-in-One", "Fitness", "Partner."],
    name: "typewriter",
    duration: 1.2,
    headlineClass: "font-mono font-normal not-italic",
    accentClass: "text-white",
  },
  {
    headline: "Finish Strong. Recover Smarter.",
    description:
      "End every day knowing you hit your goals. Track protein, hydration, workout completion and recovery in one summary.",
    accentWords: ["Strong.", "Smarter."],
    name: "dropTop",
    duration: 1.0,
    headlineClass: "font-serif font-bold italic",
    accentClass: "text-[#00E6A8]",
  },
  {
    headline: "Real Food. Real Progress. That's ProteinSnaps.",
    description:
      "From your first meal log to your biggest fitness milestone — ProteinSnaps is your personal nutrition coach and fitness buddy.",
    accentWords: ["Food.", "Progress.", "ProteinSnaps."],
    name: "glitch",
    duration: 0.8,
    headlineClass: "font-sans font-black italic",
    accentClass: "ps-headline-gradient",
  },
  {
    headline: "Real Progress. Real You.",
    description:
      "See your body transform over time. Track weight, body fat and measurements with side-by-side progress comparison.",
    accentWords: ["Progress.", "You."],
    name: "scaleSmall",
    duration: 1.0,
    headlineClass: "font-sans font-semibold not-italic",
    accentClass: "text-[#00C2FF]",
  },
  {
    headline: "Fuel Your Stronger You.",
    description:
      "Personalized nutrition, smart workouts and AI insights — all working together to help you become your strongest self.",
    accentWords: ["Fuel", "Stronger", "You."],
    name: "shimmer",
    duration: 1.2,
    headlineClass: "font-sans font-black italic",
    accentClass: "text-[#FFD700] ps-headline-shimmer",
  },
] as const;

export const SCREENSHOT_SLIDES = [
  {
    src: "/images/proteinsnaps/PS-1.webp",
    feature: "Your All-in-One Fitness Partner",
    description:
      "Everything you need to eat smarter, train harder and see real results — all in a single app built around your goals.",
    highlights: [
      "Nutrition, workouts and coaching in one place",
      "Personalized daily plan built around your goals",
      "Smart insights that adapt as you improve",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-2.webp",
    feature: "Workout Logging & Strength Tracking",
    description:
      "Log every exercise with precision. Track volume, beat your last session and watch your strength climb week over week.",
    highlights: [
      "Rest timer keeps your sessions sharp and focused",
      "Set history shows your best lifts at a glance",
      "Save workouts as templates for faster logging",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-3.webp",
    feature: "AI Meal Recognition",
    description:
      "Point your camera at any meal and get a full nutrition breakdown in seconds — no barcodes, no manual entry needed.",
    highlights: [
      "Identifies ingredients and portions automatically",
      "98% confidence meal analysis with every snap",
      "Your data stays private and secure on-device",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-4.webp",
    feature: "Personalized AI Coach",
    description:
      "Your coach analyzes your nutrition, workouts and habits daily — then gives you prioritized actions to close the gap.",
    highlights: [
      "High, medium and info priority insights daily",
      "Chat with your AI coach anytime for guidance",
      "Recommendations adjust as your data changes",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-5.webp",
    feature: "Progress Analytics & Streaks",
    description:
      "See exactly how your habits are shifting over time. Protein trends, weight changes and consistency streaks — all in one view.",
    highlights: [
      "4-week protein goal chart shows your trajectory",
      "Achievements unlock as you hit real milestones",
      "Goal accuracy score keeps you honest and motivated",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-6.webp",
    feature: "Body Transformation Tracking",
    description:
      "Compare your before and after side by side. Quantified results — weight lost, body fat reduced, muscle gained.",
    highlights: [
      "Date-stamped photo pairs for clear comparison",
      "Three key metrics tracked: weight, fat, muscle",
      "Visual proof of what consistency actually builds",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-7.webp",
    feature: "Complete Fitness Dashboard",
    description:
      "Your daily overview — meals logged, workouts done, water tracked and AI coaching — all visible the moment you open the app.",
    highlights: [
      "Morning briefing sets your focus for the day",
      "Today's plan shows meals and workouts at a glance",
      "Weekly progress summary updated in real time",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-8.webp",
    feature: "Goal-Based Daily Tracking",
    description:
      "Stay on top of nutrition, hydration, workouts and calories with a live progress ring that tells you exactly where you stand.",
    highlights: [
      "92% daily goal completion tracked in real time",
      "Nutrition and workout goals shown side by side",
      "AI coach praises progress and flags what to fix",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-9.webp",
    feature: "Hydration Tracking",
    description:
      "Log every sip and hit your daily water target. See your 7-day hydration trend and stay consistently on track.",
    highlights: [
      "Quick-add buttons for 250ml, 500ml and 1L",
      "Daily goal percentage updates with every log",
      "7-day bar chart reveals your hydration patterns",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-10.webp",
    feature: "Body Measurements",
    description:
      "Track shoulders, chest, waist, hips, arms and thighs over time. Real numbers that show your body actually changing.",
    highlights: [
      "Full body map with measurements per zone",
      "Progress delta shown against your last check-in",
      "History view reveals long-term shape changes",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-11.webp",
    feature: "Training Progress Hub",
    description:
      "Your full training picture in one screen — weekly volume, workout streak, last session stats and body check-in photos.",
    highlights: [
      "Total volume and streak tracked this week",
      "Last workout summary with vs-average comparison",
      "Body check-in photos linked directly to training dates",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-12.webp",
    feature: "Live Workout Session",
    description:
      "Track your workout in real time — exercises ticked off, time elapsed and reps logged as you push through every set.",
    highlights: [
      "Live session timer keeps your pace consistent",
      "Exercises checked off as you complete each set",
      "End workout saves everything automatically",
    ],
  },
  {
    src: "/images/proteinsnaps/PS-13.webp",
    feature: "Meal History & Nutrition Log",
    description:
      "Your full 30-day nutrition history in one place — average protein, calories logged, active days and weekly macro trends.",
    highlights: [
      "30-day protein average tracked against your goal",
      "Every meal logged with calories and macros shown",
      "Weekly summary exportable as CSV anytime",
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
