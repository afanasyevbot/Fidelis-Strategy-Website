import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FinalCta } from "@/components/final-cta";
import { Eyebrow } from "@/components/eyebrow";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

const stages = [
  {
    id: "discover",
    num: "01",
    label: "Discover",
    title: "Understand the business and the opportunity",
    body: [
      "I ask about your goals, how work gets done, where money is made or lost, and what your team deals with each day. I review the tools and relevant examples, research the industry, and speak with the people involved.",
      "You can bring an identified problem or an open question about AI. You do not have to supply the diagnosis.",
    ],
  },
  {
    id: "design",
    num: "02",
    label: "Design",
    title: "Decide what is worth changing",
    body: [
      "The findings become a tailored growth and systems plan. We review the opportunities, recommended changes, and how the supporting systems could be implemented.",
      "The plan connects the commercial goal to a workable approach. That may include existing software, integrations, process changes, or a custom build. The implementation scope, assumptions, responsibilities, and costs are discussed before proceeding.",
    ],
    callout: "The opportunities worth pursuing, the changes I recommend, and how we could put them into practice.",
  },
  {
    id: "deploy",
    num: "03",
    label: "Deploy",
    title: "Build and introduce the solution",
    body: [
      "The agreed system is built or configured and tested against the work it needs to support. Your feedback helps refine the result before and during introduction to the people using it.",
      "Access, documentation, training, hosting, and handover needs are addressed as part of the project. They are not identical for every system.",
    ],
  },
  {
    id: "drive",
    num: "04",
    label: "Drive",
    title: "Refine through real use",
    body: [
      "The first release is a starting point. We can adjust what needs to work differently and develop the next improvements around how the business uses the system.",
      "Ongoing development and support are agreed for the project. This stage is about continued refinement—not a promise of unlimited revisions or permanent operation without upkeep.",
    ],
  },
];

export const metadata: Metadata = {
  title: pageTitles.process,
  description: pageDescriptions.process,
  alternates: { canonical: "/process/" },
};

export default function ProcessPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-forest-floor text-bone border-b border-linen/20 py-14 md:py-16">
          <div className="mx-auto w-[min(1216px,calc(100%-80px))]">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[12px] text-linen mb-8">
              <Link href="/" className="underline underline-offset-4 hover:text-bone">Home</Link>
              <span aria-hidden>/</span>
              <span aria-current="page">Process</span>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-20 items-end">
              <div>
                <Eyebrow size="lg">PROCESS</Eyebrow>
                <h1 className="font-display font-medium text-[38px] md:text-[62px] leading-[1.08] tracking-[-0.045em] mt-6">
                  Discover. Design.
                  <br />
                  <span className="text-linen">Deploy. Drive.</span>
                </h1>
              </div>
              <div className="text-[15px] md:text-[17px] leading-[1.7] text-linen max-w-[440px] space-y-3">
                <p>From learning how your business works to putting the right improvements into practice.</p>
                <p>The depth of investigation and implementation depends on the situation.</p>
                <nav aria-label="On this page" className="flex flex-wrap gap-3 pt-2">
                  {stages.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      data-process-stage
                      className="process-stage-link text-[12px] border border-linen/40 px-3 py-2 min-h-[42px] inline-flex items-center hover:border-linen"
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bone py-12 md:py-16">
          <div className="mx-auto w-[min(1216px,calc(100%-80px))]">
            {stages.map((stage) => (
              <article
                key={stage.id}
                id={stage.id}
                className="process-stage grid grid-cols-1 lg:grid-cols-[0.6fr_1.4fr] gap-6 lg:gap-[90px]"
              >
                <div>
                  <span className="block text-[12px] font-semibold tracking-[0.1em] text-moss-olive mb-4">
                    {stage.num} / THE 4Ds
                  </span>
                  <h2 className="font-display text-[35px] md:text-[43px] font-semibold tracking-[-0.045em] text-deep-olive">
                    {stage.label}
                  </h2>
                </div>
                <div>
                  <h3 className="font-display text-[25px] md:text-[27px] font-semibold text-deep-olive mb-4">
                    {stage.title}
                  </h3>
                  <div className="space-y-4 text-[16px] md:text-[17px] leading-[1.75] text-ink/85">
                    {stage.body.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                  </div>
                  {stage.callout && (
                    <div className="mt-6 p-6 bg-linen/30 border-l-[3px] border-moss-olive">
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-moss-olive mb-2">
                        The growth and systems plan
                      </p>
                      <p className="text-[15px] text-ink/85">{stage.callout}</p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-bone border-t border-deep-olive/25 py-12">
          <div className="mx-auto w-[min(1216px,calc(100%-80px))] grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-[78px]">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-moss-olive mb-5">
                Before the engagement
              </p>
              <h2 className="font-display text-[32px] md:text-[38px] font-semibold text-deep-olive tracking-[-0.045em]">
                How the relationship starts.
              </h2>
            </div>
            <div className="text-[16px] leading-[1.75] text-ink/85 space-y-4">
              <p>
                Complete the short inquiry or contact me directly. I personally review what you share. With enough context, I&apos;ll offer a useful starting observation; otherwise I&apos;ll ask the questions that help us understand the situation.
              </p>
              <p>
                That first exchange is not the full discovery engagement. It helps determine whether there is a useful next step and what it should involve.
              </p>
              <Link href="/contact/" className="polish-text-link inline-flex items-center gap-2 text-[14px] font-semibold">
                Contact Matthew <span data-arrow aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
