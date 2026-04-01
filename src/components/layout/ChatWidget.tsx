"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

type Status = "idle" | "sending" | "sent" | "error";

function sanitizePhone(input: string) {
  return input.replace(/[^\d+]/g, "");
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (prenom.trim().length === 0) {
      setStatus("error");
      return;
    }
    if (telephone.trim().length < 6) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          prestation: "Chat widget - rappel",
          urgence: "Oui - maintenant",
          ville: "",
          prenom,
          telephone: sanitizePhone(telephone),
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
    <div className="fixed bottom-5 right-24 z-40 hidden md:block">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full border border-slate-200 bg-white/95 px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg backdrop-blur hover:bg-white"
        >
          Besoin d’aide ? →
        </button>
      ) : (
        <div className="w-[360px] rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">Besoin d’un serrurier urgent ?</p>
              <p className="mt-1 text-xs text-slate-600">
                Laisse ton numéro, on te rappelle. Ou appelle{" "}
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
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="h-10 rounded-xl border border-slate-300 px-3 text-sm"
                autoComplete="given-name"
                placeholder="Ex: Thomas"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-xs font-semibold text-slate-700">Téléphone</span>
              <input
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="h-10 rounded-xl border border-slate-300 px-3 text-sm"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Ex: 01 87 66 71 26"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-xl bg-brand-orange px-4 py-3 text-sm font-semibold text-white shadow-sm disabled:opacity-70"
            >
              {status === "sending" ? "Envoi…" : status === "sent" ? "Envoyé ✓" : "Me rappeler"}
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

