import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Letty / Portfolio",
  description: "Full-stack developer & product builder.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">

<head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5057499390168934"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </head>

      <body className="text-zinc-100 antialiased">
        <Header />
        <main className="min-h-[calc(100vh-56px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
