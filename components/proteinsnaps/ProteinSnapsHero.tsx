"use client";

import { DESKTOP_SLIDES } from "@/lib/proteinsnaps/constants";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDE_COLORS = ["#0a0f18", "#0b1220", "#0a0f18", "#0b1220", "#0a0f18"] as const;

const CAROUSEL_IMAGE_SRC = [
  "/images/proteinsnaps/pscarousel-1.webp",
  "/images/proteinsnaps/pscarousel-2.webp",
  "/images/proteinsnaps/pscarousel-3.webp",
  "/images/proteinsnaps/pscarousel-4.webp",
  "/images/proteinsnaps/pscarousel-5.webp",
] as const;

function getCoverflowTransform(index: number, currentIndex: number, total: number) {
  let offset = index - currentIndex;

  if (offset > total / 2) {
    offset -= total;
  } else if (offset < -total / 2) {
    offset += total;
  }

  const absOffset = Math.abs(offset);
  const sign = Math.sign(offset) || 1;

  let translateX = offset * 320;
  const translateZ = -absOffset * 200;
  const rotateY = -sign * Math.min(absOffset * 60, 60);
  let opacity = 1 - absOffset * 0.2;
  const scale = 1 - absOffset * 0.1;

  if (absOffset > 3) {
    opacity = 0;
    translateX = sign * 800;
  }

  return {
    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
    opacity,
    zIndex: 100 - absOffset,
    isActive: index === currentIndex,
  };
}

function CoverflowCardFace({ slideIndex, headline }: { slideIndex: number; headline: string }) {
  return (
    <div className="ps-cf-cover relative !p-0">
      <Image
        src={CAROUSEL_IMAGE_SRC[slideIndex]}
        alt={headline}
        fill
        sizes="380px"
        priority={slideIndex === 0}
        className="object-contain object-center"
      />
    </div>
  );
}

function ProteinSnapsCoverflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = DESKTOP_SLIDES.length;

  const updateIndex = useCallback(
    (nextIndex: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(((nextIndex % total) + total) % total);
      window.setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating, total]
  );

  const navigate = useCallback(
    (direction: number) => {
      updateIndex(currentIndex + direction);
    },
    [currentIndex, updateIndex]
  );

  const goToIndex = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      updateIndex(index);
    },
    [currentIndex, updateIndex]
  );

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  const activeSlide = DESKTOP_SLIDES[currentIndex];

  return (
    <div className="ps-cf-wrapper">
      <div
        ref={containerRef}
        className="ps-cf-container focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        tabIndex={0}
        role="region"
        aria-label="ProteinSnaps feature coverflow carousel"
        aria-roledescription="carousel"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") navigate(-1);
          if (e.key === "ArrowRight") navigate(1);
        }}
      >
        <div className="ps-cf-track">
          {DESKTOP_SLIDES.map((slide, index) => {
            const { transform, opacity, zIndex, isActive } = getCoverflowTransform(
              index,
              currentIndex,
              total
            );

            let offset = index - currentIndex;
            if (offset > total / 2) offset -= total;
            else if (offset < -total / 2) offset += total;
            const absOffset = Math.abs(offset);
            const shouldShowReflection = absOffset <= 1;
            const bg = SLIDE_COLORS[index];

            return (
              <div
                key={slide.headline}
                className={`ps-cf-item${isActive ? " active" : ""}`}
                style={{ transform, opacity, zIndex }}
                onClick={() => goToIndex(index)}
                role="button"
                tabIndex={-1}
                aria-hidden={!isActive}
                aria-label={`${slide.headline} ${slide.description}`}
              >
                <CoverflowCardFace slideIndex={index} headline={slide.headline} />
                {shouldShowReflection ? (
                  <div className="ps-cf-reflection" aria-hidden="true">
                    <div className="ps-cf-reflection-inner" style={{ backgroundColor: bg }} />
                    <div className="ps-cf-reflection-fade" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="ps-cf-nav prev"
          aria-label="Previous slide"
          onClick={() => navigate(-1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="ps-cf-nav next"
          aria-label="Next slide"
          onClick={() => navigate(1)}
        >
          ›
        </button>
      </div>

      <div className="ps-cf-info text-center" aria-live="polite">
        <p
          key={currentIndex}
          className="ps-cf-info-animate font-serif text-base font-bold text-[#1A1A1A] sm:text-lg"
        >
          {activeSlide.headline}
        </p>
        <p
          key={`${currentIndex}-desc`}
          className="ps-cf-info-animate mt-0.5 font-sans text-xs font-normal text-[#555555] sm:text-sm"
        >
          {activeSlide.description}
        </p>
      </div>
    </div>
  );
}

export function ProteinSnapsHero() {
  return (
    <section
      className="hidden min-h-[100dvh] flex-col justify-center bg-transparent px-6 pb-4 pt-[4.5rem] lg:flex"
      aria-label="ProteinSnaps hero"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#1A1A1A] xl:text-4xl">
          Your AI Fitness & Nutrition Partner
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[#555555] sm:text-base">
          Track meals, protein, workouts and progress — powered by AI.
        </p>
        <div className="ps-cf-hero w-full">
          <ProteinSnapsCoverflow />
        </div>
      </div>
    </section>
  );
}
