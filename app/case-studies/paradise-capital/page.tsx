import Image from "next/image";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";
import { breadcrumbSchema, pageDescriptions, pageTitles } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export const metadata: Metadata = {
  title: pageTitles.paradiseCapital,
  description: pageDescriptions.paradiseCapital,
  alternates: { canonical: "/case-studies/paradise-capital/" },
  openGraph: {
    type: "article",
    title: pageTitles.paradiseCapital,
    description: pageDescriptions.paradiseCapital,
    url: "/case-studies/paradise-capital/",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Work", url: "/case-studies/" },
              { name: "Paradise Capital", url: "/case-studies/paradise-capital/" },
            ]),
          ),
        }}
      />
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">CASE STUDY</Eyebrow>
            <div className="mt-10 mb-6">
              <Image
                src="/paradise-capital-logo-transparent.avif"
                alt="Paradise Capital"
                width={180}
                height={60}
                className="object-contain brightness-0 invert opacity-90"
              />
            </div>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] tracking-[-0.02em] max-w-4xl">
              The request was a buyer list. The opportunity was a reusable system.
            </h1>
            <p className="font-display text-xl md:text-2xl leading-tight mt-5 text-linen max-w-3xl">
              Paradise Capital needed help creating buyer lists. Rather than treating every list as an isolated deliverable, I saw an opportunity to make the research useful across future assignments.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-20 space-y-16">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive tracking-tight">
                What changed
              </h2>
              <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4">
                The Buyer Engine organized that work into a living database and a repeatable way to create suitable buyer lists. The project has continued to evolve through use and refinement.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive tracking-tight">
                What the client reports
              </h2>
              <p className="font-sans text-[17px] text-deep-olive font-semibold leading-relaxed mt-4">
                Buyer-list creation moved from weeks to minutes, according to the client.
              </p>
              <blockquote className="mt-8 relative border-l-4 border-moss-olive pl-6 md:pl-10">
                <p className="font-display font-light text-xl md:text-2xl text-deep-olive leading-[1.35]">
                  Before the Buyer Engine, building the buyer list for each mandate
                  was a manual process. Now we have a living buyer universe that
                  refreshes itself, continuously expands our buyer coverage, and most
                  importantly builds a curated buyer list for each client from that
                  universe plus targeted searches. Weeks of manual work compressed into{" "}
                  <strong className="font-bold underline decoration-deep-olive/50 underline-offset-4">
                    minutes
                  </strong>. That lets us scale
                  the practice, put the strongest buyers in front of our clients, and
                  keep our attention on serving them.
                </p>
                <footer className="mt-6 font-sans text-[13px] tracking-widest text-moss-olive uppercase">
                  Paul Niccum · CEO, Paradise Capital
                </footer>
              </blockquote>
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive tracking-tight">
                Why this matters to the approach
              </h2>
              <div className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4 space-y-4">
                <p>
                  The improvement came from considering what the underlying work could become—not simply delivering the original spreadsheet request. It illustrates the connection between understanding a business need and building a more useful system around it.
                </p>
                <p>
                  The Buyer Engine is proprietary to Paradise Capital. This overview does not disclose its data, screens, or internal architecture.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/what-we-build/" className="font-sans text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline">
                Explore how I help →
              </Link>
              <Link href={siteConfig.primaryCta.href} className="font-sans text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline">
                Discuss your business →
              </Link>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
