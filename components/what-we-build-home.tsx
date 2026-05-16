import Link from "next/link";
import { systems } from "@/content/systems";
import { Eyebrow } from "./eyebrow";
import { SystemCard } from "./system-card";
import { Reveal } from "./reveal";

export function WhatWeBuildHome() {
  // Show 4 highest-impact categories on home; full set lives at /what-we-build
  const featured = systems.slice(0, 4);
  return (
    <section id="what-we-build" className="bg-bone">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow size="lg" tone="moss">WHAT WE BUILD</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[48px] text-deep-olive mt-8 tracking-tight max-w-3xl">
            AI systems that grow the top line.
          </h2>
          <p className="font-display font-light text-lg md:text-xl text-moss-olive mt-3 max-w-2xl">
            Every build is custom — designed around your business, your market, and your team.
          </p>
        </Reveal>
        <Reveal stagger className="grid md:grid-cols-2 gap-4 mt-12">
          {featured.map((s) => (
            <div key={s.slug} data-reveal-child className="h-full">
              <SystemCard entry={s} />
            </div>
          ))}
        </Reveal>
        <Reveal delay={120} className="mt-10">
          <Link
            href="/what-we-build"
            className="arrow-nudge inline-flex items-center gap-2 text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline"
          >
            See all capabilities <span data-arrow>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
