import Container from "../../../components/Container";

export default function BobCaseStudy() {
  return (
    <section className="py-12">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-zinc-400">Case study</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            BoB — Carnet d’Expos Canines
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            BoB est une application mobile qui permet de gérer ses chiens, ses expositions, ses
            résultats et ses titres, avec un historique clair et exploitable (tri, filtres,
            automatisations).
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-base font-semibold">Problème</h2>
              <p className="mt-2 text-sm text-zinc-300">
                Centraliser des infos dispersées (expos, juges, résultats, titres) et éviter les
                erreurs, tout en restant très rapide à remplir sur mobile.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-base font-semibold">Solution</h2>
              <p className="mt-2 text-sm text-zinc-300">
                Un modèle de données structuré + UI orientée saisie + automatisations (titres,
                progression) + stockage images optimisé.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-base font-semibold">Stack</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Flutter • Firebase Auth • Firestore • Cloudinary • Google Mobile Ads
            </p>

            <h2 className="mt-6 text-base font-semibold">Highlights</h2>
            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
              <li>• Espace “fiche chien” + historiques (podiums, titres, expos)</li>
              <li>• Logique “Titles tracking” avec progression + validation manuelle/auto</li>
              <li>• Migration/normalisation des données Firestore (scripts Node)</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a className="underline decoration-white/20 underline-offset-4 hover:decoration-white/60" href="#">
              App Store
            </a>
            <a className="underline decoration-white/20 underline-offset-4 hover:decoration-white/60" href="#">
              Google Play
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
