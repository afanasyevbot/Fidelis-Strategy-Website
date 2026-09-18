"use client";

import { useEffect } from "react";

/** Sticky stage-rail highlight for /process/ only. */
export function ProcessEnhancements() {
  useEffect(() => {
    const stageLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-process-stage]"));
    const stages = Array.from(document.querySelectorAll<HTMLElement>(".process-stage"));

    if (!stages.length || !stageLinks.length) return;

    const syncStages = () => {
      const header = document.querySelector<HTMLElement>(".site-header");
      const headerHeight = header?.offsetHeight ?? 72;
      const offset = headerHeight + 24;
      let current = stages[0]?.id ?? "";

      for (const stage of stages) {
        if (stage.getBoundingClientRect().top <= offset) current = stage.id;
      }

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

    return () => {
      window.removeEventListener("scroll", syncStages);
      window.removeEventListener("resize", syncStages);
    };
  }, []);

  return null;
}
