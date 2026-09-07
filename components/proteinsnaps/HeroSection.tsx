"use client";

import { HERO_SLIDES, PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BlurRevealText } from "./animations/BlurRevealText";
import { TypewriterText } from "./animations/TypewriterText";
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
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="ps-hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text — first on mobile, left on desktop */}
          <div className="order-1 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00e6a8]">
              {PROTEINSNAPS.name}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              <TypewriterText text="Track Protein. Snap Meals. Win." />
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-secondary">
              <BlurRevealText
                text={PROTEINSNAPS.description}
                delay={0.5}
              />
            </p>
            <div className="mt-8">
              <StoreButtons size="lg" />
            </div>
          </div>

          {/* Slides — below text on mobile, right on desktop */}
          <div className="order-2 lg:order-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ps-glow-frame">
              <AnimatePresence mode="sync">
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
                    alt={HERO_SLIDES[index].alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 pb-4">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index
                        ? "w-6 bg-[#00e6a8]"
                        : "w-1.5 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
