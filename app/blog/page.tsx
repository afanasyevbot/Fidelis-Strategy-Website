import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = {
  title: "Field Notes — Growth Strategy + AI for SMB Founders",
  description:
    "Operator essays on growth strategy, AI systems, and what actually moves revenue for owner-operated businesses. Hard-won lessons from real builds.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "why-off-the-shelf-software-is-dead",
    title: "Off-the-shelf software is dead. Here’s what’s replacing it.",
    dek: "For decades, bending your business around generic software was the only affordable option. AI broke that math — and the spreadsheet your team keeps next to the CRM is the proof.",
    date: "2026-06-09",
  },
  {
    slug: "why-founders-dont-know-their-numbers",
    title: "When you\u2019re running the business, the numbers can get away from you",
    dek: "Owner-operated businesses run on one person\u2019s energy. That same person is usually the last one with a clear view of the financials — and why that gap is more expensive than most realize.",
    date: "2026-04-28",
  },
  {
    slug: "what-supplier-conversations-taught-me",
    title: "What 1,000 supplier conversations taught me about growing a business",
    dek: "Four patterns that keep showing up in owner-operated businesses that hit a wall — and what the ones who break through actually do differently.",
    date: "2026-04-27",
  },
  {
    slug: "why-growth-stalled-at-5m",
    title: "Why your growth stalled at $5M \u2014 and what changed in 2026",
    dek: "The $5M plateau is real and structural. Hiring used to be the answer; in 2026 it isn\u2019t. Here\u2019s what is.",
    date: "2026-04-26",
  },
  {
    slug: "ai-systems-that-move-revenue",
    title: "The 4 AI systems that actually move revenue for owner-operated businesses",
    dek: "Skip the demos. These four are the system patterns that consistently show up in the bank account.",
    date: "2026-04-26",
  },
  {
    slug: "ai-lead-engine-vs-apollo",
    title: "AI lead engine vs Apollo: what owner-operated businesses actually need",
    dek: "Apollo, ZoomInfo, Lusha \u2014 great at what they do. They\u2019re also not built for what you\u2019re actually trying to do.",
    date: "2026-04-25",
  },
  {
    slug: "why-strategies-dont-get-implemented",
    title: "The execution gap: why strategies stall before they deploy",
    dek: "Why AI integrations fail for owner-operated businesses — and what actually closes the gap.",
    date: "2026-04-24",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main className="bg-bone">
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow size="lg">FIELD NOTES</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] mt-8 tracking-tight">
              Operator essays. No fluff.
            </h1>
            <p className="font-display font-light text-xl text-linen mt-4 max-w-2xl">
              Hard-won lessons from building growth systems for owner-operated businesses.
            </p>
          </div>
        </section>
        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-20 space-y-10">
            {posts.map((p) => (
              <article key={p.slug} className="border-b border-moss-olive/20 pb-10">
                <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive">{formatDate(p.date)}</div>
                <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive mt-2 tracking-tight">
                  <Link href={`/blog/${p.slug}`} className="hover:text-moss-olive">{p.title}</Link>
                </h2>
                <p className="font-sans text-[16px] text-ink/80 leading-relaxed mt-3">{p.dek}</p>
                <Link
                  href={`/blog/${p.slug}`}
                  className="inline-flex items-center gap-2 text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold mt-4"
                >
                  Read →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
