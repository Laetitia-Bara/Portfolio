export type ProjectAvailability = "public" | "demo" | "local" | "targeted";

export type ProjectPlatform = { availability: ProjectAvailability } & (
  | { kind: "web"; responsive?: boolean; pwa?: "available" | "targeted" }
  | { kind: "android" | "ios" | "cli" }
);

type ProjectStatuses =
  | readonly []
  | readonly ["design" | "prototype" | "development" | "production"]
  | readonly ["development" | "production", "refactoring"];

type ProjectDomain = "fullstack-web-mobile" | "backend-business" | "frontend-web";
type ProjectNature = "personal" | "professional" | "training";
type ProjectVisibility = "featured" | "catalog" | "draft";

export type ProjectTechnologyLogo =
  | "dart" | "flutter" | "firebase" | "react" | "typescript"
  | "nextjs" | "javascript" | "nodejs"
  | "java" | "spring-boot" | "python" | "postgresql"
  | "sqlite" | "php" | "symfony" | "vue";

export type ProjectExternalLink = {
  kind: "website" | "demo" | "googlePlay" | "appStore" | "github";
  href: `https://${string}`;
  label?: string;
};

type ProjectStack = {
  languages?: readonly string[];
  runtimes?: readonly string[];
  frameworks?: readonly string[];
  databases?: readonly string[];
  complementary?: readonly string[];
};

type ProjectVersionIdentity = {
  slug: string;
  name: string;
  summary: string;
};

type ProjectRelease = {
  statuses: ProjectStatuses;
  platforms: readonly ProjectPlatform[];
  implementedStack?: ProjectStack & {
    logos?:
      | readonly [ProjectTechnologyLogo]
      | readonly [ProjectTechnologyLogo, ProjectTechnologyLogo]
      | readonly [ProjectTechnologyLogo, ProjectTechnologyLogo, ProjectTechnologyLogo];
  };
  roadmap?: {
    stack?: ProjectStack;
    features?: readonly string[];
  };
  // Recruiter-facing destinations. Keep unresolved URLs out of this list.
  links: readonly ProjectExternalLink[];
};

export type Project = {
  slug: string;
  name: string;
  icon?: `/${string}`;
  summary: string;
  domains: readonly ProjectDomain[];
  nature: ProjectNature;
  visibility: ProjectVisibility;
  detailsHref?: `/${string}`;
  current: ProjectRelease & { version?: ProjectVersionIdentity };
  previousVersions?: readonly (ProjectRelease & { version: ProjectVersionIdentity })[];
};

export const projects: readonly Project[] = [
  {
    slug: "bob",
    name: "BoB",
    icon: "/projects/bob.png",
    summary:
      "BoB centralise les résultats d’expositions canines, le suivi des titres de champion et le carnet de santé des chiens.",
    domains: ["fullstack-web-mobile", "backend-business"],
    nature: "professional",
    visibility: "featured",
    detailsHref: "/projects/bob",
    current: {
      statuses: ["production"],
      platforms: [
        { kind: "web", availability: "public" },
        { kind: "android", availability: "public" },
        { kind: "ios", availability: "public" },
      ],
      implementedStack: {
        languages: ["Dart"],
        frameworks: ["Flutter"],
        databases: ["Cloud Firestore"],
        complementary: ["Firebase Auth", "Cloudinary", "AdMob"],
        logos: ["dart", "flutter", "firebase"],
      },
      links: [
        { kind: "website", href: "https://bobexpo.fr" },
        { kind: "googlePlay", href: "https://play.google.com/store/apps/details?id=fr.cosmoslty.bob" },
        { kind: "appStore", href: "https://apps.apple.com/fr/app/bob-carnet-dexpos-canines/id6749371300" },
      ],
    },
  },
  {
    slug: "lofy",
    name: "Lofy",
    icon: "/projects/lofy.png",
    summary: "Lofy réunit chiens, saillies, portées et rappels de suivi dans un carnet d’élevage relié à BoB.",
    domains: ["fullstack-web-mobile", "backend-business"],
    nature: "professional",
    visibility: "featured",
    detailsHref: "/projects/lofy",
    current: {
      statuses: ["production"],
      platforms: [{ kind: "web", availability: "public" }],
      implementedStack: {
        languages: ["TypeScript"],
        frameworks: ["Next.js", "React"],
        databases: ["Cloud Firestore"],
        complementary: ["Firebase Auth"],
        logos: ["typescript", "nextjs", "firebase"],
      },
      roadmap: { features: ["Effacement sécurisé des chiens (S2.2), en développement et non publié"] },
      links: [{ kind: "website", href: "https://lofy.cosmos-lty.fr" }],
    },
  },
  {
    slug: "wow100",
    name: "WoW100%",
    icon: "/projects/wow100.jpg",
    summary: "Un outil pour suivre ses collections World of Warcraft et repérer les montures, mascottes et hauts faits manquants.",
    domains: ["fullstack-web-mobile"],
    nature: "personal",
    visibility: "featured",
    detailsHref: "/projects/wow100",
    current: {
      statuses: ["production"],
      platforms: [
        { kind: "web", availability: "public" },
        { kind: "android", availability: "public" },
        { kind: "ios", availability: "public" },
      ],
      implementedStack: {
        languages: ["Dart"],
        frameworks: ["Flutter"],
        databases: ["Cloud Firestore"],
        complementary: ["Battle.net API et OAuth", "Firebase Auth", "AdMob"],
        logos: ["dart", "flutter", "firebase"],
      },
      links: [
        { kind: "website", href: "https://wow100.cosmos-lty.fr" },
        { kind: "googlePlay", href: "https://play.google.com/store/apps/details?id=fr.cosmoslty.wow100" },
        { kind: "appStore", href: "https://apps.apple.com/fr/app/wow100-tracker-de-collection/id6778885180" },
      ],
    },
  },
  {
    slug: "tempo",
    name: "Tempo",
    icon: "/projects/tempo.png",
    summary: "Tempo permet de planifier ses horaires de travail et de suivre ses heures par semaine et par mois.",
    domains: ["fullstack-web-mobile", "backend-business"],
    nature: "personal",
    visibility: "featured",
    detailsHref: "/projects/tempo",
    current: {
      statuses: ["production"],
      platforms: [
        { kind: "android", availability: "public" },
        { kind: "ios", availability: "public" },
      ],
      implementedStack: {
        languages: ["Dart"],
        frameworks: ["Flutter"],
        databases: ["Cloud Firestore"],
        complementary: ["Firebase Auth", "AdMob"],
        logos: ["dart", "flutter", "firebase"],
      },
      links: [
        { kind: "googlePlay", href: "https://play.google.com/store/apps/details?id=fr.cosmoslty.tempo" },
        { kind: "appStore", href: "https://apps.apple.com/fr/app/tempoo/id6762077819" },
      ],
    },
  },
  {
    slug: "weekendly",
    name: "WeekEndly",
    icon: "/projects/weekendly.png",
    summary: "WeekEndly repère les créneaux météo les plus favorables pour planifier une sortie le week-end.",
    domains: ["fullstack-web-mobile", "backend-business"],
    nature: "personal",
    visibility: "featured",
    current: {
      statuses: ["production"],
      platforms: [{ kind: "web", availability: "public", responsive: true }],
      implementedStack: {
        languages: ["JavaScript"],
        runtimes: ["Node.js"],
        frameworks: ["Express"],
        complementary: ["Open-Meteo"],
        logos: ["javascript", "nodejs"],
      },
      links: [
        { kind: "website", href: "https://weekendly.cosmos-lty.fr" },
        { kind: "github", href: "https://github.com/Laetitia-Bara/WeekEndly" },
      ],
    },
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    icon: "/icone.png",
    summary: "Une vitrine Web pour présenter mes réalisations, leurs stacks et leurs études de cas.",
    domains: ["frontend-web"],
    nature: "professional",
    visibility: "featured",
    current: {
      statuses: ["production"],
      platforms: [{ kind: "web", availability: "public", responsive: true }],
      implementedStack: {
        languages: ["TypeScript"],
        frameworks: ["Next.js", "React"],
        complementary: ["Tailwind CSS", "Lucide", "React Icons"],
        logos: ["typescript", "nextjs", "react"],
      },
      links: [
        { kind: "website", href: "https://www.cosmos-lty.fr" },
        { kind: "github", href: "https://github.com/Laetitia-Bara/Portfolio" },
      ],
    },
  },
  {
    slug: "ablette",
    name: "Ablette",
    icon: "/projects/ablette.svg",
    summary: "Un carnet d'entretien automobile pour suivre les véhicules et leur entretien.",
    domains: ["backend-business", "fullstack-web-mobile"],
    nature: "personal",
    visibility: "catalog",
    detailsHref: "/projects/ablette",
    current: {
      version: {
        slug: "ablette-2",
        name: "Ablette",
        summary: "Un carnet d'entretien automobile avec une API REST pour enregistrer et consulter ses véhicules dans PostgreSQL.",
      },
      statuses: ["development"],
      platforms: [{ kind: "web", availability: "local", responsive: true, pwa: "targeted" }],
      implementedStack: {
        languages: ["Java 21", "TypeScript"],
        frameworks: ["Spring Boot", "React"],
        databases: ["PostgreSQL"],
        complementary: ["Flyway", "OpenAPI", "JUnit", "Testcontainers", "Docker Compose", "GitHub Actions"],
        logos: ["java", "spring-boot", "postgresql"],
      },
      roadmap: { features: ["Comptes utilisateurs", "Entretiens", "Factures", "Hébergement"] },
      links: [
        { kind: "github", href: "https://github.com/Laetitia-Bara/Ablette/tree/codex/ablette-2-a01" },
      ],
    },
    previousVersions: [
      {
        version: {
          slug: "ablette-flutter",
          name: "Prototype Flutter",
          summary: "Garage local, rappels d’entretien et suivi du kilométrage.",
        },
        statuses: ["prototype"],
        platforms: [
          { kind: "android", availability: "targeted" },
          { kind: "ios", availability: "targeted" },
        ],
        implementedStack: { languages: ["Dart"], frameworks: ["Flutter"] },
        links: [{ kind: "github", href: "https://github.com/Laetitia-Bara/Ablette" }],
      },
    ],
  },
  {
    slug: "roland-roro",
    name: "Roro",
    icon: "/projects/roro.png",
    summary: "Une famille d’outils de suivi des créneaux de paniers et d’expérimentation de la planification.",
    domains: ["backend-business", "fullstack-web-mobile"],
    nature: "personal",
    visibility: "catalog",
    current: {
      version: {
        slug: "roro-3",
        name: "Roro",
        summary: "Algorithme de suivi des créneaux de mise en ligne et réservation automatisée de paniers anti-gaspi.",
      },
      statuses: ["development"],
      platforms: [{ kind: "web", availability: "local", responsive: true }],
      implementedStack: {
        languages: ["Python"],
        frameworks: ["NiceGUI"],
        databases: ["SQLite"],
        complementary: ["pytest", "Ruff", "GitHub Actions"],
        logos: ["python", "sqlite"],
      },
      links: [{ kind: "github", href: "https://github.com/Laetitia-Bara/Roro3" }],
    },
    previousVersions: [
      {
        version: {
          slug: "roro-2",
          name: "Roro 2",
          summary: "Prototype local de suivi des favoris et des créneaux.",
        },
        statuses: ["prototype"],
        platforms: [{ kind: "cli", availability: "local" }],
        implementedStack: { languages: ["Python"], complementary: ["Telegram"] },
        links: [],
      },
      {
        version: {
          slug: "roland",
          name: "Roland",
          summary: "Application mobile de suivi manuel des horaires et de rappels.",
        },
        statuses: ["prototype"],
        platforms: [
          { kind: "android", availability: "targeted" },
          { kind: "ios", availability: "targeted" },
        ],
        implementedStack: {
          languages: ["Dart"],
          frameworks: ["Flutter"],
          complementary: ["SharedPreferences", "Notifications locales"],
        },
        links: [],
      },
    ],
  },
  {
    slug: "nextstep",
    name: "NextStep",
    icon: "/projects/nextstep.png",
    summary: "Gestion des offres et candidatures d'emploi, avec suivi des relances et des entretiens.",
    domains: ["backend-business", "fullstack-web-mobile"],
    nature: "personal",
    visibility: "catalog",
    current: {
      statuses: ["development"],
      platforms: [{ kind: "web", availability: "local" }],
      implementedStack: {
        languages: ["PHP 8.3", "TypeScript"],
        frameworks: ["Symfony", "Vue 3"],
        complementary: ["Doctrine", "Vite", "Docker Compose", "Configuration PostgreSQL"],
        logos: ["php", "symfony", "vue"],
      },
      roadmap: {
        features: ["Kanban", "Relances", "Entretiens", "Analyse des annonces"],
      },
      links: [{ kind: "github", href: "https://github.com/Laetitia-Bara/NextStep" }],
    },
  },
  {
    slug: "bootcamp",
    name: "Bootcamp",
    icon: "/projects/la-capsule.png",
    summary: "Projets réalisés à La Capsule, dont le catalogue de films MyMoviz et le jeu de dés Yam’s.",
    domains: ["fullstack-web-mobile"],
    nature: "training",
    visibility: "catalog",
    current: {
      statuses: [],
      platforms: [{ kind: "web", availability: "local" }],
      implementedStack: {
        runtimes: ["Node.js"],
        frameworks: ["Next.js", "React", "Express"],
        complementary: ["Jest", "Testing Library", "Supertest"],
        logos: ["react", "nextjs"],
      },
      links: [{ kind: "github", href: "https://github.com/Laetitia-Bara/MyMoviz", label: "GitHub · MyMoviz" }],
    },
  },
];
