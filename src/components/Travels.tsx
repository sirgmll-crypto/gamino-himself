import Globe3D from "./Globe3D";

const visited = [
  { flag: "🇮🇹", name: "Italy", continent: "Europe" },
  { flag: "🇫🇷", name: "France", continent: "Europe" },
  { flag: "🇪🇸", name: "Spain", continent: "Europe" },
  { flag: "🇩🇪", name: "Germany", continent: "Europe" },
  { flag: "🇧🇪", name: "Belgium", continent: "Europe" },
  { flag: "🇳🇱", name: "Netherlands", continent: "Europe" },
  { flag: "🇧🇬", name: "Bulgaria", continent: "Europe" },
  { flag: "🇱🇺", name: "Luxembourg", continent: "Europe" },
  { flag: "🇺🇸", name: "United States", continent: "Americas" },
  { flag: "🇨🇦", name: "Canada", continent: "Americas" },
  { flag: "🇲🇽", name: "Mexico (Tijuana)", continent: "Americas" },
  { flag: "🇨🇲", name: "Cameroon", continent: "Africa" },
];

const continents = [...new Set(visited.map((c) => c.continent))];
const nextDestinations = ["Kenya", "Ivory Coast", "Japan"];

export default function Travels() {
  return (
    <section id="travels" className="py-28 bg-[var(--page-bg)]">
      <div className="max-w-6xl mx-auto px-6 reveal">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase">
            05 —
          </span>
          <h2
            className="font-display font-black text-[var(--ink)]"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            Travels
          </h2>
        </div>

        <p className="text-[var(--muted)] text-lg leading-relaxed mb-14 max-w-xl">
          The world is the best classroom.{" "}
          <span className="font-display italic text-[var(--ink)]">
            {visited.length}+ countries · {continents.length} continents · {nextDestinations.length} more planned.
          </span>
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: `${visited.length}+`, label: "Countries" },
            { value: `${continents.length}`, label: "Continents" },
            { value: "∞", label: "More to go" },
          ].map((s) => (
            <div key={s.label} className="neo-card bg-[#1A1208] px-6 py-5 text-center">
              <p className="font-display font-black text-[#E8553E] text-3xl">{s.value}</p>
              <p className="text-[#8C7B6E] text-xs uppercase tracking-[0.2em] mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Interactive 3D globe */}
        <div className="neo-card bg-[#0D0A06] p-4 md:p-8">
          <Globe3D />
          <div className="flex flex-wrap items-center gap-6 justify-center -mt-2">
            <span className="flex items-center gap-2 text-[#8C7B6E] text-xs">
              <span className="inline-block w-3 h-3 rounded-full bg-[#E8553E]" />
              Visited
            </span>
            <span className="flex items-center gap-2 text-[#8C7B6E] text-xs">
              <span className="inline-block w-3 h-3 rounded-full bg-[#F5EFE0]" />
              Next destination
            </span>
            <span className="text-[#4A3828] text-xs italic font-display">
              drag to spin →
            </span>
          </div>
        </div>

        {/* Visited countries — flag row */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 justify-center">
          {visited.map((c) => (
            <span
              key={c.name}
              className="inline-flex items-center gap-1.5 text-[var(--muted)] text-xs"
            >
              <span className="text-lg leading-none">{c.flag}</span>
              {c.name}
            </span>
          ))}
        </div>

        {/* Next destinations */}
        <div className="mt-8 space-y-4">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-[#E8553E] mb-5">
            Next destinations ✈
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { flag: "🇰🇪", name: "Kenya", sub: "Africa · Top of the list" },
              { flag: "🇨🇮", name: "Ivory Coast", sub: "Africa · Coming up" },
              { flag: "🇯🇵", name: "Japan", sub: "Asia · The dream trip" },
            ].map((dest) => (
              <div
                key={dest.name}
                className="neo-card bg-[#E8553E] px-6 py-5 flex items-center gap-4"
              >
                <span className="text-4xl leading-none">{dest.flag}</span>
                <div>
                  <p className="font-display font-black text-[#F5EFE0] text-xl leading-tight">
                    {dest.name}
                  </p>
                  <p className="text-[#FDDDD6] text-xs mt-0.5">{dest.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}