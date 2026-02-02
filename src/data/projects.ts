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
    stack: ["Flutter", "Firebase Auth", "Firestore", "Cloudinary", "Ads"],
    features: [
      "Gestion chiens / expos / résultats (UX mobile)",
      "Tracking titres & automatisations (progression)",
      "Stockage images optimisé (thumbnails, dossiers, etc.)",
    ],
    links: [
      { label: "Case study", href: "/projects/bob" },
      { label: "App Store", href: "#" },
      { label: "Google Play", href: "#" },
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
      { label: "Démo", href: "https://weekendly.cosmos-lty.fr" },
      { label: "Code", href: "#" },
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
