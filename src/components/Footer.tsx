import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-3 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cosmos-lty</p>
          <div className="flex gap-4">
            <Link href="/legal" className="hover:text-zinc-200">
              Legal
            </Link>
            <Link href="/legal/privacy" className="hover:text-zinc-200">
              Confidentialité
            </Link>
            <Link href="/legal/cgu" className="hover:text-zinc-200">
              CGU
            </Link>
            <Link href="/legal/cgv" className="hover:text-zinc-200">
              CGV
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
