export function TrustBar() {
  const items = [
    { title: "Certifié A2P", desc: "Serrures & cylindres haute sécurité" },
    { title: "Garantie décennale", desc: "Blindage & pose encadrés" },
    { title: "Assurance RC Pro", desc: "Interventions couvertes" },
    { title: "Intervention 20 min", desc: "Val-de-Marne (94) entier" },
  ] as const;

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4 container-safe">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-slate-200 p-4">
            <p className="text-sm font-semibold text-slate-900">✓ {i.title}</p>
            <p className="mt-1 text-xs text-slate-600">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

