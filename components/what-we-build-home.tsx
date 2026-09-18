import Link from "next/link";
import { Reveal } from "./reveal";

export function WhatWeBuildHome() {
  return (
    <section className="bg-bone text-ink border-t border-deep-olive/25 py-10 md:py-14 home-bridge">
      <div className="mx-auto w-[min(1216px,calc(100%-80px))] grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-[78px] items-center">
        <Reveal>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-moss-olive mb-5">
            Better ways to work. More room to grow.
          </p>
          <h2 className="font-display font-semibold text-[29px] md:text-[34px] leading-[1.14] tracking-[-0.045em] text-deep-olive">
            Your systems should fit your business—not force your business to fit the software.
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="text-[15px] md:text-[16px] leading-[1.65] text-ink/85">
            I start with how the work happens and what could work better. The right approach may involve a better process, connected tools, or a custom system.
          </p>
          <div className="flex flex-wrap items-center gap-5 md:gap-6 mt-5 md:mt-6">
            <Link
              href="/what-we-build/"
              className="inline-flex items-center gap-3 text-[14px] font-semibold border-b border-current pb-2 hover:opacity-75"
            >
              How I help <span aria-hidden>↗</span>
            </Link>
            <Link
              href="/process/"
              className="inline-flex items-center gap-3 text-[14px] font-semibold border-b border-current pb-2 hover:opacity-75"
            >
              Discover the 4Ds <span aria-hidden>↗</span>
            </Link>
          </div>
          <p className="text-[14px] mt-5 md:mt-[22px] text-ink/75">
            Work directly with Matthew, from understanding the situation to refining the solution.{" "}
            <Link href="/about/" className="underline hover:text-deep-olive">
              Meet the founder.
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
