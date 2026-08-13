import Container from "../../../components/Container";

export default function PrivacyPage() {
  return (
    <section className="py-16">
      <Container>
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight">
            🛡️ Politique de confidentialité — BoB
          </h1>

          <p className="mt-6 text-zinc-300">
            L’application <strong>BoB (by Cosmos-lty)</strong> respecte la vie
            privée de ses utilisateurs. Cette politique explique quelles données
            sont collectées, pourquoi, et comment elles sont utilisées.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Dernière mise à jour : 13 août 2026
          </p>

          {/* 1 INTRO */}
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="text-zinc-400">
              BoB s’engage à protéger les données personnelles de ses utilisateurs
              et à respecter les réglementations en vigueur (RGPD).
            </p>
          </section>

          {/* 2 DONNEES */}
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">2. Données collectées</h2>

            <h3 className="text-lg font-medium mt-4">
              📌 Données fournies par l’utilisateur
            </h3>
            <ul className="list-disc pl-6 text-zinc-400 space-y-1">
              <li>Adresse e-mail (authentification)</li>
              <li>Pseudo / nom d’utilisateur</li>
              <li>Données liées aux chiens (nom, pedigree, résultats, photos)</li>
              <li>Résultats et informations liés aux expositions canines</li>
              <li>
                Photos et, pour les comptes Premium, documents ajoutés à une
                exposition : feuilles de jugement, cartons de récompense,
                coupes, flots, diplômes, PDF ou autres souvenirs
              </li>
            </ul>

            <p className="text-zinc-500 italic">
              Ces données sont nécessaires au fonctionnement de l’application.
            </p>

            <h3 className="text-lg font-medium mt-6">
              📌 Données collectées automatiquement
            </h3>
            <ul className="list-disc pl-6 text-zinc-400 space-y-1">
              <li>Identifiants techniques (Firebase ID)</li>
              <li>Données d’usage anonymisées (crash, performance)</li>
              <li>Données publicitaires (si publicité affichée)</li>
            </ul>
          </section>

          {/* 3 UTILISATION */}
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">3. Utilisation des données</h2>
            <ul className="list-disc pl-6 text-zinc-400 space-y-1">
              <li>Permettre la connexion utilisateur</li>
              <li>Sauvegarder les données chiens et expositions</li>
              <li>
                Conserver dans un espace privé les documents et souvenirs
                d’exposition ajoutés par les membres Premium
              </li>
              <li>
                Permettre à l’utilisateur de choisir les éléments qu’il
                souhaite partager
              </li>
              <li>Améliorer l’application</li>
              <li>Afficher des publicités (version gratuite uniquement)</li>
            </ul>
          </section>

          {/* 4 STOCKAGE */}
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">4. Stockage des données</h2>
            <p className="text-zinc-400">Les données sont stockées via :</p>
            <ul className="list-disc pl-6 text-zinc-400 space-y-1">
              <li>
                Firebase et Google Cloud, notamment Firebase Authentication,
                Cloud Firestore et Cloud Storage pour les documents Premium
              </li>
              <li>Cloudinary pour certaines images et cartes de partage</li>
            </ul>
            <p className="text-zinc-400">
              Les documents Premium sont stockés dans le bucket Google Cloud
              Storage configuré pour le projet BoB, situé aux États-Unis dans
              la région <strong>us-central1</strong>. Ce stockage peut donc
              entraîner un transfert ou un accès à des données en dehors de
              l’Espace économique européen. Les traitements techniques
              complémentaires peuvent également avoir lieu dans d’autres
              régions selon les services utilisés par ces prestataires, dans le
              respect des mécanismes et garanties applicables au titre du RGPD.
            </p>
            <p className="text-zinc-500 italic">
              L’accès aux documents est limité aux utilisateurs autorisés par
              les règles de sécurité Firebase. Les fournisseurs appliquent
              leurs propres mesures de sécurité et conditions de traitement.
            </p>
          </section>

          {/* 5 PARTAGE */}
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">5. Partage des données</h2>
            <p className="text-zinc-400">
              BoB ne revend aucune donnée personnelle.
            </p>
            <p className="text-zinc-400">Certaines données peuvent être traitées par :</p>
            <ul className="list-disc pl-6 text-zinc-400 space-y-1">
              <li>Google Firebase</li>
              <li>Google Mobile Ads (si publicité active)</li>
              <li>Cloudinary (stockage images)</li>
              <li>
                Les services de partage choisis par l’utilisateur, notamment
                Facebook, uniquement lorsqu’il demande un partage
              </li>
            </ul>
            <p className="text-zinc-400">
              Les documents d’exposition sont privés par défaut. Leur partage
              n’est pas automatique : l’utilisateur sélectionne lui-même les
              éléments qu’il souhaite envoyer ou publier.
            </p>
          </section>

          {/* 6 CONSERVATION */}
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">6. Conservation des données</h2>
            <ul className="list-disc pl-6 text-zinc-400 space-y-1">
              <li>Tant que le compte utilisateur existe</li>
              <li>
                Les documents d’une exposition sont supprimés lorsque
                l’exposition est supprimée
              </li>
              <li>Supprimées si le compte est supprimé (sauf obligations légales)</li>
            </ul>
            <p className="text-zinc-400">
              Les fichiers peuvent subsister temporairement dans les sauvegardes
              techniques des prestataires, selon leurs propres délais de
              conservation et de suppression.
            </p>
          </section>

          {/* 7 DROITS */}
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">7. Droits des utilisateurs</h2>
            <p className="text-zinc-400">
              Conformément au RGPD, vous pouvez :
            </p>
            <ul className="list-disc pl-6 text-zinc-400 space-y-1">
              <li>Accéder à vos données</li>
              <li>Demander modification ou suppression</li>
              <li>Demander export de vos données</li>
            </ul>
            <p className="text-zinc-400">
              Contact : <span className="font-medium">bob@cosmos-lty.fr</span>
            </p>
          </section>

          {/* 8 PUB */}
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">8. Publicité</h2>
            <p className="text-zinc-400">
              BoB peut afficher des publicités via Google Ads. Ces services peuvent
              utiliser des identifiants publicitaires anonymes.
            </p>
          </section>

          {/* 9 MODIFS */}
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">9. Modifications</h2>
            <p className="text-zinc-400">
              Cette politique peut être mise à jour à tout moment.
            </p>
          </section>

          {/* 10 CONTACT */}
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">10. Contact</h2>
            <p className="text-zinc-400">
              📧 bob@cosmos-lty.fr
            </p>
            <p className="text-zinc-400">
              🌐 www.cosmos-lty.fr
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
