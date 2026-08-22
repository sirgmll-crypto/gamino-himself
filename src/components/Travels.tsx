import WorldMap from "./WorldMap";

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
const worldPct = Math.round((visited.length / 195) * 100); // ~% of world's countries

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

        <p className="text-[var(--muted)] text-lg leading-relaxed mb-14 max-w-2xl">
          The world is the best classroom.{" "}
          <span className="font-display italic text-[var(--ink)]">
            {visited.length}+ countries · {continents.length} continents ·{" "}
            <span className="whitespace-nowrap">
              {nextDestinations.length} more planned.
            </span>
          </span>
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { value: `${visited.length}+`, label: "Countries" },
            { value: `${continents.length}`, label: "Continents" },
            { value: `${worldPct}%`, label: "World explored" },
          ].map((s) => (
            <div key={s.label} className="neo-card bg-[#1A1208] px-6 py-5 text-center">
              <p className="font-display font-black text-[#E8553E] text-3xl">{s.value}</p>
              <p className="text-[#8C7B6E] text-xs uppercase tracking-[0.2em] mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Interactive world map — dots on visited countries */}
        <div className="neo-card bg-[#0D0A06] p-4 md:p-8">
          <WorldMap />
          <div className="flex flex-wrap items-center gap-6 justify-center mt-2">
            <span className="flex items-center gap-2 text-[#8C7B6E] text-xs">
              <span className="inline-block w-3 h-3 rounded-full bg-[#E8553E] border border-[#F5EFE0]" />
              Visited
            </span>
            <span className="flex items-center gap-2 text-[#8C7B6E] text-xs">
              <span className="inline-block w-3 h-3 rounded-full border-2 border-[#F5EFE0]" />
              Next destination
            </span>
            <span className="text-[#4A3828] text-xs italic font-display">
              hover a country →
            </span>
          </div>
        </div>

        {/* Scrolling place-name marquee */}
        <div className="relative overflow-hidden border-y-2 border-[var(--line)] py-4 mt-8">
          <div className="flex gap-8 whitespace-nowrap marquee w-max">
            {[...visited, ...visited].map((c, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 font-display font-bold text-lg text-[var(--ink)]"
              >
                <span>{c.flag}</span>
                {c.name}
                <span className="text-[#E8553E] ml-2">✦</span>
              </span>
            ))}
          </div>
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