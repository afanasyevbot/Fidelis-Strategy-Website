import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { LeadMagnetForm } from "@/components/lead-magnet-form";

export const metadata: Metadata = {
  title: "The 4D Growth Audit — 24 questions to know if your growth system is working",
  description:
    "A free, one-page diagnostic for owner-operated businesses. 24 honest questions across Discover, Design, Deploy, and Drive. No call required, no sequence — just the checklist.",
  alternates: { canonical: "/growth-audit" },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">FREE · NO CALL REQUIRED</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em] max-w-4xl">
              The 4D Growth Audit.
            </h1>
            <p className="font-display text-2xl md:text-[26px] leading-tight mt-5 text-linen max-w-3xl tracking-[-0.01em]">
              24 honest questions to know whether your growth system is actually
              working — or quietly leaking revenue.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12">
            <div>
              <Eyebrow tone="moss">WHAT&apos;S INSIDE</Eyebrow>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-olive mt-6 tracking-tight">
                The same diagnostic we run on Day 1 of a paid engagement.
              </h2>
              <p className="font-sans text-[16px] text-ink/80 leading-relaxed mt-4">
                Six questions per stage of the 4D Growth Engine — Discover,
                Design, Deploy, Drive. Each one is a real diagnostic we use
                with paying clients. If you can answer all 24 cleanly,
                you don&apos;t need us. If you can&apos;t, the gaps will tell
                you exactly where to start.
              </p>
              <ul className="mt-8 space-y-3 font-sans text-[15px] text-ink/85 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-moss-olive font-semibold">→</span>
                  <span><strong className="text-deep-olive">Discover</strong> — ICP clarity, win patterns, signal sources</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-moss-olive font-semibold">→</span>
                  <span><strong className="text-deep-olive">Design</strong> — offer architecture, pricing posture, channel mix</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-moss-olive font-semibold">→</span>
                  <span><strong className="text-deep-olive">Deploy</strong> — systems, automation, the actual build</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-moss-olive font-semibold">→</span>
                  <span><strong className="text-deep-olive">Drive</strong> — measurement, iteration, what to kill</span>
                </li>
              </ul>
              <p className="font-sans text-[14px] text-ink/65 leading-relaxed mt-8">
                One page. No fluff. Built for owners who don&apos;t have
                time to read a 40-page whitepaper.
              </p>
            </div>
            <div>
              <div className="bg-bone border border-moss-olive/20 p-8">
                <Eyebrow tone="moss">GET THE CHECKLIST</Eyebrow>
                <h3 className="font-display font-bold text-2xl text-deep-olive mt-4 tracking-tight">
                  Drop your email. We&apos;ll send it.
                </h3>
                <p className="font-sans text-[14px] text-ink/70 leading-relaxed mt-3 mb-6">
                  No call, no sequence, no sales pitch. One email with the
                  checklist attached.
                </p>
                <LeadMagnetForm />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <Eyebrow size="lg">AFTER YOU READ IT</Eyebrow>
            <p className="font-display font-light text-2xl md:text-3xl text-linen mt-6 leading-snug max-w-3xl mx-auto">
              If two or three answers sting — that&apos;s the conversation
              worth having. <span className="text-bone font-semibold">Send a note or book a call. No pressure either way.</span>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
