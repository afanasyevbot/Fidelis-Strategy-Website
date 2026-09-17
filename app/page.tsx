import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { TheShift } from "@/components/the-shift";
import { WhatWeBuildHome } from "@/components/what-we-build-home";
import { ProofSection } from "@/components/proof-section";
import { DiscoverySection, FounderSection, ProductsSection } from "@/components/recent-builds";
import { FinalCta } from "@/components/final-cta";
import { organizationSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

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
        <ProofSection />
        <TheShift />
        <WhatWeBuildHome />
        <DiscoverySection />
        <FounderSection />
        <ProductsSection />
        <FinalCta
          eyebrow="LET'S TALK"
          headline="Let's find what could work better."
          sub="Bring a challenge, an idea, or a question about AI. You don't need to arrive with the answer."
          primaryHref={siteConfig.primaryCta.href}
          primaryLabel={`${siteConfig.primaryCta.label} →`}
          secondaryHref="/contact/"
          secondaryLabel="Contact Matthew"
        />
      </main>
      <Footer />
    </>
  );
}
