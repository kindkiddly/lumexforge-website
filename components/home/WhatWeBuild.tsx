"use client";

import { BuildIcon } from "@/components/shared/BuildIcon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { GradientMesh } from "@/components/shared/GradientMesh";
import { Section } from "@/components/ui/Section";
import { BUILD_CARDS } from "@/lib/constants";

export function WhatWeBuild() {
  return (
    <Section id="what-we-build" className="relative">
      <GradientMesh variant="section" />
      <SectionHeader
        eyebrow="Capabilities"
        title="What We Build"
        description="We create digital products that combine innovation, design, and technology to solve meaningful problems and unlock new opportunities."
      />

      <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BUILD_CARDS.map((card) => (
          <StaggerItem key={card.title}>
            <div className="group glass glass-hover rounded-2xl p-6 h-full">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 text-accent-primary ring-1 ring-accent-primary/20 transition-all duration-500 group-hover:from-accent-primary/30 group-hover:ring-accent-primary/30">
                <BuildIcon icon={card.icon} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{card.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-foreground-secondary">
                {card.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
