export const BRIEF_BUSINESS_FAIL = "Tell me what the business does.";
export const BRIEF_EMAIL_FAIL = "I need an email address to follow up.";
export const BRIEF_STEP1_HELPER = "You don't need to know the tools, or even where to start.";

export const BRIEF_INTENTS = [
  {
    id: "explore" as const,
    label: "I want to understand where AI could help.",
    contextLabel: "Anything you would especially like to improve?",
  },
  {
    id: "process" as const,
    label: "I have a process I want to improve.",
    contextLabel: "What happens today that you would like to change?",
  },
  {
    id: "idea" as const,
    label: "I have an idea for a system or tool.",
    contextLabel: "What would you like the system to help you or your customers do?",
  },
] as const;

export type BriefIntent = (typeof BRIEF_INTENTS)[number]["id"];

export type BriefFields = {
  intent: BriefIntent;
  business: string;
  context: string;
  email: string;
};

export type BriefValidation =
  | { ok: true; intent: BriefIntent; business: string; context: string; email: string }
  | { ok: false; field: "business" | "email"; message: string };

const EMAIL_RE = /^\S+@\S+\.\S+$/;

export function intentLabel(intent: BriefIntent): string {
  return BRIEF_INTENTS.find((i) => i.id === intent)?.label ?? intent;
}

export function contextLabelForIntent(intent: BriefIntent): string {
  return BRIEF_INTENTS.find((i) => i.id === intent)?.contextLabel ?? "";
}

/** Legacy query links: map old leak slugs to intents without inventing diagnostic details. */
export function parseLegacyIntentQuery(raw: string | null | undefined): BriefIntent | null {
  const key = (raw ?? "").trim().toLowerCase();
  if (!key) return null;
  if (key === "other" || key === "explore" || key === "strategy") return "explore";
  if (key === "process" || key === "misfit" || key === "fragmented" || key === "friday" || key === "workaround") {
    return "process";
  }
  if (key === "idea" || key === "cold" || key === "followups" || key === "quiet" || key === "bus-factor" || key === "pipeline") {
    return "idea";
  }
  return null;
}

export function validateBriefField(
  field: "business" | "email",
  value: string,
): string | null {
  const trimmed = value.trim();
  if (field === "business") {
    return trimmed ? null : BRIEF_BUSINESS_FAIL;
  }
  return EMAIL_RE.test(trimmed) ? null : BRIEF_EMAIL_FAIL;
}

export function validateBrief(fields: BriefFields): BriefValidation {
  const business = fields.business.trim();
  const context = fields.context.trim();
  const email = fields.email.trim();

  const businessError = validateBriefField("business", business);
  if (businessError) return { ok: false, field: "business", message: businessError };
  const emailError = validateBriefField("email", email);
  if (emailError) return { ok: false, field: "email", message: emailError };

  return { ok: true, intent: fields.intent, business, context, email };
}

export function buildBriefPayload(
  fields: BriefFields,
  accessKey: string,
): Record<string, string> {
  const validated = validateBrief(fields);
  if (!validated.ok) {
    throw new Error(validated.message);
  }
  return {
    access_key: accessKey,
    subject: "New inquiry from Fidelis Strategy website",
    from_name: "Fidelis Strategy Inquiry",
    replyto: validated.email,
    form: "brief",
    intent: intentLabel(validated.intent),
    business: validated.business,
    context: validated.context || "(not provided)",
    email: validated.email,
  };
}
