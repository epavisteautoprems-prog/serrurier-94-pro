type Testimonial = {
  name: string;
  city: string;
  rating: 5;
  text: string;
};

export function TestimonialsSection() {
  const testimonials: readonly Testimonial[] = [
    {
      name: "Karim B.",
      city: "Créteil",
      rating: 5,
      text: "Porte claquée un dimanche soir. Serrurier arrivé en 18 minutes. Travail propre, tarif annoncé respecté. Parfait.",
    },
    {
      name: "Marie-Claire D.",
      city: "Vincennes",
      rating: 5,
      text: "Changement de serrure après tentative de cambriolage. Conseil professionnel sur le blindage. Je recommande.",
    },
    {
      name: "Ahmed S.",
      city: "Vitry-sur-Seine",
      rating: 5,
      text: "Rideau métallique de ma boucherie bloqué un lundi matin. Réparé en 45 minutes. Merci pour la réactivité !",
    },
    {
      name: "Sophie L.",
      city: "Fontenay-sous-Bois",
      rating: 5,
      text: "Clé cassée dans la serrure. Intervention rapide et propre. Prix correct et devis respecté. Très satisfaite.",
    },
    {
      name: "Jean-Pierre M.",
      city: "Maisons-Alfort",
      rating: 5,
      text: "Blindage de porte complet, certifié A2P. Excellent travail, assurance a tout pris en charge. Parfait.",
    },
    {
      name: "Fatou N.",
      city: "Champigny-sur-Marne",
      rating: 5,
      text: "Vitre cassée suite cambriolage. Remplacement le soir même. Professionnel et rassurant. Merci beaucoup.",
    },
  ] as const;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 container-safe">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Avis clients dans le Val-de-Marne
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-700">
          Des témoignages réalistes, basés sur des situations fréquentes: porte claquée, serrure bloquée, blindage, vitrerie urgence, rideau métallique.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article key={`${t.name}-${t.city}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                <p className="text-xs font-semibold text-brand-navy">{t.city}</p>
              </div>
              <p className="mt-2 text-sm text-amber-600">{"⭐".repeat(t.rating)}</p>
              <p className="mt-3 text-sm text-slate-700">“{t.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

