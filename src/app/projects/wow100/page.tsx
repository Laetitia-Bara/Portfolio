import Container from "../../../components/Container";
import Image from "next/image";

export default function Wow100CaseStudy() {
  return (
    <section className="py-12">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-zinc-400">Case study</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            WoW100% — Companion de collection World of Warcraft
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            WoW100% accompagne les collectionneurs World of Warcraft dans le suivi de leur
            progression. L’app permet de connecter son compte Battle.net, de sélectionner son
            personnage principal et de visualiser ce qui est obtenu ou encore manquant.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-base font-semibold">Problème</h2>
              <p className="mt-2 text-sm text-zinc-300">
                Les collections WoW sont dispersées entre montures, mascottes, hauts-faits et
                extensions. Il devient difficile de savoir rapidement où l’on en est et quels
                objectifs prioriser pour avancer vers le 100%.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-base font-semibold">Solution</h2>
              <p className="mt-2 text-sm text-zinc-300">
                Une app claire et moderne qui synchronise les données Battle.net, regroupe la
                progression par extension et met en évidence les éléments obtenus, manquants et les
                prochains objectifs.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-base font-semibold">Stack</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Flutter • Battle.net OAuth • Battle.net API • App Store • Google Play • Web App
            </p>

            <h2 className="mt-6 text-base font-semibold">Highlights</h2>
            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
              <li>• Connexion au compte Battle.net et sélection du personnage principal</li>
              <li>• Progression globale et détail par extension</li>
              <li>• Suivi des montures, mascottes, hauts-faits et objectifs manquants</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://apps.apple.com/fr/app/wow100/id6778885180?uo=4"
              target="_blank"
              rel="noopener noreferrer"
              className="store-badge rounded-xl overflow-hidden transition hover:scale-105"
            >
              <Image
                src="/stores/apple.png"
                alt="Download on the App Store"
                width={140}
                height={42}
                className="h-[42px] w-auto"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=fr.cosmoslty.wow100"
              target="_blank"
              rel="noopener noreferrer"
              className="store-badge rounded-xl overflow-hidden transition hover:scale-105"
            >
              <Image
                src="/stores/google.png"
                alt="Get it on Google Play"
                width={160}
                height={48}
                className="h-[42px] w-auto"
              />
            </a>

            <a
              href="https://wow100.cosmos-lty.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[42px] items-center gap-3 rounded-xl bg-white/10 px-4 text-sm text-white backdrop-blur transition hover:scale-105 hover:bg-white/20"
            >
              <span className="font-medium">Web App</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
