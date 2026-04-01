"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SITE_CONFIG, VILLES_94 } from "@/lib/constants";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first?.isIntersecting) setInView(true);
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

function AnimatedNumber({ to, durationMs }: { to: number; durationMs: number }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, durationMs]);

  return <span>{val.toLocaleString("fr-FR")}</span>;
}

export function StatsSection() {
  const stats = useMemo<readonly Stat[]>(
    () => [
      { value: SITE_CONFIG.interventionsCount, label: "Interventions réalisées", suffix: "+" },
      { value: 20, label: "Délai moyen d’intervention", suffix: " min" },
      { value: Math.round(SITE_CONFIG.rating * 10) / 10, label: "Note Google moyenne", suffix: "/5" },
      { value: VILLES_94.length, label: "Villes couvertes dans le 94" },
    ],
    [],
  );

  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="bg-brand-navy text-white">
      <div ref={ref} className="mx-auto max-w-6xl px-4 py-12 container-safe">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
              <p className="text-3xl font-bold tracking-tight">
                {inView ? <AnimatedNumber to={s.value} durationMs={900} /> : 0}
                {s.suffix ?? ""}
              </p>
              <p className="mt-2 text-sm text-white/90">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

