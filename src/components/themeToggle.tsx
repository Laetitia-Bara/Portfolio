"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "pro" | "unicorn";

const themeChangeEvent = "portfolio-theme-change";

function subscribeToTheme(onChange: () => void) {
  window.addEventListener(themeChangeEvent, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(themeChangeEvent, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getTheme(): Theme {
  return localStorage.getItem("theme") === "unicorn" ? "unicorn" : "pro";
}

function getServerTheme(): Theme {
  return "pro";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, getServerTheme);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggle = () => {
    const next = theme === "pro" ? "unicorn" : "pro";
    localStorage.setItem("theme", next);
    window.dispatchEvent(new Event(themeChangeEvent));
  };

  return (
    <button
      type="button"
      aria-label="Thème Unicorn"
      aria-pressed={theme === "unicorn"}
      onClick={toggle}
      className="
        relative
        flex
        h-8
        w-32
        shrink-0
        lg:w-44
        items-center
        rounded-full
        border border-white/10
        bg-white/5
        p-1
        text-xs
        leading-none
        backdrop-blur
        align-middle
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300
      "
    >
      {/* thumb */}
      <span
        className={`
          absolute
          inset-y-1
          left-1
          w-[calc(50%-0.25rem)]
          rounded-full
          bg-white/10
          motion-safe:transition-transform
          motion-safe:duration-200
          ${theme === "unicorn" ? "translate-x-full" : ""}
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
