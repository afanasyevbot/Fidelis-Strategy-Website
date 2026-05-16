"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  /** ms delay before animation starts once in view */
  delay?: number;
  /** Stagger children that have `data-reveal-child` */
  stagger?: boolean;
  /** Reveal direction */
  as?: "up" | "fade" | "right";
  className?: string;
  /** Render as a different element. Defaults to div. */
  tag?: "div" | "section" | "ul" | "li" | "article";
  /** rootMargin trigger; default fires when ~15% in view */
  rootMargin?: string;
};

/**
 * Scroll-triggered fade-up reveal.
 *
 * Why: gives sections a premium feel as the user scrolls. Honors
 * prefers-reduced-motion (renders visible immediately).
 */
export function Reveal({
  children,
  delay = 0,
  stagger = false,
  as = "up",
  className,
  tag = "div",
  rootMargin = "0px 0px -10% 0px",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin, threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  const Tag = tag as keyof React.JSX.IntrinsicElements;
  return (
    <Tag
      // @ts-expect-error – dynamic ref typing fine for our use
      ref={ref}
      data-reveal={as}
      data-revealed={shown ? "true" : "false"}
      data-stagger={stagger ? "true" : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}
