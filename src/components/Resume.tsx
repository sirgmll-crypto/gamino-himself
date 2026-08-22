import PrintButton from "./PrintButton";

// Adjust these to your real proficiency — pct drives the bar width
const languages = [
  { name: "English", level: "Native", pct: "100%" },
  { name: "French", level: "Native", pct: "100%" },
  { name: "Italian", level: "Fluent", pct: "85%" },
];

const auditDomains = [
  "ITGC (IT General Controls) monitoring — annual & semestral cycles",
  "SOX / L.262 compliance for financial-relevant applications",
  "Access & user reviews — Windows, Linux, Databases & Active Directory",
  "Privileged / superuser & broad-privilege access reviews",
  "Password-policy compliance across AD domains (L.262 perimeter)",
  "Patch-management audits — operating systems & databases",
  "Backup, change-management & SCCM configuration controls",
  "Server inventory & Risk Control Matrix (RCM) evidence",
];

const auditSkills = [
  "ITGC",
  "SOX / L.262",
  "COBIT",
  "ITIL",
  "Access Controls",
  "Segregation of Duties",
  "Privileged Access (PAM)",
  "Identity & Access Mgmt",
  "Change Management",
  "Patch & Vulnerability Mgmt",
  "Backup & Recovery",
  "Configuration Mgmt (SCCM)",
  "Active Directory Security",
  "Database Security",
  "OS Hardening",
  "Log & Audit-Trail Review",
  "Password Policy",
  "Risk Control Matrix (RCM)",
  "Controls Testing",
  "Evidence Gathering",
  "Remediation Tracking",
  "Compliance Reporting",
];

const skills = [
  "Network Engineering", "SD-WAN", "VeloCloud", "Fortinet / FortiGate",
  "Cisco", "Palo Alto", "Cloud", "IT Infrastructure",
  "ServiceNow", "Grafana", "FortiManager", "Nautobot",
  "Zabbix", "Network Monitoring",
];

const devTools = [
  "TypeScript", "JavaScript", "Python", "React", "Next.js",
  "Node.js", "Tailwind CSS", "HTML5", "CSS3", "SQL",
  "PostgreSQL", "Supabase", "REST APIs", "Git", "Docker",
  "Vercel", "VS Code", "Bash",
];

const experience = [
  {
    role: "Sr. Network Specialist & IT Auditor",
    company: "Accenture S.p.A.",
    period: "2019 — Present",
    location: "Milan, Italy",
    description:
      "Grew from Analyst to Senior Specialist. I design and operate SD-WAN over FortiGate across 44 vessels and 119 global sites — Cisco, Fortinet & Palo Alto, over satellite, Starlink & MPLS — and built the Grafana platform that turns Fortinet telemetry into clear dashboards.",
    highlights: [
      "Network engineering & SD-WAN — 44 vessels + 119 worldwide sites",
      "Grafana monitoring platform for maritime & industrial networks",
    ],
    showAudit: true,
  },
  {
    role: "IT Administrator (Sysadmin)",
    company: "Università degli Studi di Trento",
    period: "2016 — 2018",
    location: "Trento, Italy",
    description:
      "Installed and configured PCs, servers, printers, IP phones, and peripherals across Windows, macOS, and Linux environments.",
    highlights: [],
    showAudit: false,
  },
];

const education = [
  {
    degree: "Bachelor in Information & Communications Engineering",
    field: "Electronic and Telecommunication Engineering",
    school: "Università degli Studi di Trento",
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

            <h3 className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Dev Tools &amp; Languages
            </h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {devTools.map((t) => (
                <span
                  key={t}
                  className="border-2 border-[#3D2E1C] text-[#C4B5A0] text-xs font-semibold px-3 py-1.5 hover:bg-[#E8553E] hover:border-[#E8553E] hover:text-[#F5EFE0] transition-all cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>

            <h3 className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Audit Skills &amp; Frameworks
            </h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {auditSkills.map((s) => (
                <span
                  key={s}
                  className="border-2 border-[#3D2E1C] text-[#C4B5A0] text-xs font-semibold px-3 py-1.5 hover:bg-[#E8553E] hover:border-[#E8553E] hover:text-[#F5EFE0] transition-all cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>

            <PrintButton />

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
                  {exp.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-[#C4B5A0] text-xs leading-snug"
                        >
                          <span className="text-[#E8553E] mt-0.5 leading-none">
                            ▹
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.showAudit && (
                    <div className="mt-5 pt-4 border-t border-[#3D2E1C]">
                      <p className="text-[#E8553E] text-[10px] font-black tracking-[0.25em] uppercase mb-2">
                        IT Audit &amp; Compliance
                      </p>
                      <p className="text-[#8C7B6E] text-sm leading-relaxed mb-3">
                        Recurring ITGC and SOX / L.262 audits across Saipem&apos;s
                        global IT infrastructure — evidence and controls testing
                        for internal and external regulatory engagements.
                      </p>
                      <ul className="space-y-1.5">
                        {auditDomains.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-[#C4B5A0] text-xs leading-snug"
                          >
                            <span className="text-[#E8553E] mt-0.5 leading-none">
                              ▹
                            </span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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

        {/* Certifications — full width */}
        <div className="mt-14 pt-12 border-t-2 border-[#3D2E1C]">
          <h3 className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
        </div>

      </div>
    </section>
  );
}