import Image from "next/image";
import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";

const stats = [
  { value: "6 min", label: "Average weekly review time" },
  { value: "14 days", label: "Free owner window — no card" },
  { value: "1 click", label: "Quarterly board PDF" },
];

const features = [
  "Connects to the tools you already use — your numbers updated automatically, no manual entry",
  "Cash runway, gross margin, AR aging — everything in one place so nothing slips through",
  "Anomaly alerts when something moves outside normal — catch problems before they compound",
  "One-click quarterly PDF for your leadership meeting, board, or advisor",
];

export function FidelisPulse() {
  return (
    <section className="bg-forest-floor text-bone">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-4xl">
          <Eyebrow size="lg">FIDELIS PULSE · SAAS PRODUCT</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[52px] mt-8 tracking-tight leading-[1.05]">
            <em className="not-italic text-linen">Get a pulse on your business.</em>{" "}
            See where everything stands.
          </h2>
          <p className="font-display font-light text-lg md:text-2xl text-linen mt-5 max-w-3xl leading-snug">
            A dashboard that shows you exactly where your business is at — cash, margin,
            receivables — so you have what you need to make the right decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-start">
          {/* Features + CTAs */}
          <div>
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex gap-3 font-sans text-[16px] text-bone/90 leading-relaxed">
                  <span className="text-linen font-semibold shrink-0 mt-0.5">◇</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="https://fidelis-dashboard.vercel.app" external>
                See Fidelis Pulse →
              </CtaButton>
              <CtaButton href="https://fidelis-dashboard.vercel.app" external variant="secondary">
                Start free — no card required
              </CtaButton>
            </div>
          </div>

          {/* Dashboard screenshot + quote */}
          <div>
            <a href="https://fidelis-dashboard.vercel.app" target="_blank" rel="noopener noreferrer">
              <Image
                src="/marketing/dashboard-apex-hero.png"
                alt="Fidelis Pulse dashboard — cash runway, gross margin, AR aging"
                width={900}
                height={660}
                className="w-full rounded-sm opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
            <div className="mt-5 p-5 border border-linen/15 bg-linen/5">
              <p className="font-display font-light text-[17px] text-bone/85 leading-relaxed italic">
                &ldquo;Most owners don&apos;t need more data. They need a clear picture
                of where things actually stand.&rdquo;
              </p>
              <p className="font-sans text-[12px] uppercase tracking-button text-linen/50 mt-3 font-semibold">
                The conviction behind Pulse
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
