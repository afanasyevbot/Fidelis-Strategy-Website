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
import { RecentBuilds } from "@/components/recent-builds";
import { ComparisonBlock } from "@/components/comparison-block";
import { FinalCta } from "@/components/final-cta";
import { PulseTeaser } from "@/components/pulse-teaser";

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
        <RecentBuilds />
        <ProofSection />
        <ComparisonBlock />
        <PulseTeaser />
        <AuditCta />
        <AboutTeaser />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
