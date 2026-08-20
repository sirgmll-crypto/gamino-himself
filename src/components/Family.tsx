export default function Family() {
  return (
    <section
      id="family"
      className="py-32 md:py-40 bg-[#1A1208] relative overflow-hidden"
    >
      {/* Faint dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#F5EFE0 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 reveal relative">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-14">
          <span className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase">
            04 —
          </span>
          <h2
            className="font-display font-black text-[#F5EFE0]"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            My World
          </h2>
        </div>

        {/* Editorial pull quote */}
        <div className="relative">
          {/* Oversized opening quote mark */}
          <span
            aria-hidden
            className="block font-display font-black text-[#E8553E] leading-[0.5] select-none"
            style={{ fontSize: "clamp(7rem, 15vw, 13rem)" }}
          >
            &ldquo;
          </span>

          <blockquote className="-mt-6 md:-mt-10">
            <p
              className="font-display text-[#F5EFE0] leading-[1.15]"
              style={{ fontSize: "clamp(1.9rem, 4.8vw, 3.75rem)", textWrap: "balance" }}
            >
              Everything I build, every mile I travel, every line of code —
              it&apos;s all for{" "}
              <em className="not-italic text-[#E8553E]">Dante</em>,{" "}
              <em className="not-italic text-[#E8553E]">Bregitte</em>, and{" "}
              <em className="not-italic text-[#E8553E]">Peter</em>.
            </p>

            <footer className="mt-12 flex items-center gap-4">
              <span className="w-14 h-px bg-[#E8553E]" />
              <span className="text-[#8C7B6E] text-xs font-bold uppercase tracking-[0.35em]">
                My whole world
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}