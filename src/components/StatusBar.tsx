"use client";
import { useEffect, useState } from "react";

// Milano coordinates
const LAT = 45.4642;
const LON = 9.19;

export default function StatusBar() {
  const [time, setTime] = useState("");
  const [temp, setTemp] = useState<number | null>(null);

  // Live local time (Milan)
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Rome",
        hour12: true,
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 20000);
    return () => clearInterval(id);
  }, []);

  // Current temperature (Open-Meteo, no API key)
  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m`
    )
      .then((r) => r.json())
      .then((d) => {
        const t = d?.current?.temperature_2m;
        if (typeof t === "number") setTemp(Math.round(t));
      })
      .catch(() => {});
  }, []);

  return (
    <div className="inline-flex flex-wrap items-center rounded-full border-2 border-[#3D2E1C] bg-[#0D0A06]/80 backdrop-blur-sm text-[#C4B5A0] text-xs">
      {/* Location */}
      <span className="flex items-center gap-2 px-4 py-2.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#E8553E]">
          <path
            d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="11" r="2" fill="currentColor" />
        </svg>
        Milano, IT
      </span>

      {/* Time */}
      <span className="flex items-center gap-2 px-4 py-2.5 border-l border-[#3D2E1C]">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E8553E]" />
        {time || "—"}
      </span>

      {/* Temperature */}
      <span className="flex items-center gap-2 px-4 py-2.5 border-l border-[#3D2E1C]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#8C7B6E]">
          <path
            d="M6 16a4 4 0 010-8 5 5 0 019.6-1.5A3.5 3.5 0 0118 16H6z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        {temp !== null ? `${temp}°C` : "…"}
      </span>

      {/* Availability */}
      <a
        href="#contact"
        className="flex items-center gap-2 px-4 py-2.5 border-l border-[#3D2E1C] hover:text-[#F5EFE0] transition-colors"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#E8553E] opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8553E]" />
        </span>
        <span className="font-bold tracking-[0.15em] uppercase text-[#E8553E]">
          Available to connect
        </span>
      </a>
    </div>
  );
}