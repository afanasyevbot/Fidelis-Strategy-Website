import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/siteConfig";
import { blogPostSchema, breadcrumbSchema } from "@/lib/seo";

const POST = {
  slug: "why-founders-dont-know-their-numbers",
  title: "When you're running the business, the numbers can get away from you",
  description:
    "Owner-operated businesses run on one person's energy. That same person is usually the last one with a clear view of the financials. Here's why the visibility gap happens, and what to do about it.",
  datePublished: "2026-04-28",
};

export const metadata: Metadata = {
  title: POST.title,
  description: POST.description,
  alternates: { canonical: `/blog/${POST.slug}` },
  openGraph: {
    type: "article",
    title: POST.title,
    description: POST.description,
    url: `/blog/${POST.slug}`,
    publishedTime: POST.datePublished,
    authors: ["Matthew Afanasiev"],
  },
  twitter: { card: "summary_large_image", title: POST.title, description: POST.description },
};

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema(POST)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Field Notes", url: "/blog" },
              { name: POST.title, url: `/blog/${POST.slug}` },
            ])
          ),
        }}
      />
      <Nav />
      <main className="bg-bone">
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow size="lg">FIELD NOTES</Eyebrow>
            <h1 className="font-display font-bold text-4xl md:text-[52px] mt-8 tracking-tight leading-[1.05] max-w-3xl">
              When you&apos;re running the business, the numbers can get away from you
            </h1>
            <p className="font-display font-light text-xl md:text-2xl text-linen mt-5 max-w-2xl tracking-tight">
              Owner-operated businesses run on one person&apos;s energy. That same person
              is usually the last one with a clear view of the financials.
            </p>
            <div className="flex items-center gap-4 mt-8 font-sans text-[13px] text-linen/70 uppercase tracking-button">
              <span>Matthew Afanasiev</span>
              <span>·</span>
              <time dateTime={POST.datePublished}>April 28, 2026</time>
            </div>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="font-sans text-[17px] text-ink/85 leading-[1.8] space-y-7">

              <p>
                Running an owner-operated business is all-consuming. You&apos;re
                the salesperson, the relationship manager, the decision-maker,
                and the one putting out fires before anyone else knows there&apos;s
                smoke. When you&apos;re leading the charge, your attention is out
                front, on clients, on revenue, on the next deal.
              </p>

              <p>
                The back of the house is a different story.
              </p>

              <p>
                The financials live in QuickBooks. The AR aging is in a
                spreadsheet someone updates monthly. The margin picture requires
                a report you haven&apos;t had time to pull. None of this is
                carelessness, it&apos;s the nature of running a lean business
                where your energy is the engine. But the numbers don&apos;t
                pause while you&apos;re busy leading.
              </p>

              <p>
                The visibility gap is structural. And it&apos;s more expensive
                than most business owners realize.
              </p>

              <hr className="border-moss-olive/20 my-10" />

              <h2 className="font-display font-bold text-2xl md:text-[28px] text-deep-olive tracking-tight mt-12">
                Revenue is not the same as clarity.
              </h2>

              <p>
                A business can be growing and quietly going sideways at the
                same time. Revenue going up doesn&apos;t tell you whether your
                margin is compressing. A strong month doesn&apos;t tell you
                whether a $40K invoice is 60 days overdue and about to become
                a cash flow problem. &ldquo;We&apos;re busy&rdquo; doesn&apos;t
                tell you whether you could survive a slow quarter.
              </p>

              <p>
                The three numbers I look at first in any business:
              </p>

              <ul className="space-y-4 mt-2">
                <li className="flex gap-3">
                  <span className="text-moss-olive font-semibold shrink-0">→</span>
                  <span>
                    <strong className="text-deep-olive">Cash runway.</strong>{" "}
                    How many months can the business run at current burn if revenue
                    stopped tomorrow? Most business owners genuinely don&apos;t know this
                    number. The ones who do tend to make better decisions, about
                    hiring, about spending, about when to push and when to hold.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-moss-olive font-semibold shrink-0">→</span>
                  <span>
                    <strong className="text-deep-olive">Gross margin trend.</strong>{" "}
                    Not the snapshot, the direction. A margin that&apos;s been
                    compressing for three quarters is a problem you want to catch in
                    quarter one, not quarter four. By the time it shows up in annual
                    revenue, the damage is done.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-moss-olive font-semibold shrink-0">→</span>
                  <span>
                    <strong className="text-deep-olive">AR aging.</strong>{" "}
                    Who owes you money and how long have they owed it? Receivables
                    that age past 45 days have a materially lower collection rate.
                    A business with strong revenue and bad AR discipline is
                    essentially giving its clients an interest-free loan.
                  </span>
                </li>
              </ul>

              <p>
                None of these are exotic metrics. Any CFO will tell you the same
                three. The problem is that most owner-operated businesses
                don&apos;t have a CFO, and the owner doesn&apos;t have a
                clean, current view of these numbers without going to dig for them.
              </p>

              <h2 className="font-display font-bold text-2xl md:text-[28px] text-deep-olive tracking-tight mt-12">
                The Monday morning problem.
              </h2>

              <p>
                Even when owners want this visibility, the friction is real.
                The numbers live in QuickBooks or Xero or a spreadsheet
                someone maintains. Getting a current picture means either
                interrupting your bookkeeper, pulling a report yourself
                (which takes longer than it should), or just guessing based
                on what you remember from the last time you looked.
              </p>

              <p>
                So most business owners check their numbers when something goes
                wrong, when a vendor payment bounces, when a client is
                unexpectedly late, when the quarter closes and the accountant
                sends the summary. Reactive, not proactive.
              </p>

              <p>
                The answer isn&apos;t more data. Owner-operated businesses
                already have more data than they have time to look at. The
                answer is <em>clear</em> data, the right numbers, in one
                place, without having to go find them.
              </p>

              <p>
                The best-run owner-operated businesses build a different habit.
                A standing check-in, pull up one view, see whether last week
                was healthy or quietly going sideways. Not a deep dive. Not a
                reporting session. Monday morning works well. Five minutes,
                and you know where you stand before the week starts.
              </p>

              <p>
                That rhythm is what separates owners who are running their
                business from owners who are running inside it.
              </p>

              <h2 className="font-display font-bold text-2xl md:text-[28px] text-deep-olive tracking-tight mt-12">
                The exit problem most people don&apos;t think about until it&apos;s too late.
              </h2>

              <p>
                There&apos;s another version of this problem that shows up for
                owners who have built real, valuable businesses and are starting
                to think about an exit. Not immediately, but within a few years.
              </p>

              <p>
                A buyer or investor doesn&apos;t just want to see last
                year&apos;s numbers. They want to see a business that tracks
                its own health, clean books, consistent reporting, documented
                processes. A business that knows its numbers is worth more
                than one that doesn&apos;t, even if the underlying financials
                are the same. The buyer is pricing the risk of finding
                surprises post-close.
              </p>

              <p>
                The owners who get the best exits are the ones who started
                running the business like a buyer would see it two or three
                years before they sold it, not six months before.
              </p>

              <h2 className="font-display font-bold text-2xl md:text-[28px] text-deep-olive tracking-tight mt-12">
                What I built.
              </h2>

              <p>
                This is a problem worth solving at the system level, not
                just managing around. That&apos;s why I built{" "}
                <a
                  href="https://fidelispulse.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-deep-olive underline decoration-moss-olive/40 underline-offset-2 hover:text-moss-olive"
                >
                  Fidelis Pulse
                </a>
                {" "}, a weekly business pulse built for owners who don&apos;t
                have time to go dig for their own numbers.
              </p>

              <p>
                Connect your accounting software and financial systems, and
                you get a single view whenever you want it: cash runway, gross
                margin trend, AR aging, any anomalies the AI flagged, and a
                short commentary on what changed and why it matters. Pull it
                up Monday morning before the week starts. Six minutes. Then
                go back to running the business.
              </p>

              <p>
                If an exit is on the horizon, there&apos;s a Buyer-Ready layer
                a structured framework for getting the business to the bar
                a buyer would expect, with quarterly re-scoring so you know
                where you stand and what to fix before you go to market.
              </p>

              <p>
                It&apos;s not a replacement for a CFO or an accountant. It&apos;s
                the thing that makes you a better client for both of them,
                because you arrive at every conversation already knowing where
                the numbers stand.
              </p>

            </div>

            <div className="mt-16 pt-10 border-t border-moss-olive/20">
              <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold mb-6">
                Try Fidelis Pulse
              </div>
              <p className="font-sans text-[16px] text-ink/80 leading-relaxed mb-8">
                30-day free window for owners, no card required. Connect QuickBooks
                and see your first pulse before you decide if it&apos;s worth paying for.
              </p>
              <div className="flex flex-wrap gap-3">
                <CtaButton href="https://fidelispulse.com" external>
                  See your business pulse →
                </CtaButton>
                <CtaButton href={siteConfig.bookingUrl} external variant="secondary">
                  Talk to Matthew
                </CtaButton>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-moss-olive/20">
              <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold">
                Related reading
              </div>
              <ul className="mt-4 space-y-2 font-sans text-[15px]">
                <li>
                  <a href="/blog/what-supplier-conversations-taught-me" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                    → What thousands of supplier conversations taught me about growing a business
                  </a>
                </li>
                <li>
                  <a href="/blog/why-growth-stalled-at-5m" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                    → Why your growth stalled at $5M, and what changed in 2026
                  </a>
                </li>
                <li>
                  <a href="/growth-audit/checklist" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                    → The 4D Growth Audit, 24 questions to score your growth system
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
