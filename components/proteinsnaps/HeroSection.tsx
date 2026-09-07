"use client";

import { HERO_SLIDES, PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StoreButtons } from "./StoreButtons";

const NAVBAR_HEIGHT = "4rem";

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
              className="object-cover object-center lg:object-contain lg:object-center"
              aria-hidden
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle left gradient — readability only, image stays visible on the right */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#050811]/80 via-[#050811]/35 via-[28%] to-transparent to-[52%] lg:from-[#050811]/70 lg:via-[#050811]/25 lg:via-[22%] lg:to-transparent lg:to-[45%]"
        aria-hidden="true"
      />

      {/*
        Content layout:
        - Below lg: existing mobile/tablet layout (unchanged — mobile styles will be handled separately later)
        - lg and up: desktop-only spacing, typography, and alignment overrides
      */}
      <div className="relative z-10 flex h-full w-full items-center overflow-hidden px-4 py-6 sm:px-6 lg:items-center lg:px-0 lg:py-8">
        <div className="mx-auto w-full max-w-7xl lg:mx-0 lg:max-w-none lg:pl-[60px]">
          <div className="max-w-lg lg:max-w-md">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-bold uppercase tracking-[0.25em] text-[#00E6A8] lg:text-left"
            >
              {PROTEINSNAPS.name}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 text-left font-sans text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:mt-3 sm:text-4xl md:text-5xl lg:mt-3 lg:text-4xl lg:leading-[1.15]"
            >
              Track{" "}
              <span className="text-[#00E6A8]">Protein.</span>{" "}
              Snap{" "}
              <span className="text-[#00E6A8]">Meals.</span>{" "}
              <span className="text-[#00E6A8]">Win.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-md text-left text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base sm:leading-[1.7] lg:mt-4 lg:max-w-sm lg:text-sm lg:leading-relaxed"
            >
              {PROTEINSNAPS.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-left sm:mt-7 lg:mt-5"
            >
              <StoreButtons
                size="lg"
                variant="hero"
                className="lg:[&_a]:!w-auto lg:[&_a]:!min-h-0 lg:[&_a]:!px-4 lg:[&_a]:!py-2 lg:[&_a]:!text-sm lg:[&_span[aria-disabled]]:!w-auto lg:[&_span[aria-disabled]]:!min-h-0 lg:[&_span[aria-disabled]]:!px-4 lg:[&_span[aria-disabled]]:!py-2 lg:[&_span[aria-disabled]]:!text-sm lg:[&>div:first-child]:!flex-row lg:[&>div:first-child]:!flex-wrap lg:[&>div:first-child]:!gap-2 lg:[&>div:first-child]:!justify-start lg:[&>div:last-child]:!mt-4 lg:[&>div:last-child_p]:!mb-2 lg:[&>div:last-child>div]:!p-2 lg:[&>div:last-child_svg]:!h-[88px] lg:[&>div:last-child_svg]:!w-[88px]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
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
