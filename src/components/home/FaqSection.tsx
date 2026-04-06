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
    {
      q: "Quel est le prix d’une ouverture de porte à Créteil ou Vincennes ?",
      a: "Les tarifs de base sont identiques sur le 94 (à partir de 89€ en journée selon configuration). Le devis est précisé au téléphone puis confirmé sur place: pas de grille “par ville” cachée, seulement la complexité réelle de la porte.",
    },
    {
      q: "Le prix change-t-il entre Vitry, Saint-Maur et Champigny ?",
      a: "Non pour la grille de base: ce qui fait varier le prix, c’est la porte (standard, blindée, multipoints) et l’urgence, pas le code postal. Le déplacement est annoncé dans le devis.",
    },
    {
      q: "Quel délai d’intervention pour le secteur de Fontenay / Vincennes ?",
      a: "Sur ces axes centraux, comptez souvent 15–25 minutes selon trafic. Nous annonçons un créneau réaliste au téléphone en fonction de l’heure et des accès (parking, résidence fermée).",
    },
    {
      q: "Et pour le sud du 94 (Sucy, Bonneuil, Chennevières) ?",
      a: "Les délais peuvent aller vers 30–45 minutes en fin de journée selon distance et embouteillages. En urgence, on priorise quand même la mise en sécurité et on vous indique l’ordre de passage.",
    },
    {
      q: "Quelles marques de serrures et cylindres proposez-vous ?",
      a: "Nous intervenons sur les grandes marques du marché (Fichet, Vachette, Bricard, Mul-T-Lock, Abus, Yale, etc.) et des équivalents certifiés. Le choix dépend de votre porte, de l’exigence A2P et du budget.",
    },
    {
      q: "Puis-je être remboursé par mon assurance habitation ?",
      a: "Souvent oui après effraction ou sinistre couvert, selon votre contrat. Nous fournissons devis et facture détaillée; gardez aussi l’avis de dépôt de plainte si demandé par l’assureur.",
    },
    {
      q: "L’assurance exige-t-elle une serrure A2P pour rembourser ?",
      a: "Parfois, surtout après effraction ou pour certains contrats. Nous vous indiquons si une certification A2P est pertinente pour votre dossier et proposons du matériel adapté.",
    },
    {
      q: "Quelle différence entre un artisan serrurier et une grande société nationale ?",
      a: "Un artisan local fixe souvent le prix avant intervention, connaît les accès du 94 et assure le suivi. Les grandes structures peuvent sous-traiter avec des tarifs opaques: exigez toujours un devis écrit et le détail des pièces.",
    },
    {
      q: "Comment comparer deux devis serrurerie dans le 94 ?",
      a: "Vérifiez la description des pièces (références, garantie), la main d’œuvre, le déplacement, et si le prix est ferme avant intervention. Méfiez-vous des tarifs “à partir de” sans visite ni photo.",
    },
    {
      q: "Proposez-vous des cylindres haute sécurité toutes marques ?",
      a: "Oui, selon compatibilité: cylindres européens, défenseurs, protections anti-crochetage. Nous recommandons un niveau cohérent avec votre porte et votre assurance.",
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

