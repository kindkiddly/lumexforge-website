"use client";

import { GradientMesh } from "@/components/shared/GradientMesh";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const ecosystemCards = [
  { label: "AI", icon: "◆", x: "8%", y: "18%", delay: 0, size: "sm" },
  { label: "Apps", icon: "◇", x: "78%", y: "12%", delay: 0.4, size: "md" },
  { label: "Automation", icon: "○", x: "82%", y: "58%", delay: 0.8, size: "sm" },
  { label: "Platforms", icon: "△", x: "4%", y: "62%", delay: 1.2, size: "md" },
  { label: "Agents", icon: "◎", x: "62%", y: "72%", delay: 1.6, size: "sm" },
];

const coreModules = [
  { name: "Neural", color: "from-accent-primary/30 to-accent-primary/5" },
  { name: "Cloud", color: "from-accent-secondary/30 to-accent-secondary/5" },
  { name: "Data", color: "from-success/30 to-success/5" },
  { name: "Edge", color: "from-foreground/10 to-foreground/5" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16 lg:pt-20">
      <GradientMesh variant="hero" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-glow" />
              <span className="text-xs font-medium tracking-wide text-foreground-secondary">
                Apps · AI · Automation · Platforms
              </span>
            </div>

            <h1 className="mt-8 text-display-sm font-bold tracking-tight sm:text-display-md lg:text-display-lg">
              <span className="text-gradient">Building the Next</span>
              <br />
              <span className="text-gradient-accent">Generation of Digital Products</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-secondary sm:text-xl">
              LumexForge develops innovative software, AI-powered solutions,
              intelligent agents, automation systems, and digital experiences
              designed to help people and businesses achieve more.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/products" size="lg">
                Explore Products
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Get In Touch
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-white/[0.06] pt-8">
              {[
                { value: "3+", label: "Products" },
                { value: "AI", label: "Powered" },
                { value: "2026", label: "Launch Year" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold tracking-tight text-foreground">{stat.value}</p>
                  <p className="text-xs font-medium text-foreground-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ecosystem visual — visible on all breakpoints */}
          <div className="relative mx-auto h-[340px] w-full max-w-lg sm:h-[420px] lg:h-[520px] lg:max-w-none">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Outer ring */}
                <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] sm:h-[340px] sm:w-[340px]" />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-primary/20 sm:h-[270px] sm:w-[270px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-secondary" />

                {/* Central hub */}
                <motion.div
                  className="relative z-10 h-36 w-36 rounded-2xl glass-strong glow-accent sm:h-44 sm:w-44"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/15 via-transparent to-accent-secondary/10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent-secondary">LumexForge</span>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {coreModules.map((mod) => (
                        <div
                          key={mod.name}
                          className={`flex h-10 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${mod.color} text-[10px] font-medium text-foreground-secondary sm:h-11 sm:w-16 sm:text-xs`}
                        >
                          {mod.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {ecosystemCards.map((card) => (
              <motion.div
                key={card.label}
                className={`absolute glass rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 ${
                  card.size === "md" ? "text-sm" : "text-xs"
                }`}
                style={{ left: card.x, top: card.y }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: card.delay + 0.5, duration: 0.5 },
                  scale: { delay: card.delay + 0.5, duration: 0.5 },
                  y: {
                    delay: card.delay + 1,
                    duration: 4 + card.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <span className="mr-1.5 text-accent-secondary opacity-60">{card.icon}</span>
                <span className="font-medium text-foreground-secondary">{card.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
