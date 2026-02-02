import Link from "next/link";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:bg-white/10">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold">{project.name}</h3>
          <p className="mt-2 text-sm text-zinc-300">{project.headline}</p>
        </div>
        {project.badge ? (
          <span className="shrink-0 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300">
            {project.badge}
          </span>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="rounded-full bg-black/30 px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10"
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

      <div className="mt-5 flex flex-wrap gap-3">
        {project.links.map((l) =>
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
              rel="noreferrer"
              className="text-sm text-zinc-200 underline decoration-white/20 underline-offset-4 hover:decoration-white/60"
            >
              {l.label}
            </a>
          )
        )}
      </div>
    </div>
  );
}
