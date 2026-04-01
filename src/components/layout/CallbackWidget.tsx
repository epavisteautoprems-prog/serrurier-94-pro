"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

type Status = "idle" | "sending" | "sent" | "error";

type FormState = {
  prenom: string;
  telephone: string;
  service: string;
};

function isNonEmpty(s: string) {
  return s.trim().length > 0;
}

function sanitizePhone(input: string) {
  return input.replace(/[^\d+]/g, "");
}

export function CallbackWidget() {
  const serviceOptions = useMemo(
    () => ["Urgence serrurier", ...SERVICES.map((s) => s.name), "Autre"] as const,
    [],
  );

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<FormState>({
    prenom: "",
    telephone: "",
    service: serviceOptions[0],
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isNonEmpty(form.prenom) || !isNonEmpty(form.telephone)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          prestation: form.service,
          urgence: "Oui - maintenant",
          ville: "",
          prenom: form.prenom,
          telephone: sanitizePhone(form.telephone),
          page: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error("bad_status");
      setStatus("sent");
      window.setTimeout(() => setOpen(false), 1200);
    } catch {
      setStatus("error");
    } finally {
      window.setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <div className="fixed bottom-24 right-5 z-40 md:bottom-28 md:right-8">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full border border-slate-200 bg-white/95 px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg backdrop-blur hover:bg-white"
        >
          Je veux être rappelé en 5 min →
        </button>
      ) : (
        <div className="w-[min(360px,calc(100vw-2.5rem))] rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">Formulaire urgence</p>
              <p className="mt-1 text-xs text-slate-600">
                Laissez votre numéro, on vous rappelle rapidement. Ou appelez{" "}
                <Link className="font-semibold text-brand-navy hover:underline" href={SITE_CONFIG.phoneHref}>
                  {SITE_CONFIG.phone}
                </Link>
                .
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-xl px-2 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100"
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>

          <form className="mt-4 grid gap-3" onSubmit={onSubmit}>
            <label className="grid gap-1">
              <span className="text-xs font-semibold text-slate-700">Prénom</span>
              <input
                value={form.prenom}
                onChange={(e) => setForm((f) => ({ ...f, prenom: e.target.value }))}
                className="h-10 rounded-xl border border-slate-300 px-3 text-sm"
                placeholder="Ex: Thomas"
                autoComplete="given-name"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-xs font-semibold text-slate-700">Téléphone</span>
              <input
                value={form.telephone}
                onChange={(e) => setForm((f) => ({ ...f, telephone: e.target.value }))}
                className="h-10 rounded-xl border border-slate-300 px-3 text-sm"
                placeholder="Ex: 01 87 66 71 26"
                inputMode="tel"
                autoComplete="tel"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-xs font-semibold text-slate-700">Service recherché</span>
              <select
                value={form.service}
                onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                className="h-10 rounded-xl border border-slate-300 bg-white px-3 text-sm"
              >
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-1 rounded-xl bg-brand-orange px-4 py-3 text-sm font-semibold text-white shadow-sm disabled:opacity-70"
            >
              {status === "sending"
                ? "Envoi…"
                : status === "sent"
                  ? "Envoyé ✓"
                  : "Je veux être rappelé en 5 min"}
            </button>
            {status === "error" ? (
              <p className="text-xs font-medium text-red-700">
                Vérifie ton prénom et ton numéro, puis réessaie.
              </p>
            ) : null}
          </form>
        </div>
      )}
    </div>
  );
}

