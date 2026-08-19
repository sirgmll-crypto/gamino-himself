"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle({ dark }: { dark: boolean }) {
  const [isDark, setIsDark] = useState(false);

  // Sync from the class the no-flash script already set
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="neo-btn w-9 h-9 flex items-center justify-center text-sm leading-none"
      style={{
        background: dark ? "transparent" : "var(--page-bg)",
        borderColor: dark ? "#F5EFE0" : "var(--line)",
        boxShadow: dark ? "3px 3px 0px #F5EFE0" : "3px 3px 0px var(--line)",
        color: dark ? "#F5EFE0" : "var(--ink)",
      }}
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}