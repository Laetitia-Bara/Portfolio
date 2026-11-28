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
  featureOverview?: {
    solution: string;
    items: readonly (CaseStudyNote & { image?: CaseStudyImage })[];
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
  bis: {
    subtitle: "Body Insight & Sport, carnet mobile de suivi personnel",
    context: {
      description:
        "J’ai créé BIS pour suivre mes mesures, mon hydratation et les événements du quotidien dans un carnet personnel. La refonte met l’accent sur les tendances et sur un profil conservé sur l’appareil.",
      role: "J’ai conçu et développé le carnet mobile, de la saisie et des graphiques aux migrations SQLite et au parcours de restauration.",
    },
    architecture: {
      stages: [
        {
          title: "Saisie et graphiques",
          stack: "React Native / Expo / TypeScript",
          description: "Le carnet affiche les mesures et leurs variations par période et par balance, avec des objectifs personnalisables.",
        },
        {
          title: "Stockage sur l’appareil",
          stack: "SQLite / SQLCipher / Expo SecureStore",
          description: "Les migrations structurent les données locales. La configuration native active SQLCipher et SecureStore conserve la clé de chiffrement.",
        },
        {
          title: "Export et restauration",
          stack: "JSON versionné / CSV",
          description: "Le JSON sauvegarde le carnet pour une restauration complète. Les exports CSV servent à relire les données dans un tableur.",
        },
      ],
    },
    highlights: [
      {
        title: "Des tendances comparables",
        description:
          "Les tendances se filtrent par période et par balance, par exemple Maison ou Salle. Les graphiques montrent les valeurs manquantes et l’historique permet de modifier ou de supprimer une mesure, avec annulation de la suppression.",
      },
      {
        title: "Restauration transactionnelle",
        description:
          "BIS vérifie le format et les références du fichier JSON avant le remplacement du carnet local. Une erreur d’écriture annule la restauration entière. Réimporter la même sauvegarde conserve les identifiants et le nombre d’entrées. Les fichiers exportés sont en clair.",
      },
    ],
    quality: {
      results: [{ value: "42", label: "Tests automatisés réussis" }],
      detail:
        "Les tests Node couvrent la restauration SQLite et son annulation sur erreur, les graphiques et la saisie de l’objectif de sommeil. La normalisation, l’import et l’agrégation des données d’activité sont testés avec un fournisseur fictif. Les connecteurs natifs HealthKit et Health Connect restent à développer et à valider.",
      limits:
        "Une build Android interne a été produite pour un lot précédent. La recette du lot actuel sur iOS reste prévue sur simulateur. Le chiffrement SQLCipher se vérifie séparément sur les builds natives.",
    },
    delivered:
      "Le carnet en développement permet de suivre le poids, la composition corporelle et l’hydratation, de tenir un journal et de sauvegarder ses données localement. L’interface propose les thèmes clair et sombre.",
  },
  bob: {
    subtitle: "Gestion des expositions canines",
    context: {
      description:
        "Quand on présente plusieurs chiens dans différents pays, il faut retrouver le bon résultat, préparer le prochain déplacement et garder un historique par chien. Les informations sont souvent réparties entre calendriers, documents et notes prises sur le ring.",
      role: "J’ai conçu les parcours et le modèle de données, développé l’application Flutter et son intégration Firebase, puis assuré sa publication et sa maintenance sur le Web, Android et iOS.",
    },
    featureOverview: {
      solution:
        "BoB relie les fiches chiens, les dates à venir et les résultats dans un même carnet. Une fois saisi, un résultat alimente l’historique, les statistiques et le suivi des titres.",
      items: [
        {
          title: "Tableau de bord",
          description: "Accès aux chiens, aux expositions, à l’agenda et aux outils de préparation depuis un même espace.",
        },
        {
          title: "Fiches chiens",
          description: "Gestion de plusieurs chiens, avec une fiche d’identité, un carnet de santé, l’historique des participations et le palmarès de chacun.",
        },
        {
          title: "Expositions et résultats",
          description: "Saisie du pays, du juge et de la classe, puis du qualificatif, du classement et des récompenses. L’historique se consulte avec des filtres.",
          image: {
            src: "/projects/bob/detail-exposition.png",
            width: 276,
            height: 512,
            alt: "Écran de détail d’une exposition avec la date, le pays, le juge, les informations du chien et son classement.",
            caption: "Le détail d’une exposition réunit les informations du concours et le résultat. L’identité du chien est masquée.",
          },
        },
        {
          title: "Calendrier et préparation",
          description: "Agenda des expositions à venir, filtres, checklist de départ et mémo hôtel. Sur mobile, les rappels vaccinaux et les notifications d’exposition dépendent des préférences.",
        },
        {
          title: "Statistiques et palmarès",
          description: "Bilan des performances par chien, partage des résultats et du palmarès, pièces jointes et création de diplômes PDF.",
          image: {
            src: "/projects/bob/statistiques.webp",
            width: 636,
            height: 1005,
            alt: "Onglet Statistiques avec un graphique en anneau par pays et un histogramme par type d’exposition.",
            caption: "Les participations par pays et par type d’exposition. Extrait de la présentation de BoB.",
          },
        },
        {
          title: "Progression des titres",
          description: "Les règles par pays et par titre déterminent les étapes remplies et les résultats manquants. L’organisme compétent reste responsable de l’homologation officielle.",
          image: {
            src: "/projects/bob/suivi-titres.webp",
            width: 600,
            height: 898,
            alt: "Onglet Suivi Titres de BoB avec les titres regroupés par pays et une barre de progression pour chaque titre.",
            caption: "Le suivi des titres affiche la progression par pays et par titre.",
          },
        },
      ],
    },
    architecture: {
      stages: [
        {
          title: "Interface et modèles métier",
          stack: "Flutter / Dart",
          description: "Une base de code commune porte les parcours Web et mobiles. Les modèles relient les résultats aux fiches chiens pour alimenter l’historique et les calculs.",
        },
        {
          title: "Compte et synchronisation",
          stack: "Firebase Auth / Cloud Firestore",
          description: "L’identification rattache les données au compte. Les requêtes Firestore et les filtres par chien structurent la consultation, avec un carnet synchronisé entre les appareils.",
        },
        {
          title: "Photos et documents",
          stack: "Cloudinary / Firebase Storage",
          description: "Cloudinary sert les photos dans des formats adaptés à l’affichage. Firebase Storage gère les pièces jointes des expositions. Firestore conserve les références aux fichiers.",
        },
      ],
      detail:
        "Les règles de propriété Firestore contrôlent l’accès aux fiches et aux résultats du compte identifié. Le carnet personnel est accessible après connexion.",
    },
    highlights: [
      {
        title: "Règles variables selon les titres",
        description:
          "Les règles Dart évaluent les résultats par pays, type d’exposition, période et récompense. Pour le titre national jeune français, BoB compte les CACS-J admissibles et laisse à l’exposant la vérification des juges distincts et des conditions du club de race.",
      },
      {
        title: "Interface multilingue",
        description:
          "Les libellés de l’interface sont traduits dans des fichiers de ressources. Les données d’exposition gardent une structure commune pour comparer les résultats entre pays.",
      },
      {
        title: "Offre gratuite et Premium",
        description:
          "Le carnet existe en version gratuite. Sur mobile, RevenueCat gère les droits Premium et AdMob la publicité. L’application adapte l’accès à certaines fonctions selon l’offre.",
      },
    ],
    quality: {
      detail:
        "Les tests automatisés couvrent notamment les expositions hors périmètre, les doublons, les juges distincts pour les titres britanniques et la génération des diplômes PDF.",
    },
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
    subtitle: "Carnet d'entretien automobile et gestion du garage",
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
      role: "Conception et développement Full Stack du lot garage, du formulaire React au contrat REST, à la persistance et aux tests automatisés.",
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
