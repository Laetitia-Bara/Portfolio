import type { Project } from "./projects";

export const technologyFilters = [
  { id: "all", label: "Tous" },
  { id: "java", label: "Java" },
  { id: "php", label: "PHP" },
  { id: "python", label: "Python" },
  { id: "typescript", label: "TypeScript" },
  { id: "react", label: "React" },
  { id: "nextjs", label: "Next.js" },
  { id: "flutter", label: "Flutter" },
  { id: "react-native", label: "React Native" },
  { id: "symfony", label: "Symfony" },
  { id: "firebase", label: "Firebase" },
  { id: "postgresql", label: "PostgreSQL" },
] as const;

export type TechnologyFilter = (typeof technologyFilters)[number]["id"];

const technologyAliases: Record<Exclude<TechnologyFilter, "all">, readonly string[]> = {
  java: ["java"],
  php: ["php"],
  python: ["python"],
  typescript: ["typescript", "type script", "ts"],
  react: ["react", "react js", "reactjs"],
  nextjs: ["next js", "nextjs"],
  flutter: ["flutter"],
  "react-native": ["react native"],
  symfony: ["symfony"],
  firebase: ["firebase", "firebase auth", "firebase authentication", "firestore", "cloud firestore"],
  postgresql: ["postgresql", "postgres"],
};

const domainLabels: Record<Project["domains"][number], string> = {
  "fullstack-web-mobile": "full-stack fullstack",
  "backend-business": "backend back-end métier gestion",
  "frontend-web": "frontend front-end interface web",
};

const platformLabels: Record<Project["current"]["platforms"][number]["kind"], string> = {
  web: "web",
  android: "android mobile",
  ios: "ios iphone mobile",
  cli: "cli ligne de commande",
};

const sqlTechnologies = new Set(["sql", "postgresql", "postgres", "sqlite", "sqlcipher", "mysql", "mariadb", "mssql"]);

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function words(value: string): string[] {
  return normalize(value)
    .replace(/\b([a-z0-9]+)\.js\b/g, "$1js")
    .replace(/\b(next|node|vue|chart)[\s-]+js\b/g, "$1js")
    .match(/[a-z0-9]+/g) ?? [];
}

function stackItems(stack: Project["current"]["implementedStack"]): string[] {
  return [
    ...(stack?.languages ?? []),
    ...(stack?.runtimes ?? []),
    ...(stack?.frameworks ?? []),
    ...(stack?.databases ?? []),
    ...(stack?.complementary ?? []),
  ];
}

function technologyName(value: string) {
  return normalize(value)
    .trim()
    .replace(/\s+v?\d+(?:\.\d+)*(?:\s+lts)?$/, "")
    .replace(/[.-]+/g, " ")
    .replace(/\s+/g, " ");
}

function searchableWords(project: Project, implemented: readonly string[]): string[] {
  const { current } = project;
  const stackWords = [...implemented, ...stackItems(current.roadmap?.stack)].flatMap(words);
  const descriptiveWords = [
    project.name,
    project.fullName ?? "",
    project.category ?? "",
    project.summary,
    current.version?.name ?? "",
    current.version?.summary ?? "",
    ...project.domains.map((domain) => domainLabels[domain]),
    ...current.platforms.map(({ kind }) => platformLabels[kind]),
    ...(project.keywords ?? []),
  ].flatMap(words);

  return [
    ...descriptiveWords,
    ...stackWords,
    ...(stackWords.some((word) => sqlTechnologies.has(word)) ? ["sql"] : []),
    ...(stackWords.includes("javascript") ? ["js"] : []),
    ...(stackWords.includes("vue") ? ["vuejs"] : []),
  ];
}

export function filterCatalogue(
  projects: readonly Project[],
  query: string,
  technology: TechnologyFilter,
): Project[] {
  const terms = words(query.trim());

  return projects.filter((project) => {
    const implemented = stackItems(project.current.implementedStack);
    if (technology !== "all") {
      const aliases = technologyAliases[technology];
      if (!implemented.some((item) => aliases.includes(technologyName(item)))) return false;
    }

    if (terms.length === 0) return true;

    const indexedWords = searchableWords(project, implemented);
    return terms.every((term) => indexedWords.some((word) => word.startsWith(term)));
  });
}
