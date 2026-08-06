const projects = [
  {
    title: "Grafana Saipem Fleet",
    tag: "Monitoring · Dashboards",
    description:
      "Fleet-wide network observability for maritime operations. 45+ vessels, FortiManager API, SD-WAN SLA tracking, real-time alerting, and Nautobot inventory integration.",
    tech: ["Grafana", "FortiManager", "Python", "Nautobot"],
    href: "#",
    featured: true,
  },
  {
    title: "Gamino Himself",
    tag: "Personal · Web",
    description:
      "This site. A personal biography built with Next.js 16, Tailwind CSS, and a Warm Neo-Brutalist design system. Deployed on Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://gamino-himself.vercel.app",
    featured: false,
  },
  {
    title: "Your Next Project",
    tag: "Coming Soon",
    description:
      "Something new is always in the works. Update this card with your next build.",
    tech: [],
    href: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#F5EFE0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-20">
          <span className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase">
            03 —
          </span>
          <h2 className="font-display font-black text-[#1A1208]" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
            Work
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className={`neo-card-hover flex flex-col p-7 ${
                p.featured ? "bg-[#E8553E]" : "bg-white"
              }`}
            >
              <span
                className={`text-[10px] font-black tracking-[0.3em] uppercase mb-4 ${
                  p.featured ? "text-[#FDDDD6]" : "text-[#E8553E]"
                }`}
              >
                {p.tag}
              </span>

              <h3
                className={`font-display font-bold text-2xl leading-tight mb-3 ${
                  p.featured ? "text-[#F5EFE0]" : "text-[#1A1208]"
                }`}
              >
                {p.title}
              </h3>

              <p
                className={`text-sm leading-relaxed flex-1 mb-6 ${
                  p.featured ? "text-[#FDDDD6]" : "text-[#6B5E52]"
                }`}
              >
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-[10px] px-2.5 py-1 font-bold border-2 ${
                      p.featured
                        ? "border-[#FDDDD6] text-[#FDDDD6]"
                        : "border-[#1A1208] text-[#1A1208]"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}