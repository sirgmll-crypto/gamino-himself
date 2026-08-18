const skills = [
  "Grafana", "Next.js", "TypeScript", "Python", "FortiGate",
  "Nautobot", "Zabbix", "FortiManager", "Tailwind CSS", "PostgreSQL",
  "Docker", "Git", "REST APIs", "SD-WAN", "Network Monitoring",
];

const experience = [
  {
    role: "IT Professional",
    company: "Accenture",
    period: "2024 — Present",
    description:
      "Fleet-wide network observability platforms for maritime and industrial environments. Grafana dashboards, FortiManager API integration, Nautobot data enrichment, and custom Python tooling.",
  },
  {
    role: "Network & Infrastructure Engineer",
    company: "Previous Role",
    period: "2020 — 2024",
    description:
      "Network infrastructure management, SD-WAN deployments, and IT operations for enterprise environments. Update this with your real experience.",
  },
];

const education = [
  {
    degree: "Bachelor in Information & Communications Engineering",
    field: "Electronic and Telecommunication Engineering",
    school: "Università di Trento",
    period: "2012 – 2016",
    thesis: "Progettazione e realizzazione di un circuito di controllo per una cella di Peltier",
    supervisor: "Prof. Gianfranco Dalla Beta",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-28 bg-[#1A1208]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-20">
          <span className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase">
            02 —
          </span>
          <h2 className="font-display font-black text-[#F5EFE0]" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
            Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Left: Skills + download */}
          <div>
            <h3 className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Skills &amp; Stack
            </h3>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border-2 border-[#3D2E1C] text-[#C4B5A0] text-xs font-semibold px-4 py-2 hover:bg-[#E8553E] hover:border-[#E8553E] hover:text-[#F5EFE0] transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href="/cv.pdf"
              className="neo-btn bg-[#E8553E] text-[#F5EFE0] px-8 py-3.5 font-bold text-xs tracking-[0.2em] uppercase"
              style={{ boxShadow: "3px 3px 0px #F5EFE0" }}
            >
              ↓ Download CV
            </a>
          </div>

          {/* Right: Timeline */}
          <div>
            <h3 className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Work History
            </h3>
            <div className="space-y-8 mb-10">
              {experience.map((exp) => (
                <div key={exp.role} className="border-l-2 border-[#E8553E] pl-6">
                  <p className="text-[#F5EFE0] font-bold text-lg leading-tight">
                    {exp.role}
                  </p>
                  <p className="text-[#E8553E] text-xs font-bold tracking-wide uppercase mt-1 mb-2">
                    {exp.company} · {exp.period}
                  </p>
                  <p className="text-[#8C7B6E] text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Education
            </h3>
            {education.map((edu) => (
              <div key={edu.degree} className="border-l-2 border-[#E8553E] pl-6">
                <p className="text-[#F5EFE0] font-bold text-lg leading-tight">{edu.degree}</p>
                <p className="text-[#C4B5A0] text-sm mb-1">{edu.field}</p>
                <p className="text-[#E8553E] text-xs font-bold tracking-wide uppercase mt-1 mb-3">
                  {edu.school} · {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}