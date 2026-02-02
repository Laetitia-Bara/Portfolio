import Container from "../components/Container";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function HomePage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm text-zinc-400">Full-stack developer • Product builder</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Letty — je construis des apps utiles, de l’idée à la prod.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-300">
              Je développe des produits complets (front, back, déploiement), avec un focus UX et
              fiabilité. Créatrice de BoB, une app mobile dédiée au suivi d’expositions canines.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-zinc-100 ring-1 ring-white/10 hover:bg-white/15"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-white/5"
              >
                Me contacter
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section
        title="Projets"
        subtitle="3 projets qui montrent du concret : produit en production, full-stack, et preuve React."
      >
        <div id="projects" className="grid gap-4 md:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section title="Contact" subtitle="Dispo pour missions, alternance, CDI, ou collaborations.">
        <div id="contact" className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-zinc-300">
            Le plus simple :{" "}
            <a className="underline decoration-white/20 underline-offset-4 hover:decoration-white/60" href="mailto:contact@cosmos-lty.fr">
              contact@cosmos-lty.fr
            </a>
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-300">
            <a className="underline decoration-white/20 underline-offset-4 hover:decoration-white/60" href="#" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="underline decoration-white/20 underline-offset-4 hover:decoration-white/60" href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            + Réseaux sociaux
          </p>
        </div>
      </Section>
    </>
  );
}
