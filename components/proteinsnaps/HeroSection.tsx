"use client";

import { HERO_SLIDES, PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StoreButtons } from "./StoreButtons";

const NAVBAR_HEIGHT = "4rem";

const DESKTOP_SLIDES = [
  {
    headline: "Track Protein. Snap Meals. Win.",
    description:
      "Snap meals, track protein and macros, get personalized AI coaching, and achieve your fitness goals — all in one intelligent app.",
    accentWords: ["Protein.", "Meals.", "Win."],
    name: "fadeUp",
    duration: 1.0,
    headlineClass: "font-sans font-bold",
    accentClass: "text-[#00E6A8]",
  },
  {
    headline: "AI Knows What You Eat.",
    description:
      "Point your camera at any meal and our AI instantly identifies foods, estimates portions, and calculates protein, carbs, fat and calories in seconds.",
    accentWords: ["AI", "Eat."],
    name: "blurReveal",
    duration: 1.1,
    headlineClass: "font-sans italic font-bold",
    accentClass: "text-[#00C2FF]",
  },
  {
    headline: "Hit Your Macros. Every Day.",
    description:
      "Protein-first dashboard with smart daily targets, Fill the Gap suggestions, and macro balance insights that keep you on track every single day.",
    accentWords: ["Macros.", "Every", "Day."],
    name: "stagger",
    duration: 1.2,
    headlineClass: "font-sans font-bold tracking-tight uppercase",
    accentClass: "text-white",
  },
  {
    headline: "Your AI Coach. Always On.",
    description:
      "Chat with your personal AI nutrition coach 24/7. Get weekly insights, goal-based guidance, and smarter recommendations tailored to your journey.",
    accentWords: ["AI", "Coach.", "Always"],
    name: "zoomIn",
    duration: 0.9,
    headlineClass: "font-sans font-light",
    accentClass: "ps-headline-gradient",
  },
  {
    headline: "Log Workouts. Break Records.",
    description:
      "Track sets, reps, weights and training volume. Monitor personal records, strength trends and weekly performance with your built-in plate calculator.",
    accentWords: ["Workouts.", "Records."],
    name: "sweepLeft",
    duration: 1.0,
    headlineClass: "font-sans font-bold uppercase tracking-wide",
    accentClass: "text-[#00E6A8]",
  },
  {
    headline: "See Your Progress. Stay Motivated.",
    description:
      "Log body measurements, capture progress photos, track weight changes and celebrate every milestone with detailed analytics and visual charts.",
    accentWords: ["Progress.", "Motivated."],
    name: "typewriter",
    duration: 1.2,
    headlineClass: "font-mono font-bold",
    accentClass: "text-[#00C2FF]",
  },
  {
    headline: "Snap. Track. Transform.",
    description:
      "From your first meal snap to your biggest personal record — ProteinSnaps keeps your nutrition and training in one place so you never lose momentum.",
    accentWords: ["Snap.", "Track.", "Transform."],
    name: "dropTop",
    duration: 1.0,
    headlineClass: "font-sans font-black",
    accentClass: "text-white ps-headline-glow",
  },
  {
    headline: "Nutrition Made Intelligent.",
    description:
      "Understand your eating patterns, protein trends and macro gaps with AI-powered smart insights that help you make better food choices every day.",
    accentWords: ["Intelligent."],
    name: "glitch",
    duration: 0.8,
    headlineClass: "font-sans font-bold",
    accentClass: "text-[#00E6A8]",
  },
  {
    headline: "Built for Athletes. Made for Everyone.",
    description:
      "Whether you are bulking, cutting, doing yoga, managing your diet or chasing a new PR — ProteinSnaps adapts to your goals and lifestyle.",
    accentWords: ["Athletes.", "Everyone."],
    name: "scaleSmall",
    duration: 1.0,
    headlineClass: "font-sans font-semibold",
    accentClass: "ps-headline-gradient-lr",
  },
  {
    headline: "Your Goals. Your Journey. Your App.",
    description:
      "Start free today. Snap your first meal, set your targets, and let ProteinSnaps guide you every step of the way to a healthier, stronger you.",
    accentWords: ["Goals.", "Journey.", "App."],
    name: "shimmer",
    duration: 1.2,
    headlineClass: "font-sans italic font-bold",
    accentClass: "text-[#FFD700] ps-headline-shimmer",
  },
] as const;

type DesktopSlide = (typeof DESKTOP_SLIDES)[number];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function HighlightedHeadline({
  slide,
  className,
}: {
  slide: {
    headline: string;
    accentWords: readonly string[];
    accentClass: string;
  };
  className?: string;
}) {
  const pattern = new RegExp(
    `(${slide.accentWords.map(escapeRegExp).join("|")})`,
    "g"
  );
  const parts = slide.headline.split(pattern).filter(Boolean);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        (slide.accentWords as readonly string[]).includes(part) ? (
          <span key={i} className={slide.accentClass}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

function TypewriterHeadline({
  slide,
  className,
}: {
  slide: DesktopSlide;
  className: string;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(slide.headline.slice(0, i));
      if (i >= slide.headline.length) clearInterval(interval);
    }, 38);
    return () => clearInterval(interval);
  }, [slide.headline]);

  const partialSlide = {
    headline: displayed,
    accentWords: slide.accentWords,
    accentClass: slide.accentClass,
  };

  return (
    <span className={`${className} ${slide.headlineClass}`}>
      <HighlightedHeadline slide={partialSlide} />
    </span>
  );
}

function StaggerHeadline({
  slide,
  className,
}: {
  slide: DesktopSlide;
  className: string;
}) {
  const words = slide.headline.split(" ");

  return (
    <motion.span
      className={`${className} ${slide.headlineClass}`}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
          }}
          className={`inline-block ${i < words.length - 1 ? "mr-[0.28em]" : ""}`}
        >
          {(slide.accentWords as readonly string[]).includes(word) ? (
            <span className={slide.accentClass}>{word}</span>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </motion.span>
  );
}

function GlitchHeadline({
  slide,
  className,
}: {
  slide: DesktopSlide;
  className: string;
}) {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    setSettled(false);
    const timer = setTimeout(() => setSettled(true), 480);
    return () => clearTimeout(timer);
  }, [slide.headline]);

  if (settled) {
    return (
      <span className={`${className} ${slide.headlineClass}`}>
        <HighlightedHeadline slide={slide} />
      </span>
    );
  }

  return (
    <motion.span
      className={`${className} ${slide.headlineClass}`}
      animate={{
        color: ["#00C2FF", "#00E6A8", "#FFFFFF", "#00C2FF", "#00E6A8", "#FFFFFF"],
        x: [0, -2, 2, -1, 1, 0],
      }}
      transition={{ duration: 0.48, ease: "linear" }}
    >
      {slide.headline}
    </motion.span>
  );
}

function AnimatedHeadline({
  slideIndex,
  className,
}: {
  slideIndex: number;
  className: string;
}) {
  const slide = DESKTOP_SLIDES[slideIndex];

  switch (slide.name) {
    case "fadeUp":
      return (
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: slide.duration, ease: [0.22, 1, 0.36, 1] }}
          className={`${className} ${slide.headlineClass}`}
        >
          <HighlightedHeadline slide={slide} />
        </motion.h1>
      );
    case "blurReveal":
      return (
        <motion.h1
          initial={{ opacity: 0, filter: "blur(14px)", y: 6 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: slide.duration, ease: [0.22, 1, 0.36, 1] }}
          className={`${className} ${slide.headlineClass}`}
        >
          <HighlightedHeadline slide={slide} />
        </motion.h1>
      );
    case "stagger":
      return (
        <h1 className={className}>
          <StaggerHeadline slide={slide} className="" />
        </h1>
      );
    case "zoomIn":
      return (
        <motion.h1
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: slide.duration, ease: [0.22, 1, 0.36, 1] }}
          className={`${className} ${slide.headlineClass}`}
        >
          <HighlightedHeadline slide={slide} />
        </motion.h1>
      );
    case "sweepLeft":
      return (
        <motion.h1
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: slide.duration, ease: [0.22, 1, 0.36, 1] }}
          className={`${className} ${slide.headlineClass}`}
        >
          <HighlightedHeadline slide={slide} />
        </motion.h1>
      );
    case "typewriter":
      return (
        <h1 className={className}>
          <TypewriterHeadline slide={slide} className="" />
        </h1>
      );
    case "dropTop":
      return (
        <motion.h1
          initial={{ opacity: 0, y: -36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: slide.duration, ease: [0.22, 1, 0.36, 1] }}
          className={`${className} ${slide.headlineClass}`}
        >
          <HighlightedHeadline slide={slide} />
        </motion.h1>
      );
    case "glitch":
      return (
        <h1 className={`${className} ${slide.headlineClass}`}>
          <GlitchHeadline slide={slide} className="" />
        </h1>
      );
    case "scaleSmall":
      return (
        <motion.h1
          initial={{ opacity: 0, scale: 0.55 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: slide.duration, ease: [0.22, 1, 0.36, 1] }}
          className={`${className} ${slide.headlineClass}`}
        >
          <HighlightedHeadline slide={slide} />
        </motion.h1>
      );
    case "shimmer":
      return (
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: slide.duration, ease: [0.22, 1, 0.36, 1] }}
          className={`${className} ${slide.headlineClass}`}
        >
          <HighlightedHeadline slide={slide} />
        </motion.h1>
      );
    default:
      return null;
  }
}

function DesktopAmbientGlow() {
  return (
    <div
      className="pointer-events-none absolute left-0 top-1/2 z-[2] hidden h-full w-[min(520px,55%)] -translate-y-1/2 lg:block"
      aria-hidden="true"
    >
      <motion.div
        className="absolute left-[10%] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full blur-[100px]"
        animate={{
          opacity: [0.35, 0.5, 0.42, 0.35],
          scale: [1, 1.1, 1.05, 1],
          background: [
            "radial-gradient(circle, rgba(123,47,255,0.55) 0%, rgba(123,47,255,0.15) 45%, transparent 70%)",
            "radial-gradient(circle, rgba(0,194,255,0.5) 0%, rgba(0,194,255,0.12) 45%, transparent 70%)",
            "radial-gradient(circle, rgba(0,230,168,0.48) 0%, rgba(0,230,168,0.1) 45%, transparent 70%)",
            "radial-gradient(circle, rgba(123,47,255,0.55) 0%, rgba(123,47,255,0.15) 45%, transparent 70%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[18%] top-[42%] h-[280px] w-[280px] -translate-y-1/2 rounded-full blur-[90px]"
        animate={{
          opacity: [0.25, 0.4, 0.3, 0.25],
          scale: [1.05, 0.95, 1.08, 1.05],
          background: [
            "radial-gradient(circle, rgba(0,194,255,0.45) 0%, transparent 65%)",
            "radial-gradient(circle, rgba(0,230,168,0.4) 0%, transparent 65%)",
            "radial-gradient(circle, rgba(123,47,255,0.42) 0%, transparent 65%)",
            "radial-gradient(circle, rgba(0,194,255,0.45) 0%, transparent 65%)",
          ],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </div>
  );
}

function DesktopHeroTextBlock({ slideIndex }: { slideIndex: number }) {
  const slide = DESKTOP_SLIDES[slideIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="relative z-10 max-w-[380px] text-left"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="ps-hero-desktop-label font-bold uppercase text-[#00E6A8]"
      >
        {PROTEINSNAPS.name}
      </motion.p>

      <AnimatedHeadline slideIndex={slideIndex} className="ps-hero-desktop-h1 mt-2 text-white" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="ps-hero-desktop-sub mt-3 text-white/80"
      >
        {slide.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.25 }}
        className="mt-4"
      >
        <StoreButtons
          size="lg"
          variant="hero"
          className="ps-hero-desktop-store lg:[&>div:first-child]:!flex-row lg:[&>div:first-child]:!flex-wrap lg:[&>div:first-child]:!items-center lg:[&>div:first-child]:!gap-2 lg:[&>div:first-child]:!justify-start lg:[&>div:last-child]:!mt-3 lg:[&>div:last-child_p]:ps-hero-desktop-scan lg:[&>div:last-child>div]:!p-1.5 lg:[&>div:last-child_svg]:!h-[80px] lg:[&>div:last-child_svg]:!w-[80px]"
        />
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative mt-16 w-full max-w-[100vw] overflow-hidden"
      style={{ height: `calc(100vh - ${NAVBAR_HEIGHT})` }}
    >
      {/* Desktop-only styles — mobile handled separately */}
      <style>{`
        @media (min-width: 1024px) {
          .ps-hero-desktop-label {
            font-size: 0.75rem !important;
            letter-spacing: 0.25em !important;
          }
          .ps-hero-desktop-h1 {
            font-size: 2rem !important;
            line-height: 1.2 !important;
            max-width: 380px !important;
          }
          .ps-hero-desktop-sub {
            font-size: 0.8rem !important;
            line-height: 1.55 !important;
            max-width: 380px !important;
          }
          .ps-hero-desktop-store a,
          .ps-hero-desktop-store span[aria-disabled="true"] {
            width: auto !important;
            height: 2.25rem !important;
            min-height: 2.25rem !important;
            max-height: 2.25rem !important;
            padding: 0 1rem !important;
            font-size: 0.8rem !important;
            border-radius: 9999px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            line-height: 1 !important;
          }
          .ps-hero-desktop-scan {
            font-size: 0.7rem !important;
            margin-bottom: 0.375rem !important;
          }
          .ps-headline-gradient {
            background: linear-gradient(135deg, #00e6a8, #00c2ff);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .ps-headline-gradient-lr {
            background: linear-gradient(90deg, #00e6a8, #00c2ff);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .ps-headline-glow {
            text-shadow: 0 0 18px rgba(0, 230, 168, 0.55), 0 0 32px rgba(0, 230, 168, 0.25);
          }
          .ps-headline-shimmer {
            position: relative;
          }
          .ps-headline-shimmer::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
              105deg,
              transparent 35%,
              rgba(255, 215, 0, 0.35) 50%,
              transparent 65%
            );
            animation: ps-shimmer 1.2s ease-out forwards;
            pointer-events: none;
          }
          @keyframes ps-shimmer {
            0% { transform: translateX(-120%); opacity: 0; }
            30% { opacity: 1; }
            100% { transform: translateX(120%); opacity: 0; }
          }
        }
      `}</style>

      {/* Background slides */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#050811]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[index].src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center lg:object-contain lg:object-right"
              aria-hidden
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#050811]/80 via-[#050811]/35 via-[28%] to-transparent to-[52%] lg:from-[#050811]/70 lg:via-[#050811]/25 lg:via-[22%] lg:to-transparent lg:to-[45%]"
        aria-hidden="true"
      />

      <DesktopAmbientGlow />

      <div className="relative z-10 flex h-full w-full items-center overflow-hidden px-4 py-6 sm:px-6 lg:items-center lg:px-0 lg:py-8">
        <div className="mx-auto w-full max-w-7xl lg:mx-0 lg:max-w-none lg:pl-[60px]">
          {/* Mobile/tablet — unchanged */}
          <div className="max-w-lg lg:hidden">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-bold uppercase tracking-[0.25em] text-[#00E6A8]"
            >
              {PROTEINSNAPS.name}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 text-left font-sans text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:mt-3 sm:text-4xl md:text-5xl"
            >
              Track{" "}
              <span className="text-[#00E6A8]">Protein.</span> Snap{" "}
              <span className="text-[#00E6A8]">Meals.</span>{" "}
              <span className="text-[#00E6A8]">Win.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-md text-left text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base sm:leading-[1.7]"
            >
              {PROTEINSNAPS.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-left sm:mt-7"
            >
              <StoreButtons size="lg" variant="hero" />
            </motion.div>
          </div>

          {/* Desktop only — per-slide text animations */}
          <div className="relative hidden lg:block">
            <AnimatePresence mode="wait">
              <DesktopHeroTextBlock key={index} slideIndex={index} />
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-6">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-7 bg-[#00E6A8] shadow-[0_0_12px_rgba(0,230,168,0.6)]"
                : "w-1.5 bg-white/35 hover:bg-white/55"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
