(function (window, document) {
  "use strict";

  var defaults = {
    siteId: window.location.hostname,
    enabled: true,
    position: "bottom-right",
    delayMs: 5000,
    displayDurationMs: 6500,
    intervalMs: 4500,
    purchasePollMs: 30000,
    purchaseMessagesUrl: "",
    maxPerSession: 12,
    showCloseButton: true,
    messages: []
  };

  function merge(options) {
    var result = {};
    Object.keys(defaults).forEach(function (key) {
      result[key] = options && options[key] !== undefined ? options[key] : defaults[key];
    });
    return result;
  }

  function readNumber(key, fallback) {
    try {
      var value = Number(window.sessionStorage.getItem(key));
      return Number.isFinite(value) ? value : fallback;
    } catch (_) {
      return fallback;
    }
  }

  function readText(key, fallback) {
    try { return window.sessionStorage.getItem(key) || fallback; } catch (_) { return fallback; }
  }

  function writeSession(key, value) {
    try { window.sessionStorage.setItem(key, String(value)); } catch (_) {}
  }

  function readJson(key, fallback) {
    try {
      var value = JSON.parse(window.sessionStorage.getItem(key) || "null");
      return value || fallback;
    } catch (_) {
      return fallback;
    }
  }

  function normalizeMessage(message, index, fallbackType) {
    if (!message || typeof message.text !== "string" || !message.text.trim()) return null;
    var type = message.type === "purchase" ? "purchase" : fallbackType;
    return {
      id: String(message.id || type + "-" + index + "-" + message.text.slice(0, 24)),
      type: type,
      title: String(message.title || (type === "purchase" ? "Gerade gekauft" : "Eine Kundin schreibt")),
      text: message.text.trim(),
      occurredAt: message.occurredAt || ""
    };
  }

  function relativeTime(value) {
    var timestamp = Date.parse(value || "");
    if (!Number.isFinite(timestamp)) return "";
    var minutes = Math.max(1, Math.round((Date.now() - timestamp) / 60000));
    if (minutes < 60) return "vor " + minutes + (minutes === 1 ? " Minute" : " Minuten");
    var hours = Math.round(minutes / 60);
    if (hours < 24) return "vor " + hours + (hours === 1 ? " Stunde" : " Stunden");
    var days = Math.round(hours / 24);
    return "vor " + days + (days === 1 ? " Tag" : " Tagen");
  }

  function addStyles() {
    if (document.getElementById("tmf-social-proof-styles")) return;
    var style = document.createElement("style");
    style.id = "tmf-social-proof-styles";
    style.textContent =
      ".tmf-proof{position:fixed;z-index:2147483000;width:min(390px,calc(100vw - 32px));display:flex;align-items:flex-start;gap:14px;padding:18px 46px 18px 19px;border:1px solid rgba(129,70,63,.22);border-radius:12px;background:rgba(248,245,240,.98);color:#28221f;box-shadow:0 18px 48px rgba(75,54,45,.18);font-family:Mulish,Arial,sans-serif;opacity:0;transform:translateY(14px);transition:opacity .36s ease,transform .36s ease;box-sizing:border-box;pointer-events:none}" +
      ".tmf-proof[data-visible=true]{opacity:1;transform:translateY(0);pointer-events:auto}.tmf-proof[data-position=bottom-left]{left:16px;bottom:16px}.tmf-proof[data-position=bottom-right]{right:16px;bottom:16px}" +
      ".tmf-proof__mark{flex:0 0 auto;width:35px;height:35px;border-radius:50%;display:grid;place-items:center;background:#81463f;color:#fffdf9;font:600 17px Playfair,Georgia,serif}" +
      ".tmf-proof[data-type=purchase] .tmf-proof__mark{background:#b89560;font-family:Mulish,Arial,sans-serif;font-size:16px;font-weight:800}" +
      ".tmf-proof__content{min-width:0}.tmf-proof__title{display:block;margin:0 0 4px;font:800 11px/1.35 Mulish,Arial,sans-serif;letter-spacing:.13em;text-transform:uppercase;color:#81463f}.tmf-proof__time{font-weight:500;letter-spacing:0;text-transform:none;color:#746862}.tmf-proof__text{margin:0;font:400 13px/1.5 Mulish,Arial,sans-serif;color:#514743}" +
      ".tmf-proof__close{position:absolute;right:10px;top:9px;width:30px;height:30px;border:0;background:transparent;color:#6e655f;font:400 21px/1 Arial,sans-serif;cursor:pointer;border-radius:50%}.tmf-proof__close:hover,.tmf-proof__close:focus-visible{background:rgba(129,70,63,.08);outline:2px solid transparent}" +
      "@media(max-width:560px){.tmf-proof{left:12px!important;right:12px!important;bottom:12px!important;width:auto;transform:translateY(14px)!important}.tmf-proof[data-visible=true]{transform:translateY(0)!important}}" +
      "@media(prefers-reduced-motion:reduce){.tmf-proof{transition:none}}";
    document.head.appendChild(style);
  }

  function init(options) {
    var config = merge(options);
    var testimonials = (Array.isArray(config.messages) ? config.messages : [])
      .map(function (message, index) { return normalizeMessage(message, index, "testimonial"); })
      .filter(Boolean);
    if (!config.enabled || (!testimonials.length && !config.purchaseMessagesUrl)) return;

    var storageRoot = "tmf_proof_stream_v3_" + config.siteId;
    var countKey = storageRoot + "_count";
    var testimonialKey = storageRoot + "_testimonial";
    var nextTypeKey = storageRoot + "_next";
    var seenPurchasesKey = storageRoot + "_purchases";
    var shownCount = readNumber(countKey, 0);
    var testimonialIndex = readNumber(testimonialKey, 0);
    var nextType = readText(nextTypeKey, "testimonial");
    var seenPurchaseIds = readJson(seenPurchasesKey, []);
    if (!Array.isArray(seenPurchaseIds)) seenPurchaseIds = [];
    var purchases = [];
    var stopped = shownCount >= config.maxPerSession;
    var showing = false;
    var showTimer = 0;
    var hideTimer = 0;

    if (stopped) return;
    addStyles();

    var root = document.createElement("aside");
    root.className = "tmf-proof";
    root.dataset.position = config.position;
    root.dataset.visible = "false";
    root.setAttribute("role", "status");
    root.setAttribute("aria-live", "polite");
    root.setAttribute("aria-atomic", "true");
    root.innerHTML = '<span class="tmf-proof__mark" aria-hidden="true">M</span><div class="tmf-proof__content"><strong class="tmf-proof__title"></strong><p class="tmf-proof__text"></p></div>' +
      (config.showCloseButton ? '<button type="button" class="tmf-proof__close" aria-label="Hinweise schließen">×</button>' : '');
    document.body.appendChild(root);

    function unseenPurchase() {
      return purchases.find(function (message) { return seenPurchaseIds.indexOf(message.id) === -1; }) || null;
    }

    function nextMessage() {
      var testimonial = testimonialIndex < testimonials.length ? testimonials[testimonialIndex] : null;
      var purchase = unseenPurchase();
      var message = null;

      if (nextType === "purchase" && purchase) {
        message = purchase;
      } else if (nextType === "testimonial" && testimonial) {
        message = testimonial;
      } else {
        message = testimonial || purchase;
      }

      if (!message) return null;
      if (message.type === "purchase") {
        seenPurchaseIds.push(message.id);
        writeSession(seenPurchasesKey, JSON.stringify(seenPurchaseIds));
        nextType = "testimonial";
      } else {
        testimonialIndex += 1;
        writeSession(testimonialKey, testimonialIndex);
        nextType = "purchase";
      }
      writeSession(nextTypeKey, nextType);
      return message;
    }

    function canShowAnother() {
      return testimonialIndex < testimonials.length || Boolean(unseenPurchase());
    }

    function scheduleNext(delay) {
      if (stopped || showing || shownCount >= config.maxPerSession || !canShowAnother()) return;
      window.clearTimeout(showTimer);
      showTimer = window.setTimeout(showWhenClear, delay);
    }

    function hide(continueRotation) {
      window.clearTimeout(hideTimer);
      root.dataset.visible = "false";
      showing = false;
      if (continueRotation !== false) scheduleNext(config.intervalMs);
    }

    function stop() {
      stopped = true;
      writeSession(countKey, config.maxPerSession);
      window.clearTimeout(showTimer);
      hide(false);
    }

    function show() {
      var message = nextMessage();
      if (!message) return;
      var title = message.title;
      var time = message.type === "purchase" ? relativeTime(message.occurredAt) : "";
      root.dataset.type = message.type;
      root.querySelector(".tmf-proof__mark").textContent = message.type === "purchase" ? "✓" : "M";
      root.querySelector(".tmf-proof__title").innerHTML = "";
      root.querySelector(".tmf-proof__title").appendChild(document.createTextNode(title));
      if (time) {
        var timeNode = document.createElement("span");
        timeNode.className = "tmf-proof__time";
        timeNode.textContent = " · " + time;
        root.querySelector(".tmf-proof__title").appendChild(timeNode);
      }
      root.querySelector(".tmf-proof__text").textContent = message.text;
      showing = true;
      root.dataset.visible = "true";
      shownCount += 1;
      writeSession(countKey, shownCount);
      hideTimer = window.setTimeout(function () { hide(true); }, config.displayDurationMs);
    }

    function showWhenClear() {
      var consentDialog = document.getElementById("tmf-consent");
      if (consentDialog && !consentDialog.hidden) {
        showTimer = window.setTimeout(showWhenClear, 750);
        return;
      }
      show();
    }

    function normalizePurchases(payload) {
      var remoteMessages = Array.isArray(payload && payload.messages) ? payload.messages : [];
      if (!remoteMessages.length && payload && payload.enabled && payload.latestPurchaseAt) {
        remoteMessages = [{
          id: "latest-" + payload.latestPurchaseAt,
          type: "purchase",
          title: "Gerade gekauft",
          text: (String(payload.firstName || "").trim() || "Eine Kundin") + " hat sich für NEXT ONE entschieden.",
          occurredAt: payload.latestPurchaseAt
        }];
      }
      return remoteMessages
        .filter(function (message) { return message && message.enabled !== false; })
        .map(function (message, index) { return normalizeMessage(message, index, "purchase"); })
        .filter(Boolean)
        .map(function (message) { message.type = "purchase"; return message; });
    }

    function refreshPurchases() {
      if (!config.purchaseMessagesUrl || stopped) return Promise.resolve();
      return window.fetch(config.purchaseMessagesUrl, { headers: { accept: "application/json" } })
        .then(function (response) { return response.ok ? response.json() : null; })
        .then(function (payload) {
          if (!payload) return;
          purchases = normalizePurchases(payload);
          if (!showing && shownCount < config.maxPerSession) scheduleNext(0);
        })
        .catch(function () {});
    }

    var close = root.querySelector(".tmf-proof__close");
    if (close) close.addEventListener("click", stop);

    refreshPurchases().finally(function () { scheduleNext(config.delayMs); });
    if (config.purchaseMessagesUrl && config.purchasePollMs > 0) {
      window.setInterval(refreshPurchases, config.purchasePollMs);
    }
  }

  window.TMFSocialProof = { init: init };
})(window, document);
