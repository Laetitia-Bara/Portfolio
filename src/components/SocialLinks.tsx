import React from "react";

export default function SocialIcon({
  href,
  icon,
  label,
  className = "",
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`
        flex items-center justify-center
        h-10 w-10 rounded-xl
        border border-white/10
        bg-white/5
        text-zinc-300
        transition
        hover:bg-white/10 hover:text-white hover:scale-105
        ${className}
      `}
    >
      {icon}
    </a>
  );
}
