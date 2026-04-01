import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

type Reason = {
  title: string;
  text: string;
};

export function WhyChooseUs() {
  const reasons: readonly Reason[] = [
    {
      title: "Prix transparents et fixes",
      text:
        "Quand on cherche un serrurier val-de-marne, le stress vient rarement de l’intervention elle‑même: il vient de l’incertitude sur le prix. Notre règle est simple: un tarif annoncé avant déplacement, puis confirmé sur place avant de commencer. Pour une ouverture porte Val-de-Marne (porte claquée, clé oubliée, serrure bloquée), on vous explique le scénario le plus probable et ce qui peut faire évoluer le prix (porte blindée, multipoints, cylindre haute sécurité). Ce cadre évite les mauvaises surprises et permet de décider sereinement. Notre objectif est d’être un serrurier pas cher 94 au sens le plus important: un service juste, cohérent, et sans lignes cachées. Vous savez ce qui est inclus (déplacement, diagnostic, main d’œuvre) et ce qui relève d’un remplacement validé par vous. Dans le Val-de-Marne, un serrurier 94 urgence doit être rapide, mais aussi clair: la transparence est une vraie sécurité.",
    },
    {
      title: "Certification A2P officielle",
      text:
        "La certification A2P n’est pas un slogan: c’est un repère de résistance à l’effraction, souvent demandé par les assurances. En tant que serrurier agréé Val-de-Marne, nous vous aidons à choisir une solution cohérente (cylindre renforcé, protection de cylindre, serrure multipoints) plutôt qu’un suréquipement inutile. Une serrure A2P bien posée, bien réglée, et associée à un bâti solide améliore réellement le niveau de sécurité. Dans le 94, les besoins varient: appartement en étage, rez-de-chaussée exposé, résidence fermée, commerce. On adapte le niveau de protection au risque, au budget et aux exigences du contrat. Résultat: un blindage porte Val-de-Marne 94 ou une serrure renforcée devient un investissement pertinent, pas une dépense impulsive. Le serrurier val-de-marne le plus efficace n’est pas celui qui vend “le plus”, c’est celui qui installe “le juste”.",
    },
    {
      title: "Garantie décennale",
      text:
        "Sur les travaux de renfort et de blindage, la confiance se gagne sur le long terme. La garantie décennale est un engagement structurant: elle protège le client et impose une exigence de qualité. Quand vous investissez dans un blindage porte Val-de-Marne 94 (ou des renforts structurels), vous devez obtenir un travail durable: ajustements propres, fixations adaptées, fermeture fluide, cohérence entre porte, bâti, paumelles et serrure. Un serrurier val-de-marne sérieux ne se contente pas de “poser”: il règle, teste, et valide. C’est aussi ce qui réduit les pannes et les interventions répétées. Notre approche est de sécuriser sans fragiliser l’usage quotidien: une porte doit se fermer sans forcer, sinon l’usure revient vite. Pour le client, c’est simple: vous bénéficiez d’un résultat stable, documenté, et garanti. Et en cas de dossier assurance, les justificatifs sont clairs et exploitables.",
    },
    {
      title: "Techniciens qualifiés et assurés",
      text:
        "La serrurerie mélange technique, précision et responsabilité. Un serrurier 94 urgence intervient parfois en pleine nuit, dans un parking sous-sol, ou après une tentative d’effraction: il faut des gestes sûrs, un diagnostic rapide et une exécution propre. Nos techniciens sont qualifiés et assurés, ce qui compte autant pour vous que pour l’assurance. La différence se voit sur les détails: protéger la porte, éviter d’abîmer le bâti, limiter la casse, expliquer les options avant d’agir. Dans le Val-de-Marne, un serrurier agréé Val-de-Marne doit aussi savoir gérer les contraintes de copropriété (portes d’entrée, boîtes aux lettres, accès) et les demandes de professionnels (rideaux métalliques, sécurisation). En pratique, on vous dépanne vite, mais on prend le temps de faire les choses correctement. C’est la meilleure façon d’être un serrurier pas cher 94: éviter les erreurs coûteuses et les retours.",
    },
    {
      title: "Matériel professionnel haut de gamme",
      text:
        "Un bon résultat dépend de la main… et des outils. Pour l’ouverture porte Val-de-Marne, le matériel professionnel permet souvent de privilégier des techniques non destructives quand c’est pertinent, et d’intervenir proprement sur des cylindres plus exigeants. Pour un changement serrure 94, on choisit des références cohérentes avec la porte et l’usage: cylindre adapté à l’épaisseur, protection, compatibilité multipoints, niveau de résistance. Le haut de gamme n’est pas un luxe si votre contexte l’exige (rez-de-chaussée, antécédent d’effraction, assurance). Mais on n’impose jamais une option “premium” par défaut. Le serrurier val-de-marne performant, c’est celui qui met le bon niveau de sécurité au bon endroit. En complément, un matériel de pose et de réglage sérieux améliore aussi le confort: fermeture fluide, alignement, réduction du jeu de porte. Et ça, au quotidien, c’est la vraie qualité.",
    },
    {
      title: "Remboursement assurance facilité",
      text:
        "Après effraction, vol de clés ou vandalisme, l’assurance peut couvrir une partie des frais selon votre contrat. Ce qui fait la différence, c’est un dossier propre. Nous fournissons des documents exploitables: devis, facture détaillée, et références de matériel remplacé si nécessaire. Pour un serrurier val-de-marne, ce point est essentiel: le client ne doit pas se battre avec une facture vague. En pratique, on vous aide à comprendre les étapes: photos, déclaration, justificatifs, puis choix du matériel adapté (souvent cylindre renforcé et protection, parfois changement serrure 94 complet). Pour un blindage porte Val-de-Marne 94, on cadre aussi le projet avec un devis clair et une description de l’intervention. Un serrurier agréé Val-de-Marne ne promet pas “l’assurance paye tout”, il vous donne une base solide pour maximiser vos chances, en restant transparent sur franchises et plafonds.",
    },
    {
      title: "Aucun frais de déplacement caché",
      text:
        "Beaucoup de litiges en serrurerie viennent d’un mot: “déplacement”. Notre position est simple: le déplacement est annoncé au téléphone et intégré au devis. Si le contexte est particulier (accès difficile, parking sous-sol, horaires), on le dit avant. C’est une règle d’honnêteté, mais aussi une règle d’efficacité: le serrurier val-de-marne qui cache des frais perd la confiance, et la confiance est la base d’une intervention sereine. Pour une ouverture porte Val-de-Marne, un changement serrure 94 ou une sécurisation après effraction, vous devez pouvoir comparer et décider. Nous assumons un modèle clair: un prix annoncé, une intervention maîtrisée, et une facture nette. C’est aussi ce qui permet de rester un serrurier pas cher 94, au sens d’un service au bon prix, sans surcoûts “sur place”.",
    },
    {
      title: "Disponible 24h/24 même jours fériés",
      text:
        "Une porte claquée ne choisit pas l’heure, et une urgence arrive souvent le week-end. Notre organisation est pensée pour répondre vite: serrurier 94 urgence, 24h/24, y compris jours fériés. Cela couvre les besoins les plus critiques: ouverture porte Val-de-Marne, clé cassée, serrure bloquée, mise en sécurité après effraction. Pour les professionnels, l’enjeu est souvent la fermeture du local ou l’ouverture du commerce: chaque minute compte. Être un serrurier val-de-marne disponible ne signifie pas “faire vite et mal”: cela signifie pouvoir intervenir rapidement tout en gardant une méthode propre (diagnostic, devis, validation, action). Vous obtenez une réponse, un prix annoncé, et une solution adaptée. Et si la situation demande un renforcement (cylindre, changement serrure 94, blindage porte Val-de-Marne 94), on explique clairement les options avant de décider.",
    },
  ] as const;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 container-safe">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Pourquoi nous choisir ?</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          Si vous tapez “serrurier val-de-marne” sur Google, vous verrez des dizaines de promesses. La différence se fait sur la transparence, la qualité de pose, la cohérence sécurité/assurance et la capacité à gérer l’urgence sans stress.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {reasons.map((r) => (
            <article key={r.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{r.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-brand-navy p-8 text-white">
          <h3 className="text-xl font-bold tracking-tight">Besoin d’un serrurier 94 urgence ?</h3>
          <p className="mt-3 max-w-2xl text-sm text-white/90">
            Appelez maintenant: devis gratuit, prix annoncés, intervention rapide Val-de-Marne.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={SITE_CONFIG.phoneHref}
              className="rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-semibold text-white shadow-sm"
            >
              📞 {SITE_CONFIG.phone}
            </Link>
            <Link
              href="/tarifs"
              className="rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white"
            >
              Voir les tarifs →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

