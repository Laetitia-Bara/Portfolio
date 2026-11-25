export type CaseStudyImage = {
  src: `/${string}`;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

type CaseStudyNote = {
  title: string;
  description: string;
};

export type CaseStudyContent = {
  subtitle: string;
  heroImage?: CaseStudyImage;
  context?: {
    description: string;
    role?: string;
  };
  architecture?: {
    stages: readonly (CaseStudyNote & { stack: string })[];
    detail?: string;
  };
  highlights?: readonly CaseStudyNote[];
  screenshots?: readonly CaseStudyImage[];
  quality?: {
    results?: readonly { label: string; value: string }[];
    detail?: string;
    evidence?: readonly { label: string; href: `https://${string}` }[];
    limits?: string;
  };
  delivered?: string;
};

export const caseStudies = {
  bob: {
    subtitle: "Carnet d’expositions canines et suivi des titres",
    heroImage: {
      src: "/projects/bob/suivi-titres.webp",
      width: 600,
      height: 1299,
      alt: "Écran Suivi Titres de BoB, avec les titres regroupés par pays et la progression des titres français.",
      caption: "L’écran Suivi Titres affiche la progression par titre. Capture publiée sur l’App Store.",
    },
    context: {
      description:
        "Après plusieurs expositions, il devient difficile de savoir quels résultats comptent pour un titre et quelles démarches restent à faire. BoB rattache les résultats à chaque chien et les transforme en étapes de suivi.",
      role: "J’ai conçu le parcours de saisie et le modèle de données, puis développé l’interface Flutter et les règles de progression des titres.",
    },
    architecture: {
      stages: [
        {
          title: "Saisie et consultation",
          stack: "Flutter / Dart",
          description: "L’exposant enregistre une exposition et ses résultats dans le carnet de son chien.",
        },
        {
          title: "Compte et historique",
          stack: "Firebase Auth / Cloud Firestore",
          description: "Firebase Auth identifie le compte. Firestore synchronise ses fiches chiens et ses résultats entre le Web et les applications mobiles.",
        },
        {
          title: "Progression des titres",
          stack: "Règles métier en Dart",
          description: "L’application relit les résultats du chien et calcule la progression à partir des étapes remplies.",
        },
      ],
      detail:
        "Les photos suivent un flux distinct. Cloudinary héberge les images et fournit les variantes d’affichage. Firestore conserve les références associées aux résultats.",
    },
    highlights: [
      {
        title: "Suivi des titres et progression métier",
        description:
          "Pour le Champion des Expositions Nationales Jeune (CHEN-J), BoB compte les CACS-J des expositions nationales françaises à partir du 1ᵉʳ juin 2023. Il affiche la progression et reprend les informations de confirmation et d’ADN de la fiche du chien. L’exposant vérifie les trois juges distincts et les conditions du club de race. La Centrale Canine homologue le titre sur dossier, à adresser au club.",
      },
      {
        title: "Des résultats structurés par chien",
        description:
          "Chaque résultat Firestore est rattaché au compte et au chien. Il distingue date, pays, type d’exposition, classe, juge, qualificatif, classement et récompenses. Le même historique alimente le palmarès et les filtres propres à chaque titre.",
      },
      {
        title: "Statistiques, documents et préparation",
        description:
          "Les statistiques par chien facilitent le bilan de saison. Les fiches, photos et documents aident à retrouver les éléments du dossier. Le calendrier, la checklist et le mémo hôtel et exposition accompagnent la préparation des déplacements.",
      },
    ],
    screenshots: [
      {
        src: "/projects/bob/detail-exposition.png",
        width: 276,
        height: 512,
        alt: "Fiche d’exposition BoB présentant le pays, le type d’exposition, le juge, la classe du chien, le classement et les récompenses.",
        caption: "Le détail montre les données d’une exposition internationale, hors du périmètre du CHEN-J. Capture publiée sur Google Play.",
      },
    ],
    quality: {
      detail:
        "Les tests du CHCS vérifient que les expositions étrangères sont écartées et qu’un même identifiant ne compte qu’une fois. Les tests du championnat britannique vérifient qu’un juge répété ne satisfait pas l’exigence de juges distincts.",
    },
    delivered:
      "Le carnet est accessible sur le Web, Android et iOS. Il réunit le palmarès, le suivi des titres et le carnet de santé des chiens.",
  },
  lofy: {
    subtitle: "Suivi d’élevage canin, des chiens aux portées",
    context: {
      description:
        "Un chien suivi dans BoB pour les expositions peut aussi faire partie d’un élevage. Lofy permet de reprendre sa fiche partagée et de suivre sa reproduction, des saillies aux portées, ainsi que les rappels utiles au quotidien.",
      role: "J’ai développé l’interface de gestion d’élevage et le parcours qui relie les fiches chiens de Lofy à leur suivi dans BoB.",
    },
    architecture: {
      stages: [
        {
          title: "Gestion de l’élevage",
          stack: "Next.js App Router / React / TypeScript",
          description: "Le tableau de bord et les écrans métier regroupent les chiens, les reproducteurs, les saillies, les portées et les rappels.",
        },
        {
          title: "Identification",
          stack: "Firebase Auth",
          description: "La session identifie le compte qui consulte ou modifie ses données d’élevage.",
        },
        {
          title: "Données et accès",
          stack: "Cloud Firestore",
          description: "Firestore conserve les fiches chiens et les documents de suivi. Les données propres à l’élevage sont rattachées aux chiens concernés.",
        },
      ],
    },
    highlights: [
      {
        title: "Une fiche commune à BoB et Lofy",
        description:
          "La fiche d’un chien partagé sert de point de départ à deux usages. BoB suit ses expositions et son palmarès. Lofy rattache à ce même chien les données propres à l’élevage, comme ses saillies et ses portées.",
      },
      {
        title: "Contrôles de propriété (S1)",
        description:
          "Les règles Firestore contrôlent les accès aux documents partagés à partir de l’identité du compte et de la propriété du document.",
      },
      {
        title: "Retrait logique des chiens (S2.1)",
        description:
          "Le retrait logique enlève un chien des vues actives de Lofy tout en préservant sa fiche et les liens nécessaires à l’historique d’élevage.",
      },
    ],
    delivered:
      "Lofy est disponible sur le Web pour suivre les chiens, les saillies, les portées et les rappels.",
  },
  ablette: {
    subtitle: "Carnet automobile et gestion du garage",
    heroImage: {
      src: "/projects/ablette/garage-1440.png",
      width: 1440,
      height: 900,
      alt: "Garage Ablette sur ordinateur, avec trois véhicules fictifs et leurs kilométrages.",
      caption: "Le garage affiche des véhicules fictifs chargés depuis l’API en local.",
    },
    context: {
      description:
        "Le suivi automobile commence par une fiche fiable pour chaque véhicule. Le premier lot centralise les informations du garage et permet de les retrouver après un redémarrage de l’application et de la base.",
      role: "Conception et développement fullstack du lot garage, du formulaire React au contrat REST, à la persistance et aux tests automatisés.",
    },
    architecture: {
      stages: [
        {
          title: "Interface",
          stack: "React / TypeScript",
          description: "Saisit les véhicules et recharge le garage après une création.",
        },
        {
          title: "API REST",
          stack: "Spring Boot / Java 21",
          description: "Valide les données et applique les règles métier avant l’enregistrement.",
        },
        {
          title: "Base de données",
          stack: "PostgreSQL",
          description: "Conserve les véhicules et applique les contraintes du schéma.",
        },
      ],
      detail:
        "Spring Data JPA assure la lecture et l’écriture. Flyway applique les migrations SQL versionnées, puis Hibernate vérifie le schéma au démarrage.",
    },
    highlights: [
      {
        title: "Contrat REST et validation",
        description:
          "L’API expose GET et POST sur /api/v1/vehicles et GET sur /api/v1/vehicles/{id}. Les DTO séparent le contrat HTTP des entités JPA. Une création renvoie 201 et l’URI dans l’en-tête Location. ProblemDetail structure les erreurs de saisie par champ.",
      },
      {
        title: "Persistance et migrations",
        description:
          "Un véhicule est identifié par un UUID et associe marque, modèle, année, motorisation, carburant et kilométrage. La première migration Flyway définit la table et ses contraintes, dont un kilométrage positif ou nul. Un essai en local a confirmé la persistance après redémarrage du backend et de la base.",
      },
      {
        title: "Précision des horodatages",
        description:
          "Un Instant Java peut atteindre la nanoseconde, tandis que PostgreSQL conserve les microsecondes. Le service normalise la date avant l’écriture. Un test de régression vérifie sa cohérence à la relecture.",
      },
    ],
    screenshots: [
      {
        src: "/projects/ablette/form-375.png",
        width: 375,
        height: 1397,
        alt: "Formulaire mobile d’ajout d’un véhicule avec les champs de marque, modèle, année, motorisation, carburant et kilométrage.",
      caption: "Formulaire mobile de création d’un véhicule, testé en local.",
      },
    ],
    quality: {
      results: [
        { value: "20", label: "Tests Java" },
        { value: "12", label: "Scénarios PostgreSQL" },
        { value: "5", label: "Tests React" },
      ],
      detail:
        "Sur le commit 4244d58, GitHub Actions valide le backend Java, l’intégration sur PostgreSQL avec Testcontainers, ainsi que les tests et la compilation du front React.",
      evidence: [
        { label: "CI du push", href: "https://github.com/Laetitia-Bara/Ablette/actions/runs/42397988375" },
        { label: "CI de la pull request", href: "https://github.com/Laetitia-Bara/Ablette/actions/runs/42398098800" },
      ],
      limits:
        "Le garage s’exécute en local avec des données fictives. Le démarrage complet des trois services avec Docker Compose reste à valider.",
    },
    delivered: "Le lot garage permet de saisir, créer et consulter des véhicules, avec persistance vérifiée en local.",
  },
} satisfies Record<string, CaseStudyContent>;
