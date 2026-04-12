import Link from "next/link";
import type { Project } from "../data/projects";
import Image from "next/image";


export default function ProjectCard({ project }: { project: Project }) {
  const appStore = project.links.find((l) => l.label.toLowerCase().includes("app store"));
  const googlePlay = project.links.find((l) => l.label.toLowerCase().includes("google play"));
  const otherLinks = project.links.filter(
    (l) => l !== appStore && l !== googlePlay
  );


  return (
    <div
      className="
    card-theme
    group rounded-2xl
    border
    border-[rgba(var(--card-border),0.18)]
    bg-[rgba(var(--card-bg),0.06)]
    p-6
    shadow-sm
    transition
    hover:bg-[rgba(var(--card-bg),0.10)]
  "
    >

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">

          {/* 🔥 Icône projet */}
          {project.icon && (
            <div className="
        shrink-0
        rounded-xl
        border border-white/10
        bg-white/10
        p-1.5
        backdrop-blur
        transition
        group-hover:scale-105
        group-hover:shadow-[0_0_12px_rgba(255,255,255,0.15)]
      ">
              <Image
                src={project.icon}
                alt={`${project.name} icon`}
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-contain"
              />
            </div>
          )}

          {/* 🧠 Texte */}
          <div>
            <h3 className="text-base font-semibold">{project.name}</h3>
            <p className="mt-2 text-sm text-zinc-300">{project.headline}</p>
          </div>

        </div>
        {project.badge ? (
          <span className="
  shrink-0 rounded-full
  border border-[rgba(var(--card-border),0.25)]
  bg-[rgba(var(--card-bg),0.08)]
  px-3 py-1 text-xs text-zinc-200
"
          >
            {project.badge}
          </span>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="
  rounded-full
  bg-[rgba(var(--card-bg),0.08)]
  px-3 py-1 text-xs text-zinc-200
  ring-1 ring-[rgba(var(--card-border),0.25)]
"

          >
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {project.features.slice(0, 3).map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-zinc-500" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 space-y-3">
        {/* Badges stores (si présents) */}
        {(appStore || googlePlay) && (
          <div className="flex flex-wrap items-center gap-3">
            {appStore && (
              <a
                href={appStore.href}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge rounded-xl overflow-hidden transition hover:scale-105"
                aria-label="Download on the App Store"
                title="App Store"
              >
                <Image
                  src="/stores/apple.png"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-[38px] w-auto"
                />
              </a>
            )}

            {googlePlay && (
              <a
                href={googlePlay.href}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge rounded-xl overflow-hidden transition hover:scale-105"
                aria-label="Get it on Google Play"
                title="Google Play"
              >
                <Image
                  src="/stores/google.png"
                  alt="Get it on Google Play"
                  width={160}
                  height={48}
                  className="h-[38px] w-auto"
                />
              </a>
            )}
          </div>
        )}

        {/* Autres liens en texte (case study, repo, demo, etc.) */}
        <div className="flex flex-wrap gap-3">
          {otherLinks.map((l) =>
            l.href.startsWith("/") ? (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-zinc-200 underline decoration-white/20 underline-offset-4 hover:decoration-white/60"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-200 underline decoration-white/20 underline-offset-4 hover:decoration-white/60"
              >
                {l.label}
              </a>
            )
          )}
        </div>
      </div>

    </div>
  );
}
