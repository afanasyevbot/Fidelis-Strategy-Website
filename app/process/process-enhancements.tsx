"use client";

import { useEffect } from "react";

/** Diagram entrance emphasis and sticky-nav offset sync for /process/ only. */
export function ProcessEnhancements() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const diagrams = Array.from(document.querySelectorAll<HTMLElement>("[data-process-diagram]"));

    if (diagrams.length && !reduced) {
      const played = new WeakSet<HTMLElement>();
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const el = entry.target as HTMLElement;
            if (!entry.isIntersecting || played.has(el)) continue;
            played.add(el);
            el.classList.add("is-revealed");
          }
        },
        { threshold: 0.35, rootMargin: "-8% 0px" },
      );
      diagrams.forEach((el) => observer.observe(el));
      cleanups.push(() => observer.disconnect());
    } else {
      diagrams.forEach((el) => el.classList.add("is-revealed"));
    }

    const stageLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-process-stage]"));
    const stages = Array.from(document.querySelectorAll<HTMLElement>(".process-stage"));
    const rail = document.querySelector<HTMLElement>(".process-rail");

    if (stages.length && stageLinks.length) {
      const syncStages = () => {
        const header = document.querySelector<HTMLElement>(".site-header");
        const headerHeight = header?.offsetHeight ?? 72;
        const railHeight = rail && window.matchMedia("(min-width: 1024px)").matches ? rail.offsetHeight : 0;
        const offset = headerHeight + railHeight + 24;
        let current = stages[0]?.id ?? "";

        for (const stage of stages) {
          if (stage.getBoundingClientRect().top <= offset) current = stage.id;
        }

        stages.forEach((stage) => {
          stage.classList.toggle("is-current", stage.id === current);
        });
        stageLinks.forEach((link) => {
          const href = link.getAttribute("href")?.slice(1);
          const active = href === current;
          link.classList.toggle("is-current", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      };

      window.addEventListener("scroll", syncStages, { passive: true });
      window.addEventListener("resize", syncStages);
      syncStages();
      cleanups.push(() => {
        window.removeEventListener("scroll", syncStages);
        window.removeEventListener("resize", syncStages);
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
