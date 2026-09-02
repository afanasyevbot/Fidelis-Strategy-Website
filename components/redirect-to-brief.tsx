"use client";

import { useEffect } from "react";

/** Client fallback for local/dev. Production 301 lives in public/.htaccess. */
export function RedirectToBrief() {
  useEffect(() => {
    window.location.replace("/brief/");
  }, []);
  return (
    <p className="p-8 font-sans text-ink">
      Redirecting to the First System Brief…
    </p>
  );
}
