import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";

export const metadata = {
  title: "Paradise Capital — Fidelis Case Study",
  description: "How Fidelis built a weekly scrape + enrichment + Slack recap pipeline for Paradise Capital deal sourcing.",
};

const built = [
  { title: "Weekly scrape pipeline", body: "Automated scrape of target universe on a weekly cron via Claude Code Routines." },
  { title: "AI enrichment layer",     body: "Each scraped record enriched with firmographic + AI-extracted signals." },
  { title: "Slack recap agent",        body: "Weekly digest posted to #lead-gen with the top candidates ranked." },
];

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">CASE STUDY</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em]">
              Paradise Capital
            </h1>
            <p className="font-display text-2xl md:text-[26px] leading-tight mt-5 text-linen max-w-3xl tracking-[-0.01em]">
              {/* TODO: confirm dates with Matthew */}
              Weekly deal-sourcing intel engine. 2024 – ongoing.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow tone="moss">THE PROBLEM</Eyebrow>
            <h2 className="font-display text-4xl text-deep-olive mt-6 tracking-tight">Sourcing without signal.</h2>
            <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-6">
              {/* TODO: confirm with client */}
              The team was spending days each week on manual scraping and filtering —
              time that should have gone to diligence and conversations, not data plumbing.
            </p>
          </div>
        </section>

        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow>WHAT WE BUILT</Eyebrow>
            <h2 className="font-display text-4xl md:text-[42px] mt-6 tracking-tight">A weekly intel engine.</h2>
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              {built.map((b) => (
                <div key={b.title} className="p-6 bg-moss-olive">
                  <h3 className="font-display font-medium text-xl text-linen">{b.title}</h3>
                  <p className="font-sans text-[15px] text-bone/85 leading-relaxed mt-3">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow>OUTCOME</Eyebrow>
            <h2 className="font-display text-4xl mt-6 tracking-tight">From manual to automatic.</h2>
            <blockquote className="mt-8">
              <p className="font-display font-light text-2xl md:text-3xl leading-snug">
                {/* TODO: replace with actual client quote */}
                &ldquo;Fidelis didn&apos;t just tell us what to build — they built it. The
                weekly intel pipeline is now core to how we source deals.&rdquo;
              </p>
              <footer className="mt-4 text-[13px] tracking-wide text-linen uppercase">
                Paradise Capital
              </footer>
            </blockquote>
            {/* TODO: add metrics (hours saved/week, qualified leads/week) once confirmed */}
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
