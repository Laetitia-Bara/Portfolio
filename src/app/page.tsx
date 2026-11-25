import type { Metadata } from "next";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "../components/Container";
import ProjectGrid from "../components/ProjectGrid";
import Section from "../components/Section";
import SocialIcon from "../components/SocialLinks";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Laëtitia Bara | Cosmos-Lty",
    description: "Applications web et mobiles publiées et études de cas en Flutter, Next.js et Java Spring Boot.",
    url: "/",
    siteName: "Cosmos-Lty",
    locale: "fr_FR",
    type: "website",
  },
};

const featuredProjects = projects.filter((project) => project.visibility === "featured");

export default function HomePage() {
  return (
    <>
      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-zinc-300">Développeuse full-stack web, mobile et backend</p>
            <h1 className="unicorn-text mt-3 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Laëtitia Bara
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-200 sm:text-lg">
              Je conçois, développe et maintiens des applications métier. J’ai créé BoB, un carnet
              d’expositions canines disponible sur le Web, Android et iOS.
            </p>

            <dl className="mt-6 grid gap-4 rounded-2xl border border-white/15 bg-black/25 p-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold">Web et mobile</dt>
                <dd className="mt-1 text-sm leading-relaxed text-zinc-300">
                  React, TypeScript, Next.js, Flutter, Dart et Firebase
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold">Backend et applications métier</dt>
                <dd className="mt-1 text-sm leading-relaxed text-zinc-300">
                  Java, Spring Boot, Python, SQL et PostgreSQL. API REST, logique métier et tests.
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-white/15 px-4 py-2 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/20"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-200 ring-1 ring-white/20 hover:bg-white/10"
              >
                Me contacter
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section id="projects" title="Projets">
        <ProjectGrid projects={featuredProjects} />
        <Link
          href="/projects"
          className="mt-6 inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/15"
        >
          Voir les dix projets
        </Link>
      </Section>

      <Section id="contact" title="Contact">
        <div className="rounded-2xl border border-white/15 bg-black/25 p-5 sm:p-6">
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-200">
            Je recherche un poste de développeuse web, mobile ou backend en CDI, CDD ou alternance.
            Je suis également ouverte aux missions de développement web et mobile.
          </p>
          <a
            className="mt-3 inline-block break-all rounded-sm font-medium underline decoration-white/40 underline-offset-4 hover:decoration-white/80"
            href="mailto:contact@cosmos-lty.fr"
          >
            contact@cosmos-lty.fr
          </a>
          <div className="mt-4 flex flex-wrap gap-3">
            <SocialIcon href="https://www.linkedin.com/in/bara-laetitia" icon={<FaLinkedin size={18} />} label="LinkedIn" className="social-linkedin" />
            <SocialIcon href="https://github.com/Laetitia-Bara" icon={<FaGithub size={18} />} label="GitHub" className="social-github" />
          </div>
        </div>
      </Section>
    </>
  );
}
