import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseStudyContent, CaseStudyImage } from "../../data/caseStudies";
import type { Project } from "../../data/projects";
import Container from "../Container";
import ProjectPlatformBadge from "../ProjectPlatformBadge";
import {
  externalLinks,
  getMainStack,
  getProjectBadges,
  getProjectSummary,
  technologies,
} from "../projectPresentation";

const panel = "card-theme rounded-2xl border border-[rgba(var(--card-border),0.18)] bg-[rgba(var(--card-bg),0.06)]";
const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";
const action = `inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 text-sm
  font-medium text-zinc-100 motion-safe:transition-colors hover:bg-white/10 ${focus}`;
const galleryPreviewHeight = 460;

function StudySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="min-w-0">
      <h2 className="mb-4 text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      {children}
    </section>
  );
}

function StudyFigure({ image, hero = false }: { image: CaseStudyImage; hero?: boolean }) {
  const wideHero = hero && image.width >= image.height;
  const previewWidth = Math.ceil(image.width * Math.min(1, galleryPreviewHeight / image.height));

  return (
    <figure className={`${panel} min-w-0 p-2.5 sm:p-3`}>
      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative block rounded-xl bg-black/25 ${focus}`}
      >
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          sizes={wideHero ? "(min-width: 1024px) 520px, (min-width: 768px) 720px, 92vw" : `${previewWidth}px`}
          loading={hero ? "eager" : "lazy"}
          className={`mx-auto h-auto rounded-xl ${wideHero ? "w-full" : "w-auto max-w-full object-contain"}`}
          style={wideHero ? undefined : { maxHeight: galleryPreviewHeight }}
        />
        <span
          aria-hidden="true"
          className={`absolute bottom-2 right-2 inline-flex min-h-9 items-center justify-center gap-1.5
            rounded-lg bg-zinc-950/85 text-xs font-medium text-white group-hover:bg-zinc-950 ${hero ? "w-9" : "px-2.5"}`}
        >
          <Maximize2 className="size-4" />
          {!hero && "Agrandir"}
        </span>
        <span className="sr-only"> Agrandir la capture (nouvel onglet)</span>
      </a>
      <figcaption className="px-1 pt-2.5 text-sm leading-relaxed text-zinc-300">
        {image.caption}
      </figcaption>
    </figure>
  );
}

export default function ProjectCaseStudy({ project, study }: { project: Project; study: CaseStudyContent }) {
  const { current, icon, name } = project;
  const { architecture, context, delivered, featureOverview, heroImage, highlights, quality, screenshots, subtitle } = study;
  const badges = getProjectBadges(project);
  const stack = getMainStack(current.implementedStack);
  const upcoming = [
    ...(current.roadmap?.features ?? []),
    ...(current.platforms.some((platform) => platform.kind === "web" && platform.pwa === "targeted") ? ["PWA"] : []),
  ];
  const plannedStack = [
    ...getMainStack(current.roadmap?.stack),
    ...(current.roadmap?.stack?.complementary ?? []),
  ];
  const compactDiagram = architecture && architecture.stages.length <= 4;
  const hasRoadmap = upcoming.length > 0 || plannedStack.length > 0;
  const hasEvolution = !!delivered || hasRoadmap;
  const hasClosingSections = !!(screenshots?.length || quality || hasEvolution);
  const featureImages = featureOverview?.items.flatMap(({ image }) => (image ? [image] : [])) ?? [];
  const hasSections = !!(context || featureOverview || architecture?.stages.length || highlights?.length || hasClosingSections);

  return (
    <article className="py-8 sm:py-12">
      <Container>
        <Link
          href="/projects"
          className={`inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-medium text-zinc-300
            underline-offset-4 hover:text-white hover:underline ${focus}`}
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Retour aux projets
        </Link>

        <header className={`mt-5 grid items-center gap-6 sm:gap-8 ${heroImage
          ? "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          : "max-w-3xl"}`}>
          <div className="min-w-0">
            <div className="flex items-center gap-3.5">
              {icon && (
                <Image
                  src={icon}
                  width={54}
                  height={54}
                  alt=""
                  className="size-12 shrink-0 rounded-xl border border-white/15 bg-white/10 object-contain p-1 sm:size-[54px]"
                />
              )}
              <h1 className="min-w-0 break-words text-4xl font-semibold tracking-tight sm:text-5xl">{name}</h1>
            </div>
            <p className="mt-4 text-lg leading-snug text-zinc-200">{subtitle}</p>
            {(badges.length > 0 || current.platforms.length > 0) && (
              <ul aria-label="Statut et plateformes" className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium" role="list">
                {badges.map(({ label, style }) => (
                  <li key={label} className={`rounded-full border px-2.5 py-1 ${style}`}>{label}</li>
                ))}
                {current.platforms.map((platform) => (
                  <ProjectPlatformBadge key={platform.kind} platform={platform} showPwa={false} />
                ))}
              </ul>
            )}

            {stack.length > 0 && (
              <ul aria-label="Stack principale" className="mt-5 flex flex-wrap gap-1.5" role="list">
                {stack.map((technology) => {
                  const logo = Object.values(technologies).find(({ name: logoName }) =>
                    technology === logoName || technology.startsWith(`${logoName} `),
                  );

                  return (
                    <li key={technology} className="inline-flex items-center gap-1.5 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-xs font-medium text-cyan-50">
                      {logo && <logo.Icon aria-hidden="true" color={logo.color} className="size-3.5" />}
                      {technology}
                    </li>
                  );
                })}
              </ul>
            )}

            <p className="mt-4 text-sm leading-relaxed text-zinc-300">{getProjectSummary(project)}</p>

            {current.links.length > 0 && (
              <ul aria-label="Liens du projet" className="mt-5 flex flex-wrap gap-2" role="list">
                {current.links.map(({ kind, href, label }) => {
                  const { Icon, label: defaultLabel } = externalLinks[kind];

                  return (
                    <li key={href}>
                      <a href={href} target="_blank" rel="noopener noreferrer" className={action}>
                        <Icon aria-hidden="true" className="size-4" />
                        {label ?? defaultLabel}
                        <ArrowUpRight aria-hidden="true" className="size-3.5 text-zinc-400" />
                        <span className="sr-only"> (nouvel onglet)</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          {heroImage && <StudyFigure image={heroImage} hero />}
        </header>

        <div hidden={!hasSections} className={hasSections
          ? "mt-10 grid gap-10 border-t border-[rgba(var(--card-border),0.22)] pt-8 sm:mt-12 sm:gap-12 sm:pt-10"
          : undefined}>
          {context && (
            <StudySection title="Contexte et rôle">
              <div className={`${panel} grid gap-5 p-5 text-sm leading-relaxed text-zinc-300 sm:p-6 ${context.role ? "md:grid-cols-2" : ""}`}>
                <p>{context.description}</p>
                {context.role && (
                  <div className="border-t border-white/10 pt-4 md:border-l md:border-t-0 md:pl-5 md:pt-0">
                    <h3 className="mb-1 font-semibold text-zinc-100">Ma contribution</h3>
                    <p>{context.role}</p>
                  </div>
                )}
              </div>
            </StudySection>
          )}

          {featureOverview && (
            <StudySection title="Fonctionnalités principales">
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-zinc-300">{featureOverview.solution}</p>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
                {featureOverview.items.map(({ title, description }) => (
                  <li key={title} className={`${panel} p-4 sm:p-5`}>
                    <h3 className="font-semibold text-zinc-100">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">{description}</p>
                  </li>
                ))}
              </ul>
            </StudySection>
          )}

          {featureImages.length > 0 && (
            <StudySection title="Captures d’écran">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-4">
                {featureImages.map((image) => <StudyFigure key={image.src} image={image} />)}
              </div>
            </StudySection>
          )}

          {architecture && architecture.stages.length > 0 && (
            <StudySection title="Architecture">
              <ol className={`flex flex-col gap-2 ${compactDiagram ? "md:flex-row" : ""}`} role="list">
                {architecture.stages.map(({ title, stack, description }, index) => (
                  <li key={title} className={`flex min-w-0 flex-1 flex-col gap-2 ${compactDiagram ? "md:flex-row" : ""}`}>
                    {index > 0 && (
                      <div aria-hidden="true" className="flex shrink-0 items-center justify-center text-cyan-200/80">
                        <ArrowDown className={`size-5 ${compactDiagram ? "md:hidden" : ""}`} />
                        {compactDiagram && <ArrowRight className="hidden size-5 md:block" />}
                      </div>
                    )}
                    <div className={`${panel} min-w-0 flex-1 p-4 sm:p-5`}>
                      <h3 className="text-sm font-medium text-cyan-200">{title}</h3>
                      <p className="mt-2 font-semibold">{stack}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              {architecture.detail && <p className="mt-3 text-sm leading-relaxed text-zinc-300">{architecture.detail}</p>}
            </StudySection>
          )}

          {!!highlights?.length && (
            <StudySection title="Réalisations techniques">
              <ul className={`${panel} divide-y divide-white/10 px-5 sm:px-6`} role="list">
                {highlights.map(({ title, description }) => (
                  <li key={title} className="grid gap-1.5 py-4 md:grid-cols-[minmax(0,13rem)_1fr] md:gap-5">
                    <h3 className="font-semibold text-zinc-100">{title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-300">{description}</p>
                  </li>
                ))}
              </ul>
            </StudySection>
          )}

          <div hidden={!hasClosingSections} className={hasClosingSections ? `grid items-start gap-10 sm:gap-12 ${screenshots?.length && (quality || hasEvolution)
            ? "lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]"
            : ""}` : undefined}>
            {!!screenshots?.length && (
              <StudySection title="Captures">
                <div className="grid gap-4">
                  {screenshots.map((image) => <StudyFigure key={image.src} image={image} />)}
                </div>
              </StudySection>
            )}

            {(quality || hasEvolution) && (
              <div className="grid min-w-0 gap-10 sm:gap-12">
                {quality && (
                  <StudySection title="Qualité et validation">
                    <div className={`${panel} space-y-4 p-5 text-sm leading-relaxed text-zinc-300 sm:p-6`}>
                      {!!quality.results?.length && (
                        <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,6.25rem),1fr))] gap-2">
                          {quality.results.map(({ label, value }) => (
                            <div key={label} className="flex flex-col-reverse items-start justify-end rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                              <dt className="mt-1 text-xs leading-snug text-zinc-300">{label}</dt>
                              <dd className="text-2xl font-semibold leading-none text-cyan-100">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      {quality.detail && <p>{quality.detail}</p>}
                      {!!quality.evidence?.length && (
                        <ul aria-label="Preuves de validation" className="flex flex-wrap gap-2" role="list">
                          {quality.evidence.map(({ label, href }) => (
                            <li key={href}>
                              <a href={href} target="_blank" rel="noopener noreferrer" className={action}>
                                {label}
                                <ArrowUpRight aria-hidden="true" className="size-3.5 text-zinc-400" />
                                <span className="sr-only"> (nouvel onglet)</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                      {quality.limits && <p className="border-t border-white/10 pt-4">{quality.limits}</p>}
                    </div>
                  </StudySection>
                )}

                {hasEvolution && (
                  <StudySection title={hasRoadmap ? "Évolutions" : "État actuel"}>
                    <div className={`${panel} space-y-4 p-5 text-sm leading-relaxed text-zinc-300 sm:p-6`}>
                      {delivered && (
                        <div>
                          <h3 className="mb-1 font-semibold text-zinc-100">Fonctionnalités livrées</h3>
                          <p>{delivered}</p>
                        </div>
                      )}
                      {upcoming.length > 0 && (
                        <div>
                          <h3 className="mb-1 font-semibold text-zinc-100">Prochains lots</h3>
                          <ul className="list-disc space-y-1 pl-5">
                            {upcoming.map((item) => <li key={item}>{item}</li>)}
                          </ul>
                        </div>
                      )}
                      {plannedStack.length > 0 && (
                        <div>
                          <h3 className="mb-1 font-semibold text-zinc-100">Technologies envisagées</h3>
                          <p>{plannedStack.join(" · ")}</p>
                        </div>
                      )}
                    </div>
                  </StudySection>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </article>
  );
}
