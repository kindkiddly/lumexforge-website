"use client";

import { ParallaxImage } from "./ParallaxImage";
import { FadeInUp } from "./animations/FadeInUp";
import { StaggerWords } from "./animations/StaggerWords";
import { HeroStyleStorePanel } from "./HeroStyleStorePanel";

export function DownloadCTA() {
  return (
    <section className="ps-download-cta-section relative py-20 sm:py-24 lg:py-28">
      <div
        className="ps-download-cta-mobile-bg pointer-events-none absolute inset-0 z-0 overflow-hidden lg:hidden"
        aria-hidden="true"
      >
        <ParallaxImage src="/images/proteinsnaps/elizabeth-mobile-footer.webp" />
      </div>
      <div className="ps-divider absolute inset-x-0 top-0 mx-auto max-w-4xl max-lg:hidden" />
      <div className="ps-download-cta-section-inner mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="ps-download-cta-card ps-3d-card relative overflow-hidden rounded-3xl border border-[#00e6a8]/20 bg-gradient-to-br from-[#00e6a8]/10 via-[#F0EBE3] to-[#00c2ff]/5 px-6 py-14 text-center max-lg:rounded-none max-lg:border-x-0 max-lg:bg-none sm:px-12 sm:py-16 ps-glow-frame">
            <div className="pointer-events-none absolute -right-20 -top-20 hidden h-64 w-64 rounded-full bg-[#00e6a8]/10 blur-3xl lg:block" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 hidden h-64 w-64 rounded-full bg-[#00c2ff]/10 blur-3xl lg:block" />

            <h2 className="relative z-10 font-serif text-3xl font-semibold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
              <StaggerWords text="Start Tracking Smarter Today" />
            </h2>
            <p className="relative z-10 mx-auto mt-4 max-w-xl text-base text-[#555555] sm:text-lg">
              Download ProteinSnaps and let AI handle the hard part — so you can
              focus on hitting your protein goals.
            </p>
            <div className="relative z-10 mt-10 flex justify-center">
              <HeroStyleStorePanel />
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
