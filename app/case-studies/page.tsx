import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";

export const metadata = {
  title: "Case Studies",
  description:
    "Public Fidelis Strategy case studies. Most client systems stay private; Paradise Capital is the flagship we can name.",
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
                M&amp;A advisory · 2025 – ongoing
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-olive mt-3 tracking-tight">
                Paradise Capital
              </h2>
              <p className="font-sans text-[16px] text-ink/80 leading-relaxed mt-4 max-w-2xl">
                Weekly deal-sourcing intel engine: multi-source prospecting, AI fit-scoring against their criteria, first-touch outreach in the partner&apos;s voice, human approval on every send.
              </p>
              <p className="font-sans text-[14px] text-deep-olive mt-6 font-semibold">
                Read the case study →
              </p>
            </Link>
            <p className="font-sans text-[14px] text-ink/60 leading-relaxed mt-8 max-w-2xl">
              Other recent builds — buyer matching, a real-estate-team lead platform, and internal products — stay unnamed or described without screenshots. If you want to talk about a similar problem,{" "}
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
