import Image from "next/image";

const facts = [
  { label: "Based in", value: "Italy" },
  { label: "Roles", value: "Network Architect · Sr. Sysadmin · SW Dev" },
  { label: "Speciality", value: "Network Monitoring & Dashboards" },
  { label: "Passion", value: "Family, Music & Building" },
  { label: "Currently", value: "Gamino Himself (this site)" },
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
                Hey, I&apos;m{" "}
                <strong className="text-[#E8553E]">Gamaliel Bepa</strong> —
                everyone calls me Gamino. I&apos;m an IT professional with a
                deep focus on network monitoring, infrastructure visibility, and
                building tools that make complex systems easier to understand.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Based in Italy, I work at Accenture where I lead the development
                of fleet-wide monitoring platforms for large-scale maritime and
                industrial networks. I thrive at the intersection of engineering
                precision and meaningful design — where data becomes clarity.
              </p>
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