import Image from "next/image";

const facts = [
  { label: "Based in", value: "Italy" },
  { label: "Roles", value: "Sr. Network Specialist · Sysadmin · SW Dev · IT Auditor" },
  { label: "Speciality", value: "IT" },
  { label: "Stack", value: "Fortinet · Cisco · Palo Alto" },
  { label: "Passion", value: "Family · Music · Drawing · Design · Travel" },
];

const scale = [
  { value: "44", label: "Vessels" },
  { value: "119", label: "Sites" },
  { value: "🌍", label: "Worldwide" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[var(--page-bg)]">
      <div className="max-w-6xl mx-auto px-6 reveal">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-20">
          <span className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase">
            01 —
          </span>
          <h2 className="font-display font-black text-[var(--ink)]" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
            The Story
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Bio — wider column */}
          <div className="md:col-span-3 space-y-5">
            <div className="neo-card bg-[var(--surface)] p-8">
              <p className="text-[var(--ink)] text-lg leading-relaxed mb-5">
                Hey — I&apos;m{" "}
                <strong className="text-[#E8553E]">Gamaliel Bepa</strong>, aka
                Gamino. A network specialist, not just a monitoring guy: I
                architect and run enterprise networks end-to-end — Cisco &amp;
                Fortinet switches, FortiGate &amp; Palo Alto firewalls, CPE
                routers — all wired together with{" "}
                <span className="font-semibold text-[var(--ink)]">
                  BGP, OSPF &amp; TCP/IP
                </span>
                .
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-5">
                My playground is global: SD-WAN over FortiGate across{" "}
                <span className="font-semibold text-[#E8553E]">44 vessels</span>{" "}
                riding satellite &amp; Starlink, plus{" "}
                <span className="font-semibold text-[#E8553E]">119 offices</span>{" "}
                on MPLS, internet &amp; Starlink — spread across every GMT zone
                on the planet.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                To tame the chaos, I built a{" "}
                <span className="font-semibold text-[var(--ink)]">Grafana</span>{" "}
                platform that turns raw Fortinet telemetry into crystal-clear
                dashboards for large-scale maritime &amp; industrial networks.
                Off the clock? I ship websites, apps &amp; software — this one
                included.
              </p>
            </div>

            {/* Scale stats */}
            <div className="grid grid-cols-3 gap-3">
              {scale.map((s) => (
                <div
                  key={s.label}
                  className="neo-card bg-[#1A1208] px-4 py-4 text-center"
                >
                  <p className="font-display font-black text-[#E8553E] text-2xl leading-none">
                    {s.value}
                  </p>
                  <p className="text-[#8C7B6E] text-[10px] uppercase tracking-[0.2em] mt-1.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="neo-card bg-[#E8553E] p-7">
              <p className="text-[#F5EFE0] text-2xl font-display font-bold italic leading-snug">
                &ldquo;I build networks, dashboards, and memories —
                in that order.&rdquo;
              </p>
            </div>
          </div>

          {/* Quick facts — narrower column */}
          <div className="md:col-span-2 space-y-3">
            {/* Avatar — perfect square, face centered */}
            <div
              className="neo-card overflow-hidden mb-5 aspect-square relative"
              style={{ boxShadow: "4px 4px 0px #E8553E" }}
            >
              <Image
                src="/me.jpg"
                alt="Gamaliel Bepa"
                fill
                className="object-cover grayscale contrast-[1.1]"
                style={{ objectPosition: "center 20%" }}
              />
            </div>

            {facts.map((fact) => (
              <div
                key={fact.label}
                className="neo-card bg-[var(--surface)] flex justify-between items-center px-5 py-4"
              >
                <span className="text-[var(--muted)] text-xs font-bold uppercase tracking-[0.15em]">
                  {fact.label}
                </span>
                <span className="text-[var(--ink)] font-semibold text-sm text-right">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}