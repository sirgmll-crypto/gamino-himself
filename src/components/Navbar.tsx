"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Family", href: "#family" },
  { label: "Travels", href: "#travels" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b-2" : "bg-transparent"
      }`}
      style={
        scrolled
          ? { background: "var(--page-bg)", borderColor: "var(--line)" }
          : undefined
      }
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-xl font-black italic transition-colors"
          style={{ color: scrolled ? "var(--ink)" : "#F5EFE0" }}
        >
          Gamino.
        </a>

        {/* Desktop links + toggle */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs font-bold tracking-[0.2em] uppercase transition-colors hover:text-[#E8553E]"
                  style={{ color: scrolled ? "var(--ink)" : "#C4B5A0" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle dark={!scrolled} />
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle dark={!scrolled} />
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: scrolled ? "var(--ink)" : "#F5EFE0",
                transform: open ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: scrolled ? "var(--ink)" : "#F5EFE0",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: scrolled ? "var(--ink)" : "#F5EFE0",
                transform: open ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t-2 px-6 py-6"
          style={{ background: "var(--page-bg)", borderColor: "var(--line)" }}
        >
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs font-bold tracking-[0.2em] uppercase hover:text-[#E8553E] transition-colors"
                  style={{ color: "var(--ink)" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}