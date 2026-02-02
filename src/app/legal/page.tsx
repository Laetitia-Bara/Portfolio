import Container from "../../components/Container";
import Link from "next/link";

export default function LegalHub() {
  return (
    <section className="py-12">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">Legal</h1>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Documents légaux liés à BoB (et au site).
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Link className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10" href="/legal/privacy">
            <h2 className="font-semibold">Politique de confidentialité</h2>
            <p className="mt-2 text-sm text-zinc-300">Données, tracking, cookies, contact.</p>
          </Link>

          <Link className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10" href="/legal/cgu">
            <h2 className="font-semibold">CGU</h2>
            <p className="mt-2 text-sm text-zinc-300">Conditions d’utilisation de BoB.</p>
          </Link>

          <Link className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10" href="/legal/cgv">
            <h2 className="font-semibold">CGV</h2>
            <p className="mt-2 text-sm text-zinc-300">Abonnements, paiements, résiliation.</p>
          </Link>
        </div>
      </Container>
    </section>
  );
}
