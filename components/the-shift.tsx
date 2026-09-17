import Link from "next/link";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";
import { siteConfig } from "@/lib/siteConfig";

export function TheShift() {
  return (
    <section className="bg-moss-olive text-bone">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-[44px] tracking-tight leading-[1.08]">
            The advantage isn&apos;t having AI. It&apos;s putting it to work.
          </h2>
          <div className="mt-6 space-y-4 font-sans text-[17px] text-bone/85 leading-relaxed">
            <p>
              When a competitor can respond faster, prepare work with less manual effort, or take on more business without sacrificing service, that changes what you&apos;re competing against.
            </p>
            <p>
              You don&apos;t need to chase every tool. You do need to understand which improvements are worth making in your business—and have a way to act on them.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-16 pt-12 border-t border-linen/20">
          <h2 className="font-display font-bold text-2xl md:text-[36px] tracking-tight leading-[1.1]">
            You don&apos;t need a finished project idea to get started.
          </h2>
          <ul className="mt-8 space-y-6">
            {[
              {
                title: "I'm exploring AI.",
                body: "You want to understand what it could do for your business and what deserves attention.",
              },
              {
                title: "Something needs to work better.",
                body: "A process, handoff, or information problem is taking more effort than it should.",
              },
              {
                title: "I have an idea.",
                body: "You see an opportunity for a better tool, service, or way of working and need help shaping it.",
              },
            ].map((item) => (
              <li key={item.title}>
                <p className="font-sans text-[16px] font-semibold text-linen">{item.title}</p>
                <p className="font-sans text-[16px] text-bone/80 leading-relaxed mt-1">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="font-sans text-[16px] text-bone/85 mt-8">
            All three are valid starting points.{" "}
            <Link href={siteConfig.primaryCta.href} className="text-linen font-semibold link-underline hover:text-bone">
              Tell me about your business
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
