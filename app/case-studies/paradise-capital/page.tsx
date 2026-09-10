import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Case Study: Paradise Capital | Weeks of Buyer Lists Compressed into Minutes",
  description:
    "How Fidelis built Buyer Engine for Paradise Capital: a living buyer universe that refreshes itself and builds a curated buyer list for each mandate in minutes.",
  alternates: { canonical: "/case-studies/paradise-capital" },
  openGraph: {
    type: "article",
    title: "Paradise Capital: Weeks of Buyer Lists Compressed into Minutes",
    description:
      "How Fidelis built Buyer Engine, a living buyer universe for Paradise Capital sell-side mandates.",
    url: "/case-studies/paradise-capital",
  },
};

const built = [
  {
    title: "A living buyer universe",
    body: "The buyer book is no longer a one-off spreadsheet. It is a universe that stays current: it refreshes itself, so the next mandate does not start from a blank page.",
  },
  {
    title: "Coverage that compounds",
    body: "Every refresh adds names they did not have last month. Coverage keeps expanding, so the practice is not limited to who someone remembered to research.",
  },
  {
    title: "Search on top of the universe",
    body: "When a deal needs a buyer the universe does not already hold, targeted searches go find them. Those names join the universe and can serve this mandate and the next.",
  },
  {
    title: "A curated list for this client",
    body: "The output is not a dump of every buyer they have ever seen. It is a short, defensible list for this mandate, drawn from the universe plus those searches.",
  },
  {
    title: "Minutes, not weeks",
    body: "The list that used to take weeks of manual research is ready in minutes. The team spends the time on the buyers, not on assembling the book.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Case Studies", url: "/case-studies" },
              { name: "Paradise Capital", url: "/case-studies/paradise-capital" },
            ])
          ),
        }}
      />
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">CASE STUDY</Eyebrow>
            <div className="mt-10 mb-6">
              <Image
                src="/paradise-capital-logo-transparent.avif"
                alt="Paradise Capital"
                width={180}
                height={60}
                className="object-contain brightness-0 invert opacity-90"
              />
            </div>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] tracking-[-0.02em]">
              Paradise Capital
            </h1>
            <p className="font-display text-2xl md:text-[26px] leading-tight mt-5 text-linen max-w-3xl tracking-[-0.01em]">
              Buyer Engine for sell-side mandates. Weeks of list-building compressed into minutes. 2025 – ongoing.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <blockquote className="relative">
              <span className="block font-display text-[96px] leading-none text-moss-olive/15 select-none -mb-6 -ml-2" aria-hidden="true">&ldquo;</span>
              <p className="font-display font-light text-[26px] md:text-[32px] text-deep-olive leading-[1.35] tracking-[-0.01em]">
                Before the Buyer Engine, building the buyer list for each mandate
                was a manual process. Now we have a living buyer universe that
                refreshes itself, continuously expands our buyer coverage, and most
                importantly builds a curated buyer list for each client from that
                universe plus targeted searches. Weeks of manual work compressed into{" "}
                <strong className="font-bold underline decoration-deep-olive/50 underline-offset-4">
                  minutes
                </strong>. That lets us scale
                the practice, put the strongest buyers in front of our clients, and
                keep our attention on serving them.
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 max-w-[40px] bg-moss-olive/40" />
                <div>
                  <div className="font-sans text-[13px] tracking-[0.12em] text-deep-olive font-semibold uppercase">Paul Niccum</div>
                  <div className="font-sans text-[12px] tracking-[0.06em] text-moss-olive uppercase mt-0.5">CEO, Paradise Capital</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="bg-bone border-t border-moss-olive/15">
          <div className="mx-auto max-w-4xl px-6 pb-24 pt-16">
            <Eyebrow size="lg" tone="moss">THE PROBLEM</Eyebrow>
            <h2 className="font-display font-bold text-4xl md:text-[48px] text-deep-olive mt-8 tracking-tight">Best-in-class at closing. Weeks of work to build each buyer list.</h2>
            <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-6">
              Paradise Capital is exceptional at what they do on sell-side mandates. When the right buyers are in front of them, they evaluate thoroughly, structure well, and close. That edge is real and hard-earned.
            </p>
            <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4">
              The gap was earlier. Building the buyer list for each mandate was a manual process: research from scratch, scattered lists, coverage that did not grow between deals. The practice could not scale while the book still took weeks to assemble.
            </p>
          </div>
        </section>

        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow size="lg">WHAT WE BUILT</Eyebrow>
            <h2 className="font-display font-bold text-4xl md:text-[48px] mt-8 tracking-tight">Buyer Engine.</h2>
            <div className="mt-12 space-y-4">
              <div className="p-8 bg-moss-olive border border-linen/25">
                <h3 className="font-display font-bold text-2xl md:text-[26px] text-linen">{built[0].title}</h3>
                <p className="font-sans text-[16px] text-bone/85 leading-relaxed mt-3 max-w-2xl">{built[0].body}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {built.slice(1).map((b) => (
                  <div key={b.title} className="p-6 bg-moss-olive border border-linen/25">
                    <h3 className="font-display font-bold text-xl md:text-[22px] text-linen">{b.title}</h3>
                    <p className="font-sans text-[15px] text-bone/85 leading-relaxed mt-3">{b.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-moss-olive text-bone border-t border-linen/15">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow size="lg">OUTCOME</Eyebrow>
            <h2 className="font-display font-bold text-4xl md:text-[48px] mt-8 tracking-tight">Weeks of list-building, compressed into minutes.</h2>
            <p className="font-sans text-[17px] text-bone/85 leading-relaxed mt-6 max-w-2xl">
              Paradise now has a living buyer universe that refreshes itself and
              continuously expands coverage. When a mandate is live, Buyer Engine
              builds a curated buyer list from that universe plus targeted searches.
            </p>
            <p className="font-sans text-[17px] text-bone/85 leading-relaxed mt-4 max-w-2xl">
              That is what lets them scale the practice, put the strongest buyers in
              front of their clients, and keep attention on serving them.
            </p>
          </div>
        </section>

        <section className="bg-bone border-t border-moss-olive/15">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold">
              Related
            </div>
            <ul className="mt-4 space-y-2 font-sans text-[15px]">
              <li>
                <a href="/blog/ai-lead-engine-vs-apollo" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                  → AI lead engine vs Apollo: why a signal-based system beats a database
                </a>
              </li>
              <li>
                <a href="/process" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                  → The 4D Growth Engine: how this engagement was structured
                </a>
              </li>
              <li>
                <a href="/teardowns/ai-lead-engine" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                  → The AI Lead Engine, taken apart: the signals, the scoring, and what we got wrong
                </a>
              </li>
            </ul>
          </div>
        </section>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
