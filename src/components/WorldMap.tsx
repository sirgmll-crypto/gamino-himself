"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// [longitude, latitude]
const visited: { name: string; coordinates: [number, number] }[] = [
  { name: "Italy", coordinates: [12.5, 42.5] },
  { name: "France", coordinates: [2.3, 46.6] },
  { name: "Spain", coordinates: [-3.7, 40.4] },
  { name: "Germany", coordinates: [10.4, 51.1] },
  { name: "Belgium", coordinates: [4.5, 50.6] },
  { name: "Netherlands", coordinates: [5.3, 52.1] },
  { name: "Bulgaria", coordinates: [25.5, 42.7] },
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
    <div className="w-full">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 165 }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: { rsmKey: string }[] }) =>
            geographies.map((geo: { rsmKey: string }) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#2D1F0E"
                stroke="#4A3828"
                strokeWidth={0.4}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#3D2A14", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Visited — solid terracotta dots */}
        {visited.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={4} fill="#E8553E" stroke="#F5EFE0" strokeWidth={1} />
          </Marker>
        ))}

        {/* Next — pulsing hollow rings */}
        {next.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle
              r={5}
              fill="none"
              stroke="#F5EFE0"
              strokeWidth={1.5}
              className="map-pulse"
            />
            <circle r={2} fill="#F5EFE0" />
          </Marker>
        ))}
      </ComposableMap>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-6 mt-4 justify-center">
        <span className="flex items-center gap-2 text-[#8C7B6E] text-xs">
          <span className="inline-block w-3 h-3 rounded-full bg-[#E8553E] border border-[#F5EFE0]" />
          Visited
        </span>
        <span className="flex items-center gap-2 text-[#8C7B6E] text-xs">
          <span className="inline-block w-3 h-3 rounded-full border-2 border-[#F5EFE0]" />
          Next destination
        </span>
      </div>
    </div>
  );
}