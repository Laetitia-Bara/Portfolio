import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "../../../components/case-study/ProjectCaseStudy";
import { getProjectSummary } from "../../../components/projectPresentation";
import { caseStudies } from "../../../data/caseStudies";
import { projects } from "../../../data/projects";

const project = projects.find(({ slug }) => slug === "bis-2-0");

export const metadata: Metadata = {
  title: project && `${project.name} — Étude de cas | Cosmos-Lty`,
  description: project && getProjectSummary(project),
  alternates: { canonical: "/projects/bis-2-0" },
};

export default function BisCaseStudy() {
  if (!project) notFound();

  return <ProjectCaseStudy project={project} study={caseStudies.bis} />;
}
