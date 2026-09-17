import type { NextConfig } from "next";

// Content-Security-Policy.
// Note: 'unsafe-inline' is required on script-src because a statically
// prerendered Next.js App Router app emits inline hydration scripts that
// cannot be nonce'd without switching to dynamic rendering. Every other
// directive is tightly scoped to the few origins this site actually uses
// (Spotify embed, Open-Meteo, Vercel Analytics).
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://open.spotify.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self'",
  "connect-src 'self' https://api.open-meteo.com https://open.spotify.com https://*.vercel-insights.com https://vitals.vercel-insights.com",
  "frame-src https://open.spotify.com https://open.spotifycdn.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://formspree.io",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-DNS-Prefetch-Control", value: "off" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  // GHSA-2xp9-vwfh-vxw4: do not send attacker-controlled AVIF through sharp/libheif.
  images: {
    formats: ["image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;