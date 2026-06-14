import { ContactCTA } from "@/components/home/ContactCTA";
import { Founder } from "@/components/home/Founder";
import { FutureProductsSection } from "@/components/home/FutureProductsSection";
import { Hero } from "@/components/home/Hero";
import { ProteinSnapShowcase } from "@/components/home/ProteinSnapShowcase";
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
      <ProteinSnapShowcase />
      <FutureProductsSection />
      <WhyLumexForge />
      <Vision />
      <Roadmap />
      <Founder />
      <ContactCTA />
    </>
  );
}
