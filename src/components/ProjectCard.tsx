import Link from "next/link";
import type { Project } from "../data/projects";
import Image from "next/image";


export default function ProjectCard({ project }: { project: Project }) {
  const appStore = project.links.find(
    (l) => l.label?.toLowerCase().includes("app store")
  );

  const googlePlay = project.links.find(
    (l) => l.label?.toLowerCase().includes("google play")
  );

  const webAppLink = project.links.find(
    (l) => l.variant === "webapp"
  );

  const otherLinks = project.links.filter(
    (l) => l !== appStore && l !== googlePlay && l !== webAppLink
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

        {/* Ligne 1 : icône + badge */}
        <div className="flex items-center gap-3">

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
      ">
              <Image
                src={project.icon}
                alt={`${project.name} icon`}
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg object-contain"
              />
            </div>
          )}

        </div>

        {project.badge && (
          <span className="
      shrink-0 rounded-full
      border border-[rgba(var(--card-border),0.25)]
      bg-[rgba(var(--card-bg),0.08)]
      px-3 py-1 text-xs text-zinc-200
    ">
            {project.badge}
          </span>
        )}
      </div>

      {/* Ligne 2 : titre */}
      <h3 className="mt-3 text-base font-semibold leading-tight">
        {project.name}
      </h3>

      {/* Ligne 3 : description */}
      <p className="mt-2 text-sm text-zinc-300">
        {project.headline}
      </p>

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
        {/* Badges stores / web app */}
        {(appStore || googlePlay || webAppLink) && (
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

            {webAppLink && (
              <a
                href={webAppLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[38px] items-center gap-3 rounded-xl bg-white/10 px-4 text-sm text-white backdrop-blur transition hover:scale-105 hover:bg-white/20"
                aria-label="Open web app"
                title="Web App"
              >
                <div className="text-base">🌐</div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] text-zinc-300">Disponible sur</span>
                  <span className="text-xs font-medium">Web App</span>
                </div>
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
