import Link from "next/link";
import Container from "./Container";
import ThemeToggle from "./themeToggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/legal", label: "Legal" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <Container>
        <div className="grid h-14 grid-cols-3 items-center">

          {/* LEFT — Logo */}
          <div className="flex items-center">
            <Link href="/" className="font-semibold tracking-tight">
              cosmos-lty<span className="text-zinc-400">.fr</span>
            </Link>
          </div>

          {/* CENTER — Theme Toggle */}
          <div className="flex justify-center">
            <ThemeToggle />
          </div>

          {/* RIGHT — Nav */}
          <nav className="flex justify-end items-center gap-4 text-sm text-zinc-300">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-lg px-2 py-1 hover:bg-white/5 hover:text-zinc-100"
              >
                {n.label}
              </Link>
            ))}
          </nav>

        </div>
      </Container>
    </header>
  );
}
