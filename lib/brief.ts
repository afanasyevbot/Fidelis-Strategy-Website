export const BRIEF_LEAK_FAIL = "Name the actual work that's still by hand.";

export const BRIEF_CHIPS = [
  {
    id: "friday-report",
    label: "Friday report, by hand",
    insert:
      "Every Friday we rebuild the same report by hand. The numbers live in a few tools that don't talk to each other.",
  },
  {
    id: "quiet-deal",
    label: "A deal that went quiet",
    insert:
      "A deal went quiet because follow-up lived in someone's head, not a system.",
  },
  {
    id: "untrusted-pipeline",
    label: "Pipeline nobody trusts",
    insert:
      "Nobody trusts the pipeline number. The CRM says one thing. The spreadsheet says another.",
  },
] as const;

export type BriefChip = (typeof BRIEF_CHIPS)[number];

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

export function validateBrief(fields: BriefFields): BriefValidation {
  const leak = fields.leak.trim();
  const business = fields.business.trim();
  const email = fields.email.trim();

  if (leak.length < MIN_LEAK_CHARS || !/\s/.test(leak)) {
    return { ok: false, field: "leak", message: BRIEF_LEAK_FAIL };
  }
  if (!business) {
    return { ok: false, field: "business", message: "Tell me something about the business." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, field: "email", message: "Enter a working email." };
  }

  return { ok: true, leak, business, email };
}

export function applyChipLeak(
  current: string,
  insert: string,
  lastChipInsert: string | null,
): string {
  const trimmed = current.trim();
  if (!trimmed || (lastChipInsert !== null && trimmed === lastChipInsert.trim())) {
    return insert;
  }
  const sep = /[.!?]$/.test(trimmed) ? " " : ". ";
  return `${trimmed}${sep}${insert}`;
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
