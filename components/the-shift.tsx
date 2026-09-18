import Link from "next/link";
import { Reveal } from "./reveal";

const START_PATHS = [
  {
    href: "/brief/?intent=explore-ai",
    title: "I'm exploring AI.",
    body: "You want to know what it could do for your business.",
  },
  {
    href: "/brief/?intent=improve-process",
    title: "Something needs to work better.",
    body: "A process, handoff, or information gap needs attention.",
  },
  {
    href: "/brief/?intent=build-idea",
    title: "I have an idea.",
    body: "You see an opportunity and need help shaping it.",
  },
] as const;

export function TheShift() {
  return (
    <section className="bg-bone text-ink py-11 md:py-14">
      <div className="mx-auto w-[min(1216px,calc(100%-80px))] grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-[105px]">
        <Reveal>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-moss-olive mb-6">
            Why look at this now?
          </p>
          <h2 className="font-display font-semibold text-[33px] md:text-[40px] leading-[1.12] tracking-[-0.045em] text-deep-olive max-w-[480px] mb-6">
            The advantage isn&apos;t having AI.
            <br />
            It&apos;s putting it to work.
          </h2>
          <div className="space-y-[18px] text-[15px] md:text-[16px] leading-[1.65] text-ink/85">
            <p>
              When a competitor can respond faster, prepare work with less manual effort, or take on more business without sacrificing service, that changes what you&apos;re competing against.
            </p>
            <p>
              You don&apos;t need to chase every tool. You do need to understand which improvements are worth making in your business—and have a way to act on them.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60} className="pt-1">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-moss-olive mb-5">
            There&apos;s more than one starting point
          </p>
          <div>
            {START_PATHS.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className="polish-row flex justify-between items-center gap-6 border-t border-deep-olive/25 py-5 md:py-6 px-1 -mx-1 rounded-sm group"
              >
                <div>
                  <h3 className="font-display text-[21px] md:text-[23px] font-semibold tracking-[-0.035em] group-hover:underline underline-offset-4">
                    {path.title}
                  </h3>
                  <p className="text-[13px] text-moss-olive mt-2">{path.body}</p>
                </div>
                <span className="text-2xl shrink-0" data-arrow aria-hidden>↗</span>
              </Link>
            ))}
            <div className="border-t border-deep-olive/25" />
          </div>
          <p className="text-[12px] font-medium mt-4 text-ink/80">
            You don&apos;t need a finished project idea to get started.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
