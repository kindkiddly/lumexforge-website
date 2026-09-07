"use client";

import { HERO_SLIDES, PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BlurRevealText } from "./animations/BlurRevealText";
import { StoreButtons } from "./StoreButtons";

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[88vh] overflow-hidden sm:min-h-[92vh] lg:min-h-[95vh]">
      {/* Full-width background slides */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[index].src}
              alt={HERO_SLIDES[index].alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left-to-right dark gradient for text readability */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050811] from-0% via-[#050811]/92 via-45% to-transparent to-100% lg:via-40%"
        aria-hidden="true"
      />
      {/* Mobile bottom fade for depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050811]/70 via-transparent to-[#050811]/30 lg:hidden"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-[88vh] items-center pt-20 pb-10 sm:min-h-[92vh] sm:pt-24 sm:pb-12 lg:min-h-[95vh] lg:pt-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-bold uppercase tracking-[0.25em] text-[#00E6A8]"
            >
              {PROTEINSNAPS.name}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 font-sans text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Track{" "}
              <span className="text-[#00E6A8]">Protein.</span>
              <br className="hidden sm:block" /> Snap{" "}
              <span className="text-[#00E6A8]">Meals.</span>
              <br className="hidden sm:block" />{" "}
              <span className="text-[#00E6A8]">Win.</span>
            </motion.h1>

            <p className="mt-5 max-w-lg text-base leading-[1.7] text-white/75 sm:mt-6 sm:text-lg sm:leading-[1.75]">
              <BlurRevealText text={PROTEINSNAPS.description} delay={0.35} />
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 sm:mt-8"
            >
              <StoreButtons size="lg" variant="hero" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 lg:bottom-8">
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
