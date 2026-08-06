export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Dark abstract gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 60%, #2D1F0E 0%, #0D0A06 55%, #1A0F08 100%)",
        }}
      />

      {/* Dot-grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(#F5EFE0 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Terracotta accent bar */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#E8553E]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 py-36">
        <p className="text-[#E8553E] text-xs font-bold tracking-[0.4em] uppercase mb-8">
          Welcome to my space
        </p>

        <h1
          className="font-display font-black text-[#F5EFE0] leading-[0.9] mb-8"
          style={{ fontSize: "clamp(4.5rem, 13vw, 11rem)" }}
        >
          Gamino
          <br />
          <em className="text-[#E8553E] not-italic italic">Himself.</em>
        </h1>

        <p className="text-[#C4B5A0] text-lg md:text-xl max-w-lg leading-relaxed mb-12 font-light">
          IT Professional · Builder · Father.
          <br />
          My corner of the internet — biography, work, and the people I love.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#about" className="neo-btn bg-[#E8553E] text-[#F5EFE0] px-8 py-3.5 font-bold text-xs tracking-[0.2em] uppercase">
            My Story
          </a>
          <a
            href="#contact"
            className="neo-btn bg-transparent text-[#F5EFE0] px-8 py-3.5 font-bold text-xs tracking-[0.2em] uppercase"
            style={{ borderColor: "#F5EFE0", boxShadow: "3px 3px 0px #F5EFE0" }}
          >
            Say Hello
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-[#6B5E52] text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#6B5E52] to-transparent" />
      </div>
    </section>
  );
}