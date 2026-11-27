import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";
import ProjectPlatformBadge from "./ProjectPlatformBadge";
import {
  externalLinks,
  getMainStack,
  getProjectBadges,
  getProjectSummary,
  technologies,
} from "./projectPresentation";

export default function ProjectCard({ project }: { project: Project }) {
  const { category, current, detailsHref, fullName, icon, name } = project;
  const summary = getProjectSummary(project);
  const implemented = current.implementedStack;
  const planned = current.roadmap?.stack;
  const badges = getProjectBadges(project);
  const mainStack = getMainStack(implemented);
  const secondaryStack = implemented?.complementary ?? [];
  const plannedStack = getMainStack(planned);
  const plannedComplementary = planned?.complementary ?? [];
  const plannedStackLabel = planned?.confirmed ? "Stack retenue" : "Stack envisagée";
  const plannedTechnologies = planned?.confirmed ? "retenues" : "envisagées";
  const logos = implemented?.logos ?? planned?.logos;
  const hasLinks = Boolean(detailsHref || current.links.length);

  return (
    <article
      id={project.slug}
      className={`card-theme relative isolate flex min-w-0 scroll-mt-32 flex-col gap-3.5 rounded-2xl p-4 shadow-sm sm:scroll-mt-24
        border border-[rgba(var(--card-border),0.18)] bg-[rgba(var(--card-bg),0.06)]
        ${hasLinks ? "transition-colors hover:border-cyan-200/50 hover:bg-[rgba(var(--card-bg),0.10)] focus-within:border-cyan-200/50" : ""}`}
    >
      <div className="flex items-start gap-3 sm:min-h-11">
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          {icon && (
            <div className="shrink-0 rounded-xl border border-white/10 bg-white/10 p-1">
              <Image src={icon} alt="" width={32} height={32} className="h-8 w-8 rounded-lg object-contain" />
            </div>
          )}
          <h3 className="min-w-0 break-words text-base font-semibold leading-snug">
            {detailsHref ? (
              <Link
                href={detailsHref}
                className="underline decoration-white/40 underline-offset-4
                  after:absolute after:inset-0 after:rounded-2xl after:content-['']
                  hover:text-cyan-100 focus-visible:text-cyan-100
                  focus-visible:outline-none focus-visible:after:outline
                  focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-cyan-300"
              >
                {name}
              </Link>
            ) : name}
          </h3>
        </div>

        {logos && (
          <ul
            aria-label={implemented?.logos ? "Logos technologiques" : `Logos des technologies ${plannedTechnologies}`}
            className="flex shrink-0 gap-1 sm:gap-1.5"
            role="list"
          >
            {logos.map((technology) => {
              const { name, Icon, color } = technologies[technology];
              return (
                <li key={technology} className="grid h-6 w-6 place-items-center rounded-md bg-white/5 text-cyan-100 sm:h-7 sm:w-7">
                  <Icon aria-hidden="true" focusable="false" color={color} className="h-3.5 w-3.5" />
                  <span className="sr-only">{name}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {(badges.length > 0 || current.platforms.length > 0) && (
        <div className="flex flex-wrap items-start gap-x-3 gap-y-2">
          {badges.length > 0 && (
            <ul aria-label="Statut et nature du projet" className="flex flex-wrap gap-1.5" role="list">
              {badges.map(({ label, style }) => (
                <li key={label} className={`rounded-full border px-2 py-0.5 text-xs font-medium ${style}`}>
                  {label}
                </li>
              ))}
            </ul>
          )}

          {current.platforms.length > 0 && (
            <ul aria-label="Plateformes" className="ml-auto flex flex-wrap justify-end gap-1" role="list">
              {current.platforms.map((platform) => <ProjectPlatformBadge key={platform.kind} platform={platform} />)}
            </ul>
          )}
        </div>
      )}

      {(fullName || category) && (
        <div className="space-y-0.5 text-xs leading-relaxed">
          {fullName && <p className="font-medium text-zinc-200">{fullName}</p>}
          {category && <p className="text-zinc-400">{category}</p>}
        </div>
      )}

      <p className="text-sm leading-relaxed text-zinc-300">{summary}</p>

      {(mainStack.length > 0 || secondaryStack.length > 0 || plannedStack.length > 0 || plannedComplementary.length > 0) && (
        <dl className="space-y-2 border-t border-[rgba(var(--card-border),0.16)] pt-3 [overflow-wrap:anywhere]">
          {mainStack.length > 0 && (
            <div>
              <dt className="text-xs font-medium text-zinc-300">Stack principale</dt>
              <dd className="mt-1.5">
                <ul className="flex flex-wrap gap-1.5" role="list">
                  {mainStack.map((item) => (
                    <li key={item} className="max-w-full rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2 py-0.5 text-xs font-medium text-cyan-100">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          )}
          {secondaryStack.length > 0 && (
            <div>
              <dt className="sr-only">Stack complémentaire</dt>
              <dd className="text-xs leading-relaxed text-zinc-400">{secondaryStack.join(" · ")}</dd>
            </div>
          )}
          {plannedStack.length > 0 && (
            <div>
              <dt className="text-xs font-medium text-zinc-300">{plannedStackLabel}</dt>
              <dd className="mt-1 text-xs font-medium leading-relaxed text-zinc-200">{plannedStack.join(" · ")}</dd>
            </div>
          )}
          {plannedComplementary.length > 0 && (
            <div>
              <dt className="sr-only">Technologies complémentaires {plannedTechnologies}</dt>
              <dd className="text-xs leading-relaxed text-zinc-400">{plannedComplementary.join(" · ")}</dd>
            </div>
          )}
        </dl>
      )}

      {current.links.length > 0 && (
        <ul aria-label="Liens externes" className="mt-auto flex flex-wrap gap-1.5 border-t border-[rgba(var(--card-border),0.16)] pt-3" role="list">
          {current.links.map(({ kind, href, label }) => {
            const { Icon, label: defaultLabel } = externalLinks[kind];

            return (
              <li key={href} className="relative z-10">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-8 items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-1.5
                    text-xs font-medium text-zinc-100 transition-colors hover:bg-white/15 focus-visible:outline
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  <Icon aria-hidden="true" focusable="false" className="h-3 w-3" />
                  {label ?? defaultLabel}
                  <span className="sr-only"> · {name} (nouvel onglet)</span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
}
