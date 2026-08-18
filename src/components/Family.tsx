const slots = [
  { label: "Dante", h: "h-64" },
  { label: "Bregitte", h: "h-48" },
  { label: "Peter", h: "h-56" },
  { label: "Dante & Bregitte", h: "h-48" },
  { label: "The Family", h: "h-64" },
  { label: "Peter & Dante", h: "h-56" },
];

export default function Family() {
  return (
    <section id="family" className="py-28 bg-[#1A1208]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase">
            04 —
          </span>
          <h2 className="font-display font-black text-[#F5EFE0]" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
            My World
          </h2>
        </div>

        <p className="text-[#8C7B6E] text-lg leading-relaxed mb-16 max-w-lg">
          The people and moments that matter most.{" "}
          <em className="font-display italic text-[#6B5E52]">Private &amp; personal.</em>
        </p>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {slots.map((slot, i) => (
            <div
              key={i}
              className={`neo-card bg-[#2D1F0E] ${slot.h} break-inside-avoid flex flex-col items-center justify-center group cursor-pointer hover:bg-[#3D2A14] transition-colors`}
            >
              <span className="text-4xl text-[#3D2A14] group-hover:text-[#E8553E] transition-colors font-bold leading-none mb-2">
                +
              </span>
              <span className="text-[#4A3828] text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-[#8C7B6E] transition-colors">
                {slot.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-[#4A3828] text-sm mt-14 font-display italic">
          Photos coming soon — this space is reserved for the best moments.
        </p>
      </div>
    </section>
  );
}