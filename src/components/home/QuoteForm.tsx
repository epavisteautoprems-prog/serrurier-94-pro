"use client";

import { useMemo, useState } from "react";
import { SERVICES, SITE_CONFIG, VILLES_94 } from "@/lib/constants";

type PrestationValue =
  | "Ouverture de porte"
  | "Changement de serrure"
  | "Blindage de porte"
  | "Rideau métallique"
  | "Vitrier urgence"
  | "Volet roulant"
  | "Autre";

type UrgenceValue = "Oui - maintenant" | "Non - rendez-vous";

type QuotePayload = {
  prestation: PrestationValue;
  urgence: UrgenceValue;
  ville: string;
  prenom: string;
  telephone: string;
  page: string;
};

type ApiOk = { ok: true };
type ApiErr = { ok: false; error: string };

function isApiOk(x: unknown): x is ApiOk {
  if (!x || typeof x !== "object") return false;
  return (x as { ok?: unknown }).ok === true;
}

function isApiErr(x: unknown): x is ApiErr {
  if (!x || typeof x !== "object") return false;
  return (x as { ok?: unknown; error?: unknown }).ok === false && typeof (x as { error?: unknown }).error === "string";
}

const PRESTATIONS: readonly PrestationValue[] = [
  "Ouverture de porte",
  "Changement de serrure",
  "Blindage de porte",
  "Rideau métallique",
  "Vitrier urgence",
  "Volet roulant",
  "Autre",
] as const;

const URGENCES: readonly UrgenceValue[] = ["Oui - maintenant", "Non - rendez-vous"] as const;

export function QuoteForm({ defaultVille }: { defaultVille?: string }) {
  const villeOptions = useMemo(() => VILLES_94.map((v) => v.name), []);
  const [prestation, setPrestation] = useState<PrestationValue>(PRESTATIONS[0]);
  const [urgence, setUrgence] = useState<UrgenceValue>(URGENCES[0]);
  const [ville, setVille] = useState<string>(defaultVille ?? villeOptions[0] ?? "Créteil");
  const [prenom, setPrenom] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const payload: QuotePayload = {
      prestation,
      urgence,
      ville,
      prenom: prenom.trim(),
      telephone: telephone.trim(),
      page: typeof window !== "undefined" ? window.location.href : SITE_CONFIG.url,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: unknown = await res.json().catch(() => null);
      if (res.ok && isApiOk(data)) {
        setStatus("sent");
        setMessage("Demande envoyée. Un serrurier vous rappelle rapidement.");
        setPrenom("");
        setTelephone("");
      } else if (isApiErr(data)) {
        setStatus("error");
        setMessage(data.error);
      } else {
        setStatus("error");
        setMessage("Impossible d’envoyer la demande. Réessayez ou appelez-nous.");
      }
    } catch {
      setStatus("error");
      setMessage("Erreur réseau. Réessayez ou appelez-nous.");
    }
  }

  const servicesHint = SERVICES.map((s) => s.name).join(" • ");

  return (
    <section id="devis" className="bg-brand-bg">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 container-safe">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Devis gratuit en 2 minutes
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            {servicesHint}. Décrivez votre besoin: on vous annonce un prix clair avant toute intervention.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">Urgence ?</p>
            <p className="mt-1 text-sm text-slate-600">
              Si c’est bloquant (porte claquée, clé cassée, vitre brisée), appelez directement:
            </p>
            <a
              className="mt-3 inline-flex rounded-xl bg-brand-orange px-4 py-3 text-sm font-semibold text-white shadow-sm"
              href={SITE_CONFIG.phoneHref}
            >
              📞 {SITE_CONFIG.phone}
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <label className="grid gap-1">
              <span className="text-xs font-semibold text-slate-700">Type de prestation</span>
              <select
                value={prestation}
                onChange={(e) => setPrestation(e.target.value as PrestationValue)}
                className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900"
              >
                {PRESTATIONS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-1">
              <span className="text-xs font-semibold text-slate-700">Urgence ?</span>
              <select
                value={urgence}
                onChange={(e) => setUrgence(e.target.value as UrgenceValue)}
                className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900"
              >
                {URGENCES.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-1">
              <span className="text-xs font-semibold text-slate-700">Ville (94)</span>
              <select
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900"
              >
                {villeOptions.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1">
                <span className="text-xs font-semibold text-slate-700">Prénom</span>
                <input
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  required
                  className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900"
                  placeholder="Ex: Sarah"
                  autoComplete="given-name"
                />
              </label>
              <label className="grid gap-1">
                <span className="text-xs font-semibold text-slate-700">Téléphone</span>
                <input
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  required
                  className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900"
                  placeholder="06 12 34 56 78"
                  inputMode="tel"
                  autoComplete="tel"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-xl bg-brand-navy px-5 py-3 text-sm font-semibold text-white shadow-sm transition disabled:opacity-60"
            >
              {status === "loading" ? "Envoi en cours..." : "Obtenir mon devis gratuit →"}
            </button>

            {message ? (
              <p
                className={
                  status === "sent"
                    ? "text-sm font-medium text-emerald-700"
                    : status === "error"
                      ? "text-sm font-medium text-red-700"
                      : "text-sm text-slate-700"
                }
                role="status"
              >
                {message}
              </p>
            ) : null}

            <p className="text-xs text-slate-600">
              En envoyant ce formulaire, vous acceptez d’être rappelé pour votre demande. Devis gratuit avant intervention.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

