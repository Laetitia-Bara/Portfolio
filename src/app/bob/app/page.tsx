import Container from "../../../components/Container";
import Image from "next/image";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=fr.cosmoslty.bob";
const IOS_URL =
  "https://apps.apple.com/fr/app/bob-carnet-dexpos-canines/id6749371300";

function detectOS(ua: string) {
  const s = ua.toLowerCase();
  if (s.includes("android")) return "android";
  if (s.includes("iphone") || s.includes("ipad") || s.includes("ipod")) return "ios";
  return "other";
}

export default async function BobAppLink() {
  const h = await headers();
  const ua = h.get("user-agent") ?? "";
  const os = detectOS(ua);

  if (os === "android") redirect(ANDROID_URL);
  if (os === "ios") redirect(IOS_URL);

  return (
    <section className="py-12">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm text-zinc-400">Téléchargement</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            BoB — Télécharger l’app
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Choisis ton store. (Sur ordinateur, la redirection automatique n’est pas applicable.)
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={IOS_URL}
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
              href={ANDROID_URL}
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

          <p className="mt-6 text-xs text-zinc-400">
            Lien à partager : <span className="font-mono">/bob/app</span>
          </p>
        </div>
      </Container>
    </section>
  );
}