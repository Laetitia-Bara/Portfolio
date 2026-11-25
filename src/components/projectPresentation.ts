import { Globe, SquareArrowOutUpRight, Terminal } from "lucide-react";
import { FaJava } from "react-icons/fa";
import {
  SiAndroid,
  SiApple,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGoogleplay,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSqlite,
  SiSymfony,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import type {
  Project,
  ProjectAvailability,
  ProjectExternalLink,
  ProjectPlatform,
  ProjectTechnologyLogo,
} from "../data/projects";

export const technologies = {
  dart: { name: "Dart", Icon: SiDart, color: "#0175C2" },
  flutter: { name: "Flutter", Icon: SiFlutter, color: "#54C5F8" },
  firebase: { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  react: { name: "React", Icon: SiReact, color: "#61DAFB" },
  typescript: { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  nextjs: { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  javascript: { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  nodejs: { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  java: { name: "Java", Icon: FaJava, color: "#F87171" },
  "spring-boot": { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
  python: { name: "Python", Icon: SiPython, color: "#3776AB" },
  postgresql: { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  sqlite: { name: "SQLite", Icon: SiSqlite, color: "#63B8E4" },
  php: { name: "PHP", Icon: SiPhp, color: "#A2A8DE" },
  symfony: { name: "Symfony", Icon: SiSymfony, color: "currentColor" },
  vue: { name: "Vue", Icon: SiVuedotjs, color: "#42B883" },
} satisfies Record<ProjectTechnologyLogo, { name: string; Icon: typeof SiDart; color: string }>;

const statuses = {
  design: { label: "En conception", style: "border-zinc-400/30 bg-zinc-400/10 text-zinc-100" },
  training: { label: "Projet de formation", style: "border-zinc-400/30 bg-zinc-400/10 text-zinc-100" },
  prototype: { label: "Prototype", style: "border-zinc-400/30 bg-zinc-400/10 text-zinc-100" },
  development: { label: "En développement", style: "border-sky-300/30 bg-sky-300/10 text-sky-100" },
  production: { label: "Production", style: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100" },
  refactoring: { label: "Refonte en cours", style: "border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-100" },
};

export const platforms = {
  web: { label: "Web", Icon: Globe, color: "text-zinc-200" },
  android: { label: "Android", Icon: SiAndroid, color: "text-[#3DDC84]" },
  ios: { label: "iOS", Icon: SiApple, color: "text-zinc-100" },
  cli: { label: "CLI", Icon: Terminal, color: "text-zinc-200" },
} satisfies Record<ProjectPlatform["kind"], { label: string; Icon: typeof Globe | typeof SiDart; color: string }>;

export const availability = {
  public: "",
  demo: "démo",
  local: "local",
  targeted: "visé",
} satisfies Record<ProjectAvailability, string>;

export const externalLinks = {
  website: { label: "Site web", Icon: Globe },
  demo: { label: "Démo", Icon: SquareArrowOutUpRight },
  googlePlay: { label: "Google Play", Icon: SiGoogleplay },
  appStore: { label: "App Store", Icon: SiApple },
  github: { label: "GitHub", Icon: SiGithub },
} satisfies Record<ProjectExternalLink["kind"], { label: string; Icon: typeof Globe | typeof SiDart }>;

export function getProjectSummary(project: Project) {
  return project.current.version?.summary ?? project.summary;
}

export function getMainStack(stack: Project["current"]["implementedStack"]) {
  return [
    ...(stack?.languages ?? []),
    ...(stack?.runtimes ?? []),
    ...(stack?.frameworks ?? []),
    ...(stack?.databases ?? []),
  ];
}

export function getProjectBadges(project: Project) {
  return [
    ...project.current.statuses.map((status) => statuses[status]),
    ...(project.nature === "training" ? [statuses.training] : []),
  ];
}
