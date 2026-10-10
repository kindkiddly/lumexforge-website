"use client";

import { HOW_IT_WORKS_STEPS } from "@/lib/proteinsnaps/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { ZoomRevealText } from "./animations/ZoomRevealText";

/** Step card thumbnails — same order as HOW_IT_WORKS_STEPS. */
const HOW_IT_WORKS_STEP_IMAGE_SRC = [
  "/images/proteinsnaps/homepageCards-PS5.webp",
  "/images/proteinsnaps/homepageCards-PS6.webp",
  "/images/proteinsnaps/homepageCards-PS7.webp",
] as const;

export function HowItWorksSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="ps-divider absolute inset-x-0 top-0 mx-auto max-w-4xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <div
            className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-12 hidden h-px md:block"
            aria-hidden="true"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-full origin-left bg-gradient-to-r from-[#00e6a8]/50 via-[#00c2ff]/50 to-[#00e6a8]/50"
            />
          </div>

          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <ZoomRevealText key={step.step} delay={i * 0.15} className="relative h-full text-center">
              <div className="ps-home-step-card flex h-full flex-col rounded-2xl p-6">
                <div className="ps-3d-card mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-[#00e6a8]/30 bg-[#00e6a8]/10 font-serif text-base font-bold text-[#00E6A8]">
                  {step.step}
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-[#1A1A1A]">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#555555] sm:text-base">
                  {step.description}
                </p>
                <div className="ps-home-step-card-image">
                  <Image
                    src={HOW_IT_WORKS_STEP_IMAGE_SRC[i]}
                    alt={step.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    loading="lazy"
                    decoding="async"
                    className="ps-home-step-card-image-img"
                  />
                </div>
              </div>
            </ZoomRevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
