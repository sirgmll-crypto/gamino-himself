"use client";
import { useEffect, useRef, useState } from "react";

// Swap this with your own Spotify playlist ID
// (open playlist in Spotify → Share → Copy link → the ID is after /playlist/)
const PLAYLIST_ID = "37i9dQZF1DX8Uebhn9wzrS";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: any) => void;
  }
}

export default function MusicPlayer() {
  const [open, setOpen] = useState(true);
  const [playing, setPlaying] = useState(false);
  const embedRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<any>(null);

  useEffect(() => {
    // Inject the Spotify iFrame API once
    const scriptId = "spotify-iframe-api";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://open.spotify.com/embed/iframe-api/v1";
      s.async = true;
      document.body.appendChild(s);
    }

    window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
      if (!embedRef.current) return;
      IFrameAPI.createController(
        embedRef.current,
        {
          uri: `spotify:playlist:${PLAYLIST_ID}`,
          width: "100%",
          height: 152,
        },
        (controller: any) => {
          controllerRef.current = controller;

          controller.addListener("playback_update", (e: any) => {
            setPlaying(!e?.data?.isPaused);
          });

          // Browsers block autoplay-with-sound → start on the first user gesture
          const start = () => {
            try {
              controller.play();
            } catch {
              /* ignored */
            }
            cleanup();
          };
          const events = ["pointerdown", "touchstart", "keydown"];
          const cleanup = () =>
            events.forEach((ev) => window.removeEventListener(ev, start));
          events.forEach((ev) =>
            window.addEventListener(ev, start, { passive: true })
          );
        }
      );
    };

    return () => {
      window.onSpotifyIframeApiReady = undefined;
    };
  }, []);

  const togglePlay = () => controllerRef.current?.togglePlay?.();

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3 no-print">
      {/* Player panel — stays mounted so playback never stops */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          width: 300,
          maxHeight: open ? 160 : 0,
          opacity: open ? 1 : 0,
          border: open ? "2px solid #1A1208" : "none",
          boxShadow: open ? "4px 4px 0px #1A1208" : "none",
        }}
      >
        <div ref={embedRef} />
      </div>

      <div className="flex gap-2">
        <button
          onClick={togglePlay}
          className="neo-btn bg-[#E8553E] text-[#F5EFE0] px-4 py-2.5 font-black text-xs tracking-[0.15em] uppercase flex items-center gap-2"
          aria-label={playing ? "Pause music" : "Play music"}
        >
          <span className="text-base leading-none">{playing ? "❚❚" : "▶"}</span>
          {playing ? "Playing" : "Play"}
        </button>
        <button
          onClick={() => setOpen(!open)}
          className="neo-btn bg-[#1A1208] text-[#F5EFE0] px-3 py-2.5 font-black text-xs tracking-[0.15em] uppercase"
          aria-label={open ? "Hide player" : "Show player"}
        >
          {open ? "✕" : "♪"}
        </button>
      </div>
    </div>
  );
}