import type { Metadata } from "next";
import Link from "next/link";
import { CodeXml, GraduationCap, Server, Workflow } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "../components/Container";
import ProjectGrid from "../components/ProjectGrid";
import Section from "../components/Section";
import SocialIcon from "../components/SocialLinks";
import { catalogueProjects, projects } from "../data/projects";

const description =
  "Laëtitia Bara, développeuse d’applications web, mobiles et métier. Applications en production, compétences et études de cas.";

export const metadata: Metadata = {
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Laëtitia Bara | Cosmos-Lty",
    description,
    url: "/",
    siteName: "Cosmos-Lty",
    locale: "fr_FR",
    type: "website",
  },
};

const featuredProjects = projects.filter((project) => project.visibility === "featured");
const panel = "min-w-0 rounded-2xl border border-white/15 bg-zinc-950/70 p-4 sm:p-5";
const panelTitle =
  "skill-panel-title flex items-center gap-2.5 border-b border-white/15 pb-3 text-xl font-semibold tracking-tight sm:text-2xl";
const panelIcon = "size-5 shrink-0";
const projectLink =
  "rounded-sm font-medium text-cyan-100 underline decoration-cyan-200/50 underline-offset-4 hover:decoration-cyan-100";

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="profile-title" className="pt-12 sm:pt-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-zinc-300">
              Développeuse d’applications · Web, mobile et métier
            </p>
            <h1 id="profile-title" className="unicorn-text mt-3 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Laëtitia Bara
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-200 sm:text-lg">
              Passionnée par les langages de programmation depuis plus de vingt ans, je développe et
              maintiens plusieurs applications en production, dont{" "}
              <Link href="/projects/bob" className={projectLink}>BoB</Link>, disponible sur le Web,
              Android et iOS.
            </p>
            <p className="mt-3 text-base leading-relaxed text-zinc-300">
              Mon expérience en gestion de projet, réseaux et support informatique m’aide à prendre
              en charge leur cycle de vie, des choix d’architecture à la mise en production, puis à
              la maintenance et aux évolutions. Je travaille par itérations, dans une démarche agile
              inspirée de Scrum.
            </p>

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

      <Section id="competences" title="Compétences">
        <div className="grid gap-4 md:grid-cols-2">
          <section aria-labelledby="frontend-title" className={panel}>
            <h3 id="frontend-title" className={panelTitle}>
              <CodeXml aria-hidden="true" focusable="false" className={panelIcon} />
              Frontend
            </h3>
            <dl className="mt-3 grid gap-3 text-sm leading-relaxed text-zinc-300">
              <div>
                <dt className="font-semibold text-zinc-100">Web</dt>
                <dd>
                  HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React, Next.js et Vue 3
                  (socle en développement de{" "}
                  <Link href="/projects#nextstep" className={projectLink}>NextStep</Link>).
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-100">Mobile</dt>
                <dd>Dart / Flutter et React Native / Expo (LevelUp, en développement).</dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-100">Interfaces métier</dt>
                <dd>
                  Formulaires, tableaux de bord et outils de gestion. React et TypeScript dans{" "}
                  <Link href="/projects/ablette" className={projectLink}>Ablette</Link>, avec Angular
                  prévu pour la suite. NiceGUI dans{" "}
                  <Link href="/projects#roland-roro" className={projectLink}>Roro</Link>.
                </dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="backend-title" className={panel}>
            <h3 id="backend-title" className={panelTitle}>
              <Server aria-hidden="true" focusable="false" className={panelIcon} />
              Backend
            </h3>
            <dl className="mt-3 grid gap-3 text-sm leading-relaxed text-zinc-300">
              <div>
                <dt className="font-semibold text-zinc-100">Serveur et API</dt>
                <dd>
                  Java / Spring Boot, PHP / Symfony (API de{" "}
                  <Link href="/projects#nextstep" className={projectLink}>NextStep</Link>),
                  Python, Node.js / Express et API REST.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-100">Données et authentification</dt>
                <dd>SQL, PostgreSQL, SQLite, Firebase Auth et Cloud Firestore.</dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-100">Logique métier</dt>
                <dd>Modélisation des données, règles de gestion, validation, migrations et tests.</dd>
              </div>
            </dl>
          </section>
        </div>

        <section aria-labelledby="delivery-title" className={`mt-4 ${panel}`}>
          <h3 id="delivery-title" className={panelTitle}>
            <Workflow aria-hidden="true" focusable="false" className={panelIcon} />
            Livraison et suivi de projet
          </h3>
          <dl className="mt-3 grid gap-3 text-sm leading-relaxed text-zinc-300 md:grid-cols-3 md:gap-5">
            <div>
              <dt className="font-semibold text-zinc-100">Versionnement et environnement</dt>
              <dd>Git, GitHub et Docker Compose.</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-100">Tests et déploiement</dt>
              <dd>
                GitHub Actions pour l’intégration continue, Vercel pour le déploiement web, Google Play
                et App Store pour la publication mobile.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-100">Suivi de projet</dt>
              <dd>Jira, priorisation des tickets et suivi des demandes d’évolution.</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="training-title" className={`mt-4 ${panel}`}>
          <h3 id="training-title" className={panelTitle}>
            <GraduationCap aria-hidden="true" focusable="false" className={panelIcon} />
            Certifications et formation
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300">
            Je prépare une certification Java et je poursuis ma formation en SQL et PHP avec des
            objectifs de certification. J’applique ces apprentissages dans Ablette et NextStep.
            Kubernetes fait aussi partie de mon parcours de formation.
          </p>
        </section>
      </Section>

      <Section id="projects" title="Projets">
        <ProjectGrid projects={featuredProjects} />
        <Link
          href="/projects"
          className="mt-6 inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/15"
        >
          Voir les {catalogueProjects.length} projets
        </Link>
      </Section>

      <Section id="contact" title="Contact">
        <div className="rounded-2xl border border-white/15 bg-black/25 p-5 sm:p-6">
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-200">
            Je recherche un poste de développeuse web, mobile ou métier en CDI.
            Je suis également ouverte aux missions de développement web et mobile en freelance .
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
