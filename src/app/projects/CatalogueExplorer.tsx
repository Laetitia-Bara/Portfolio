"use client";

import { Search } from "lucide-react";
import { useRef, useState } from "react";
import ProjectGrid from "../../components/ProjectGrid";
import { filterCatalogue, technologyFilters, type TechnologyFilter } from "../../data/catalogueFilters";
import type { Project } from "../../data/projects";

export default function CatalogueExplorer({ projects }: { projects: readonly Project[] }) {
  const [query, setQuery] = useState("");
  const [technology, setTechnology] = useState<TechnologyFilter>("all");
  const searchInput = useRef<HTMLInputElement>(null);
  const results = filterCatalogue(projects, query, technology);
  const hasCriteria = query !== "" || technology !== "all";

  function resetFilters() {
    setQuery("");
    setTechnology("all");
    searchInput.current?.focus();
  }

  return (
    <>
      <div role="search" aria-label="Recherche de projets" className="mb-6 space-y-4 rounded-2xl border border-white/15 bg-zinc-950/70 p-4 sm:p-5">
        <div className="relative">
          <label htmlFor="catalogue-query" className="sr-only">Rechercher un projet ou une technologie</label>
          <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-3.5 size-4 text-zinc-400" />
          <input
            ref={searchInput}
            id="catalogue-query"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Rechercher un projet ou une technologie…"
            aria-controls="catalogue-results"
            className="min-h-11 w-full min-w-0 rounded-xl border border-white/20 bg-white/5 py-2 pl-10 pr-3 text-sm text-zinc-100 placeholder:text-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          />
        </div>

        <fieldset className="min-w-0">
          <legend className="text-sm font-semibold text-zinc-100">Technologies utilisées</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {technologyFilters.map(({ id, label }) => (
              <label key={id} className="relative inline-flex cursor-pointer">
                <input
                  type="radio"
                  name="catalogue-technology"
                  value={id}
                  checked={technology === id}
                  onChange={() => setTechnology(id)}
                  className="peer sr-only"
                />
                <span className="inline-flex min-h-9 items-center whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 text-sm font-medium text-zinc-200 hover:bg-white/10 peer-checked:border-cyan-200/50 peer-checked:bg-cyan-300/15 peer-checked:text-cyan-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cyan-300">
                  {label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3">
          <p role="status" className="text-sm text-zinc-300">
            {results.length} projet{results.length === 1 ? "" : "s"}
          </p>
          <button
            type="button"
            onClick={resetFilters}
            disabled={!hasCriteria}
            className="min-h-9 rounded-lg border border-white/15 bg-white/5 px-3 text-sm font-semibold text-zinc-100 hover:bg-white/10 disabled:cursor-default disabled:text-zinc-400 disabled:hover:bg-white/5"
          >
            Effacer
          </button>
        </div>
      </div>

      <div id="catalogue-results">
        {results.length > 0 ? (
          <ProjectGrid projects={results} />
        ) : (
          <p className="rounded-2xl border border-white/15 bg-zinc-950/70 p-5 text-sm text-zinc-200">
            Aucun projet ne correspond à ces critères.
          </p>
        )}
      </div>
    </>
  );
}
