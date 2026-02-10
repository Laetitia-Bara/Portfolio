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
              <li>Améliorer l’application</li>
              <li>Afficher des publicités (version gratuite uniquement)</li>
            </ul>
          </section>

          {/* 4 STOCKAGE */}
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">4. Stockage des données</h2>
            <p className="text-zinc-400">Les données sont stockées via :</p>
            <ul className="list-disc pl-6 text-zinc-400 space-y-1">
              <li>Firebase (Google Cloud)</li>
              <li>Cloudinary (stockage d’images)</li>
            </ul>
            <p className="text-zinc-500 italic">
              Ces services appliquent leurs propres standards de sécurité.
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
            </ul>
          </section>

          {/* 6 CONSERVATION */}
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">6. Conservation des données</h2>
            <ul className="list-disc pl-6 text-zinc-400 space-y-1">
              <li>Tant que le compte utilisateur existe</li>
              <li>Supprimées si le compte est supprimé (sauf obligations légales)</li>
            </ul>
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
