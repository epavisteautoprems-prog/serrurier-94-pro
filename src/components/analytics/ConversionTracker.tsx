"use client";

import { useEffect } from "react";

type EventMeta = Record<string, string>;

type TrackEventArgs = {
  name: string;
  href?: string;
  text?: string;
  meta?: EventMeta;
};

function safeText(x: string | null | undefined, max = 200) {
  const s = (x ?? "").trim().replace(/\s+/g, " ");
  return s ? s.slice(0, max) : undefined;
}

function getPath() {
  if (typeof window === "undefined") return undefined;
  return `${window.location.pathname}${window.location.search}`.slice(0, 200);
}

function sendEvent(args: TrackEventArgs) {
  const payload = {
    name: args.name,
    ts: Date.now(),
    path: getPath(),
    href: args.href?.slice(0, 400),
    text: args.text?.slice(0, 200),
    meta: args.meta,
  };

  const body = JSON.stringify(payload);
  if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon("/api/events", blob);
    return;
  }

  void fetch("/api/events", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => null);
}

function closestAnchor(el: Element | null): HTMLAnchorElement | null {
  let cur: Element | null = el;
  while (cur) {
    if (cur instanceof HTMLAnchorElement) return cur;
    cur = cur.parentElement;
  }
  return null;
}

export function ConversionTracker() {
  useEffect(() => {
    const attach = () => {
      const onClick = (e: MouseEvent) => {
        const target = e.target instanceof Element ? e.target : null;
        const a = closestAnchor(target);
        if (!a) return;

        const href = a.getAttribute("href") ?? "";
        const text = safeText(a.textContent);
        const aria = safeText(a.getAttribute("aria-label"));

        if (href.startsWith("tel:")) {
          sendEvent({ name: "tel_click", href, text: text ?? aria });
          return;
        }

        if (href === "/contact" || href.startsWith("/contact?")) {
          sendEvent({ name: "contact_click", href, text: text ?? aria });
          return;
        }

        if (href.includes("#devis")) {
          sendEvent({ name: "devis_anchor_click", href, text: text ?? aria });
          return;
        }
      };

      const onSubmit = (e: SubmitEvent) => {
        const form = e.target instanceof HTMLFormElement ? e.target : null;
        if (!form) return;
        const id = safeText(form.getAttribute("id"), 80);
        const action = safeText(form.getAttribute("action"), 200);
        const meta: EventMeta = {};
        if (id) meta.formId = id;
        if (action) meta.action = action;
        sendEvent({ name: "form_submit", meta });
      };

      window.addEventListener("click", onClick, { passive: true });
      window.addEventListener("submit", onSubmit, { passive: true });

      return () => {
        window.removeEventListener("click", onClick);
        window.removeEventListener("submit", onSubmit);
      };
    };

    const w = window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
    if (typeof w.requestIdleCallback === "function") {
      let cleanup: (() => void) | null = null;
      w.requestIdleCallback(
        () => {
          cleanup = attach();
        },
        { timeout: 1500 },
      );
      return () => cleanup?.();
    }

    const t = window.setTimeout(() => attach(), 700);
    return () => window.clearTimeout(t);
  }, []);

  return null;
}

