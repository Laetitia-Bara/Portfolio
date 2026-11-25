import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "../../../components/case-study/ProjectCaseStudy";
import { getProjectSummary } from "../../../components/projectPresentation";
import { caseStudies } from "../../../data/caseStudies";
import { projects } from "../../../data/projects";

const project = projects.find(({ slug }) => slug === "lofy");

export const metadata: Metadata = {
  title: project && `${project.name} — Étude de cas | Cosmos-Lty`,
  description: project && getProjectSummary(project),
  alternates: { canonical: "/projects/lofy" },
};

export default function LofyCaseStudy() {
  if (!project) notFound();

  return <ProjectCaseStudy project={project} study={caseStudies.lofy} />;
}
