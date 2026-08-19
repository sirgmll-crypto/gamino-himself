import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "700", "900"],
});

const SITE_URL = "https://gamino-himself.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Gamino Himself — Gamaliel Bepa",
  description:
    "The personal space of Gamaliel Bepa — IT Professional, Network Architect, Builder, and Father. Biography, work, travels, and the people I love.",
  keywords: [
    "Gamaliel Bepa",
    "Gamino",
    "Network Architect",
    "IT Professional",
    "Grafana",
    "portfolio",
  ],
  authors: [{ name: "Gamaliel Bepa" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Gamino Himself — Gamaliel Bepa",
    description:
      "IT Professional · Network Architect · Builder · Father. My corner of the internet.",
    siteName: "Gamino Himself",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gamino Himself — Gamaliel Bepa",
    description:
      "IT Professional · Network Architect · Builder · Father. My corner of the internet.",
  },
};

// Set the theme class before first paint to avoid a flash
const themeScript = `
(function(){try{
  var t = localStorage.getItem('theme');
  if(!t){ t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
  if(t === 'dark'){ document.documentElement.classList.add('dark'); }
}catch(e){}})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}