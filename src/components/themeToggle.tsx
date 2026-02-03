"use client";

import { useEffect, useState } from "react";

type Theme = "pro" | "unicorn";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("pro");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) {
      setTheme(saved);
      document.body.dataset.theme = saved;
    } else {
      document.body.dataset.theme = "pro";
    }
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
      className="relative flex w-44 items-center rounded-full border border-white/10 bg-white/5 p-1 text-xs backdrop-blur"
    >
      <span
        className={`absolute left-1 top-1 h-6 w-20 rounded-full bg-white/10 transition ${
          theme === "unicorn" ? "translate-x-20" : ""
        }`}
      />

      <span className="z-10 w-1/2 text-center">Pro</span>
      <span className="z-10 w-1/2 text-center">🦄</span>
    </button>
  );
}
