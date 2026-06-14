"use client";

import { ArtworkImage } from "@/components/shared/ArtworkImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IMAGES } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16 lg:pt-20">
      <div className="absolute inset-0 -z-20">
        <Image
          src={IMAGES.hero}
          alt="LumexForge technology ecosystem abstract background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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

          <motion.div
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.08] glass-strong glow-accent">
              <ArtworkImage
                src={IMAGES.hero}
                alt="LumexForge digital product ecosystem visualization"
                priority
                fit="cover"
                className="object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
