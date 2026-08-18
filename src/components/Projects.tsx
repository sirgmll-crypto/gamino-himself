const stats = [
  { value: "210+", label: "Hours developed" },
  { value: "15+", label: "Dashboards built" },
  { value: "45+", label: "Vessels monitored" },
  { value: "2", label: "Personal apps" },
];

const saipemProjects = [
  { name: "Fleet Monitoring Platform", desc: "Real-time observability for 45+ vessels via FortiManager API" },
  { name: "NOC / VOC / NW Dashboards", desc: "Per-team scoped views, branded homes, tag-filtered access" },
  { name: "SD-WAN SLA & Bandwidth", desc: "Per-link latency/jitter/loss + cumulative usage graphs" },
  { name: "Starlink Usage Dashboards", desc: "FMG-native per-link consumption with pace-to-cap forecasting" },
  { name: "OS Upgrade Tracking", desc: "v7.6.3→7.6.7 rollout tracker across 3 scoped team boards" },
  { name: "Fleet Inventory & Circuits", desc: "Nautobot-sourced device/link inventory with monthly baseline" },
  { name: "NOC Onshore Baseline", desc: "Nautobot + CSV-sourced site table with FMG live inventory" },
  { name: "Alerting System", desc: "Grafana-managed rules for PSU faults and device-down events" },
];

const personalProjects = [
  {
    title: "Rental Booking App",
    tag: "Personal · SaaS",
    description:
      "Italian rental booking and contract e-sign web app. Supabase backend, secure auth, PDF contract generation, and payment flow.",
    tech: ["Next.js 16", "Supabase", "TypeScript", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "Gamino Himself",
    tag: "Personal · Web",
    description:
      "This site. A personal biography built with Next.js 16, Tailwind CSS, and a Warm Neo-Brutalist design system. Deployed on Vercel.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Vercel"],
    href: "https://gamino-himself.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#F5EFE0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-14">
          <span className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase">
            03 —
          </span>
          <h2 className="font-display font-black text-[#1A1208]" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
            Work
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="neo-card bg-[#1A1208] px-6 py-5">
              <p className="font-display font-black text-[#E8553E] text-3xl">{s.value}</p>
              <p className="text-[#8C7B6E] text-xs uppercase tracking-[0.2em] mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Featured: Saipem engagement */}
        <div className="neo-card bg-[#E8553E] p-8 mb-5">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="md:w-2/5">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#FDDDD6] block mb-3">
                Accenture · Saipem · 2024 — Present
              </span>
              <h3 className="font-display font-black text-[#F5EFE0] text-3xl leading-tight mb-4">
                Grafana Saipem Fleet Monitoring
              </h3>
              <p className="text-[#FDDDD6] text-sm leading-relaxed mb-5">
                End-to-end network observability platform for a fleet of 45+ maritime vessels and
                onshore sites. Built entirely with Grafana, Python, FortiManager API, and Nautobot —
                from zero to production in under a year.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Grafana", "Python", "FortiManager", "Nautobot", "Zabbix", "JSONata"].map((t) => (
                  <span key={t} className="text-[10px] px-2.5 py-1 font-bold border-2 border-[#FDDDD6] text-[#FDDDD6]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Sub-project list */}
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {saipemProjects.map((sp) => (
                <div key={sp.name} className="bg-[#C73F28] px-4 py-3">
                  <p className="text-[#F5EFE0] text-xs font-bold mb-1">{sp.name}</p>
                  <p className="text-[#FDDDD6] text-[11px] leading-snug">{sp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal projects */}
        <div className="grid md:grid-cols-2 gap-5">
          {personalProjects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="neo-card-hover bg-white flex flex-col p-7"
            >
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#E8553E] mb-4">
                {p.tag}
              </span>
              <h3 className="font-display font-bold text-2xl text-[#1A1208] leading-tight mb-3">
                {p.title}
              </h3>
              <p className="text-[#6B5E52] text-sm leading-relaxed flex-1 mb-6">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-[10px] px-2.5 py-1 font-bold border-2 border-[#1A1208] text-[#1A1208]">
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