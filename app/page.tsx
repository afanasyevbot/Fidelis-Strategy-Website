import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { BriefDoor } from "@/components/brief-door";
import { TheShift } from "@/components/the-shift";
import { WhatWeBuildHome } from "@/components/what-we-build-home";
import { ProofSection } from "@/components/proof-section";
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
        <BriefDoor />
        <TheShift />
        <ProofSection />
        <WhatWeBuildHome />
        <RecentBuilds />
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
