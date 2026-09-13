"use client";

import { SCREENSHOT_SLIDES } from "@/lib/proteinsnaps/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FadeInUp } from "./animations/FadeInUp";
import { StaggerWords } from "./animations/StaggerWords";

function getAdjacentSlideIndices(current: number, length: number) {
  const prev = (current - 1 + length) % length;
  const next = (current + 1) % length;
  return new Set([prev, current, next]);
}

export function ScreenshotsSection() {
  const [index, setIndex] = useState(0);
  const slide = SCREENSHOT_SLIDES[index];
  const visibleIndices = getAdjacentSlideIndices(index, SCREENSHOT_SLIDES.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SCREENSHOT_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

        {/* Desktop: 3-column layout */}
        <div className="mt-16 hidden items-center gap-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${index}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-right"
            >
              <div
                className="rounded-2xl px-5 py-3"
                style={{
                  background: "rgba(255,255,255,0.40)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                <h3
                  className="mt-2 font-serif text-2xl font-semibold text-[#0B1220]"
                  style={{
                    textShadow:
                      "0 1px 0 rgba(255,255,255,0.9), 0 2px 10px rgba(255,255,255,0.7)",
                  }}
                >
                  {slide.feature}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#334155]">
                  {slide.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative mx-auto w-[280px] shrink-0">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-[#00e6a8]/20 to-[#00c2ff]/10 blur-2xl" />
            <div className="relative rounded-[2rem] border-[3px] border-white/10 bg-[#0a0f18] p-2 ps-glow-frame shadow-2xl">
              <div className="absolute left-1/2 top-2 z-10 h-1 w-16 -translate-x-1/2 rounded-full bg-white/20" />
              <div className="relative mt-4 aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-black">
                {SCREENSHOT_SLIDES.map((screenshot, i) => {
                  if (!visibleIndices.has(i)) return null;

                  return (
                  <motion.div
                    key={screenshot.src}
                    initial={false}
                    animate={{ opacity: i === index ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-black"
                    aria-hidden={i !== index}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.feature}
                      width={280}
                      height={497}
                      sizes="280px"
                      loading="lazy"
                      className="h-full w-full object-contain object-center"
                    />
                  </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${index}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="rounded-2xl px-5 py-3"
                style={{
                  background: "rgba(255,255,255,0.40)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                <ul className="space-y-3">
                  {slide.highlights.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-[#334155]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#059669]" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: stacked */}
        <div className="mt-12 lg:hidden">
          <div className="relative mx-auto w-full max-w-[280px]">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-[#00e6a8]/20 to-[#00c2ff]/10 blur-2xl" />
            <div className="relative rounded-[2rem] border-[3px] border-white/10 bg-[#0a0f18] p-2 ps-glow-frame">
              <div className="relative mt-3 aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-black">
                {SCREENSHOT_SLIDES.map((screenshot, i) => {
                  if (!visibleIndices.has(i)) return null;

                  return (
                  <motion.div
                    key={screenshot.src}
                    initial={false}
                    animate={{ opacity: i === index ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-black"
                    aria-hidden={i !== index}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.feature}
                      width={280}
                      height={497}
                      sizes="280px"
                      loading="lazy"
                      className="h-full w-full object-contain object-center"
                    />
                  </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="ps-screenshots-mobile-card ps-3d-card mx-auto mt-10 max-w-md rounded-2xl px-5 py-4 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <h3 className="font-serif text-2xl font-semibold text-[#0B1220]">
                  <StaggerWords text={slide.feature} />
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#1E293B]">
                  {slide.description}
                </p>
                <ul className="mt-6 space-y-2 text-left text-sm text-[#334155]">
                  {slide.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#059669]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
