"use client";
import { useEffect, useState } from "react";

const codeLines = [
  "bgp.advertise(route);",
  "ospf.neighbor.up();",
  "sdwan.route(starlink);",
  "if (link.down) failover();",
  "fortigate.sync(vdom);",
  "grafana.render(panel);",
  "tcp.handshake(ack);",
  "vessel.uplink(sat);",
  "audit.check(itgc);",
  "site.connect(mpls);",
];

export default function NetworkBackground() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const animate = !reduced;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Network / satellite scene */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.7]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Earth arc (bottom-right) */}
        <circle
          cx="1200"
          cy="1020"
          r="440"
          fill="none"
          stroke="#4A3828"
          strokeWidth="1.5"
        />
        <ellipse
          cx="1200"
          cy="1020"
          rx="440"
          ry="150"
          fill="none"
          stroke="#3D2E1C"
          strokeWidth="1"
        />

        {/* Orbit + satellite */}
        <g opacity="0.7">
          <ellipse
            cx="1200"
            cy="1020"
            rx="620"
            ry="360"
            fill="none"
            stroke="#3D2E1C"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <g>
            {/* satellite */}
            <g transform="translate(600 700)">
              <rect x="-5" y="-4" width="10" height="8" fill="#E8553E" />
              <rect x="-14" y="-2" width="7" height="4" fill="#8C7B6E" />
              <rect x="7" y="-2" width="7" height="4" fill="#8C7B6E" />
              {/* signal ping */}
              <circle cx="0" cy="0" r="6" fill="none" stroke="#E8553E" strokeWidth="1.5">
                {animate && (
                  <>
                    <animate attributeName="r" values="6;22" dur="2.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.9;0" dur="2.6s" repeatCount="indefinite" />
                  </>
                )}
              </circle>
            </g>
            {animate && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 1200 1020"
                to="360 1200 1020"
                dur="40s"
                repeatCount="indefinite"
              />
            )}
          </g>
        </g>

        {/* Network links — clustered at the edges, clear of the center text */}
        <g stroke="#4A3828" strokeWidth="1" fill="none">
          {/* left edge */}
          <path d="M130,90 L110,250" strokeDasharray="3 7">
            {animate && <animate attributeName="stroke-dashoffset" values="40;0" dur="3s" repeatCount="indefinite" />}
          </path>
          <path d="M110,250 L240,430" strokeDasharray="3 7">
            {animate && <animate attributeName="stroke-dashoffset" values="0;40" dur="3.6s" repeatCount="indefinite" />}
          </path>
          <path d="M240,430 L90,610" strokeDasharray="3 7">
            {animate && <animate attributeName="stroke-dashoffset" values="40;0" dur="4.2s" repeatCount="indefinite" />}
          </path>
          {/* right edge */}
          <path d="M1315,90 L1335,240" strokeDasharray="3 7">
            {animate && <animate attributeName="stroke-dashoffset" values="0;40" dur="3.2s" repeatCount="indefinite" />}
          </path>
          <path d="M1335,240 L1205,430" strokeDasharray="3 7">
            {animate && <animate attributeName="stroke-dashoffset" values="40;0" dur="3.8s" repeatCount="indefinite" />}
          </path>
          <path d="M1205,430 L1355,610" strokeDasharray="3 7">
            {animate && <animate attributeName="stroke-dashoffset" values="0;40" dur="4.6s" repeatCount="indefinite" />}
          </path>
          {/* bottom band */}
          <path d="M330,830 L640,860" strokeDasharray="3 7">
            {animate && <animate attributeName="stroke-dashoffset" values="40;0" dur="4s" repeatCount="indefinite" />}
          </path>
          <path d="M640,860 L980,835" strokeDasharray="3 7">
            {animate && <animate attributeName="stroke-dashoffset" values="0;40" dur="4.4s" repeatCount="indefinite" />}
          </path>
        </g>

        {/* Nodes — edges, corners & bottom */}
        <g fill="#E8553E">
          {[
            [130, 90],
            [110, 250],
            [240, 430],
            [90, 610],
            [1315, 90],
            [1335, 240],
            [1205, 430],
            [1355, 610],
            [330, 830],
            [640, 860],
            [980, 835],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="3.5" />
              {animate && i % 2 === 0 && (
                <circle cx={x} cy={y} r="3.5" fill="none" stroke="#E8553E" strokeWidth="1">
                  <animate attributeName="r" values="4;18" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                </circle>
              )}
            </g>
          ))}
        </g>

        {/* Traveling signal packets — along the edge links */}
        {animate && (
          <g fill="#F5EFE0">
            <circle r="2.5">
              <animateMotion dur="3.4s" repeatCount="indefinite" path="M110,250 L240,430" />
            </circle>
            <circle r="2.5">
              <animateMotion dur="3.2s" repeatCount="indefinite" path="M240,430 L90,610" />
            </circle>
            <circle r="2.5">
              <animateMotion dur="3.8s" repeatCount="indefinite" path="M1335,240 L1205,430" />
            </circle>
            <circle r="2.5">
              <animateMotion dur="4.6s" repeatCount="indefinite" path="M1205,430 L1355,610" />
            </circle>
            <circle r="2.5">
              <animateMotion dur="4s" repeatCount="indefinite" path="M330,830 L640,860" />
            </circle>
          </g>
        )}
      </svg>

      {/* Edge code rain — only on wide screens, far edges, very faint */}
      <div className="hidden xl:block absolute left-2 top-0 bottom-0 w-40 overflow-hidden opacity-[0.1]">
        <div className={`font-mono text-[11px] leading-6 text-[#F5EFE0] whitespace-nowrap ${animate ? "code-rain" : ""}`}>
          {[...codeLines, ...codeLines, ...codeLines].map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
      <div className="hidden xl:block absolute right-2 top-0 bottom-0 w-40 overflow-hidden opacity-[0.1] text-right">
        <div className={`font-mono text-[11px] leading-6 text-[#F5EFE0] whitespace-nowrap ${animate ? "code-rain-slow" : ""}`}>
          {[...codeLines, ...codeLines, ...codeLines].map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}