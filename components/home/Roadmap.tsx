"use client";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Section } from "@/components/ui/Section";
import { ROADMAP } from "@/lib/constants";
import { motion } from "framer-motion";

const itemDescriptions: Record<string, string> = {
  ProteinSnap: "AI nutrition & fitness platform",
  AMORA: "Next-generation digital experience",
  KePaso: "Innovative platform in development",
  "Future Products": "Exploring what's next",
};

export function Roadmap() {
  return (
    <Section id="roadmap" className="bg-background-secondary/40">
      <SectionHeader
        eyebrow="Timeline"
        title="Roadmap"
        description="Our product ecosystem is growing. Here's what's ahead."
      />

      <div className="mx-auto max-w-2xl">
        {ROADMAP.map((entry) => (
          <AnimatedSection key={entry.year}>
            <div className="relative">
              <div className="mb-10 flex items-center gap-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent-primary/20 bg-accent-primary/10 text-lg font-bold text-accent-primary">
                  {entry.year}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/[0.1] to-transparent" />
              </div>

              <div className="space-y-3 pl-2 border-l border-white/[0.08] ml-6">
                {entry.items.map((item, index) => (
                  <motion.div
                    key={item}
                    className="relative pl-8"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="absolute left-0 top-5 h-2.5 w-2.5 -translate-x-[5px] rounded-full border-2 border-accent-secondary bg-background" />
                    <div className="glass rounded-xl px-5 py-4 transition-all duration-300 hover:bg-white/[0.05]">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-semibold text-foreground">{item}</span>
                        {index === 0 && (
                          <span className="rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">
                            Launching
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-foreground-muted">
                        {itemDescriptions[item] || ""}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
