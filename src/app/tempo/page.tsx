import Container from "../../components/Container";
import Image from "next/image";

export default function TempoCaseStudy() {
    return (
        <section className="py-12">
            <Container>
                <div className="max-w-3xl">
                    <p className="text-sm text-zinc-400">Case study</p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                        Tempo — Gestion des plages horaires de travail
                    </h1>
                    <p className="mt-4 text-zinc-300 leading-relaxed">
                        Tempo est une application mobile qui permet de suivre ses horaires de travail,
                        ses journées planifiées et ses totaux hebdomadaires et mensuels avec une vision
                        claire, rapide et exploitable.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <h2 className="text-base font-semibold">Problème</h2>
                            <p className="mt-2 text-sm text-zinc-300">
                                Suivre ses heures, ses jours travaillés et la conformité de son contrat peut vite
                                devenir confus sans un outil mobile simple et rapide à mettre à jour.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <h2 className="text-base font-semibold">Solution</h2>
                            <p className="mt-2 text-sm text-zinc-300">
                                Une app mobile pensée pour la saisie rapide, le suivi des plages travaillées
                                et le calcul clair des totaux hebdo et mensuels.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-base font-semibold">Stack</h2>
                        <p className="mt-2 text-sm text-zinc-300">
                            Flutter • Firebase Auth • Firestore • Google Mobile Ads
                        </p>

                        <h2 className="mt-6 text-base font-semibold">Highlights</h2>
                        <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                            <li>• Gestion du contrat de travail, des jours travaillés et du total mensuel</li>
                            <li>• Suivi des heures hebdomadaires et mensuelles</li>
                            <li>• Modification manuelle des plages travaillées occasionnelles</li>
                        </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                        <a
                            href="https://apps.apple.com/fr/app/tempoo/id6762077819"
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
                            href="https://play.google.com/store/apps/details?id=fr.cosmoslty.tempo"
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
                    </div>
                </div>
            </Container>
        </section>
    );
}