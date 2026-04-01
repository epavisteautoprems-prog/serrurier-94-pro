"use client";

import { useEffect, useMemo, useState } from "react";
import { VILLES_94 } from "@/lib/constants";

type Item = {
  minutesAgo: number;
  ville: string;
};

function pick<T>(arr: readonly T[], idx: number) {
  return arr[idx % arr.length]!;
}

export function LiveInterventionCounter() {
  const items = useMemo(() => {
    const minutes = [3, 6, 9, 12, 15, 18, 21, 24] as const;
    return minutes.map((m, idx) => ({
      minutesAgo: m,
      ville: pick(
        VILLES_94.map((v) => v.name),
        idx * 11 + 5,
      ),
    })) satisfies readonly Item[];
  }, []);

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setIdx((x) => (x + 1) % items.length), 4 * 60 * 1000);
    return () => window.clearInterval(t);
  }, [items.length]);

  const item = items[idx]!;
  return (
    <div className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs text-slate-700 container-safe">
        <p>
          🔑 <span className="font-semibold">Dernière intervention</span> : il y a{" "}
          <span className="font-semibold">{item.minutesAgo} minutes</span> à{" "}
          <span className="font-semibold">{item.ville}</span>
        </p>
        <p className="hidden sm:block">
          Mise à jour automatique
        </p>
      </div>
    </div>
  );
}

