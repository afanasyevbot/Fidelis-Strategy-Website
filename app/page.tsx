import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { WhatWeBuildHome } from "@/components/what-we-build-home";
import { ProblemSection } from "@/components/problem-section";
import { GrowthEngine } from "@/components/growth-engine";
import { ProofSection } from "@/components/proof-section";
import { AboutTeaser } from "@/components/about-teaser";
import { FinalCta } from "@/components/final-cta";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatWeBuildHome />
        <ProblemSection />
        <GrowthEngine tone="bone" />
        <ProofSection />
        <AboutTeaser />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
