import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  BRIEF_BUSINESS_FAIL,
  BRIEF_CHIPS,
  BRIEF_EMAIL_FAIL,
  BRIEF_LEAK_FAIL,
  BRIEF_STEP1_LEAD,
  NAMED_LEAK_ADVANCE_MS,
  buildBriefPayload,
  canContinueLeak,
  leakFromChoice,
  namedLeakAutoAdvances,
  validateBrief,
  validateBriefField,
} from "./brief.ts";

describe("validateBrief", () => {
  it("rejects a leak shorter than a real sentence", () => {
    const result = validateBrief({
      leak: "  by hand  ",
      business: "Paradise Capital, sell-side M&A",
      email: "paul@example.com",
    });
    assert.equal(result.ok, false);
    if (!result.ok) {
      assert.equal(result.field, "leak");
      assert.equal(result.message, BRIEF_LEAK_FAIL);
      assert.equal(result.message, "Name the actual work that's still by hand.");
    }
  });

  it("rejects an empty business note with the hang-a-brief copy", () => {
    const result = validateBrief({
      leak: "Every Friday we rebuild the same report by hand.",
      business: "   ",
      email: "paul@example.com",
    });
    assert.equal(result.ok, false);
    if (!result.ok) {
      assert.equal(result.field, "business");
      assert.equal(result.message, BRIEF_BUSINESS_FAIL);
      assert.equal(result.message, "Give me anything I can hang a brief on.");
    }
  });

  it("rejects a missing email with the receive-the-Brief copy", () => {
    const result = validateBrief({
      leak: "Every Friday we rebuild the same report by hand.",
      business: "Paradise Capital",
      email: "not-an-email",
    });
    assert.equal(result.ok, false);
    if (!result.ok) {
      assert.equal(result.field, "email");
      assert.equal(result.message, BRIEF_EMAIL_FAIL);
      assert.equal(result.message, "I need an email that can receive the Brief.");
    }
  });

  it("accepts a custom leak that matches none of the named taps", () => {
    const leak = "Quotes still live in three inboxes and nobody owns the follow-up.";
    const result = validateBrief({
      leak,
      business: "Owner-operated HVAC",
      email: "pat@example.com",
    });
    assert.equal(result.ok, true);
    assert.ok(BRIEF_CHIPS.every((chip) => chip.insert !== leak));
  });
});

describe("wizard leak choices", () => {
  it("exposes three leak-chrome taps, not a product catalog", () => {
    assert.equal(BRIEF_STEP1_LEAD, "I'll send a one-pager on the custom AI system that takes it.");
    assert.equal(BRIEF_CHIPS.length, 3);
    assert.equal(BRIEF_CHIPS[0].label, "Friday report, by hand");
    assert.equal(BRIEF_CHIPS[0].summary, "An operator dashboard. The report builds itself.");
    assert.equal(
      BRIEF_CHIPS[0].insert,
      "Every Friday we rebuild the same report by hand. The numbers live in a few tools that don't talk to each other.",
    );
    assert.equal(BRIEF_CHIPS[1].label, "A deal that went quiet");
    assert.equal(BRIEF_CHIPS[1].summary, "A follow-up system. It doesn't live in someone's head.");
    assert.equal(BRIEF_CHIPS[2].label, "Pipeline nobody trusts");
    assert.equal(BRIEF_CHIPS[2].summary, "One number, from the system, not a spreadsheet.");
    const chrome = JSON.stringify(BRIEF_CHIPS);
    assert.doesNotMatch(chrome, /workflow apps|custom CRM|custom CRMs|catalog/i);
    assert.ok(!("sku" in BRIEF_CHIPS[0]));
    assert.ok(!("product" in BRIEF_CHIPS[0]));
  });

  it("named leak tap fills the locked insert and auto-advances", () => {
    const friday = BRIEF_CHIPS[0];
    assert.equal(leakFromChoice(friday.id), friday.insert);
    assert.equal(namedLeakAutoAdvances(friday.id), true);
    assert.equal(NAMED_LEAK_ADVANCE_MS, 180);
    assert.equal(canContinueLeak(friday.insert), true);
  });

  it("Something else does not auto-advance and needs a real sentence", () => {
    assert.equal(namedLeakAutoAdvances("other"), false);
    assert.equal(leakFromChoice("other"), "");
    assert.equal(canContinueLeak("by hand"), false);
    assert.equal(canContinueLeak("Quotes still live in three inboxes."), true);
    assert.equal(
      validateBriefField("leak", "by hand"),
      "Name the actual work that's still by hand.",
    );
  });
});

describe("buildBriefPayload", () => {
  it("posts as brief with only leak, business, and email fields", () => {
    const payload = buildBriefPayload({
      leak: "Every Friday we rebuild the same report by hand.",
      business: "Paradise Capital",
      email: "paul@example.com",
    }, "test-key");

    assert.equal(payload.form, "brief");
    assert.equal(payload.access_key, "test-key");
    assert.equal(payload.email, "paul@example.com");
    assert.equal(payload.leak, "Every Friday we rebuild the same report by hand.");
    assert.equal(payload.business, "Paradise Capital");
    assert.equal(payload.replyto, "paul@example.com");
    assert.match(String(payload.subject), /brief/i);
    assert.doesNotMatch(String(payload.subject), /audit/i);
    assert.equal("name" in payload, false);
    assert.equal("phone" in payload, false);
    assert.equal("company" in payload, false);
    assert.equal("website" in payload, false);
    assert.equal("sku" in payload, false);
    assert.equal("product" in payload, false);
    assert.equal("system_type" in payload, false);
    const leadKeys = Object.keys(payload).filter((k) =>
      ["leak", "business", "email", "name", "phone", "company", "website", "what_to_buy"].includes(k),
    );
    assert.deepEqual(leadKeys.sort(), ["business", "email", "leak"]);
  });
});
