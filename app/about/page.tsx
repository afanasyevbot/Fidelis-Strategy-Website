import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";

export const metadata = {
  title: "About — Fidelis Strategy",
  description: "Fidelis is Latin for faithful. We're a small team of operators who advise and build.",
};

const principles = [
  { title: "Ship, don't slide-ware.", body: "Every engagement ends with working systems, not a PDF." },
  { title: "Own the outcome.", body: "We stay embedded through deployment, optimization, and iteration." },
  { title: "Small team, full stack.", body: "Strategy, design, engineering — one partner, one accountability line." },
];

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">ABOUT</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em]">
              Faithful. Loyal. Trustworthy.
            </h1>
            <p className="font-display text-2xl md:text-[26px] leading-tight mt-5 text-linen max-w-3xl tracking-[-0.01em]">
              Fidelis is Latin for faithful. That&apos;s not a tagline — it&apos;s the operating principle.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow tone="moss">FOUNDER</Eyebrow>
            <h2 className="font-display text-4xl text-deep-olive mt-6 tracking-tight">
              {/* TODO: finalize founder copy with Matthew */}
              Matthew Afanasiev
            </h2>
            <div className="font-sans text-[17px] text-ink/80 leading-[1.75] space-y-5 mt-6">
              <p>
                I&apos;ve spent the last several years building the systems most consultants
                only recommend — lead-enrichment pipelines, AI outreach agents, internal
                operator tools, valuation apps, dashboards — for real businesses with real
                P&amp;Ls on the line.
              </p>
              <p>
                Fidelis exists because I kept meeting founders who had a stack of strategy
                decks and no one to actually build the things the decks recommended. So we
                do both. We advise, and we ship.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow>PRINCIPLES</Eyebrow>
            <h2 className="font-display text-4xl md:text-[42px] mt-6 tracking-tight">
              How we work.
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              {principles.map((p) => (
                <div key={p.title} className="p-6 bg-moss-olive">
                  <h3 className="font-display font-medium text-xl text-linen">{p.title}</h3>
                  <p className="font-sans text-[15px] text-bone/85 leading-relaxed mt-3">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
