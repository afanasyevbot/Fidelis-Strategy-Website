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
import Link from "next/link";

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
        <section className="bg-bone border-t border-moss-olive/15">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 md:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-sans text-[15px] text-ink/70">
              Want the map of how an engagement actually runs?
            </p>
            <div className="flex flex-wrap gap-x-7 gap-y-2">
              <Link
                href="/process"
                className="arrow-nudge inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline"
              >
                See our process <span data-arrow>→</span>
              </Link>
              <Link
                href="/what-we-build"
                className="arrow-nudge inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline"
              >
                What we build <span data-arrow>→</span>
              </Link>
              <Link
                href="/about"
                className="arrow-nudge inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline"
              >
                About <span data-arrow>→</span>
              </Link>
            </div>
          </div>
        </section>
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
