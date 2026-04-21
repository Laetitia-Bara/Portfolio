import Container from "../../components/Container";

export default function LofyCaseStudy() {
    return (
        <section className="py-12">
            <Container>
                <div className="max-w-3xl">
                    <p className="text-sm text-zinc-400">Case study</p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                        Lofy — Gestion d’élevage canin
                    </h1>
                    <p className="mt-4 text-zinc-300 leading-relaxed">
                        Lofy est une web app métier pensée pour les éleveurs canins. Elle permet de piloter
                        les chiens, les reproducteurs, les saillies, les portées et les rappels, avec une
                        logique de données partagée avec BoB.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <h2 className="text-base font-semibold">Problème</h2>
                            <p className="mt-2 text-sm text-zinc-300">
                                Centraliser le suivi d’élevage dans une interface claire, fiable et exploitable
                                au quotidien, tout en gardant une cohérence avec les données déjà présentes dans
                                l’écosystème BoB.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <h2 className="text-base font-semibold">Solution</h2>
                            <p className="mt-2 text-sm text-zinc-300">
                                Une web app structurée autour d’un dashboard, de rappels, de la gestion des
                                chiens, des saillies et des portées, avec une UX orientée pilotage métier.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-base font-semibold">Stack</h2>
                        <p className="mt-2 text-sm text-zinc-300">
                            Next.js • TypeScript • Firebase Auth • Firestore • Cloudinary
                        </p>

                        <h2 className="mt-6 text-base font-semibold">Highlights</h2>
                        <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                            <li>• Gestion des chiens, saillies et portées avec données croisées avec BoB</li>
                            <li>• Rappels automatiques, notamment pour le suivi santé et vaccins</li>
                            <li>• Dashboard avec vision globale de l’activité d’élevage</li>
                        </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                        <a
                            href="https://lofy.cosmos-lty.fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20"
                        >
                            <div className="text-lg">🌐</div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-xs text-zinc-300">Disponible sur</span>
                                <span className="font-medium">Web App</span>
                            </div>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}