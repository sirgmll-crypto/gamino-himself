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
        className="absolute inset-0 w-full h-full opacity-[0.5]"
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

        {/* Network links (vessels / offices) */}
        <g stroke="#4A3828" strokeWidth="1" fill="none">
          <path id="lnk1" d="M180,180 L520,320" strokeDasharray="3 7">
            {animate && (
              <animate attributeName="stroke-dashoffset" values="40;0" dur="3s" repeatCount="indefinite" />
            )}
          </path>
          <path id="lnk2" d="M520,320 L860,220" strokeDasharray="3 7">
            {animate && (
              <animate attributeName="stroke-dashoffset" values="0;40" dur="3.6s" repeatCount="indefinite" />
            )}
          </path>
          <path id="lnk3" d="M520,320 L420,560" strokeDasharray="3 7">
            {animate && (
              <animate attributeName="stroke-dashoffset" values="40;0" dur="4.2s" repeatCount="indefinite" />
            )}
          </path>
          <path id="lnk4" d="M860,220 L1120,420" strokeDasharray="3 7">
            {animate && (
              <animate attributeName="stroke-dashoffset" values="0;40" dur="3.2s" repeatCount="indefinite" />
            )}
          </path>
          <path id="lnk5" d="M420,560 L760,640" strokeDasharray="3 7">
            {animate && (
              <animate attributeName="stroke-dashoffset" values="40;0" dur="4.8s" repeatCount="indefinite" />
            )}
          </path>
        </g>

        {/* Nodes */}
        <g fill="#E8553E">
          {[
            [180, 180],
            [520, 320],
            [860, 220],
            [1120, 420],
            [420, 560],
            [760, 640],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="3.5" />
              {animate && i % 2 === 0 && (
                <circle cx={x} cy={y} r="3.5" fill="none" stroke="#E8553E" strokeWidth="1">
                  <animate attributeName="r" values="4;16" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                </circle>
              )}
            </g>
          ))}
        </g>

        {/* Traveling signal packets */}
        {animate && (
          <g fill="#F5EFE0">
            <circle r="2.5">
              <animateMotion dur="3s" repeatCount="indefinite" path="M180,180 L520,320" />
            </circle>
            <circle r="2.5">
              <animateMotion dur="3.6s" repeatCount="indefinite" path="M860,220 L520,320" />
            </circle>
            <circle r="2.5">
              <animateMotion dur="4.2s" repeatCount="indefinite" path="M520,320 L420,560" />
            </circle>
            <circle r="2.5">
              <animateMotion dur="3.2s" repeatCount="indefinite" path="M860,220 L1120,420" />
            </circle>
          </g>
        )}
      </svg>

      {/* Edge code rain — only on wide screens, far edges, very faint */}
      <div className="hidden xl:block absolute left-2 top-0 bottom-0 w-40 overflow-hidden opacity-[0.06]">
        <div className={`font-mono text-[11px] leading-6 text-[#F5EFE0] whitespace-nowrap ${animate ? "code-rain" : ""}`}>
          {[...codeLines, ...codeLines, ...codeLines].map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
      <div className="hidden xl:block absolute right-2 top-0 bottom-0 w-40 overflow-hidden opacity-[0.06] text-right">
        <div className={`font-mono text-[11px] leading-6 text-[#F5EFE0] whitespace-nowrap ${animate ? "code-rain-slow" : ""}`}>
          {[...codeLines, ...codeLines, ...codeLines].map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}