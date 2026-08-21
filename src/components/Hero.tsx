import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Base dark warm gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 75% 45%, #2D1F0E 0%, #0D0A06 70%)",
        }}
      />

      {/* Portrait — soft background photo, right side */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[62%]">
        <Image
          src="/me.jpg"
          alt="Gamaliel Bepa — Gamino"
          fill
          priority
          className="object-cover grayscale contrast-[1.1]"
          style={{ objectPosition: "center 22%" }}
        />
      </div>

      {/* Dark gradient scrim — keeps text readable, softly blends the photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #0D0A06 0%, rgba(13,8,6,0.94) 38%, rgba(13,8,6,0.6) 66%, rgba(13,8,6,0.35) 100%), linear-gradient(to bottom, rgba(13,8,6,0.25) 0%, rgba(13,8,6,0.7) 100%)",
        }}
      />

      {/* Dot-grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(#F5EFE0 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Terracotta accent bar */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#E8553E] z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 py-36 w-full">
        <div className="max-w-xl">
          <p className="text-[#E8553E] text-xs font-bold tracking-[0.4em] uppercase mb-8">
            Welcome to my space
          </p>

          <h1
            className="font-display font-black text-[#F5EFE0] leading-[0.9] mb-8"
            style={{ fontSize: "clamp(4rem, 11vw, 10rem)", textWrap: "balance" }}
          >
            Gamino
            <br />
            <em className="text-[#E8553E] not-italic italic">Himself.</em>
          </h1>

          <p className="text-[#D8C9B6] text-lg md:text-xl max-w-md leading-relaxed mb-12 font-light">
            IT Professional · Builder · Father.
            <br />
            My corner of the internet — biography, work, and the people I love.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="neo-btn bg-[#E8553E] text-[#F5EFE0] px-8 py-3.5 font-bold text-xs tracking-[0.2em] uppercase"
            >
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-[#8C7B6E] text-[10px] tracking-[0.4em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#8C7B6E] to-transparent" />
      </div>
    </section>
  );
}