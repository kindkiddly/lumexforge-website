"use client";

import { SCREENSHOT_SLIDES } from "@/lib/proteinsnaps/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FadeInUp } from "./animations/FadeInUp";

const SILK = "cubic-bezier(0.16, 1, 0.3, 1)";
const CLEARWAVE_CARD_TRANSITION = `transform 0.6s ${SILK}, opacity 0.6s ${SILK}`;
const AUTOPLAY_MS = 5000;
const ANIM_LOCK_MS = 700;
const ZOOM_STEP = { pw: 196, g1: 217, g2: 387, gh: 546, sh: 504 } as const;
const CENTER_PHONE_HALF_W = ZOOM_STEP.pw / 2;
const CENTER_PHONE_TEXT_GAP = 8;
const TEXT_BELOW_STAGE_GAP = 2;
const TEXT_BLOCK_TOP = ZOOM_STEP.sh + TEXT_BELOW_STAGE_GAP;

type CarouselPosition =
  | "center"
  | "left1"
  | "right1"
  | "left2"
  | "right2"
  | "hidden-left"
  | "hidden-right";

/** [translateX multiplier, rotateY, scale, opacity] */
const POS_CONFIG: Record<CarouselPosition, [number, number, number, number]> = {
  center: [0, 0, 1, 1],
  left1: [-1, 36, 0.76, 0.75],
  right1: [1, -36, 0.76, 0.75],
  left2: [-1, 55, 0.56, 0.55],
  right2: [1, -55, 0.56, 0.55],
  "hidden-left": [-1, 72, 0.4, 0.5],
  "hidden-right": [1, -72, 0.4, 0.5],
};

const POS_GAP: Record<
  CarouselPosition,
  keyof typeof ZOOM_STEP | null
> = {
  center: null,
  left1: "g1",
  right1: "g1",
  left2: "g2",
  right2: "g2",
  "hidden-left": "gh",
  "hidden-right": "gh",
};

const Z_INDEX: Record<CarouselPosition, number> = {
  center: 10,
  left1: 8,
  right1: 8,
  left2: 6,
  right2: 6,
  "hidden-left": 4,
  "hidden-right": 4,
};

function getPositionForOffset(
  cardIndex: number,
  centerIndex: number,
  total: number
): CarouselPosition {
  let offset = cardIndex - centerIndex;
  while (offset > Math.floor(total / 2)) offset -= total;
  while (offset < -Math.floor(total / 2)) offset += total;

  const posMap: Record<string, CarouselPosition> = {
    "-2": "left2",
    "-1": "left1",
    "0": "center",
    "1": "right1",
    "2": "right2",
  };

  return posMap[String(offset)] ?? (offset < 0 ? "hidden-left" : "hidden-right");
}

function getWrappedOffset(
  cardIndex: number,
  centerIndex: number,
  total: number
): number {
  let offset = cardIndex - centerIndex;
  while (offset > Math.floor(total / 2)) offset -= total;
  while (offset < -Math.floor(total / 2)) offset += total;
  return offset;
}

function getCardStyles(position: CarouselPosition) {
  const cfg = POS_CONFIG[position];
  const gapKey = POS_GAP[position];
  const tx = cfg[0] * (gapKey ? ZOOM_STEP[gapKey] : 0);

  return {
    width: ZOOM_STEP.pw,
    transform: `translateX(${tx}px) rotateY(${cfg[1]}deg) scale(${cfg[2]})`,
    opacity: cfg[3],
    zIndex: Z_INDEX[position],
  };
}

export function ScreenshotsCarousel3D() {
  const totalCards = SCREENSHOT_SLIDES.length;
  const [currentCenter, setCurrentCenter] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const isAnimatingRef = useRef(false);
  const isPausedRef = useRef(false);
  const slide = SCREENSHOT_SLIDES[currentCenter];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateDesktop = () => setIsDesktop(mediaQuery.matches);
    updateDesktop();
    mediaQuery.addEventListener("change", updateDesktop);
    return () => mediaQuery.removeEventListener("change", updateDesktop);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setCurrentCenter(((index % totalCards) + totalCards) % totalCards);
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, ANIM_LOCK_MS);
    },
    [totalCards]
  );

  const advanceSlide = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCurrentCenter((prev) => (prev + 1) % totalCards);
    window.setTimeout(() => {
      isAnimatingRef.current = false;
    }, ANIM_LOCK_MS);
  }, [totalCards]);

  const stepBack = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCurrentCenter((prev) => (prev - 1 + totalCards) % totalCards);
    window.setTimeout(() => {
      isAnimatingRef.current = false;
    }, ANIM_LOCK_MS);
  }, [totalCards]);

  useEffect(() => {
    if (!isDesktop) return;

    const timer = window.setInterval(() => {
      if (!isPausedRef.current) advanceSlide();
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [isDesktop, advanceSlide]);

  useEffect(() => {
    if (!isDesktop) return;

    const clearPauseOnScroll = () => {
      isPausedRef.current = false;
    };

    window.addEventListener("scroll", clearPauseOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", clearPauseOnScroll);
  }, [isDesktop]);

  const visibleSlides = useMemo(() => {
    return SCREENSHOT_SLIDES.flatMap((screenshot, i) => {
      const offset = getWrappedOffset(i, currentCenter, totalCards);
      if (Math.abs(offset) > 3) return [];

      const position = getPositionForOffset(i, currentCenter, totalCards);
      const styles = getCardStyles(position);

      return [
        {
          screenshot,
          i,
          offset,
          position,
          styles,
          isCenter: position === "center",
        },
      ];
    });
  }, [currentCenter, totalCards]);

  if (!isDesktop) return null;

  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="ps-divider absolute inset-x-0 top-0 mx-auto max-w-4xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c2ff]">
            App Preview
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            See ProteinSnaps in Action
          </h2>
        </FadeInUp>

        <div className="flex flex-col items-center">
          <div className="mt-4 mb-4 flex items-center justify-center gap-2">
            {SCREENSHOT_SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === currentCenter ? "true" : undefined}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentCenter
                    ? "w-6 bg-[#00e6a8]"
                    : "w-2 bg-white/20 hover:bg-[#00e6a8]/50"
                }`}
              />
            ))}
          </div>

          <div className="flex w-full shrink-0 flex-col items-center">
            <div
              className="relative w-full"
              style={{ paddingBottom: 72 }}
            >
            <div
              className="relative w-full"
              style={{
                height: ZOOM_STEP.sh,
                perspective: "clamp(900px, 120vw, 1800px)",
                perspectiveOrigin: "center center",
              }}
            >
              <button
                type="button"
                onClick={stepBack}
                aria-label="Previous screen"
                className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-foreground transition-all duration-300 hover:border-[#00e6a8]/45 hover:bg-[#00e6a8]/15 hover:text-[#00e6a8]"
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div
                className="relative flex h-full w-full items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
                onMouseEnter={() => {
                  isPausedRef.current = true;
                }}
                onMouseLeave={() => {
                  isPausedRef.current = false;
                }}
              >
                {visibleSlides.map(({ screenshot, i, offset, position, styles, isCenter }) => (
                    <div
                      key={screenshot.src}
                      role="button"
                      tabIndex={isCenter ? -1 : 0}
                      aria-label={
                        isCenter
                          ? undefined
                          : `View ${screenshot.feature}`
                      }
                      onClick={() => {
                        if (position !== "center") goTo(i);
                      }}
                      onKeyDown={(e) => {
                        if (
                          (e.key === "Enter" || e.key === " ") &&
                          position !== "center"
                        ) {
                          e.preventDefault();
                          goTo(i);
                        }
                      }}
                      className={`absolute ${
                        position === "hidden-left" || position === "hidden-right"
                          ? "pointer-events-none"
                          : "cursor-pointer"
                      }`}
                      style={{
                        width: styles.width,
                        transform: styles.transform,
                        opacity: styles.opacity,
                        zIndex: styles.zIndex,
                        transition: CLEARWAVE_CARD_TRANSITION,
                      }}
                    >
                      <div
                        className={`relative rounded-[1.4rem] border-[2.1px] p-[5.6px] shadow-2xl ${
                          isCenter
                            ? "border-white/10 bg-[#0a0f18] ps-glow-frame"
                            : "border-white/20 bg-[#121a28]"
                        }`}
                        style={{
                          width: ZOOM_STEP.pw,
                          transition: `box-shadow 0.6s ${SILK}`,
                        }}
                      >
                        <div className="absolute left-1/2 top-[5.6px] z-10 h-[2.8px] w-[44.8px] -translate-x-1/2 rounded-full bg-white/20" />
                        <div className="relative mt-[11.2px] aspect-[9/16] overflow-hidden rounded-[1.05rem] bg-black">
                          {Math.abs(offset) <= 3 && (
                            <Image
                              src={screenshot.src}
                              alt={screenshot.feature}
                              width={196}
                              height={348}
                              sizes="196px"
                              loading="lazy"
                              className="h-full w-full object-contain object-center"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                ))}
              </div>

              <button
                type="button"
                onClick={advanceSlide}
                aria-label="Next screen"
                className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-foreground transition-all duration-300 hover:border-[#00e6a8]/45 hover:bg-[#00e6a8]/15 hover:text-[#00e6a8]"
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

              <AnimatePresence mode="wait">
                <motion.h3
                  key={currentCenter}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute z-20 max-w-[180px] text-right font-serif text-xl text-white"
                  style={{
                    right: `calc(50% + ${CENTER_PHONE_HALF_W + CENTER_PHONE_TEXT_GAP}px)`,
                    top: TEXT_BLOCK_TOP,
                  }}
                >
                  {slide.feature}
                </motion.h3>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentCenter}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute z-20 max-w-[180px] line-clamp-2 text-left text-sm text-foreground-secondary"
                  style={{
                    left: `calc(50% + ${CENTER_PHONE_HALF_W + CENTER_PHONE_TEXT_GAP}px)`,
                    top: TEXT_BLOCK_TOP,
                  }}
                >
                  {slide.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
