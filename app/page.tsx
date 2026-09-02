import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { TheShift } from "@/components/the-shift";
import { WhatWeBuildHome } from "@/components/what-we-build-home";
import { ProblemSection } from "@/components/problem-section";
import { ProofBeforeAfter } from "@/components/proof-before-after";
import { SoloBuilder } from "@/components/solo-builder";
import { GrowthEngine } from "@/components/growth-engine";
import { ProofSection } from "@/components/proof-section";
import { AboutTeaser } from "@/components/about-teaser";
import { AuditCta } from "@/components/audit-cta";
import { RecentBuilds } from "@/components/recent-builds";
import { FinalCta } from "@/components/final-cta";
import { organizationSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <Nav />
      <main>
        <Hero />
        <TheShift />
        <ProblemSection />
        <ProofBeforeAfter />
        <SoloBuilder />
        <GrowthEngine tone="bone" />
        <WhatWeBuildHome />
        <RecentBuilds />
        <ProofSection />
        <AuditCta />
        <AboutTeaser />
        <FinalCta
          eyebrow="READY WHEN YOU ARE"
          headline="You've built something real. Let's build the systems to run it."
          sub="I'll send a one-pager on the bottleneck. No call to start. If it resonates, we can talk then."
          primaryHref="/brief/"
          primaryLabel="Get the Brief →"
        />
      </main>
      <Footer />
    </>
  );
}
