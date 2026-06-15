"use client";

import { BuildIcon } from "@/components/shared/BuildIcon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { GradientMesh } from "@/components/shared/GradientMesh";
import { Section } from "@/components/ui/Section";
import { BUILD_CARDS } from "@/lib/constants";
import type { BuildCard } from "@/types";
import type { ComponentType } from "react";
import { AgentsAnim } from "./what-we-build-animations/AgentsAnim";
import { AINetworkAnim } from "./what-we-build-animations/AINetworkAnim";
import { AutomationAnim } from "./what-we-build-animations/AutomationAnim";
import { FutureAnim } from "./what-we-build-animations/FutureAnim";
import { MobileAnim } from "./what-we-build-animations/MobileAnim";
import { PlatformAnim } from "./what-we-build-animations/PlatformAnim";

const CARD_ANIMATIONS: Record<BuildCard["icon"], ComponentType> = {
  mobile: MobileAnim,
  ai: AINetworkAnim,
  agent: AgentsAnim,
  automation: AutomationAnim,
  platform: PlatformAnim,
  future: FutureAnim,
};

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
        {BUILD_CARDS.map((card) => {
          const AnimComponent = CARD_ANIMATIONS[card.icon];

          return (
            <StaggerItem key={card.title}>
              <div
                className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.05] hover:shadow-[0_12px_40px_-8px_rgba(91,95,232,0.2)]"
              >
                <AnimComponent />

                <div className="relative z-10">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 text-accent-primary ring-1 ring-accent-primary/20 transition-all duration-300 group-hover:from-accent-primary/30 group-hover:ring-accent-primary/35">
                    <BuildIcon icon={card.icon} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-foreground-secondary">
                    {card.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
