import type { ProjectPlatform } from "../data/projects";
import { availability, platforms } from "./projectPresentation";

export default function ProjectPlatformBadge({
  platform,
  showPwa = true,
}: {
  platform: ProjectPlatform;
  showPwa?: boolean;
}) {
  const { label, Icon, color } = platforms[platform.kind];
  const pwa = showPwa && platform.kind === "web" ? platform.pwa : undefined;
  const pwaLabel = pwa === "targeted" ? "PWA visée" : pwa === "available" ? "PWA" : undefined;
  const platformLabel = [label, availability[platform.availability]].filter(Boolean).join(" ");
  const accessibleLabel = pwaLabel ? `${platformLabel} · ${pwaLabel}` : platformLabel;
  const showLabel = platform.availability !== "public" || pwaLabel !== undefined;

  return (
    <li
      title={showLabel ? undefined : accessibleLabel}
      className="inline-flex min-h-5 items-center gap-1 rounded-md bg-white/5 px-1.5 py-0.5 text-xs leading-4 text-zinc-200"
    >
      <Icon aria-hidden="true" focusable="false" className={`h-3.5 w-3.5 shrink-0 ${color}`} />
      <span className={showLabel ? undefined : "sr-only"}>{accessibleLabel}</span>
    </li>
  );
}
