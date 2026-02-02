import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <Section title="Projects" subtitle="Sélection de projets (case studies, démos, repos).">
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  );
}
