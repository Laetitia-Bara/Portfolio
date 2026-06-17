import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Letty / Portfolio",
  description: "Full-stack developer & product builder.",
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

<head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5057499390168934"
     crossOrigin="anonymous"></script>
    </head>

      <body className="text-zinc-100 antialiased">
        <Header />
        <main className="min-h-[calc(100vh-56px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
