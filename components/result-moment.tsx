"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Client-reported Weeks → Minutes emphasis. All text is visible on first paint;
 * one viewport entry animation for arrow/underline when motion is allowed.
 */
export function ResultMoment({ className = "" }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [motionReady, setMotionReady] = useState(false);
  const [emphasized, setEmphasized] = useState(false);
  const playedRef = useRef(false);

  useEffect(() => {
    setMotionReady(true);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || playedRef.current) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setEmphasized(true);
      playedRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || playedRef.current) return;
        playedRef.current = true;
        requestAnimationFrame(() => setEmphasized(true));
        observer.disconnect();
      },
      { threshold: 0.35 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`result-moment ${motionReady ? "has-motion" : ""} ${emphasized ? "is-emphasized" : ""} ${className}`.trim()}
      aria-label="Client-reported buyer-list creation result: weeks to minutes"
    >
      <p className="result-context">Buyer-list creation</p>
      <div className="result-compare" aria-hidden="true">
        <span className="result-from">Weeks</span>
        <span className="result-arrow" aria-hidden="true">→</span>
        <span className="result-to-wrap">
          <span className="result-to">Minutes</span>
          <span className="result-underline" />
        </span>
      </div>
      <p className="result-claim">Client-reported result.</p>
    </div>
  );
}
