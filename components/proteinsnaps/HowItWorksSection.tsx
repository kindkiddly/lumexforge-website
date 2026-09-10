"use client";

import { HOW_IT_WORKS_STEPS } from "@/lib/proteinsnaps/constants";
import { motion } from "framer-motion";
import { ZoomRevealText } from "./animations/ZoomRevealText";

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
            <ZoomRevealText key={step.step} delay={i * 0.15} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#00e6a8]/30 bg-[#00e6a8]/10 font-serif text-2xl font-bold text-[#00e6a8] ps-glow-frame">
                {step.step}
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-secondary sm:text-base">
                {step.description}
              </p>
            </ZoomRevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
