import type { Metadata } from "next";
import Container from "../../components/Container";
import CatalogueExplorer from "./CatalogueExplorer";
import { catalogueProjects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Projets",
  description: "Applications web et mobiles publiées, projets backend et réalisations de formation de Laetitia Bara.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <section className="py-12">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Réalisations techniques</h1>
        <p className="mb-6 mt-2 text-sm text-zinc-300">Applications, outils et projets de formation.</p>
        <CatalogueExplorer projects={catalogueProjects} />
      </Container>
    </section>
  );
}
