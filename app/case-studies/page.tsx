import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";

export const metadata = {
  title: "Case Studies",
  description:
    "Public Fidelis Strategy case studies. Paradise Capital is the named account; Buyer Engine is the current flagship. The public write-up is the deal-sourcing system that started the engagement.",
  alternates: { canonical: "/case-studies/" },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">CASE STUDIES</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em]">
              Named when we&apos;re allowed. Private by default.
            </h1>
            <p className="font-display text-2xl md:text-[26px] leading-tight mt-5 text-linen max-w-3xl tracking-[-0.01em]">
              Most of the systems we build never appear on this site. The one public write-up is below.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <Link
              href="/case-studies/paradise-capital/"
              className="block p-8 border border-moss-olive/30 hover:border-moss-olive bg-bone transition-colors"
            >
              <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold">
                M&amp;A advisory · 2025 – ongoing · public write-up
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-olive mt-3 tracking-tight">
                Paradise Capital
              </h2>
              <p className="font-sans text-[16px] text-ink/80 leading-relaxed mt-4 max-w-2xl">
                The current flagship in this engagement is Buyer Engine — it builds the buyer list, finds strategic acquirers, matches financial buyers, and tracks progress on live sell-side mandates. The public write-up below is the deal-sourcing system that started the work: multi-source prospecting, AI fit-scoring, first-touch outreach in the partner&apos;s voice, human approval on every send.
              </p>
              <p className="font-sans text-[14px] text-deep-olive mt-6 font-semibold">
                Read the sourcing case study →
              </p>
            </Link>
            <p className="font-sans text-[14px] text-ink/60 leading-relaxed mt-8 max-w-2xl">
              Named and live, without a full write-up:{" "}
              <a
                href="https://glow-routine-seven.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-olive underline decoration-moss-olive/40 underline-offset-2"
              >
                Glow Routine
              </a>{" "}
              for Linked by Lexi, and the{" "}
              <a
                href="https://eagangrace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-olive underline decoration-moss-olive/40 underline-offset-2"
              >
                volunteer portal at eagangrace.com
              </a>
              . A real-estate-team lead platform stays unnamed. If you want to talk about a similar problem,{" "}
              <Link href="/contact/" className="text-deep-olive underline decoration-moss-olive/40 underline-offset-2">
                send a note
              </Link>
              .
            </p>
          </div>
        </section>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
