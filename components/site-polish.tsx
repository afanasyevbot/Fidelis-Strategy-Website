"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Shared progressive enhancements: reading progress, TOC, process rail. */
export function SitePolish() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    function bindReadingProgress() {
      const bar = document.querySelector<HTMLElement>("[data-reading-progress]");
      const body = document.querySelector<HTMLElement>(".article-content");
      if (!bar || !body) return null;

      const updateProgress = () => {
        const headerOffset = 72;
        const top = body.getBoundingClientRect().top + window.scrollY;
        const start = top - headerOffset;
        const end = top + body.offsetHeight - window.innerHeight;
        const range = Math.max(end - start, 1);
        const ratio = Math.min(1, Math.max(0, (window.scrollY - start) / range));
        bar.style.transform = `scaleX(${ratio})`;
      };

      window.addEventListener("scroll", updateProgress, { passive: true });
      window.addEventListener("resize", updateProgress);
      updateProgress();
      return () => {
        window.removeEventListener("scroll", updateProgress);
        window.removeEventListener("resize", updateProgress);
        bar.style.transform = "scaleX(0)";
      };
    }

    let unbindProgress: (() => void) | null = null;
    const attachProgress = () => {
      if (unbindProgress) return;
      unbindProgress = bindReadingProgress();
      if (unbindProgress) cleanups.push(unbindProgress);
    };
    attachProgress();
    const retryId = window.requestAnimationFrame(attachProgress);
    cleanups.push(() => window.cancelAnimationFrame(retryId));

    const articleBody = document.querySelector<HTMLElement>(".article-content");
    const tocLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".article-toc nav a[href^='#']"),
    );
    if (tocLinks.length && articleBody) {
      const headingIds = tocLinks
        .map((a) => a.getAttribute("href")?.slice(1))
        .filter(Boolean) as string[];
      const headings = headingIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => !!el);

      const syncToc = () => {
        const offset = 130;
        let activeId = headingIds[0];
        for (const heading of headings) {
          if (heading.getBoundingClientRect().top <= offset + 8) {
            activeId = heading.id;
          }
        }
        tocLinks.forEach((link) => {
          const match = link.getAttribute("href") === `#${activeId}`;
          link.classList.toggle("is-active", match);
          if (match) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      };
      window.addEventListener("scroll", syncToc, { passive: true });
      syncToc();
      cleanups.push(() => window.removeEventListener("scroll", syncToc));
    }

    const stages = Array.from(document.querySelectorAll<HTMLElement>(".process-stage"));
    const stageLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-process-stage]"),
    );
    if (stages.length && !document.querySelector(".process-page")) {
      const syncStages = () => {
        const offset = 120;
        let current = stages[0]?.id ?? "";
        for (const stage of stages) {
          if (stage.getBoundingClientRect().top <= offset + 20) current = stage.id;
        }
        stages.forEach((stage) => {
          stage.classList.toggle("is-current", stage.id === current);
        });
        stageLinks.forEach((link) => {
          const href = link.getAttribute("href")?.slice(1);
          link.classList.toggle("is-current", href === current);
        });
      };
      window.addEventListener("scroll", syncStages, { passive: true });
      syncStages();
      cleanups.push(() => window.removeEventListener("scroll", syncStages));
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
