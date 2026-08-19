// Replace PRIVATE_EMAIL with your personal email — it won't be visible on the page
const PRIVATE_EMAIL = "takagamaliel@yahoo.it";
const PRIVATE_PHONE = "+393202934291";

const socials = [
  {
    label: "Email",
    value: "Drop me a line →",
    href: `mailto:${PRIVATE_EMAIL}`,
  },
  {
    label: "Phone",
    value: "Give me a call →",
    href: `tel:${PRIVATE_PHONE}`,
  },
  {
    label: "GitHub",
    value: "github.com/sirgmll-crypto",
    href: "https://github.com/sirgmll-crypto",
  },
  {
    label: "LinkedIn",
    value: "Connect with me →",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#F5EFE0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-20">
          <span className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase">
            06 —
          </span>
          <h2 className="font-display font-black text-[#1A1208]" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
            Say Hello
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Form */}
          <form
            action={`mailto:${PRIVATE_EMAIL}`}
            method="post"
            encType="text/plain"
            className="space-y-5"
          >
            <div>
              <label className="block text-[10px] font-black tracking-[0.3em] uppercase text-[#6B5E52] mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full neo-card bg-white px-5 py-4 text-[#1A1208] text-sm outline-none focus:border-[#E8553E]"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-black tracking-[0.3em] uppercase text-[#6B5E52] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full neo-card bg-white px-5 py-4 text-[#1A1208] text-sm outline-none focus:border-[#E8553E]"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-black tracking-[0.3em] uppercase text-[#6B5E52] mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                className="w-full neo-card bg-white px-5 py-4 text-[#1A1208] text-sm outline-none focus:border-[#E8553E] resize-none"
                placeholder="What's on your mind?"
                required
              />
            </div>

            <button
              type="submit"
              className="neo-btn w-full bg-[#E8553E] text-[#F5EFE0] py-4 font-black text-xs tracking-[0.2em] uppercase"
            >
              Send Message
            </button>
          </form>

          {/* Side info */}
          <div>
            <h3 className="font-display font-bold text-3xl text-[#1A1208] mb-4">
              Let&apos;s connect.
            </h3>
            <p className="text-[#6B5E52] leading-relaxed mb-10">
              Whether it&apos;s a project, a collaboration, or just a
              conversation — I&apos;m always happy to chat.
            </p>

            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="neo-card-hover bg-white flex items-center justify-between px-6 py-4 group"
                >
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#6B5E52]">
                    {s.label}
                  </span>
                  <span className="text-[#1A1208] text-sm font-semibold group-hover:text-[#E8553E] transition-colors">
                    {s.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
