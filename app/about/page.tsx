import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";

export const metadata = {
  title: "About — Matthew Afanasiev, Growth Strategy + AI Consultant",
  description:
    "Matthew Afanasiev founded Fidelis Strategy after nearly five years in SaaS sales working with thousands of suppliers and retailers. We design growth plans and build the AI-powered systems that run them.",
  alternates: { canonical: "/about" },
};

const principles = [
  { title: "Build, don't just brief.", body: "Every engagement ends with working systems your team uses every day. That's the bar." },
  { title: "Own the outcome.", body: "We stay with you through launch, optimization, and the next iteration. Growth is compounding work." },
  { title: "One partner. One accountability line.", body: "Strategy, design, and the AI build — all from one person who stays close to your business, start to finish." },
];

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo.png?v=3"
                alt="Fidelis Strategy Crest"
                width={160}
                height={160}
                className="w-24 h-24 md:w-40 md:h-40"
                style={{ filter: "saturate(0.7) brightness(1.1)" }}
                priority
              />
            </div>
            <Eyebrow size="lg">ABOUT</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em] uppercase">
              Faithful. Loyal. Trustworthy.
            </h1>
            <p className="font-display text-2xl md:text-[26px] leading-tight mt-5 text-linen max-w-3xl tracking-[-0.01em]">
              <strong>Fidelis</strong> (fi-DEL-is) is Latin for faithful. Not a tagline. The operating principle behind every plan we write and every system we build.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow size="lg" tone="moss">FOUNDER</Eyebrow>
            <div className="flex items-center gap-5 mt-8">
              <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-moss-olive shrink-0">
                <Image
                  src="/matthew.jpg"
                  alt="Matthew Afanasiev — Founder, Fidelis Strategy"
                  fill
                  className="object-cover object-top"
                  sizes="80px"
                />
              </div>
              <div>
                <h2 className="font-display font-bold text-4xl md:text-[48px] text-deep-olive tracking-tight leading-none">
                  Matthew Afanasiev
                </h2>
                <p className="font-sans text-[13px] uppercase tracking-button text-moss-olive mt-1 font-semibold">
                  Founder, Fidelis Strategy
                </p>
              </div>
            </div>
            <div className="font-sans text-[17px] text-ink/80 leading-[1.75] space-y-5 mt-6">
              <p>
                I started my career in SaaS sales, where I was fortunate to
                work with thousands of suppliers and retailers to help
                streamline their order-to-cash workflows. That meant getting
                into the details: order placement, fulfillment, invoicing,
                chargeback reduction, POS systems, and finding the systems
                and processes that actually drove growth.
              </p>
              <p>
                Across hundreds of those conversations, I kept seeing the
                same patterns: manual processes holding teams back, tools
                that didn&apos;t talk to each other, uncoordinated tech
                stacks, and no real growth plan holding it all together. I
                wanted to help more broadly, but in that role I was limited
                to what our product could solve. After working with mentors
                on my next move, the decision was clear: start my own
                growth strategy consulting firm and help businesses grow
                their top line the right way.
              </p>
              <p>
                That experience of diving into businesses&apos; operations
                naturally led me to AI. I immersed myself in it: studying
                the technology, learning how to build with it, experimenting
                with real use cases, and developing expertise hands-on. The
                improvements in AI are solving real business problems at a
                pace I hadn&apos;t seen before, and the businesses that
                adopt it are widening the gap on the ones that don&apos;t.
              </p>
              <p>
                Early on I was pointing businesses toward software providers
                to solve their pain points. Then it hit me: I can build
                this myself. So I dove deeper and built. The results were
                real, and the experience changed how I think about
                everything. That includes{" "}
                <a href="https://fidelispulse.com" target="_blank" rel="noopener noreferrer" className="text-deep-olive underline decoration-moss-olive/40 underline-offset-2 hover:text-moss-olive">Fidelis Pulse</a>,
                a dashboard that gives you a pulse on your business so you can see
                where everything stands and make the right calls,
                and Glow Routine, a consumer wellness app I built for the
                founder of Linked by Lexi.
                That&apos;s what Fidelis is built on: growth strategy and
                AI-powered systems that actually move the business forward.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow size="lg">PRINCIPLES</Eyebrow>
            <h2 className="font-display font-bold text-4xl md:text-[48px] mt-8 tracking-tight">
              How we work.
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              {principles.map((p) => (
                <div key={p.title} className="p-6 bg-moss-olive border border-linen/25">
                  <h3 className="font-display font-bold text-xl md:text-[22px] text-linen">{p.title}</h3>
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
