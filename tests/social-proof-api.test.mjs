import assert from "node:assert/strict";
import test from "node:test";

import { __testables } from "../api/social-proof.js";

test("creates privacy-safe NEXT ONE purchase messages", () => {
  const now = Date.parse("2026-09-13T12:00:00.000Z");
  const messages = __testables.buildPurchaseMessages({
    contacts: [
      {
        attributes: { VORNAME: "Leonie" },
        modifiedAt: "2026-09-13T11:55:00.000Z",
      },
      {
        attributes: { FIRSTNAME: "Anna Maria" },
        createdAt: "2026-09-12T08:00:00.000Z",
      },
    ],
  }, now);

  assert.equal(messages.length, 2);
  assert.equal(messages[0].type, "purchase");
  assert.equal(messages[0].text, "Leonie hat sich für NEXT ONE entschieden.");
  assert.equal(messages[1].text, "Anna hat sich für NEXT ONE entschieden.");
  assert.doesNotMatch(JSON.stringify(messages), /email/i);
});

test("drops old purchases and hides invalid names", () => {
  const now = Date.parse("2026-09-13T12:00:00.000Z");
  const messages = __testables.buildPurchaseMessages({
    contacts: [
      {
        attributes: { FIRSTNAME: "123" },
        modifiedAt: "2026-09-13T11:55:00.000Z",
      },
      {
        attributes: { FIRSTNAME: "Maria" },
        modifiedAt: "2026-07-01T11:55:00.000Z",
      },
    ],
  }, now);

  assert.equal(messages.length, 1);
  assert.equal(messages[0].text, "Eine Kundin hat sich für NEXT ONE entschieden.");
});
