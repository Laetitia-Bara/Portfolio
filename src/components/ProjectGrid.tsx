import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects, id }: { projects: readonly Project[]; id?: string }) {
  return (
    <div id={id} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
