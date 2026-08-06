"use client";
import { useState } from "react";

// Swap this with your own Spotify playlist ID
// Find it: open playlist in Spotify → Share → Copy link → the ID is after /playlist/
const PLAYLIST_ID = "37i9dQZF1DX8Uebhn9wzrS";

export default function MusicPlayer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {open && (
        <div
          className="overflow-hidden"
          style={{
            border: "2px solid #1A1208",
            boxShadow: "4px 4px 0px #1A1208",
          }}
        >
          <iframe
            src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0`}
            width="300"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Gamino's Playlist"
          />
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="neo-btn bg-[#E8553E] text-[#F5EFE0] px-5 py-2.5 font-black text-xs tracking-[0.2em] uppercase flex items-center gap-2"
      >
        <span className="text-base leading-none">{open ? "✕" : "♪"}</span>
        {open ? "Close" : "My Playlist"}
      </button>
    </div>
  );
}