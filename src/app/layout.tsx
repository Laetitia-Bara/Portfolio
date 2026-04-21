import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

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
      <body className="text-zinc-100 antialiased">
        <Header />
        <main className="min-h-[calc(100vh-56px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
