"use client";

import {
  DESKTOP_SLIDES,
  HERO_SLIDES,
  PROTEINSNAPS,
} from "@/lib/proteinsnaps/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import QRCode from "react-qr-code";
import { StoreButtons } from "./StoreButtons";

const NAVBAR_HEIGHT = "4rem";
/** Navbar inner row is h-16 (64px); header also has border-b (+1px). */
const NAVBAR_OFFSET_PX = 65;
const getSlideDelay = (index: number) => (index < 3 ? 4500 : 5000);
const RESUME_AFTER_MS = 5000;
const DRAG_THRESHOLD_PX = 50;
const PSL_9_INDEX = 8;

function getAdjacentSlideIndices(current: number, length: number) {
  const prev = (current - 1 + length) % length;
  const next = (current + 1) % length;
  return new Set([prev, current, next]);
}

const DESKTOP_IMAGE_GLOW =
  "inset 0 0 72px 14px rgba(0, 194, 255, 0.30), inset 0 0 144px 29px rgba(123, 47, 255, 0.18)";
const LABEL_DELAY = 0;
const HEADLINE_DELAY = 0.1;
const DESCRIPTION_DELAY = 0.3;
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.proteinsnap.app&pcampaignid=web_share";
const IOS_PLACEHOLDER_URL = "https://apps.apple.com/proteinsnaps";

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
  delay,
}: {
  slide: DesktopSlide;
  className: string;
  delay: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setStarted(false);
    const startTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimer);
  }, [slide.headline, delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(slide.headline.slice(0, i));
      if (i >= slide.headline.length) clearInterval(interval);
    }, 38);
    return () => clearInterval(interval);
  }, [slide.headline, started]);

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
  delay,
}: {
  slide: DesktopSlide;
  className: string;
  delay: number;
}) {
  const words = slide.headline.split(" ");

  return (
    <motion.span
      className={`${className} ${slide.headlineClass}`}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: delay } } }}
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
  delay,
}: {
  slide: DesktopSlide;
  className: string;
  delay: number;
}) {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    setSettled(false);
    const timer = setTimeout(() => setSettled(true), delay * 1000 + 480);
    return () => clearTimeout(timer);
  }, [slide.headline, delay]);

  if (!settled) {
    return (
      <motion.span
        className={`${className} ${slide.headlineClass}`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          color: ["#00C2FF", "#00E6A8", "#FFFFFF", "#00C2FF", "#00E6A8", "#FFFFFF"],
          x: [0, -2, 2, -1, 1, 0],
        }}
        transition={{ duration: 0.48, delay, ease: "linear" }}
      >
        {slide.headline}
      </motion.span>
    );
  }

  return (
    <span className={`${className} ${slide.headlineClass}`}>
      <HighlightedHeadline slide={slide} />
    </span>
  );
}

function AnimatedHeadline({
  slideIndex,
  className,
  delay,
}: {
  slideIndex: number;
  className: string;
  delay: number;
}) {
  const slide = DESKTOP_SLIDES[slideIndex];
  const ease = [0.22, 1, 0.36, 1] as const;

  switch (slide.name) {
    case "fadeUp":
      return (
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: slide.duration, delay, ease }}
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
          transition={{ duration: slide.duration, delay, ease }}
          className={`${className} ${slide.headlineClass}`}
        >
          <HighlightedHeadline slide={slide} />
        </motion.h1>
      );
    case "stagger":
      return (
        <h1 className={className}>
          <StaggerHeadline slide={slide} className="" delay={delay} />
        </h1>
      );
    case "zoomIn":
      return (
        <motion.h1
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: slide.duration, delay, ease }}
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
          transition={{ duration: slide.duration, delay, ease }}
          className={`${className} ${slide.headlineClass}`}
        >
          <HighlightedHeadline slide={slide} />
        </motion.h1>
      );
    case "typewriter":
      return (
        <h1 className={className}>
          <TypewriterHeadline slide={slide} className="" delay={delay} />
        </h1>
      );
    case "dropTop":
      return (
        <motion.h1
          initial={{ opacity: 0, y: -36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: slide.duration, delay, ease }}
          className={`${className} ${slide.headlineClass}`}
        >
          <HighlightedHeadline slide={slide} />
        </motion.h1>
      );
    case "glitch":
      return (
        <h1 className={`${className} ${slide.headlineClass}`}>
          <GlitchHeadline slide={slide} className="" delay={delay} />
        </h1>
      );
    case "scaleSmall":
      return (
        <motion.h1
          initial={{ opacity: 0, scale: 0.55 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: slide.duration, delay, ease }}
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
          transition={{ duration: slide.duration, delay, ease }}
          className={`${className} ${slide.headlineClass}`}
        >
          <HighlightedHeadline slide={slide} />
        </motion.h1>
      );
    default:
      return null;
  }
}

function DesktopAmbientGlow({ isTabVisible }: { isTabVisible: boolean }) {
  return (
    <>
      <motion.div
        className="absolute left-[6%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full blur-[120px]"
        animate={
          isTabVisible
            ? {
                opacity: [0.18, 0.28, 0.22, 0.18],
                scale: [1, 1.08, 1.04, 1],
                background: [
                  "radial-gradient(circle, rgba(74,0,224,0.42) 0%, rgba(123,47,255,0.18) 40%, transparent 72%)",
                  "radial-gradient(circle, rgba(123,47,255,0.38) 0%, rgba(74,0,224,0.16) 42%, transparent 74%)",
                  "radial-gradient(circle, rgba(74,0,224,0.4) 0%, rgba(123,47,255,0.17) 41%, transparent 73%)",
                  "radial-gradient(circle, rgba(74,0,224,0.42) 0%, rgba(123,47,255,0.18) 40%, transparent 72%)",
                ],
              }
            : false
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[14%] top-[44%] h-[320px] w-[320px] -translate-y-1/2 rounded-full blur-[110px]"
        animate={
          isTabVisible
            ? {
                opacity: [0.14, 0.24, 0.18, 0.14],
                scale: [1.04, 0.96, 1.06, 1.04],
                background: [
                  "radial-gradient(circle, rgba(27,15,219,0.38) 0%, rgba(0,194,255,0.14) 45%, transparent 70%)",
                  "radial-gradient(circle, rgba(0,194,255,0.32) 0%, rgba(27,15,219,0.12) 48%, transparent 72%)",
                  "radial-gradient(circle, rgba(27,15,219,0.36) 0%, rgba(0,194,255,0.13) 46%, transparent 71%)",
                  "radial-gradient(circle, rgba(27,15,219,0.38) 0%, rgba(0,194,255,0.14) 45%, transparent 70%)",
                ],
              }
            : false
        }
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </>
  );
}

function DesktopImageBleedGlow({ isTabVisible }: { isTabVisible: boolean }) {
  return (
    <motion.div
      className="absolute inset-0"
      aria-hidden="true"
      animate={isTabVisible ? { opacity: [0.45, 0.72, 0.58, 0.45] } : false}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-y-0 right-0 w-[62%] blur-[100px]"
        animate={isTabVisible ? { opacity: [0.5, 0.75, 0.6, 0.5] } : false}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,194,255,0.18) 0%, rgba(27,15,219,0.12) 40%, rgba(123,47,255,0.08) 65%, transparent 85%)",
        }}
      />
      <motion.div
        className="absolute left-[12%] top-1/2 h-[80%] w-[42%] -translate-y-1/2 blur-[110px]"
        animate={
          isTabVisible
            ? {
                opacity: [0.3, 0.5, 0.38, 0.3],
                scale: [1, 1.06, 1.03, 1],
              }
            : false
        }
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        style={{
          background:
            "radial-gradient(ellipse at right center, rgba(0,194,255,0.22) 0%, rgba(27,15,219,0.16) 35%, rgba(123,47,255,0.1) 60%, transparent 82%)",
        }}
      />
    </motion.div>
  );
}

function DesktopHeroStorePanel() {
  return (
    <div className="ps-hero-desktop-store">
      <div className="flex items-start gap-5">
        <div className="flex flex-col items-center">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ps-hero-desktop-btn ps-hero-desktop-play inline-flex w-[11.5rem] items-center justify-center gap-1.5 rounded-full text-[#00E6A8]"
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 01-.61-.92V2.734a1.006 1.006 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.002 1.002 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
            </svg>
            Get it on Google Play
          </a>
          <div className="ps-hero-qr-android mt-3 rounded bg-white p-1">
            <QRCode
              value={PLAY_STORE_URL}
              size={80}
              bgColor="#ffffff"
              fgColor="#050811"
              level="M"
            />
          </div>
          <p className="ps-hero-desktop-scan mt-1.5 text-center text-white/55">Scan for Android</p>
        </div>

        <div className="flex flex-col items-center">
          <span
            aria-disabled="true"
            className="ps-hero-desktop-btn ps-hero-desktop-appstore inline-flex w-[11.5rem] cursor-not-allowed items-center justify-center gap-1.5 rounded-full text-white/45"
          >
            <svg className="h-4 w-4 shrink-0 opacity-60" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store — Coming Soon
          </span>
          <div className="ps-hero-qr-ios mt-3 rounded bg-white p-1 opacity-40">
            <QRCode
              value={IOS_PLACEHOLDER_URL}
              size={80}
              bgColor="#ffffff"
              fgColor="#050811"
              level="M"
            />
          </div>
          <p className="ps-hero-desktop-scan mt-1.5 text-center text-white/40">Coming Soon — iOS</p>
        </div>
      </div>
    </div>
  );
}

function HeroChevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
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
      className="relative max-w-[380px] text-left"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: LABEL_DELAY }}
        className="ps-hero-desktop-label"
      >
        <span className="text-white">Protein</span>
        <span className="text-[#00E6A8]">Snaps</span>
      </motion.p>

      <AnimatedHeadline
        slideIndex={slideIndex}
        className="ps-hero-desktop-h1 mt-2 text-white"
        delay={HEADLINE_DELAY}
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: DESCRIPTION_DELAY }}
        className="ps-hero-desktop-sub mt-3 text-white/80"
      >
        {slide.description}
      </motion.p>
    </motion.div>
  );
}

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragStartX = useRef<number | null>(null);
  const indexRef = useRef(index);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const clearAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  const clearResume = useCallback(() => {
    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
      resumeRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    clearAutoPlay();

    const scheduleNext = () => {
      autoPlayRef.current = setTimeout(() => {
        const next = (indexRef.current + 1) % HERO_SLIDES.length;
        indexRef.current = next;
        setIndex(next);
        scheduleNext();
      }, getSlideDelay(indexRef.current));
    };

    scheduleNext();
  }, [clearAutoPlay]);

  const pauseAutoPlay = useCallback(() => {
    clearAutoPlay();
    clearResume();
    resumeRef.current = setTimeout(() => {
      startAutoPlay();
    }, RESUME_AFTER_MS);
  }, [clearAutoPlay, clearResume, startAutoPlay]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      clearAutoPlay();
      clearResume();
    };
  }, [startAutoPlay, clearAutoPlay, clearResume]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateDesktop = () => setIsDesktop(mediaQuery.matches);
    updateDesktop();
    mediaQuery.addEventListener("change", updateDesktop);
    return () => mediaQuery.removeEventListener("change", updateDesktop);
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === "visible");
    };
    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  const desktopImageContainerStyle: CSSProperties | undefined = isDesktop
    ? { boxShadow: DESKTOP_IMAGE_GLOW }
    : undefined;

  const visibleHeroIndices = getAdjacentSlideIndices(index, HERO_SLIDES.length);

  const goToSlide = (i: number) => {
    setIndex(i);
    pauseAutoPlay();
  };

  const nextSlide = () => {
    setIndex((i) => (i + 1) % HERO_SLIDES.length);
    pauseAutoPlay();
  };

  const prevSlide = () => {
    setIndex((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    pauseAutoPlay();
  };

  const handleImageMouseDown = (clientX: number) => {
    dragStartX.current = clientX;
  };

  const handleImageMouseUp = (clientX: number) => {
    if (dragStartX.current === null) return;
    const delta = clientX - dragStartX.current;
    dragStartX.current = null;
    if (Math.abs(delta) >= DRAG_THRESHOLD_PX) {
      if (delta < 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <section
      className={`ps-hero-section relative mt-16 w-full overflow-hidden bg-[#050811]${isTabVisible ? "" : " ps-hero-tab-hidden"}`}
      style={{ height: `calc(100vh - ${NAVBAR_HEIGHT})` }}
    >
      {/* z-0: glow effects */}
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        aria-hidden="true"
      >
        <DesktopAmbientGlow isTabVisible={isTabVisible} />
        <DesktopImageBleedGlow isTabVisible={isTabVisible} />
      </div>

      {/* z-1: background images — stacked opacity crossfade, no gaps */}
      <div
        className="ps-hero-images absolute inset-0 z-[1] h-full w-full overflow-hidden bg-[#050811]"
        style={desktopImageContainerStyle}
      >
        {HERO_SLIDES.map((slide, i) => {
          if (!visibleHeroIndices.has(i)) return null;

          return (
          <motion.div
            key={slide.src}
            className="ps-hero-slide absolute inset-0 h-full w-full overflow-hidden"
            initial={false}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ zIndex: i === index ? 2 : 1 }}
          >
            <Image
              src={slide.src}
              alt=""
              width={1536}
              height={1024}
              priority={i === 0}
              loading={i === 0 ? undefined : "lazy"}
              sizes="100vw"
              className={`ps-hero-slide-image h-full w-full object-cover object-center${
                i === PSL_9_INDEX ? " ps-hero-slide-psl9" : ""
              }`}
              aria-hidden
            />
          </motion.div>
          );
        })}
      </div>

      {/* z-2: gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#050811]/80 via-[#050811]/35 via-[28%] to-transparent to-[52%] lg:from-[#050811]/70 lg:via-[#050811]/25 lg:via-[22%] lg:to-transparent lg:to-[45%]"
        aria-hidden="true"
      />

      {/* Image edge vignette — above gradient so it remains visible on desktop */}
      <div
        className="ps-hero-image-vignette pointer-events-none absolute inset-0 z-[3] hidden lg:block"
        aria-hidden="true"
      />

      {/* Desktop image controls — arrows + drag */}
      <div
        className="absolute inset-y-0 right-0 z-20 hidden w-[58%] cursor-grab active:cursor-grabbing lg:block"
        onMouseDown={(e) => handleImageMouseDown(e.clientX)}
        onMouseUp={(e) => handleImageMouseUp(e.clientX)}
        onMouseLeave={(e) => {
          if (dragStartX.current !== null) handleImageMouseUp(e.clientX);
        }}
        onMouseEnter={() => pauseAutoPlay()}
      >
        <button
          type="button"
          aria-label="Previous slide"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/55 backdrop-blur-sm transition-all duration-300 hover:border-[#00C2FF]/45 hover:bg-[#00C2FF]/10 hover:text-white hover:shadow-[0_0_22px_rgba(0,194,255,0.45)]"
        >
          <HeroChevron direction="left" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/55 backdrop-blur-sm transition-all duration-300 hover:border-[#00C2FF]/45 hover:bg-[#00C2FF]/10 hover:text-white hover:shadow-[0_0_22px_rgba(0,194,255,0.45)]"
        >
          <HeroChevron direction="right" />
        </button>
      </div>

      {/* z-10: text content */}
      <div className="ps-hero-text-layer relative z-10 flex h-full w-full items-center overflow-hidden px-4 py-6 sm:px-6 lg:items-stretch lg:px-0 lg:py-0">
        <div className="relative mx-auto h-full w-full max-w-7xl lg:mx-0 lg:max-w-none">
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

          {/* Desktop only — fixed store panel + animated text above */}
          <div className="ps-hero-desktop-left hidden lg:block">
            <div className="ps-hero-desktop-text">
              <AnimatePresence mode="wait">
                <DesktopHeroTextBlock key={index} slideIndex={index} />
              </AnimatePresence>
            </div>

            <div className="ps-hero-desktop-store-fixed">
              <DesktopHeroStorePanel />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-6">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => goToSlide(i)}
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
