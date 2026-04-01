"use client";

import { useEffect, useMemo, useState } from "react";

type ToastItem = {
  name: string;
  ville: string;
  deltaMinutes: number;
};

function pick<T>(arr: readonly T[], seed: number) {
  return arr[seed % arr.length]!;
}

function buildItems(): readonly ToastItem[] {
  const names = ["Ahmed", "Karim", "Sophie", "Nadia", "Julie", "Mehdi"] as const;
  const villes = ["Créteil", "Vitry-sur-Seine", "Vincennes", "Villejuif", "Champigny-sur-Marne", "Saint-Maur-des-Fossés"] as const;
  const minutes = [2, 3, 5, 7, 9, 12] as const;
  return minutes.map((m, idx) => ({
    name: pick(names, idx),
    ville: pick(villes, idx * 7 + 3),
    deltaMinutes: m,
  }));
}

export function SocialProofToast() {
  const items = useMemo(() => buildItems(), []);
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), 5000);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = window.setInterval(() => setIdx((x) => (x + 1) % items.length), 15000);
    return () => window.clearInterval(t);
  }, [items.length, visible]);

  if (!visible) return null;

  const item = items[idx]!;
  return (
    <div className="fixed bottom-5 left-5 z-40 hidden sm:block">
      <div className="max-w-xs rounded-2xl border border-slate-200 bg-white/95 p-4 text-xs text-slate-700 shadow-lg backdrop-blur">
        <p className="font-semibold text-slate-900">Activité récente</p>
        <p className="mt-1">
          <span className="font-semibold">{item.name}</span> de{" "}
          <span className="font-semibold">{item.ville}</span> vient d’appeler il y a{" "}
          <span className="font-semibold">{item.deltaMinutes} minutes</span>.
        </p>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="mt-3 text-xs font-semibold text-brand-navy hover:underline"
        >
          Masquer
        </button>
      </div>
    </div>
  );
}

