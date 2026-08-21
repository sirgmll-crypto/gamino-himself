"use client";
import { useEffect, useRef } from "react";

// Home base for flight arcs
const HOME = { lat: 42.5, lng: 12.5 }; // Italy

const visited = [
  { name: "Italy", lat: 42.5, lng: 12.5 },
  { name: "France", lat: 46.6, lng: 2.3 },
  { name: "Spain", lat: 40.4, lng: -3.7 },
  { name: "Germany", lat: 51.1, lng: 10.4 },
  { name: "Belgium", lat: 50.6, lng: 4.5 },
  { name: "Netherlands", lat: 52.1, lng: 5.3 },
  { name: "Bulgaria", lat: 42.7, lng: 25.5 },
  { name: "Luxembourg", lat: 49.8, lng: 6.1 },
  { name: "United States", lat: 39.8, lng: -98.5 },
  { name: "Canada", lat: 56.1, lng: -106.3 },
  { name: "Mexico", lat: 23.6, lng: -102.5 },
  { name: "Cameroon", lat: 7.37, lng: 12.35 },
];

const nextDest = [
  { name: "Kenya", lat: -0.02, lng: 37.9 },
  { name: "Ivory Coast", lat: 7.54, lng: -5.55 },
  { name: "Japan", lat: 36.2, lng: 138.25 },
];

const ACCENT = "#E8553E";
const CREAM = "#F5EFE0";

export default function Globe3D() {
  const elRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeRef = useRef<any>(null);

  useEffect(() => {
    let destroyed = false;

    (async () => {
      // globe.gl's bundled types declare a constructor, but the documented
      // runtime API is the factory form Globe()(element) — cast to use it.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const GlobeGL = (await import("globe.gl")).default as any;
      if (destroyed || !elRef.current) return;

      const points = [
        ...visited.map((d) => ({ ...d, color: ACCENT, size: 0.32 })),
        ...nextDest.map((d) => ({ ...d, color: CREAM, size: 0.4 })),
      ];

      const arcs = [
        ...visited
          .filter((d) => d.name !== "Italy")
          .map((d) => ({
            startLat: HOME.lat,
            startLng: HOME.lng,
            endLat: d.lat,
            endLng: d.lng,
            color: [ACCENT, ACCENT],
          })),
        ...nextDest.map((d) => ({
          startLat: HOME.lat,
          startLng: HOME.lng,
          endLat: d.lat,
          endLng: d.lng,
          color: [CREAM, CREAM],
        })),
      ];

      const globe = GlobeGL()(elRef.current)
        .globeImageUrl(
          "https://unpkg.com/three-globe/example/img/earth-dark.jpg"
        )
        .bumpImageUrl(
          "https://unpkg.com/three-globe/example/img/earth-topology.png"
        )
        .backgroundColor("rgba(0,0,0,0)")
        .showAtmosphere(true)
        .atmosphereColor(ACCENT)
        .atmosphereAltitude(0.18)
        .pointsData(points)
        .pointLat("lat")
        .pointLng("lng")
        .pointColor("color")
        .pointAltitude(0.02)
        .pointRadius("size")
        .arcsData(arcs)
        .arcColor("color")
        .arcStartLat("startLat")
        .arcStartLng("startLng")
        .arcEndLat("endLat")
        .arcEndLng("endLng")
        .arcStroke(0.5)
        .arcDashLength(0.5)
        .arcDashGap(0.28)
        .arcDashAnimateTime(2600)
        .arcsTransitionDuration(0)
        .width(elRef.current.clientWidth)
        .height(500);

      // Auto-rotate, no zoom
      const controls = globe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.55;
      controls.enableZoom = false;
      globe.pointOfView({ lat: 18, lng: 8, altitude: 2.3 });

      globeRef.current = globe;

      const onResize = () => {
        if (globeRef.current && elRef.current) {
          globeRef.current.width(elRef.current.clientWidth);
        }
      };
      window.addEventListener("resize", onResize);
      globeRef.current._onResize = onResize;
    })();

    return () => {
      destroyed = true;
      if (globeRef.current) {
        if (globeRef.current._onResize) {
          window.removeEventListener("resize", globeRef.current._onResize);
        }
        try {
          globeRef.current._destructor?.();
        } catch {
          /* noop */
        }
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div ref={elRef} className="w-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}