import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  BRIEF_BUSINESS_FAIL,
  BRIEF_EMAIL_FAIL,
  BRIEF_INTENTS,
  BRIEF_STEP1_HELPER,
  buildBriefPayload,
  contextLabelForIntent,
  intentLabel,
  parseLegacyIntentQuery,
  validateBrief,
  validateBriefField,
} from "./brief.ts";

describe("validateBrief", () => {
  it("rejects an empty business description", () => {
    const result = validateBrief({
      intent: "explore",
      business: "   ",
      context: "",
      email: "paul@example.com",
    });
    assert.equal(result.ok, false);
    if (!result.ok) {
      assert.equal(result.field, "business");
      assert.equal(result.message, BRIEF_BUSINESS_FAIL);
    }
  });

  it("rejects an invalid email", () => {
    const result = validateBrief({
      intent: "process",
      business: "Paradise Capital, sell-side M&A",
      context: "Buyer list research",
      email: "not-an-email",
    });
    assert.equal(result.ok, false);
    if (!result.ok) {
      assert.equal(result.field, "email");
      assert.equal(result.message, BRIEF_EMAIL_FAIL);
    }
  });

  it("accepts a valid inquiry with optional empty context", () => {
    const result = validateBrief({
      intent: "idea",
      business: "Owner-operated HVAC business",
      context: "",
      email: "pat@example.com",
    });
    assert.equal(result.ok, true);
  });
});

describe("brief intents", () => {
  it("exposes the three v4 intent choices", () => {
    assert.equal(BRIEF_STEP1_HELPER, "You don't need to know the tools, or even where to start.");
    assert.equal(BRIEF_INTENTS.length, 3);
    assert.equal(BRIEF_INTENTS[0].label, "I want to understand where AI could help.");
    assert.equal(BRIEF_INTENTS[1].label, "I have a process I want to improve.");
    assert.equal(BRIEF_INTENTS[2].label, "I have an idea for a system or tool.");
  });

  it("maps legacy leak query params to intents without inventing details", () => {
    assert.equal(parseLegacyIntentQuery("fragmented"), "process");
    assert.equal(parseLegacyIntentQuery("cold"), "idea");
    assert.equal(parseLegacyIntentQuery("other"), "explore");
    assert.equal(parseLegacyIntentQuery("nope"), null);
  });

  it("returns context labels per intent", () => {
    assert.match(contextLabelForIntent("explore"), /especially like to improve/i);
    assert.match(contextLabelForIntent("process"), /happens today/i);
    assert.match(contextLabelForIntent("idea"), /system to help/i);
    assert.equal(intentLabel("explore"), BRIEF_INTENTS[0].label);
  });
});

describe("buildBriefPayload", () => {
  it("posts intent, business, context, and email separately", () => {
    const payload = buildBriefPayload(
      {
        intent: "explore",
        business: "Paradise Capital",
        context: "Research reuse",
        email: "paul@example.com",
      },
      "test-key",
    );

    assert.equal(payload.form, "brief");
    assert.equal(payload.access_key, "test-key");
    assert.equal(payload.email, "paul@example.com");
    assert.equal(payload.business, "Paradise Capital");
    assert.equal(payload.context, "Research reuse");
    assert.equal(payload.intent, BRIEF_INTENTS[0].label);
    assert.equal(payload.replyto, "paul@example.com");
    assert.equal("leak" in payload, false);
  });
});

describe("validateBriefField", () => {
  it("validates individual fields", () => {
    assert.equal(validateBriefField("business", ""), BRIEF_BUSINESS_FAIL);
    assert.equal(validateBriefField("email", "bad"), BRIEF_EMAIL_FAIL);
    assert.equal(validateBriefField("business", "A plumbing company"), null);
  });
});
