"use client";
import WorldMap from "react-svg-worldmap";

// ISO alpha-2 codes of visited countries
const VISITED = [
  "it", "fr", "es", "de", "be", "nl", "bg", "lu", "us", "ca", "mx", "cm",
];

const data = VISITED.map((country) => ({ country, value: 1 }));

export default function TravelMap() {
  return (
    <WorldMap
      size="responsive"
      backgroundColor="transparent"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data={data as any}
      color="#E8553E"
      strokeOpacity={0.5}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      styleFunction={(ctx: any) => {
        const code = String(ctx.countryCode || "").toLowerCase();
        const visited = VISITED.includes(code);
        return {
          fill: visited ? "#E8553E" : "#2D1F0E",
          stroke: "#4A3828",
          strokeWidth: 0.4,
          cursor: "default",
        };
      }}
    />
  );
}