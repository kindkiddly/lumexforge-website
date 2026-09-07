"use client";

import { FadeInUp } from "./animations/FadeInUp";
import { StaggerWords } from "./animations/StaggerWords";
import { StoreButtons } from "./StoreButtons";

export function DownloadCTA() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="ps-divider absolute inset-x-0 top-0 mx-auto max-w-4xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="relative overflow-hidden rounded-3xl border border-[#00e6a8]/20 bg-gradient-to-br from-[#00e6a8]/10 via-background-secondary to-[#00c2ff]/5 px-6 py-14 text-center sm:px-12 sm:py-16 ps-glow-frame">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#00e6a8]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#00c2ff]/10 blur-3xl" />

            <h2 className="relative font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              <StaggerWords text="Start Tracking Smarter Today" />
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-foreground-secondary sm:text-lg">
              Download ProteinSnaps and let AI handle the hard part — so you can
              focus on hitting your protein goals.
            </p>
            <div className="relative mt-10 flex flex-col items-center">
              <StoreButtons size="lg" />
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
