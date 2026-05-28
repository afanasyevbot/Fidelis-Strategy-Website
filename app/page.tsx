import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { WhatWeBuildHome } from "@/components/what-we-build-home";
import { ProblemSection } from "@/components/problem-section";
import { GrowthEngine } from "@/components/growth-engine";
import { ProofSection } from "@/components/proof-section";
import { AboutTeaser } from "@/components/about-teaser";
import { AuditCta } from "@/components/audit-cta";
import { WhoThisIsFor } from "@/components/who-this-is-for";
import { ComparisonBlock } from "@/components/comparison-block";
import { FinalCta } from "@/components/final-cta";
import { FidelisPulse } from "@/components/fidelis-pulse";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <GrowthEngine tone="bone" />
        <WhatWeBuildHome />
        <WhoThisIsFor />
        <ProofSection />
        <TestimonialsSection />
        <ComparisonBlock />
        <FidelisPulse />
        <AuditCta />
        <AboutTeaser />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
