import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

// Node 20 can run the TypeScript sources after transpilation without a test dependency.
function loadSource(name) {
  const filename = new URL(`../src/data/${name}`, import.meta.url);
  const { outputText } = ts.transpileModule(readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2017 },
  });
  return import("data:text/javascript;base64," + Buffer.from(outputText).toString("base64"));
}

const catalogue = Promise.all([loadSource("projects.ts"), loadSource("catalogueFilters.ts")]);
const names = (projects) => projects.map((project) => project.name);

test("search ignores case and accents, using every word across canonical fields", async () => {
  const [{ catalogueProjects }, { filterCatalogue }] = await catalogue;

  assert.deepEqual(names(filterCatalogue(catalogueProjects, "  CHÏEN  ", "all")), ["BoB", "Lofy"]);
  assert.deepEqual(names(filterCatalogue(catalogueProjects, "ÉLEVAGE chien", "all")), ["Lofy"]);
  assert.deepEqual(names(filterCatalogue(catalogueProjects, "véhicule api", "all")), ["Ablette"]);
  assert.equal(filterCatalogue(catalogueProjects, "chien véhicule", "all").length, 0);
});
test("search considers current platforms, SQL technologies and technology spelling", async () => {
  const [{ catalogueProjects }, { filterCatalogue }] = await catalogue;

  const mobile = names(filterCatalogue(catalogueProjects, "mobile", "all"));
  assert.deepEqual(mobile, ["BoB", "WoW100%", "Tempo", "BIS 2.0"]);

  const sql = names(filterCatalogue(catalogueProjects, "SQL", "all"));
  for (const project of ["Ablette", "Roro", "NextStep", "BIS 2.0"]) assert.ok(sql.includes(project));
  assert.ok(!sql.includes("Lofy"));
  assert.deepEqual(
    names(filterCatalogue(catalogueProjects, "NextJS", "all")),
    names(filterCatalogue(catalogueProjects, "Next.js", "all")),
  );
  assert.deepEqual(names(filterCatalogue(catalogueProjects, "JS", "all")), ["WeekEndly"]);
});

test("technology chips match actual technologies exactly, including versioned labels", async () => {
  const [{ catalogueProjects }, { filterCatalogue, technologyFilters }] = await catalogue;

  assert.equal(technologyFilters[0].id, "all");
  assert.deepEqual(names(filterCatalogue(catalogueProjects, "", "java")), ["Ablette"]);
  assert.deepEqual(names(filterCatalogue(catalogueProjects, "", "react")), ["Lofy", "Portfolio", "Ablette", "Bootcamp"]);
  assert.deepEqual(names(filterCatalogue(catalogueProjects, "", "react-native")), ["BIS 2.0"]);
  assert.deepEqual(names(filterCatalogue(catalogueProjects, "", "nextjs")), ["Lofy", "Portfolio", "Bootcamp"]);
  assert.deepEqual(names(filterCatalogue(catalogueProjects, "", "firebase")), ["BoB", "Lofy", "WoW100%", "Tempo"]);
  assert.ok(names(filterCatalogue(catalogueProjects, "", "php")).includes("NextStep"));
  assert.ok(!names(filterCatalogue(catalogueProjects, "", "postgresql")).includes("NextStep"));
});

test("planned technologies are searchable, while neither they nor logos can activate a chip", async () => {
  const [{ catalogueProjects }, { filterCatalogue }] = await catalogue;
  const example = {
    ...catalogueProjects[0],
    name: "Exemple",
    summary: "Tableau de bord",
    current: {
      ...catalogueProjects[0].current,
      implementedStack: { logos: ["symfony"] },
      roadmap: { stack: { languages: ["PHP 8.3"], frameworks: ["Symfony 7.4 LTS"], complementary: ["API REST"] } },
    },
  };

  assert.deepEqual(filterCatalogue([example], "symfony api", "all"), [example]);
  assert.deepEqual(filterCatalogue([example], "", "symfony"), []);
  assert.deepEqual(filterCatalogue([example], "", "php"), []);
  assert.deepEqual(filterCatalogue([example], "api", "symfony"), []);
});

test("canonical keywords, full names, categories and current version descriptions are searchable", async () => {
  const [{ catalogueProjects }, { filterCatalogue }] = await catalogue;
  const orbit = catalogueProjects.find((project) => project.name === "Orbit");
  const example = { ...orbit, keywords: ["Tableau stratégique"] };

  assert.deepEqual(filterCatalogue([example], "control center analytics stratégique métier", "all"), [example]);
  assert.deepEqual(names(filterCatalogue(catalogueProjects, "consulter véhicules", "all")), ["Ablette"]);
});

test("search and technology combine, and resetting both criteria restores catalogue order", async () => {
  const [{ catalogueProjects }, { filterCatalogue }] = await catalogue;

  assert.deepEqual(names(filterCatalogue(catalogueProjects, "chien", "react")), ["Lofy"]);
  assert.deepEqual(names(filterCatalogue(catalogueProjects, "chien", "flutter")), ["BoB"]);
  assert.deepEqual(filterCatalogue(catalogueProjects, "chien", "python"), []);
  assert.deepEqual(filterCatalogue(catalogueProjects, "aucunprojetnecorrespond", "all"), []);
  assert.deepEqual(filterCatalogue(catalogueProjects, "", "all"), catalogueProjects);
});
