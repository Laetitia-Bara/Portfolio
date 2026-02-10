"use client";

import { useEffect, useState } from "react";

type Theme = "pro" | "unicorn";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("pro");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const current = saved ?? "pro";
    setTheme(current);
    document.body.dataset.theme = current;
  }, []);

  const toggle = () => {
    const next = theme === "pro" ? "unicorn" : "pro";
    setTheme(next);
    document.body.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      className="
        relative
        flex
        h-8
        w-44
        items-center
        rounded-full
        border border-white/10
        bg-white/5
        p-1
        text-xs
        leading-none
        backdrop-blur
        align-middle
      "
    >
      {/* thumb */}
      <span
        className={`
          absolute
          inset-y-1
          left-1
          w-20
          rounded-full
          bg-white/10
          transition-transform
          duration-200
          ${theme === "unicorn" ? "translate-x-20" : ""}
        `}
      />

      {/* labels */}
      <span className="z-10 flex w-1/2 items-center justify-center">
        Pro
      </span>
      <span className="z-10 flex w-1/2 items-center justify-center">
        🦄
      </span>
    </button>
  );
}
