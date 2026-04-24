import { systems } from "@/content/systems";
import { Eyebrow } from "./eyebrow";
import { SystemCard } from "./system-card";

export function WhatWeBuildHome() {
  return (
    <section id="what-we-build" className="bg-bone">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow tone="moss">WHAT WE BUILD</Eyebrow>
        <h2 className="font-display text-4xl md:text-[42px] text-deep-olive mt-6 tracking-tight max-w-3xl">
          Real systems, shipped.
        </h2>
        <p className="font-display font-light text-xl text-moss-olive mt-3 max-w-2xl">
          Six of the AI and automation systems we deploy for clients.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {systems.map((s) => (
            <SystemCard key={s.slug} entry={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
