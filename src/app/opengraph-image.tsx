import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Gamino Himself — Gamaliel Bepa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Load the portrait as a data URI (best-effort — card still renders without it)
  let photo = "";
  try {
    const bytes = readFileSync(join(process.cwd(), "public", "me.jpg"));
    photo = `data:image/jpeg;base64,${bytes.toString("base64")}`;
  } catch {
    photo = "";
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "radial-gradient(ellipse at 75% 45%, #2D1F0E 0%, #0D0A06 70%)",
          position: "relative",
        }}
      >
        {/* Terracotta accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 14,
            background: "#E8553E",
          }}
        />

        {/* Photo, right side */}
        {photo && (
          <img
            src={photo}
            width={520}
            height={630}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: 520,
              height: 630,
              objectFit: "cover",
              filter: "grayscale(1)",
            }}
          />
        )}

        {/* Dark scrim over photo for text contrast */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #0D0A06 0%, rgba(13,8,6,0.94) 45%, rgba(13,8,6,0.5) 75%, rgba(13,8,6,0.3) 100%)",
          }}
        />

        {/* Text */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 90px",
            maxWidth: 760,
          }}
        >
          <div
            style={{
              color: "#E8553E",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 8,
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Gamaliel Bepa
          </div>
          <div
            style={{
              color: "#F5EFE0",
              fontSize: 128,
              fontWeight: 800,
              lineHeight: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Gamino</span>
            <span style={{ color: "#E8553E" }}>Himself.</span>
          </div>
          <div
            style={{
              color: "#D8C9B6",
              fontSize: 30,
              marginTop: 32,
            }}
          >
            IT Professional · Builder · Father
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}