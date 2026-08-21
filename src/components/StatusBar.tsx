"use client";
import { useEffect, useState } from "react";

// Milano coordinates
const LAT = 45.4642;
const LON = 9.19;

// Business hours: Mon–Fri, 09:00–18:00 Europe/Rome
function computeAvailable(): boolean {
  const now = new Date();
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Rome",
    weekday: "short",
  }).format(now);
  const hour = parseInt(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Rome",
      hour: "2-digit",
      hour12: false,
    }).format(now),
    10
  );
  const isWeekday = !["Sat", "Sun"].includes(weekday);
  return isWeekday && hour >= 9 && hour < 18;
}

function formatTime(): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Rome",
    hour12: true,
  }).format(new Date());
}

export default function StatusBar() {
  const [time, setTime] = useState("");
  const [temp, setTemp] = useState<number | null>(null);
  const [available, setAvailable] = useState(false);

  // Live local time + availability
  useEffect(() => {
    const tick = () => {
      setTime(formatTime());
      setAvailable(computeAvailable());
    };
    tick();
    const id = setInterval(tick, 20000);
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

  const statusColor = available ? "#3FB950" : "#E5484D";
  const statusLabel = available ? "Available to connect" : "Currently offline";

  return (
    <div className="fixed bottom-5 left-0 right-0 z-40 flex justify-center px-4 no-print pointer-events-none">
      <div className="pointer-events-auto inline-flex flex-wrap items-center justify-center rounded-full border-2 border-[#3D2E1C] bg-[#0D0A06]/85 backdrop-blur-sm text-[#C4B5A0] text-[11px] sm:text-xs shadow-lg">
        {/* Location */}
        <span className="flex items-center gap-2 px-3.5 py-2.5">
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
        <span className="flex items-center gap-2 px-3.5 py-2.5 border-l border-[#3D2E1C]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E8553E]" />
          {time || "—"}
        </span>

        {/* Temperature */}
        <span className="flex items-center gap-2 px-3.5 py-2.5 border-l border-[#3D2E1C]">
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

        {/* Availability — green in business hours, red otherwise */}
        <a
          href="#contact"
          className="flex items-center gap-2 px-3.5 py-2.5 border-l border-[#3D2E1C] hover:text-[#F5EFE0] transition-colors"
        >
          <span className="relative flex h-2 w-2">
            {available && (
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                style={{ backgroundColor: statusColor }}
              />
            )}
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: statusColor }}
            />
          </span>
          <span
            className="font-bold tracking-[0.15em] uppercase"
            style={{ color: statusColor }}
          >
            {statusLabel}
          </span>
        </a>
      </div>
    </div>
  );
}