"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
  Graticule,
} from "react-simple-maps";

// Self-hosted (was jsDelivr CDN) — removes the runtime third-party dependency
const geoUrl = "/countries-110m.json";

// [longitude, latitude]
const visited: { name: string; coordinates: [number, number] }[] = [
  { name: "Italy", coordinates: [12.5, 42.5] },
  { name: "France", coordinates: [2.3, 46.6] },
  { name: "Spain", coordinates: [-3.7, 40.4] },
  { name: "Germany", coordinates: [10.4, 51.1] },
  { name: "Belgium", coordinates: [4.5, 50.6] },
  { name: "Netherlands", coordinates: [5.3, 52.1] },
  { name: "Bulgaria", coordinates: [25.5, 42.7] },
  { name: "Luxembourg", coordinates: [6.1, 49.8] },
  { name: "United States", coordinates: [-98.5, 39.8] },
  { name: "Canada", coordinates: [-106.3, 56.1] },
  { name: "Mexico", coordinates: [-102.5, 23.6] },
  { name: "Cameroon", coordinates: [12.35, 7.37] },
];

const next: { name: string; coordinates: [number, number] }[] = [
  { name: "Kenya", coordinates: [37.9, -0.02] },
  { name: "Ivory Coast", coordinates: [-5.55, 7.54] },
  { name: "Japan", coordinates: [138.25, 36.2] },
];

export default function WorldMap() {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{ scale: 170 }}
      style={{ width: "100%", height: "auto" }}
    >
      <defs>
        {/* Soft glow for markers */}
        <filter id="dotGlow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Ocean gradient */}
        <radialGradient id="ocean" cx="50%" cy="42%" r="75%">
          <stop offset="0%" stopColor="#1C130A" />
          <stop offset="100%" stopColor="#0B0805" />
        </radialGradient>
      </defs>

      {/* Ocean + graticule grid */}
      <Sphere
        id="rsm-sphere"
        fill="url(#ocean)"
        stroke="#3D2E1C"
        strokeWidth={0.7}
      />
      <Graticule stroke="#3D2E1C" strokeWidth={0.3} strokeOpacity={0.35} />

      {/* Countries — interactive */}
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: { rsmKey: string }[] }) =>
          geographies.map((geo: { rsmKey: string }) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#241A10"
              stroke="#4A3828"
              strokeWidth={0.4}
              style={{
                default: { outline: "none", transition: "fill 0.25s ease" },
                hover: { fill: "#E8553E", outline: "none", cursor: "pointer" },
                pressed: { fill: "#C73F28", outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      {/* Visited — glowing dot with soft halo */}
      {visited.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={9} fill="#E8553E" opacity={0.12} />
          <circle
            r={4}
            fill="#E8553E"
            stroke="#F5EFE0"
            strokeWidth={1}
            style={{ filter: "url(#dotGlow)" }}
          />
        </Marker>
      ))}

      {/* Next — pulsing halo ring */}
      {next.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={9} fill="#F5EFE0" opacity={0.08} />
          <circle
            r={5}
            fill="none"
            stroke="#F5EFE0"
            strokeWidth={1.5}
            className="map-pulse"
          />
          <circle
            r={2}
            fill="#F5EFE0"
            style={{ filter: "url(#dotGlow)" }}
          />
        </Marker>
      ))}
    </ComposableMap>
  );
}