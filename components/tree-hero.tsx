"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { CtaButton } from "./cta-button";

/** Same grade as the original homepage hero | keeps the forest footage recognizable. */
const HERO_GRADE =
  "brightness(0.52) sepia(0.35) hue-rotate(22deg) saturate(1.15) contrast(1.08)";

const METHOD = [
  { num: "01", title: "Discover", body: "Learn the business." },
  { num: "02", title: "Design", body: "Choose what should change." },
  { num: "03", title: "Deploy", body: "Put the plan to work." },
  { num: "04", title: "Drive", body: "Refine through real use." },
] as const;

export function TreeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mediaState, setMediaState] = useState<"static" | "video">("static");
  const [toggleHidden, setToggleHidden] = useState(true);
  const [toggleLabel, setToggleLabel] = useState("Play background video");
  const pausedByUser = useRef(false);
  const inView = useRef(true);
  const failed = useRef(false);
  const attached = useRef(false);
  const playPending = useRef(false);

  const staticMode = useCallback(() => {
    if (typeof window === "undefined") return true;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean };
      mozConnection?: { saveData?: boolean };
      webkitConnection?: { saveData?: boolean };
    }).connection ??
      (navigator as Navigator & { mozConnection?: { saveData?: boolean } }).mozConnection ??
      (navigator as Navigator & { webkitConnection?: { saveData?: boolean } }).webkitConnection;
    return motion.matches || !!connection?.saveData;
  }, []);

  const mayRun = useCallback(() => {
    return !staticMode() && !document.hidden && inView.current && !pausedByUser.current && !failed.current;
  }, [staticMode]);

  const updateLabel = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setToggleLabel(video.paused ? "Play background video" : "Pause background video");
  }, []);

  const attach = useCallback(() => {
    const video = videoRef.current;
    if (!video || attached.current) return;
    attached.current = true;
    video.muted = true;
    video.defaultMuted = true;
    video.src = "/hero-video.mp4";
    video.preload = "metadata";
  }, []);

  const run = useCallback(() => {
    const video = videoRef.current;
    if (!video || !mayRun() || playPending.current || !video.paused) return;
    attach();
    playPending.current = true;
    const request = video.play();
    if (request && typeof request.then === "function") {
      request
        .then(() => {
          if (!mayRun()) video.pause();
        })
        .catch(() => {
          updateLabel();
        })
        .finally(() => {
          playPending.current = false;
        });
    } else {
      playPending.current = false;
    }
  }, [attach, mayRun, updateLabel]);

  const sync = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduced = staticMode();
    setToggleHidden(reduced || failed.current);
    if (reduced) {
      video.autoplay = false;
      video.removeAttribute("autoplay");
      video.pause();
      setMediaState("static");
    } else if (mayRun()) {
      video.autoplay = true;
      run();
    } else {
      video.pause();
    }
    updateLabel();
  }, [mayRun, run, staticMode, updateLabel]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlaying = () => {
      if (!mayRun()) {
        video.pause();
        return;
      }
      setMediaState("video");
      updateLabel();
    };
    const onPause = () => updateLabel();
    const onError = () => {
      failed.current = true;
      video.pause();
      setMediaState("static");
      setToggleHidden(true);
    };

    video.addEventListener("playing", onPlaying);
    video.addEventListener("pause", onPause);
    video.addEventListener("error", onError);

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => sync();
    if (motion.addEventListener) motion.addEventListener("change", onMotionChange);
    else motion.addListener(onMotionChange);

    const onVisibility = () => sync();
    document.addEventListener("visibilitychange", onVisibility);

    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window && heroRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          inView.current = entries[0]?.isIntersecting ?? true;
          sync();
        },
        { threshold: 0 },
      );
      observer.observe(heroRef.current);
    }

    sync();

    return () => {
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("error", onError);
      if (motion.removeEventListener) motion.removeEventListener("change", onMotionChange);
      else motion.removeListener(onMotionChange);
      document.removeEventListener("visibilitychange", onVisibility);
      observer?.disconnect();
    };
  }, [mayRun, sync, updateLabel]);

  function onToggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      pausedByUser.current = false;
      run();
    } else {
      pausedByUser.current = true;
      video.pause();
    }
    updateLabel();
  }

  return (
    <section
      ref={heroRef}
      className="tree-hero relative isolate overflow-hidden bg-forest-floor text-bone min-h-[85vh] flex flex-col justify-center py-[68px] md:py-[84px] pb-[62px] md:pb-[82px]"
      data-tree-hero
      data-media-state={mediaState}
    >
      <div className="tree-hero-media absolute inset-0 z-0 overflow-hidden bg-forest-floor pointer-events-none" aria-hidden>
        <Image
          src="/hero-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="tree-hero-poster object-cover object-center"
          style={{ objectPosition: "center center", filter: HERO_GRADE }}
        />
        <video
          ref={videoRef}
          id="tree-hero-video"
          className={`tree-hero-video absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ${
            mediaState === "video" ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: "center center", filter: HERO_GRADE }}
          poster="/hero-poster.jpg"
          muted
          loop
          playsInline
          preload="none"
          tabIndex={-1}
          disablePictureInPicture
        />
      </div>

      <div
        className="tree-hero-overlay absolute inset-0 z-[1] pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, rgba(18,34,23,0.9) 0%, rgba(18,34,23,0.83) 45%, rgba(18,34,23,0.69) 100%), linear-gradient(0deg, rgba(15,27,19,0.32), transparent 55%)",
        }}
      />

      <div className="relative z-[2] mx-auto w-[min(1216px,calc(100%-80px))] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_258px] gap-0 lg:gap-[88px] items-start hero-grid">
        <div className="hero-copy max-w-[820px]">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-bone mb-6">
            AI strategy + hands-on implementation
          </p>
          <h1 className="font-display font-medium text-[39px] sm:text-[52px] lg:text-[58px] xl:text-[64px] leading-[1.06] tracking-[-0.045em] max-w-[850px]">
            Growth strategy.
            <br />
            Custom AI systems.
            <br />
            <span className="text-linen">Built around your business.</span>
          </h1>
          <p className="hero-description mt-7 max-w-[635px] text-[16px] md:text-[18px] leading-[1.65] text-bone">
            I learn how your business works, identify opportunities to grow and work more efficiently, and build the systems to put the right changes into practice.
          </p>
          <p className="reassurance mt-6 text-[14px] md:text-[15px] font-medium text-bone">
            You don&apos;t need to know the tools, or even where to start.
          </p>
          <div className="actions mt-7 flex flex-wrap items-center gap-5 md:gap-7">
            <CtaButton href={siteConfig.primaryCta.href}>
              {siteConfig.primaryCta.label} →
            </CtaButton>
            <Link
              href={siteConfig.secondaryCta.href}
              className="inline-flex items-center gap-3 text-[12px] md:text-[14px] font-semibold border-b border-current pb-2 hover:opacity-75 transition-opacity"
            >
              {siteConfig.secondaryCta.label} <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>

        <aside
          aria-label="How the work connects"
          className="hero-aside hidden lg:block border-l border-linen/35 pl-8 mt-14"
        >
          <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.13em] text-bone mb-7 max-w-[205px] leading-[1.8]">
            From understanding to implementation
          </p>
          <div className="method-preview">
            {METHOD.map((step) => (
              <div key={step.num} className="flex gap-[18px] mb-[22px]">
                <span className="method-num text-[10px] font-semibold text-linen pt-1.5">{step.num}</span>
                <div>
                  <h2 className="font-display text-[22px] font-medium tracking-[-0.035em]">{step.title}</h2>
                  <p className="text-[12px] mt-1.5 text-linen">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/process/"
            className="inline-flex items-center gap-3 text-[12px] font-semibold border-b border-current pb-2 mt-1.5 hover:opacity-75"
          >
            Explore the process <span aria-hidden>↗</span>
          </Link>
        </aside>
      </div>

      {!toggleHidden ? (
        <button
          type="button"
          className="tree-hero-toggle"
          aria-controls="tree-hero-video"
          onClick={onToggle}
        >
          {toggleLabel}
        </button>
      ) : null}
    </section>
  );
}
