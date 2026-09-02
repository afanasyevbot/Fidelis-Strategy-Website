import Link from "next/link";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

/**
 * Homepage "what we build" beat: outcome-led, not a four-SKU menu.
 * Proof of range lives in Recent Builds. Catalog page stays at /what-we-build.
 */
export function WhatWeBuildHome() {
  return (
    <section id="what-we-build" className="bg-bone">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow size="lg" tone="moss">WHAT WE BUILD</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[48px] text-deep-olive mt-8 tracking-tight max-w-3xl">
            AI systems that grow the top line.
          </h2>
          <p className="font-display font-light text-lg md:text-xl text-moss-olive mt-3 max-w-2xl">
            Not a product list. Whatever is leaking: a workflow, a process, a data gap, a bottleneck.
          </p>
        </Reveal>
        <Reveal delay={80} className="mt-8 max-w-2xl space-y-4 font-sans text-[17px] text-ink/80 leading-relaxed">
          <p>
            Every engagement is custom. We look at how you already work, find where growth is getting
            stuck, and build the system that unblocks it. Same person who spots the leak builds the fix.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-10">
          <Link
            href="#recent-builds"
            className="arrow-nudge inline-flex items-center gap-2 text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline"
          >
            See what that looks like in real businesses <span data-arrow>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
