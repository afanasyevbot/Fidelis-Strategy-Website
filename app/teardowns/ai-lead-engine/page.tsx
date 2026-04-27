import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Teardown: Anatomy of an AI Lead Engine (Sanitized)",
  description:
    "A deep, sanitized teardown of a working AI lead engine — the actual signal sources, scoring rubric, enrichment layer, and delivery mechanics. Names removed, architecture intact.",
  alternates: { canonical: "/teardowns/ai-lead-engine" },
  openGraph: {
    type: "article",
    title: "Anatomy of an AI Lead Engine — Sanitized Teardown",
    description:
      "The actual architecture of a working AI lead engine: signals, scoring, enrichment, delivery. Sanitized for a public read.",
    url: "/teardowns/ai-lead-engine",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Teardowns", url: "/teardowns/ai-lead-engine" },
              { name: "AI Lead Engine", url: "/teardowns/ai-lead-engine" },
            ])
          ),
        }}
      />
      <Nav />
      <main className="bg-bone">
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow size="lg">TEARDOWN · SANITIZED</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] mt-8 tracking-tight leading-[1.02]">
              Anatomy of an AI lead engine.
            </h1>
            <p className="font-display font-light text-xl md:text-2xl text-linen mt-5 max-w-3xl tracking-[-0.01em]">
              The actual architecture of a working system. Names redacted,
              metrics rounded, mechanics intact.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-6 py-20">
          <div className="prose-content space-y-6 font-sans text-[17px] text-ink/85 leading-[1.75]">
            <p>
              Most posts about AI lead engines are abstract. This one
              isn&apos;t. What follows is a real engine running in
              production for a Fidelis client — sanitized so the client
              and the dataset stay anonymous, but accurate enough that a
              capable team could rebuild it.
            </p>
            <p>
              The client: a $10M-ish founder-led services firm. The
              brief: surface in-market accounts the team would otherwise
              miss, with enough context to act on them inside 24 hours.
              The system has been running for several months and now
              sources roughly a third of new pipeline.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">The four layers</h2>
            <p>Every working lead engine has the same four layers:</p>
            <ol className="list-decimal pl-6 space-y-3 marker:text-moss-olive marker:font-semibold">
              <li><strong>Signal layer</strong> — what we watch</li>
              <li><strong>Scoring layer</strong> — what we keep</li>
              <li><strong>Enrichment layer</strong> — what we add</li>
              <li><strong>Delivery layer</strong> — where it lands</li>
            </ol>
            <p>
              The mistake most teams make is starting with the delivery
              layer (&ldquo;we want a Slack channel of leads&rdquo;) and
              working backward. That puts the cart in front of the horse.
              The signal layer is the one that determines whether the
              engine is worth running at all.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">Layer 1 — Signal</h2>
            <p>
              For this client, six signal sources, weighted unequally:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-moss-olive">
              <li>
                <strong>Recent funding events</strong> — capital raised in
                the last 60 days. Source: Crunchbase + press release scrape.
                <em> Highest weight.</em> Capital + a 60-day window is the
                strongest in-market signal we have for this ICP.
              </li>
              <li>
                <strong>New senior hires in target roles</strong> — VP-level
                or above, sales/ops/marketing functions, started within 90
                days. Source: LinkedIn change tracking. <em>High weight.</em>
                New leaders re-evaluate stack. The 90-day window matters.
              </li>
              <li>
                <strong>Competitive customer churn signal</strong> —
                companies dropping a known competitor. Source: BuiltWith
                + Wappalyzer delta detection. <em>High weight.</em>
              </li>
              <li>
                <strong>Founder content publishing</strong> — founders
                personally publishing about a problem we solve. Source:
                LinkedIn + podcast transcript scrape. <em>Medium weight.</em>
                Strong intent proxy, but requires more validation downstream.
              </li>
              <li>
                <strong>Hiring of specific roles</strong> — companies
                opening reqs that imply the problem we solve. Source: job
                board scrapers. <em>Medium weight.</em>
              </li>
              <li>
                <strong>Industry-specific regulatory or market triggers</strong>
                {" "}— niche to the client. <em>Variable weight, set per quarter.</em>
              </li>
            </ul>
            <p>
              <strong>What we deliberately don&apos;t use:</strong> generic
              firmographic filters as the primary signal. They go in
              scoring, not signal. A lead engine that starts from
              firmographics is just Apollo with extra steps — the{" "}
              <a href="/blog/ai-lead-engine-vs-apollo" className="underline decoration-moss-olive/40 underline-offset-2 hover:text-moss-olive">
                long version of why
              </a>{" "}
              is worth the read.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">Layer 2 — Scoring</h2>
            <p>
              Every surfaced account gets scored across three vectors,
              normalized to 100:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-moss-olive">
              <li>
                <strong>ICP fit (40 pts).</strong> Firmographic match against
                the client&apos;s closed-won pattern: company size, industry,
                revenue band, geography, business owner status.
              </li>
              <li>
                <strong>Signal density (40 pts).</strong> How many of the
                six signal sources fired in the same 90-day window.
                Multiple-signal accounts score disproportionately — overlap
                is what separates a hot account from an interesting one.
              </li>
              <li>
                <strong>Intent proxy (20 pts).</strong> Are the right people
                inside the company publicly engaging with the problem? Do
                they cite vendors? Are they in a buying conversation in
                public?
              </li>
            </ul>
            <p>
              Anything below 55 is dropped. Anything 55–74 gets queued for
              human review weekly. Anything 75+ gets full enrichment and
              same-day delivery.
            </p>
            <p>
              <strong>The honest read on scoring:</strong> the rubric was
              wrong on the first pass. Specifically, we under-weighted
              signal density and over-weighted firmographic fit, which led
              to the system surfacing a lot of &ldquo;perfect on paper,
              not actually buying&rdquo; accounts. We re-weighted at week
              three based on the team&apos;s actual reach-out outcomes.
              That feedback loop is the real product.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">Layer 3 — Enrichment</h2>
            <p>
              Once an account scores 75+, an enrichment job runs that pulls
              the context the team needs to reach out intelligently:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-moss-olive">
              <li>
                Top three decision-makers — name, title, LinkedIn URL,
                tenure, recent activity
              </li>
              <li>
                Verified work email for the primary decision-maker
                (Hunter / Apollo / Clearbit cascade, lowest-cost first)
              </li>
              <li>
                The specific signal that triggered the surface, with
                source link and date
              </li>
              <li>
                Up to three relevant pieces of recent content from the
                company or its leaders
              </li>
              <li>
                Mutual connections through the client&apos;s LinkedIn
                graph, if any
              </li>
              <li>
                A one-paragraph &ldquo;why now&rdquo; summary written by
                an LLM against the assembled context
              </li>
            </ul>
            <p>
              The enrichment layer is the one most teams underbuild. The
              difference between &ldquo;here&apos;s a name and an
              email&rdquo; and &ldquo;here&apos;s a name, an email, the
              specific reason this account is in market today, and three
              ways you&apos;re already connected&rdquo; is the entire
              engine&apos;s value.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">Layer 4 — Delivery</h2>
            <p>
              Three surfaces, in priority order:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-moss-olive">
              <li>
                <strong>Daily Slack digest.</strong> Top 5 accounts per
                day, fully enriched, posted to a dedicated channel at 8am
                local. One-line per account, expand-on-click for the full
                context.
              </li>
              <li>
                <strong>CRM sync.</strong> Every 75+ account is created in
                the client&apos;s CRM with the full enrichment payload
                attached. The team works inside the CRM, not the digest —
                the digest is just the alert.
              </li>
              <li>
                <strong>Weekly leadership recap.</strong> A Friday email
                summarizing the week: accounts surfaced, accounts
                actioned, accounts that closed, signals that performed
                best. The recap is what makes the engine governable.
              </li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">What we got wrong (and fixed)</h2>
            <p>Three things, on the record:</p>
            <ol className="list-decimal pl-6 space-y-3 marker:text-moss-olive marker:font-semibold">
              <li>
                <strong>The scoring rubric, week one.</strong> Already
                covered above. Fix: tighter feedback loop with the sales
                team in the first 30 days.
              </li>
              <li>
                <strong>Too many signals, too little weight.</strong>{" "}
                The first version of the engine watched ten signal
                sources. Most fired noise. We dropped to six — and the
                quality of surfacing went up, not down.
              </li>
              <li>
                <strong>Enrichment lag.</strong> Original version ran
                enrichment on a 4-hour delay. By the time a hot account
                hit Slack, the team was already past it for the day.
                Moved to real-time enrichment for 75+ accounts; the
                weekly volume cost is trivial because there aren&apos;t
                that many.
              </li>
            </ol>

            <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">What it&apos;s producing</h2>
            <p>
              Sanitized numbers, rounded to whole figures, accurate
              direction:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-moss-olive">
              <li>~30 accounts surfaced per week at 75+ score</li>
              <li>~12 of those actioned by the team in the same week</li>
              <li>~3 of those convert into a first conversation</li>
              <li>About a third of new pipeline now originates here</li>
            </ul>
            <p>
              Conversion rates aren&apos;t magical. The engine isn&apos;t a
              vending machine. The reason it works is that the team
              consistently reaches the right person in the right week
              instead of the right person three months too late.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">What you can take from this</h2>
            <p>If you&apos;re considering building one of these:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-moss-olive">
              <li>
                Start with two or three signals you can defend, not ten.
                Add more only after the first three are clearly working.
              </li>
              <li>
                Score weight should match closed-won pattern, not gut.
                Build the feedback loop into week one, not month three.
              </li>
              <li>
                Spend more on enrichment than you think. Thin enrichment
                is the most common reason these systems fail in practice.
              </li>
              <li>
                Slack first, dashboard never. The team works where they
                already work, not in a new tab.
              </li>
            </ul>
            <p>
              And the honest meta-point: we&apos;re currently building one
              of these for Fidelis itself. The post-mortem on that build
              will land here too. If you want to be on the list when it
              does, the soft path is the{" "}
              <a href="/growth-audit" className="underline decoration-moss-olive/40 underline-offset-2 hover:text-moss-olive">
                Growth Audit checklist
              </a>{" "}
              — same email goes on the teardown notification list.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-moss-olive/20">
            <div className="font-sans text-[14px] text-ink/70 mb-4">
              If you want one of these built for your business — sized to
              your ICP, not bolted onto a SaaS — that&apos;s the
              conversation worth having.
            </div>
            <CtaButton href={siteConfig.bookingUrl} external>
              Book your 30-min Growth Audit →
            </CtaButton>
            <p className="font-sans text-[13px] text-ink/60 mt-4">
              Not ready to talk?{" "}
              <a href="/growth-audit" className="underline hover:text-moss-olive">
                Grab the free 4D Growth Audit
              </a>{" "}
              — 24 questions, one page, no call required.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-moss-olive/20">
            <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold">
              Related reading
            </div>
            <ul className="mt-4 space-y-2 font-sans text-[15px]">
              <li>
                <a href="/blog/ai-lead-engine-vs-apollo" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                  → AI lead engine vs Apollo: what an owner-operated business actually needs
                </a>
              </li>
              <li>
                <a href="/blog/ai-systems-that-move-revenue" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                  → The 4 AI systems that actually move revenue for owner-operated businesses
                </a>
              </li>
              <li>
                <a href="/case-studies/paradise-capital" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                  → Case study: Paradise Capital (+30% pipeline with AI deal sourcing)
                </a>
              </li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
