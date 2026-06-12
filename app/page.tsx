import { ContactCTA } from "@/components/home/ContactCTA";
import { Founder } from "@/components/home/Founder";
import { Hero } from "@/components/home/Hero";
import { ProductsSection } from "@/components/home/ProductsSection";
import { Roadmap } from "@/components/home/Roadmap";
import { Vision } from "@/components/home/Vision";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { WhyLumexForge } from "@/components/home/WhyLumexForge";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <ProductsSection />
      <WhyLumexForge />
      <Vision />
      <Roadmap />
      <Founder />
      <ContactCTA />
    </>
  );
}
