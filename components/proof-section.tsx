import Link from "next/link";
import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";

export function ProofSection() {
  return (
    <section className="bg-bone text-ink">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow size="lg" tone="moss">SHOW JUDGMENT EARLY</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[44px] text-deep-olive mt-8 tracking-tight leading-[1.08] max-w-3xl">
            The request was a buyer list. The opportunity was a reusable system.
          </h2>
        </Reveal>

        <Reveal delay={60} className="mt-8 space-y-5 font-sans text-[17px] text-ink/80 leading-relaxed max-w-3xl">
          <p>
            Paradise Capital needed help creating buyer lists. I saw an opportunity to make the research reusable rather than leave each assignment as a separate spreadsheet. The Buyer Engine brought that work into a living database and a repeatable way to create buyer lists.
          </p>
          <p className="font-semibold text-deep-olive">
            The client reports moving buyer-list creation from weeks to minutes.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <blockquote className="relative border-l-4 border-moss-olive pl-6 md:pl-10">
            <p className="font-display font-semibold text-lg md:text-xl leading-relaxed text-deep-olive">
              Before the Buyer Engine, building the buyer list for each mandate
              was a manual process. Now we have a living buyer universe that
              refreshes itself, continuously expands our buyer coverage, and most
              importantly builds a curated buyer list for each client from that
              universe plus targeted searches. Weeks of manual work compressed into{" "}
              <span className="font-black text-moss-olive underline decoration-moss-olive/50 underline-offset-4">
                minutes
              </span>
              . That lets us scale the practice, put the strongest buyers in
              front of our clients, and keep our attention on serving them.
            </p>
            <footer className="mt-4 font-sans text-[13px] tracking-widest text-moss-olive uppercase">
              Paul Niccum · CEO, Paradise Capital
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={140} className="mt-8">
          <CtaButton href="/case-studies/paradise-capital/">
            See the Paradise Capital project →
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
