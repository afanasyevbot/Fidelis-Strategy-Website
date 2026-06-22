// Fire a GA4 event if analytics is loaded. Safe no-op otherwise — e.g. before
// gtag initializes, or when the GA id isn't configured. Keep event names stable;
// they show up as conversions in GA4 (Admin → Events → mark as key event).
type GtagParams = Record<string, string | number | boolean>;

export function trackEvent(name: string, params: GtagParams = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", name, params);
  }
}
