import Link from "next/link";
import Container from "./Container";
import ThemeToggle from "./themeToggle";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/85 backdrop-blur">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 py-2 lg:grid lg:h-14 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-4 lg:py-0">
          <Link href="/" className="w-fit shrink-0 rounded-sm font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
            cosmos-lty<span className="text-zinc-400">.fr</span>
          </Link>

          <ThemeToggle />

          <div className="flex w-full flex-wrap items-center justify-between gap-1.5 lg:w-auto lg:justify-end lg:gap-4">
            <nav aria-label="Navigation principale" className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-zinc-300 lg:gap-x-4">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-lg px-1.5 py-1 hover:bg-white/5 hover:text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 sm:px-2"
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <a
              href="https://ko-fi.com/cosmoslty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-fuchsia-400/20 bg-fuchsia-500/5 px-2.5 py-1 text-xs font-medium text-zinc-200 transition hover:bg-fuchsia-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 lg:gap-2 lg:px-3"
            >
              <span aria-hidden="true">☕</span>
              <span>Un café ?</span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
