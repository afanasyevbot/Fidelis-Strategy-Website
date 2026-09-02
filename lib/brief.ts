export const BRIEF_LEAK_FAIL = "Name the actual work that's still by hand.";
export const BRIEF_BUSINESS_FAIL = "Give me anything I can hang a brief on.";
export const BRIEF_EMAIL_FAIL = "I need an email that can receive the Brief.";
export const NAMED_LEAK_ADVANCE_MS = 180;
export const BRIEF_STEP1_LEAD =
  "I'll send a one-pager on the custom AI system that takes it.";

// Named taps are leak chrome, not SKUs / product cards.
// Something else is an open box. Fulfillment may map to any system type.
export const BRIEF_CHIPS = [
  {
    id: "friday-report",
    label: "Friday report, by hand",
    summary: "An operator dashboard. The report builds itself.",
    insert:
      "Every Friday we rebuild the same report by hand. The numbers live in a few tools that don't talk to each other.",
  },
  {
    id: "quiet-deal",
    label: "A deal that went quiet",
    summary: "A follow-up system. It doesn't live in someone's head.",
    insert:
      "A deal went quiet because follow-up lived in someone's head, not a system.",
  },
  {
    id: "untrusted-pipeline",
    label: "Pipeline nobody trusts",
    summary: "One number, from the system, not a spreadsheet.",
    insert:
      "Nobody trusts the pipeline number. The CRM says one thing. The spreadsheet says another.",
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

export function isRealLeak(value: string): boolean {
  const leak = value.trim();
  return leak.length >= MIN_LEAK_CHARS && /\s/.test(leak);
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
