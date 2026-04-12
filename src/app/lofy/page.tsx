import Container from "../../components/Container";

export default function LofyCaseStudy() {
    return (
        <section className="py-12">
            <Container>
                <div className="max-w-3xl">
                    <p className="text-sm text-zinc-400">Case study</p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                        Lofy — Gestion d’élevage
                    </h1>
                    <p className="mt-4 text-zinc-300 leading-relaxed">
                        Lofy est une web app pensée pour les éleveurs canins, avec gestion des chiens,
                        rappels, saillies, portées et pilotage du quotidien d’élevage.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <h2 className="text-base font-semibold">Problème</h2>
                            <p className="mt-2 text-sm text-zinc-300">
                                Centraliser le suivi d’élevage dans une interface claire, rapide
                                et exploitable au quotidien.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <h2 className="text-base font-semibold">Solution</h2>
                            <p className="mt-2 text-sm text-zinc-300">
                                Une web app métier avec dashboard, rappels, saillies, portées
                                et logique de données cohérente avec l’écosystème BoB.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-base font-semibold">Stack</h2>
                        <p className="mt-2 text-sm text-zinc-300">
                            Next.js • Firebase Auth • Firestore • i18n • Vercel
                        </p>

                        <h2 className="mt-6 text-base font-semibold">Highlights</h2>
                        <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                            <li>• Dashboard élevage avec KPI et urgences</li>
                            <li>• Gestion des rappels, saillies et portées</li>
                            <li>• Synchronisation logique avec l’univers BoB</li>
                        </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                        <a
                            href="https://lofy.cosmos-lty.fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
                        >
                            Ouvrir Lofy
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}