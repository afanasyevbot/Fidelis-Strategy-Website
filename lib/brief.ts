export const BRIEF_LEAK_FAIL = "Name the actual work that's still manual or causing a bottleneck.";
export const BRIEF_BUSINESS_FAIL = "Give me anything I can hang a brief on.";
export const BRIEF_EMAIL_FAIL = "I need an email that can receive the Brief.";
export const NAMED_LEAK_ADVANCE_MS = 180;
export const BRIEF_STEP1_LEAD =
  "I'll send a one-pager on how we could solve it. Tap one, or write your own.";

export type LeakSlug = "fragmented" | "followups" | "bus-factor" | "cold" | "other";

// Named taps align with homepage pain cards. Chrome (summary) is wizard-only.
export const BRIEF_CHIPS = [
  {
    id: "fragmented-tools",
    slug: "fragmented" as const,
    label: "Nothing talks to anything",
    summary: "One system connects the numbers. No more copy-paste between tabs.",
    insert:
      "The numbers live in four tools that don't connect. The same work gets rebuilt by hand every week.",
  },
  {
    id: "followups-in-head",
    slug: "followups" as const,
    label: "Follow-ups depend on who remembers",
    summary: "A follow-up system. It doesn't live in someone's head.",
    insert:
      "Follow-ups depend on who remembers. When they're busy, it doesn't happen, and we never know what it cost.",
  },
  {
    id: "single-owner-process",
    slug: "bus-factor" as const,
    label: "Only one person knows how it works",
    summary: "The process lives in the system, not one person's head.",
    insert:
      "Only one person knows how it works. When they're out, busy, or gone, the work stalls or gets done wrong.",
  },
  {
    id: "cold-deals",
    slug: "cold" as const,
    label: "Deals that go cold while you're busy elsewhere",
    summary: "Follow-up in a system, not when someone finally has time.",
    insert:
      "Deals go cold while we're busy elsewhere. Follow-up wasn't in a system. By the time we got back, they'd already moved on.",
  },
] as const;

export type BriefChip = (typeof BRIEF_CHIPS)[number];
export type LeakChoice = BriefChip["id"] | "other";

export type BriefFields = {
  leak: string;
  business: string;
  email: string;
};

export type BriefValidation =
  | { ok: true; leak: string; business: string; email: string }
  | { ok: false; field: "leak" | "business" | "email"; message: string };

const EMAIL_RE = /^\S+@\S+\.\S+$/;
const MIN_LEAK_CHARS = 20;

function normalizeLeak(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Chatbot / deck / strategy as the whole ask is an offer, not a leak. */
export function isOfferOnlyAsk(value: string): boolean {
  const n = normalizeLeak(value);
  const offer =
    /\b(chat\s*bots?|chatbots?|gpts?)\b/.test(n) ||
    /\b(pitch\s*decks?|slide\s*decks?|decks?|powerpoints?|slides?)\b/.test(n) ||
    /\b(growth\s*strateg(?:y|ies)|strateg(?:y|ies)|strategic plans?)\b/.test(n);
  if (!offer) return false;
  const leakSignal =
    /\b(by hand|someone s head|someones head|spreadsheet|rebuild|follow ?up|pipeline|inbox|manual|every friday|tools that|living in|bottleneck|don t connect|go cold)\b/.test(
      n,
    );
  return !leakSignal;
}

export function isRealLeak(value: string): boolean {
  const leak = value.trim();
  if (leak.length < MIN_LEAK_CHARS || !/\s/.test(leak)) return false;
  if (isOfferOnlyAsk(leak)) return false;
  return true;
}

export function canContinueLeak(value: string): boolean {
  return isRealLeak(value);
}

export function namedLeakAutoAdvances(choice: LeakChoice): boolean {
  return choice !== "other";
}

export function leakFromChoice(choice: LeakChoice): string {
  if (choice === "other") return "";
  return BRIEF_CHIPS.find((chip) => chip.id === choice)?.insert ?? "";
}

export function parseLeakQuery(raw: string | null | undefined): LeakChoice | null {
  const key = (raw ?? "").trim().toLowerCase();
  if (key === "fragmented" || key === "friday") return "fragmented-tools";
  if (key === "followups" || key === "quiet") return "followups-in-head";
  if (key === "bus-factor" || key === "pipeline") return "single-owner-process";
  if (key === "cold") return "cold-deals";
  if (key === "other") return "other";
  return null;
}

export function briefHrefForSlug(slug: LeakSlug): string {
  return `/brief/?leak=${slug}`;
}

export function validateBriefField(
  field: "leak" | "business" | "email",
  value: string,
): string | null {
  const trimmed = value.trim();
  if (field === "leak") {
    return isRealLeak(trimmed) ? null : BRIEF_LEAK_FAIL;
  }
  if (field === "business") {
    return trimmed ? null : BRIEF_BUSINESS_FAIL;
  }
  return EMAIL_RE.test(trimmed) ? null : BRIEF_EMAIL_FAIL;
}

export function validateBrief(fields: BriefFields): BriefValidation {
  const leak = fields.leak.trim();
  const business = fields.business.trim();
  const email = fields.email.trim();

  const leakError = validateBriefField("leak", leak);
  if (leakError) return { ok: false, field: "leak", message: leakError };
  const businessError = validateBriefField("business", business);
  if (businessError) return { ok: false, field: "business", message: businessError };
  const emailError = validateBriefField("email", email);
  if (emailError) return { ok: false, field: "email", message: emailError };

  return { ok: true, leak, business, email };
}

export function buildBriefPayload(
  fields: BriefFields,
  accessKey: string,
): Record<string, string> {
  return {
    access_key: accessKey,
    subject: "New First System Brief request",
    from_name: "Fidelis Strategy Brief",
    replyto: fields.email,
    form: "brief",
    leak: fields.leak,
    business: fields.business,
    email: fields.email,
  };
}
