import { faqPageJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

type QA = { q: string; a: string };

export function FaqSection() {
  const qa: readonly QA[] = [
    {
      q: "Quel est le prix d'une ouverture de porte dans le 94 ?",
      a: "Dès 89€ TTC en journée. Devis gratuit avant intervention. Prix fixe annoncé au téléphone.",
    },
    {
      q: "Combien de temps pour arriver ?",
      a: "En moyenne 20 minutes dans tout le Val-de-Marne. Disponible 24h/24 7j/7.",
    },
    {
      q: "Intervenez-vous la nuit et le week-end ?",
      a: "Oui, 24h/24 et 7j/7 y compris jours fériés, sans supplément caché.",
    },
    {
      q: "Qu'est-ce qu'une serrure A2P certifiée ?",
      a: "C’est une certification officielle indiquant la résistance aux effractions. Elle est souvent exigée par les assurances.",
    },
    {
      q: "Comment se passe un blindage de porte ?",
      a: "Diagnostic gratuit, devis écrit, pose en demi-journée selon configuration. Garantie décennale incluse.",
    },
    {
      q: "Vous travaillez avec les assurances ?",
      a: "Oui. Nous fournissons devis et factures pour votre dossier assurance, avec un remboursement facilité selon contrat.",
    },
    {
      q: "Peut-on changer une serrure sans propriétaire ?",
      a: "En location, le locataire peut changer la serrure mais doit remettre un double au propriétaire (sauf cas particuliers).",
    },
    {
      q: "Quel délai pour un blindage de porte ?",
      a: "Souvent le jour même ou le lendemain selon la disponibilité et le type de blindage.",
    },
    {
      q: "Réparez-vous les rideaux métalliques de commerce ?",
      a: "Oui, tous types: manuels, motorisés, grilles. Intervention en urgence pour les commerces.",
    },
    {
      q: "Comment éviter les faux serruriers ?",
      a: "Vérifiez identité et véhicule pro, demandez un devis écrit avant travaux, et refusez toute pression ou surcoût non annoncé.",
    },
    {
      q: "Quelle garantie sur les travaux ?",
      a: "Garantie pièces et main d’œuvre selon intervention, et garantie décennale sur les travaux de blindage concernés.",
    },
    {
      q: "Intervenez-vous pour les copropriétés ?",
      a: "Oui: particuliers et professionnels (syndics, gardiens, gestionnaires d’immeubles).",
    },
    {
      q: "Prix d'un double de clé dans le 94 ?",
      a: "À partir de 15€ selon le type de clé. Les clés brevetées peuvent nécessiter une commande.",
    },
    {
      q: "Que faire si ma clé est cassée dans la serrure ?",
      a: "N’essayez pas de forcer. Appelez-nous: nous extrayons la clé sans abîmer la serrure dans la majorité des cas.",
    },
    {
      q: "Intervenez-vous en parking souterrain ?",
      a: "Oui. Nous avons l’équipement adapté pour les accès difficiles et parkings en sous-sol.",
    },
    {
      q: "Faites-vous l'ouverture de porte sans casser ?",
      a: "Oui quand c’est possible. Selon le type de serrure et la situation, on privilégie les techniques non destructives.",
    },
    {
      q: "Y a-t-il des frais de déplacement ?",
      a: "Le déplacement est annoncé au téléphone et intégré au devis. Aucun coût surprise sur place.",
    },
    {
      q: "Acceptez-vous la carte bancaire ?",
      a: "Oui, selon intervention. Nous proposons aussi espèces. Une facture peut être fournie pour assurance.",
    },
    {
      q: "Pouvez-vous sécuriser après cambriolage ?",
      a: "Oui: mise en sécurité immédiate, remplacement serrure/cylindre, renforts, et conseils A2P.",
    },
    {
      q: "Travaillez-vous toutes marques ?",
      a: "Oui, nous intervenons sur la plupart des marques du marché (cylindres, serrures multi-points, etc.).",
    },
    {
      q: "Faites-vous les portes blindées ?",
      a: "Oui. Ouverture, dépannage et remplacement de serrures adaptées aux portes blindées, avec options A2P.",
    },
    {
      q: "Proposez-vous un rendez-vous non urgent ?",
      a: "Oui. Pour une amélioration de sécurité (blindage, serrure 3/5 points), on planifie un créneau selon vos disponibilités.",
    },
    {
      q: "Peut-on être remboursé par l'assurance ?",
      a: "Souvent oui (selon contrat et contexte). Nous fournissons les documents utiles: devis, facture, références matériel.",
    },
    {
      q: "Intervenez-vous aussi pour vitrerie urgence ?",
      a: "Oui: remplacement vitrage, mise en sécurité, options anti-effraction selon besoin.",
    },
    {
      q: "Quel est le délai pour remplacer une serrure ?",
      a: "Souvent le jour même selon stock et modèle, sinon sous 24–48h pour références spécifiques.",
    },
  ] as const;

  const jsonLd = faqPageJsonLd(qa.map((x) => ({ question: x.q, answer: x.a })));

  return (
    <section className="bg-brand-bg">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-6xl px-4 py-12 container-safe">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">FAQ serrurier 94</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-700">
          Réponses rapides aux questions fréquentes sur la serrurerie dans le Val-de-Marne: prix, délais, A2P, assurances et urgences.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {qa.map((item) => (
            <details key={item.q} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                <span className="mr-2 text-brand-navy">+</span>
                {item.q}
              </summary>
              <p className="mt-3 text-sm text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

