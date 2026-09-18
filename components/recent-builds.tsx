import Link from "next/link";
import { Reveal } from "./reveal";

export function ProductsSection() {
  return (
    <section id="products" className="bg-bone text-ink pb-10 md:pb-14 home-products">
      <div className="mx-auto w-[min(1216px,calc(100%-80px))]">
        <Reveal>
          <div className="border-t border-deep-olive/25 pt-9 md:pt-[35px] flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-20">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-moss-olive mb-4">
                Beyond client projects
              </p>
              <h2 className="font-display font-semibold text-[32px] md:text-[39px] tracking-[-0.045em] text-deep-olive">
                Software built by Fidelis.
              </h2>
            </div>
            <p className="text-[14px] max-w-[330px] text-ink/80">
              Two separate products. The same interest in making software fit the work.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 mt-6 md:mt-[22px]">
          <article
            id="fidelis-advisor"
            className="polish-info-card bg-linen/30 border border-deep-olive/25 rounded-sm p-6 md:p-7 flex flex-col items-start min-h-[220px]"
          >
            <p className="font-sans text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.1em] text-moss-olive mb-4">
              For M&amp;A brokerage firms
            </p>
            <h3 className="font-display text-[30px] md:text-[36px] font-medium tracking-[-0.045em] text-deep-olive">
              Fidelis Advisor
            </h3>
            <p className="text-[14px] mt-3.5 max-w-[400px] text-ink/80">
              A separate product built for M&amp;A brokerage firms.
            </p>
            <Link
              href="/pulse/#fidelis-advisor"
              className="inline-flex items-center gap-3 text-[12px] font-semibold border-b border-current pb-2 mt-5 hover:opacity-75"
            >
              Explore this product <span aria-hidden>↗</span>
            </Link>
          </article>

          <article
            id="fidelis-pulse"
            className="polish-info-card bg-linen/30 border border-deep-olive/25 rounded-sm p-6 md:p-7 flex flex-col items-start min-h-[220px]"
          >
            <p className="font-sans text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.1em] text-moss-olive mb-4">
              For business owners &amp; operators
            </p>
            <h3 className="font-display text-[30px] md:text-[36px] font-medium tracking-[-0.045em] text-deep-olive">
              Fidelis Pulse
            </h3>
            <p className="text-[14px] mt-3.5 max-w-[400px] text-ink/80">
              A separate product built for individual business owners and operators.
            </p>
            <Link
              href="/pulse/#fidelis-pulse"
              className="inline-flex items-center gap-3 text-[12px] font-semibold border-b border-current pb-2 mt-5 hover:opacity-75"
            >
              Explore this product <span aria-hidden>↗</span>
            </Link>
          </article>
        </Reveal>

        <p className="text-[11px] md:text-[12px] text-moss-olive mt-4 md:mt-[18px]">
          These products are not a required starting point. A custom engagement begins with your business.
        </p>
      </div>
    </section>
  );
}
