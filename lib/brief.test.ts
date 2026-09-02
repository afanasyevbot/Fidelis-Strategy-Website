import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  BRIEF_CHIPS,
  BRIEF_LEAK_FAIL,
  applyChipLeak,
  buildBriefPayload,
  validateBrief,
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

  it("rejects an empty business note", () => {
    const result = validateBrief({
      leak: "Every Friday we rebuild the same report by hand.",
      business: "   ",
      email: "paul@example.com",
    });
    assert.equal(result.ok, false);
    if (!result.ok) {
      assert.equal(result.field, "business");
    }
  });

  it("rejects a missing email", () => {
    const result = validateBrief({
      leak: "Every Friday we rebuild the same report by hand.",
      business: "Paradise Capital",
      email: "not-an-email",
    });
    assert.equal(result.ok, false);
    if (!result.ok) {
      assert.equal(result.field, "email");
    }
  });

  it("accepts trimmed leak, business, and email", () => {
    const result = validateBrief({
      leak: "  Every Friday we rebuild the same report by hand.  ",
      business: "  Paradise Capital, sell-side  ",
      email: "  paul@example.com  ",
    });
    assert.equal(result.ok, true);
    if (result.ok) {
      assert.equal(result.leak, "Every Friday we rebuild the same report by hand.");
      assert.equal(result.business, "Paradise Capital, sell-side");
      assert.equal(result.email, "paul@example.com");
    }
  });
});

describe("applyChipLeak", () => {
  const friday = BRIEF_CHIPS[0];
  const quiet = BRIEF_CHIPS[1];
  const pipeline = BRIEF_CHIPS[2];

  it("exposes the three tap-able examples with locked insert copy", () => {
    assert.equal(BRIEF_CHIPS.length, 3);
    assert.equal(friday.label, "Friday report, by hand");
    assert.equal(
      friday.insert,
      "Every Friday we rebuild the same report by hand. The numbers live in a few tools that don't talk to each other.",
    );
    assert.equal(quiet.label, "A deal that went quiet");
    assert.equal(
      quiet.insert,
      "A deal went quiet because follow-up lived in someone's head, not a system.",
    );
    assert.equal(pipeline.label, "Pipeline nobody trusts");
    assert.equal(
      pipeline.insert,
      "Nobody trusts the pipeline number. The CRM says one thing. The spreadsheet says another.",
    );
  });

  it("replaces when the leak box is empty", () => {
    const next = applyChipLeak("", friday.insert, null);
    assert.equal(next, friday.insert);
  });

  it("replaces when the leak box still holds the previous chip insert", () => {
    const next = applyChipLeak(friday.insert, quiet.insert, friday.insert);
    assert.equal(next, quiet.insert);
  });

  it("appends a sentence when the founder already typed their own leak", () => {
    const own = "We still price every deal in a spreadsheet";
    const next = applyChipLeak(own, pipeline.insert, null);
    assert.match(next, /We still price every deal in a spreadsheet/);
    assert.match(next, /Nobody trusts the pipeline number/);
    assert.notEqual(next, pipeline.insert);
  });
});

describe("buildBriefPayload", () => {
  it("posts as brief, not as an audit", () => {
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
  });
});
