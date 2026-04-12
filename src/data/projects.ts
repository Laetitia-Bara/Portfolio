export type Project = {
  slug: string;
  name: string;
  headline: string;
  stack: string[];
  features: string[];
  links: { label: string; href: string }[];
  badge?: string;
};

export const projects: Project[] = [

  {
    slug: "bob",
    name: "BoB – Carnet d’Expos Canines",
    badge: "Production",
    headline:
      "Une app mobile pour suivre ses chiens, expos, résultats et titres, avec un historique fiable et partageable.",
    stack: ["Flutter", "Firebase Auth", "Firestore", "Cloudinary", "AdMob"],
    features: [
      "Gestion chiens / expos / résultats (UX mobile)",
      "Tracking titres & automatisations (progression)",
      "Stockage images optimisé (thumbnails, dossiers, etc.)",
    ],
    links: [
      { label: "Case study", href: "/projects/bob" },
      { label: "App Store", href: "https://apps.apple.com/app/bob-carnet-dexpos-canines/id6749371300" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=fr.cosmoslty.bob" },
    ],
  },

  {
    slug: "lofy",
    name: "Lofy – Gestion d’élevage canin",
    badge: "Web app",
    headline:
      "Une web app métier pour piloter son élevage canin : chiens, saillies, portées et rappels, avec une logique de données partagée avec BoB.",
    stack: ["Next.js", "TypeScript", "Firebase Auth", "Firestore", "Cloudinary"],
    features: [
      "Gestion chiens / saillies / portées (data croisée avec BoB)",
      "Tracking des vaccins des chiens (Rappels auto)",
      "Stockage images optimisé (thumbnails, dossiers, etc.)",
    ],
    links: [
      { label: "Case study", href: "/projects/lofy" },
      { label: "Web page", href: "https://lofy.cosmos-lty.fr" },
    ],
  },

  {
    slug: "tempo",
    name: "Tempo - Gestion des plages horaires de travail",
    badge: "Production",
    headline:
      "Une app mobile pour suivre ses horaires de travail et ses plages planifiées avec une vision claire des totaux hebdo et mensuels.",
    stack: ["Flutter", "Firebase Auth", "Firestore", "AdMob"],
    features: [
      "Gestion du contrat de travail / Jours travaillés / Total mensuel (UX mobile)",
      "Tracking du total d'heures mensuelles / hebdo (conformité contrat)",
      "Modifications manuelles des plages travaillées occasionnelles",
    ],
    links: [
      { label: "Case study", href: "/projects/tempo" },
      { label: "App Store", href: "https://apps.apple.com/us/app/tempoo/id6762077819" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=fr.cosmoslty.tempo" },
    ],
  },

  {
    slug: "weekendly",
    name: "WeekEndly",
    badge: "Full-stack",
    headline:
      "Un tableau météo orienté décision pour planifier les sorties du week-end (créneaux, lisibilité mobile, UX).",
    stack: ["React/Next", "Node", "API météo", "Vercel", "UI responsive"],
    features: [
      "Affichage par créneaux et synthèse “Top 3”",
      "Responsive mobile-first",
      "Déploiement & DNS (prod)",
    ],
    links: [
      { label: "Case study", href: "/weekendly" },
      { label: "Démo", href: "https://weekendly.cosmos-lty.fr" },
      { label: "Code", href: "https://github.com/Laetitia-Bara/weekendly" },
    ],
  },

  {
    slug: "bootcamp",
    name: "Bootcamp – MyMoviz / Yams",
    badge: "Bootcamp",
    headline:
      "Des mini-apps pour valider React (state, events, composants) + tests et rigueur front.",
    stack: ["React", "Next", "Jest / Testing Library", "CSS Modules"],
    features: [
      "Gestion state & interactions (like/dislike, dice, etc.)",
      "Composants réutilisables & rendu de listes",
      "Tests automatisés (TDD-friendly)",
    ],
    links: [
      { label: "Repo", href: "#" },
      { label: "Détails", href: "/projects" },
    ],
  },
];
