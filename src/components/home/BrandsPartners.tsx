import Image from "next/image";

type Brand = {
  name: string;
  desc: string;
  logo: { src: string; alt: string };
};

export function BrandsPartners() {
  const brands: readonly Brand[] = [
    {
      name: "Fichet",
      desc: "Référence historique en haute sécurité: serrures multipoints, solutions pour portes blindées et besoins assurance, avec un niveau de finition reconnu.",
      logo: { src: "/brands/fichet.webp", alt: "Logo Fichet – marque partenaire serrurerie" },
    },
    {
      name: "Mul-T-Lock",
      desc: "Cylindres et systèmes de verrouillage orientés résistance et contrôle des copies de clés. Souvent choisi pour des besoins renforcés en logement et en pro.",
      logo: { src: "/brands/mul-t-lock.webp", alt: "Logo Mul-T-Lock – marque partenaire serrurerie" },
    },
    {
      name: "Picard",
      desc: "Solutions robustes pour portes et blindages, avec des ensembles cohérents (porte + serrure) lorsque l’objectif est un renforcement global et durable.",
      logo: { src: "/brands/picard.webp", alt: "Logo Picard – marque partenaire serrurerie" },
    },
    {
      name: "JPM",
      desc: "Marque très présente en remplacement et dépannage: serrures, cylindres, pièces compatibles, utile pour des interventions rapides et efficaces sur le 94.",
      logo: { src: "/brands/jpm.webp", alt: "Logo JPM – marque partenaire serrurerie" },
    },
    {
      name: "Vachette",
      desc: "Écosystème large et compatible: cylindres, serrures multipoints, solutions courantes en immeuble. Bon compromis en rénovation et sécurisation.",
      logo: { src: "/brands/vachette.webp", alt: "Logo Vachette – marque partenaire serrurerie" },
    },
    {
      name: "Abloy",
      desc: "Cylindres très techniques et durables, adaptés à des besoins exigeants (copropriété, contrôle d’accès, pro). Excellent sur la longévité et la résistance.",
      logo: { src: "/brands/abloy.webp", alt: "Logo Abloy – marque partenaire serrurerie" },
    },
    {
      name: "Mottura",
      desc: "Solutions orientées sécurité et multipoints, pertinentes sur certaines configurations de portes. Utilisée lorsque l’objectif est une fermeture plus résistante.",
      logo: { src: "/brands/mottura.webp", alt: "Logo Mottura – marque partenaire serrurerie" },
    },
    {
      name: "Bricard",
      desc: "Marque reconnue en habitat, avec des cylindres et serrures fiables. Souvent choisie en remplacement après perte de clés ou en montée en gamme.",
      logo: { src: "/brands/bricard.webp", alt: "Logo Bricard – marque partenaire serrurerie" },
    },
  ] as const;

  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-4 py-12 container-safe">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Nos marques partenaires</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          Le bon matériel dépend de votre porte, de votre budget et parfois des exigences de l’assurance. Voici les marques que l’on rencontre le plus souvent en Val-de-Marne (94) et que nous pouvons intégrer dans une sécurisation cohérente.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((b) => (
            <article key={b.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex h-32 w-full items-center justify-center bg-white p-6">
                <Image
                  src={b.logo.src}
                  alt={b.logo.alt}
                  width={220}
                  height={80}
                  sizes="220px"
                  className="h-auto w-auto max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-slate-900">{b.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

