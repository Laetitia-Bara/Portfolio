import Container from "../../../components/Container";

export default function PrivacyPage() {
  return (
    <section className="py-12">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">Politique de confidentialité</h1>
        <p className="mt-4 text-zinc-300">
          🛡️ Politique de Confidentialité — BoB
1. Introduction

L’application BoB (Best of Breed) respecte la vie privée de ses utilisateurs.
Cette politique explique quelles données sont collectées, pourquoi, et comment elles sont utilisées.

2. Données collectées
📌 Données fournies par l’utilisateur

Lors de l’utilisation de BoB, vous pouvez fournir :

Adresse e-mail (authentification)

Pseudo / nom d’utilisateur

Données liées aux chiens (nom, pedigree, résultats d’exposition, photos si ajoutées)

👉 Ces données sont nécessaires au fonctionnement de l’application.

📌 Données collectées automatiquement

BoB peut collecter :

Identifiants techniques (Firebase ID)

Données d’usage anonymisées (crash, performance)

Données publicitaires (si publicité affichée)

3. Utilisation des données

Les données servent uniquement à :

Permettre la connexion utilisateur

Sauvegarder les données chiens / expositions

Améliorer l’application

Afficher des publicités (si version gratuite)

4. Stockage des données

Les données sont stockées via :

Firebase (Google Cloud)

Cloudinary (stockage d’images)

Ces services appliquent leurs propres standards de sécurité.

5. Partage des données

BoB ne revend aucune donnée personnelle.

Certaines données peuvent être traitées par :

Google Firebase

Google Mobile Ads (si publicité active)

Cloudinary (stockage images)

6. Conservation des données

Les données sont conservées :

Tant que le compte utilisateur existe

Supprimées si le compte est supprimé (sauf obligations légales)

7. Droits des utilisateurs

Conformément au RGPD, vous pouvez :

Accéder à vos données

Demander modification ou suppression

Demander export de vos données

Contact : [ton email support BoB]

8. Publicité

BoB peut afficher des publicités via Google Ads.
Ces services peuvent utiliser des identifiants publicitaires anonymes.

9. Modifications

Cette politique peut être mise à jour à tout moment.

10. Contact

Pour toute question :
📧 [email support]
🌐 [nouveau lien portfolio / page BoB]
        </p>
      </Container>
    </section>
  );
}
