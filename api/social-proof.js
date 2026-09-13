const BREVO_API_BASE = "https://api.brevo.com/v3";
const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return sendJson(res, 405, { ok: false, error: "Method not allowed" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const buyerListId = Number(process.env.NEXT_ONE_BUYER_LIST_ID);
  if (!apiKey || !Number.isInteger(buyerListId) || buyerListId < 1) {
    return sendJson(res, 200, { ok: true, enabled: false, messages: [] });
  }

  try {
    const response = await fetch(
      `${BREVO_API_BASE}/contacts/lists/${buyerListId}/contacts?limit=100&offset=0&sort=desc`,
      { headers: { accept: "application/json", "api-key": apiKey } },
    );
    if (!response.ok) throw new Error(`Brevo list lookup failed: ${response.status}`);

    const payload = await response.json();
    const messages = buildPurchaseMessages(payload, Date.now());
    res.setHeader("cache-control", "public, s-maxage=15, stale-while-revalidate=45");
    return sendJson(res, 200, { ok: true, enabled: true, messages });
  } catch (error) {
    console.error("NEXT ONE social proof lookup failed", error);
    return sendJson(res, 502, { ok: false, error: "Social proof unavailable", messages: [] });
  }
}

function buildPurchaseMessages(payload, now) {
  const contacts = Array.isArray(payload?.contacts) ? payload.contacts : [];
  const cutoff = now - THIRTY_DAYS;

  return contacts
    .map((contact) => ({
      contactId: contact?.id || "",
      firstName: getFirstName(contact),
      occurredAt: contact?.modifiedAt || contact?.createdAt || "",
    }))
    .filter(({ occurredAt }) => {
      const timestamp = Date.parse(occurredAt);
      return Number.isFinite(timestamp) && timestamp >= cutoff && timestamp <= now;
    })
    .sort((a, b) => Date.parse(b.occurredAt) - Date.parse(a.occurredAt))
    .slice(0, 8)
    .map(({ contactId, firstName, occurredAt }) => ({
      id: `next-one-purchase-${contactId || `${Date.parse(occurredAt)}-${firstName || "anonymous"}`}`,
      type: "purchase",
      title: "Gerade gekauft",
      text: `${firstName || "Eine Kundin"} hat sich für NEXT ONE entschieden.`,
      occurredAt,
      enabled: true,
    }));
}

function getFirstName(contact) {
  const attributes = contact?.attributes || {};
  const key = Object.keys(attributes).find((name) => /^(VORNAME|FIRST.?NAME|PRENOM|FNAME)$/i.test(name));
  const firstName = String(key ? attributes[key] : "").trim().split(/\s+/)[0].slice(0, 30);
  return /^[\p{L}][\p{L}'’-]*$/u.test(firstName) ? firstName : "";
}

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

export const __testables = { buildPurchaseMessages, getFirstName };
