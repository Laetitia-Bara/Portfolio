import type { Metadata } from "next";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cosmos-lty.fr"),
  title: "Laëtitia Bara | Cosmos-Lty",
  description:
    "Portfolio de Laëtitia Bara, développeuse web, mobile et backend. Applications publiées et études de cas en Flutter, Next.js et Java Spring Boot.",
  icons: {
    icon: [
      {
        url: "/icone.png",
        type: "image/png",
      },
    ],
    shortcut: "/icone.png",
    apple: [
      {
        url: "/icone.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body data-theme="pro" className="text-zinc-100 antialiased">
        <a
          href="#contenu"
          className="sr-only z-[60] rounded-lg bg-zinc-950 p-3 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" tabIndex={-1} className="min-h-[calc(100vh-56px)] scroll-mt-24">
          {children}
        </main>
        <Footer />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5057499390168934"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
