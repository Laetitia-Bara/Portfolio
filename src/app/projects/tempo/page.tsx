import type { Metadata } from "next";
import Container from "../../../components/Container";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Tempo",
    description: "Application Android et iOS pour planifier ses horaires de travail et suivre ses heures.",
    alternates: { canonical: "/projects/tempo" },
};

export default function TempoCaseStudy() {
    return (
        <section className="py-12">
            <Container>
                <div className="max-w-3xl">
                    <p className="text-sm text-zinc-400">Étude de cas</p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                        Tempo — Planning de Travail Simplifié
                    </h1>
                    <p className="mt-4 text-zinc-300 leading-relaxed">
                        Tempo est une application mobile pensée pour visualiser facilement son planning de
                        travail, suivre ses heures mensuelles et gérer ses journées particulières
                        (congés, jours fériés, horaires coupés) dans une interface simple et lisible.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <h2 className="text-base font-semibold">Problème</h2>
                            <p className="mt-2 text-sm text-zinc-300">
                                Suivre ses horaires et son volume d’heures mensuel devient vite pénible quand tout
                                est géré à la main, surtout avec des journées variables, des coupures ou des cas
                                particuliers comme les congés payés et jours fériés.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <h2 className="text-base font-semibold">Solution</h2>
                            <p className="mt-2 text-sm text-zinc-300">
                                Une application mobile centrée sur la lisibilité, avec vue calendrier, calcul
                                automatique des heures et gestion des types de journées.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-base font-semibold">Technologies</h2>
                        <p className="mt-2 text-sm text-zinc-300">
                            Dart · Flutter · Firebase Auth · Cloud Firestore · AdMob
                        </p>

                        <h2 className="mt-6 text-base font-semibold">Fonctionnalités</h2>
                        <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                            <li>• Vue mensuelle claire avec visualisation rapide des créneaux horaires</li>
                            <li>• Calcul automatique des heures mensuelles vs objectif contractuel</li>
                            <li>• Gestion métier des congés payés, jours fériés et cas spécifiques comme le 1er mai</li>
                        </ul>
                        <p className="mt-4 text-sm text-zinc-300">
                            La synchronisation avec Google Agenda et le calendrier iOS est envisagée.
                        </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4">

                        {/* Apple */}
                        <a
                            href="https://apps.apple.com/fr/app/tempoo/id6762077819"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="store-badge rounded-xl overflow-hidden transition hover:scale-105"
                        >
                            <Image
                                src="/stores/apple.png"
                                alt="Télécharger Tempo sur l’App Store"
                                width={140}
                                height={42}
                                className="h-[42px] w-auto"
                            />
                        </a>

                        {/* Google */}
                        <a
                            href="https://play.google.com/store/apps/details?id=fr.cosmoslty.tempo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="store-badge rounded-xl overflow-hidden transition hover:scale-105"
                        >
                            <Image
                                src="/stores/google.png"
                                alt="Télécharger Tempo sur Google Play"
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
