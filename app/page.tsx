import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { TreeHero } from "@/components/tree-hero";
import { MeaningBand } from "@/components/meaning-band";
import { ProofSection } from "@/components/proof-section";
import { TheShift } from "@/components/the-shift";
import { WhatWeBuildHome } from "@/components/what-we-build-home";
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
        <TreeHero />
        <MeaningBand />
        <ProofSection />
        <WhatWeBuildHome />
        <TheShift />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
