import Link from "next/link";
import { testimonials, testimonialParagraphs } from "@/content/testimonials";
import { LeadGenMotif } from "./lead-gen-motif";
import { ResultMoment } from "./result-moment";
import { Reveal } from "./reveal";

export function ProofSection() {
  const { paradise, lexi, grace } = testimonials;

  return (
    <section id="work" className="bg-bone text-ink py-11 md:py-[66px]">
      <div className="mx-auto w-[min(1216px,calc(100%-80px))]">
        <Reveal>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-10 mb-10 md:mb-11">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-moss-olive md:pt-2">
              The work, in their words
            </p>
            <h2 className="font-display font-semibold text-[34px] md:text-[46px] leading-[1.12] tracking-[-0.045em] text-deep-olive md:max-w-[760px]">
              What it&apos;s like to
              <br />
              work with Fidelis.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={40}>
          <article className="grid grid-cols-1 md:grid-cols-[0.82fr_1.18fr] rounded-sm overflow-hidden">
            <div className="bg-forest-floor text-bone p-7 md:p-[43px]">
              <p className="font-sans text-[12px] md:text-[14px] font-bold uppercase tracking-[0.12em] text-bone mb-5 md:mb-6">
                Client project / Paradise Capital
              </p>
              <h3 className="font-display text-[29px] md:text-[32px] font-semibold leading-[1.18] max-w-[340px]">
                The request was a buyer list.
                <br />
                The opportunity was a reusable system.
              </h3>
              <p className="text-[13px] md:text-[14px] leading-[1.65] text-linen mt-5 max-w-[335px]">
                A living database and a repeatable way to create buyer lists.
              </p>
              <Link
                href="/case-studies/paradise-capital/"
                className="polish-text-link inline-flex items-center gap-2 text-[12px] md:text-[13px] font-semibold mt-5"
              >
                Read the case study <span data-arrow aria-hidden>↗</span>
              </Link>
            </div>
            <div className="bg-deep-olive text-bone p-7 md:p-[43px] flex flex-col justify-center gap-6">
              <ResultMoment />
              <blockquote>
                <p className="font-sans text-[16px] md:text-[18px] leading-[1.75]">{paradise.text}</p>
                <footer className="mt-5 md:mt-6 text-[11px] md:text-[12px] font-semibold text-bone">
                  {paradise.attribution}
                </footer>
              </blockquote>
            </div>
          </article>
        </Reveal>

        <Reveal delay={80} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[52px] mt-8 md:mt-10">
          <article className="border-t border-deep-olive/25 pt-6 md:pt-7 flex flex-col items-start">
            <p className="font-sans text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.1em] text-moss-olive mb-5">
              Linked by Lexi / Custom application
            </p>
            <blockquote className="mb-3.5">
              <p className="text-[16px] leading-[1.75]">{lexi.text}</p>
              <footer className="mt-5 text-[11px] md:text-[12px] font-semibold text-moss-olive">
                {lexi.attribution}
              </footer>
            </blockquote>
            <a
              href="https://glow-routine-seven.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="polish-text-link inline-flex items-center gap-2 text-[12px] font-semibold mt-auto"
            >
              Open Glow Routine <span data-arrow aria-hidden>↗</span>
            </a>
          </article>

          <article className="border-t border-deep-olive/25 pt-6 md:pt-7 flex flex-col items-start">
            <p className="font-sans text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.1em] text-moss-olive mb-5">
              Grace Evangelical Church / Community work
            </p>
            <blockquote className="mb-3.5">
              {testimonialParagraphs(grace.text).map((paragraph) => (
                <p key={paragraph} className="text-[16px] leading-[1.75] [&+&]:mt-4">
                  {paragraph}
                </p>
              ))}
              <footer className="mt-5 text-[11px] md:text-[12px] font-semibold text-moss-olive">
                {grace.attribution}
              </footer>
            </blockquote>
            <a
              href="https://eagangrace.com"
              target="_blank"
              rel="noopener noreferrer"
              className="polish-text-link inline-flex items-center gap-2 text-[12px] font-semibold mt-auto"
            >
              Visit the church website <span data-arrow aria-hidden>↗</span>
            </a>
          </article>
        </Reveal>

        <Reveal delay={100} className="mt-8 md:mt-10">
          <article className="lead-gen-tile polish-info-card grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center border border-deep-olive/25 rounded-sm p-6 md:p-8">
            <div>
              <p className="font-sans text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.1em] text-moss-olive mb-4">
                Custom system
              </p>
              <h3 className="font-display text-[22px] md:text-[26px] font-semibold tracking-[-0.03em] text-deep-olive mb-3">
                AI Lead Discovery &amp; Qualification
              </h3>
              <p className="text-[15px] leading-[1.7] max-w-[520px]">
                Custom tools I built to automate lead discovery and qualification, one example of how AI can support the work behind business growth.
              </p>
              <Link
                href="/case-studies/#ai-lead-generation"
                className="polish-text-link inline-flex items-center gap-2 text-[12px] md:text-[13px] font-semibold mt-5"
              >
                Explore the work <span data-arrow aria-hidden>↗</span>
              </Link>
            </div>
            <LeadGenMotif className="md:justify-self-end" />
          </article>
        </Reveal>

        <Reveal delay={120} className="mt-7">
          <Link
            href="/case-studies/"
            className="polish-text-link inline-flex items-center gap-2 text-[12px] md:text-[14px] font-semibold"
          >
            Explore the projects <span data-arrow aria-hidden>↗</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
