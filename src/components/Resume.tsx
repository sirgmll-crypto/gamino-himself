import PrintButton from "./PrintButton";

// Adjust these to your real proficiency — pct drives the bar width
const languages = [
  { name: "French", level: "Native", pct: "100%" },
  { name: "English", level: "Professional", pct: "85%" },
  { name: "Italian", level: "Fluent", pct: "85%" },
];

const skills = [
  "Network Engineering", "SD-WAN", "VeloCloud", "Fortinet / FortiGate",
  "Cloud", "IT Infrastructure", "ServiceNow", "IT Audit",
  "Grafana", "FortiManager", "Nautobot", "Zabbix",
  "Python", "Next.js", "TypeScript", "Network Monitoring",
];

const experience = [
  {
    role: "Adv App/Cloud Support & Engineering Specialist",
    company: "Accenture",
    period: "Jun 2024 — Present",
    location: "Milan, Italy",
    description:
      "Lead the development of fleet-wide network observability platforms — Grafana dashboards, FortiManager API integration, Nautobot data enrichment, and custom Python tooling for maritime and industrial networks.",
  },
  {
    role: "Adv App/Cloud Support & Engineering Senior Analyst",
    company: "Accenture",
    period: "Dec 2021 — Jun 2024",
    location: "Milan, Italy",
    description:
      "Data analysis and analytical engineering across cloud application support — infrastructure monitoring, incident management, and network operations.",
  },
  {
    role: "Adv App/Cloud Support & Engineering Analyst",
    company: "Accenture",
    period: "Apr 2019 — Nov 2021",
    location: "Milan, Italy",
    description:
      "LAN and SD-WAN (VeloCloud) operations, network administration, and application / cloud support.",
  },
  {
    role: "IT Administrator (Sistemista)",
    company: "Università degli Studi di Trento",
    period: "Oct 2016 — Dec 2018",
    location: "Trento, Italy",
    description:
      "Installed and configured PCs, servers, printers, IP phones, and peripherals across Windows, Mac, and Linux environments.",
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

const certifications = [
  {
    name: "Fortinet FortiOS 7.6 Administrator",
    issuer: "Fortinet",
    date: "Jul 2026",
    note: "Valid to Jul 2028",
    url: "https://www.credly.com/badges/08e0b04b-af2c-40ff-be09-550ee3f89880/public_url",
  },
  {
    name: "Claude 101 — Certificate of Completion",
    issuer: "Anthropic",
    date: "Jun 2026",
    note: "",
    url: "https://verify.skilljar.com/c/r7mp3txt39t8",
  },
  {
    name: "Becoming a Cloud Architect — Fundamentals",
    issuer: "Cloud Academy",
    date: "Mar 2023",
    note: "",
    url: "https://certificates.cloudacademy.com/ab105dd3a89c8926445ffeb27985da773279d83e.pdf",
  },
  {
    name: "CCNA: Enterprise Networking, Security & Automation",
    issuer: "Cisco",
    date: "Apr 2022",
    note: "",
    url: "https://www.credly.com/badges/5ba25f83-4200-4518-8437-b2b8154dab2e/public_url",
  },
  {
    name: "CCNA: Switching, Routing & Wireless Essentials",
    issuer: "Cisco",
    date: "Feb 2022",
    note: "",
    url: "https://www.credly.com/badges/45f999b7-56be-4ad1-8144-3a78e11bf9ed/public_url",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "Nov 2021",
    note: "",
    url: "https://www.credly.com/badges/2309b0d9-1ae8-4a18-af59-a2a0afde28d5/public_url",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-28 bg-[#1A1208]">
      <div className="max-w-6xl mx-auto px-6 reveal">
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

            <PrintButton />

            <h3 className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase mt-12 mb-6">
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-[#3D2E1C] px-4 py-3 flex items-start gap-3 transition-colors hover:border-[#E8553E]"
                >
                  <span className="text-[#E8553E] text-lg font-black leading-none mt-0.5">
                    ✓
                  </span>
                  <div className="flex-1">
                    <p className="text-[#F5EFE0] font-bold text-sm leading-tight">
                      {cert.name}
                    </p>
                    <p className="text-[#8C7B6E] text-[10px] uppercase tracking-[0.2em] mt-1">
                      {cert.issuer} · {cert.date}
                      {cert.note ? ` · ${cert.note}` : ""}
                    </p>
                  </div>
                  <span className="text-[#3D2E1C] text-xs mt-0.5 group-hover:text-[#E8553E] transition-colors">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <h3 className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase mt-12 mb-6">
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-[#F5EFE0] font-bold text-sm">
                      {lang.name}
                    </span>
                    <span className="text-[#8C7B6E] text-[10px] uppercase tracking-[0.2em]">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#3D2E1C]">
                    <div
                      className="h-full bg-[#E8553E]"
                      style={{ width: lang.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>
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
                  <p className="text-[#E8553E] text-xs font-bold tracking-wide uppercase mt-1">
                    {exp.company} · {exp.period}
                  </p>
                  <p className="text-[#8C7B6E] text-[10px] uppercase tracking-[0.2em] mb-2">
                    {exp.location}
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