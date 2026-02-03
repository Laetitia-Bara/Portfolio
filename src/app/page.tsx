import Container from "../components/Container";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import SocialIcon from "../components/SocialLinks";
import { projects } from "../data/projects";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaDiscord,
  FaSteam,
} from "react-icons/fa";
import { SiX, SiBattledotnet } from "react-icons/si";


export default function HomePage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm text-zinc-400">Full-stack developer • Product builder</p>
            <h1 className="unicorn-text mt-3 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Letty 🦄
            </h1>

            <p className="mt-4 text-lg text-zinc-300">
              Je développe des apps utiles, de l’idée à la prod.
            </p>
            
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
      <a
        className="underline decoration-white/20 underline-offset-4 hover:decoration-white/60"
        href="mailto:contact@cosmos-lty.fr"
      >
        contact@cosmos-lty.fr
      </a>
    </p>

    {/* Réseaux / icônes */}
    <div className="mt-4 space-y-3">
      {/* Ligne 1 */}
      <div className="flex flex-wrap gap-3">
        <SocialIcon href="https://www.linkedin.com/in/bara-laetitia" icon={<FaLinkedin size={18} />} label="LinkedIn" className="social-linkedin"/>
        <SocialIcon href="https://github.com/Laetitia-Bara" icon={<FaGithub size={18} />} label="GitHub" className="social-github"/>
        </div>
        {/* Ligne 2 */}
        <div className="flex flex-wrap gap-3">
        <SocialIcon href="https://www.facebook.com/cosmos.lty" icon={<FaFacebook size={18} />} label="Facebook" />
        <SocialIcon href="https://www.instagram.com/cosmos.lty/" icon={<FaInstagram size={18} />} label="Instagram" />
        <SocialIcon href="https://www.tiktok.com/@cosmos.lty" icon={<FaTiktok size={18} />} label="TikTok" />
        <SocialIcon href="https://www.youtube.com/@Cosmos-lty" icon={<FaYoutube size={18} />} label="YouTube" />
        <SocialIcon href="https://x.com/Cosmos_lty" icon={<SiX size={16} />} label="X / Twitter" />
      </div>

      {/* Ligne 3 */}
      <div className="flex flex-wrap gap-3">
        <SocialIcon href="https://discord.com/" icon={<FaDiscord size={18} />} label="Discord (pseudo: letty_orcante)" />
        <SocialIcon href="https://store.steampowered.com/?l=french" icon={<FaSteam size={18} />} label="Steam (pseudo: Orcante)" />
        <SocialIcon href="https://us.shop.battle.net/fr-fr" icon={<SiBattledotnet size={18} />} label="Battle.net (pseudo: Alexiel)" />
      </div>
    </div>
  </div>
</Section>


</>
  );
}
