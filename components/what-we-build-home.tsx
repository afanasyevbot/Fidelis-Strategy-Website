import Link from "next/link";
import { Reveal } from "./reveal";

export function WhatWeBuildHome() {
  return (
    <section className="bg-bone py-10 md:py-12">
      <div className="mx-auto w-[min(1216px,calc(100%-80px))]">
        <div
          className="home-systems-inset grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-[78px] items-center rounded-sm bg-deep-olive text-bone px-6 py-7 md:px-14 md:py-[52px]"
        >
          <Reveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-linen mb-5">
              Better ways to work. More room to grow.
            </p>
            <h2 className="font-display font-semibold text-[29px] md:text-[34px] leading-[1.14] tracking-[-0.045em] text-bone">
              Your systems should fit your business, not force your business to fit the software.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="text-[15px] md:text-[16px] leading-[1.65] text-bone">
              I start with how the work happens and what could work better. The right approach may involve a better process, connected tools, or a custom system.
            </p>
            <div className="flex flex-wrap items-center gap-5 md:gap-6 mt-5 md:mt-6">
              <Link
                href="/what-we-build/"
                className="polish-text-link inline-flex items-center gap-3 text-[14px] font-semibold text-bone"
              >
                How I help <span data-arrow aria-hidden>↗</span>
              </Link>
              <Link
                href="/process/"
                className="polish-text-link inline-flex items-center gap-3 text-[14px] font-semibold text-bone"
              >
                Discover the 4Ds <span data-arrow aria-hidden>↗</span>
              </Link>
            </div>
            <p className="text-[14px] mt-5 md:mt-[22px] text-bone">
              Work directly with Matthew, from understanding the situation to refining the solution.{" "}
              <Link
                href="/about/"
                className="polish-text-link text-linen underline underline-offset-[3px] hover:text-bone"
              >
                Meet the founder.
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
