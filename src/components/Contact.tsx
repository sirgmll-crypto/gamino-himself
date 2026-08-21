import ContactForm from "./ContactForm";

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
    href: "https://www.linkedin.com/in/gamaliel-b-76981165/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[var(--page-bg)]">
      <div className="max-w-6xl mx-auto px-6 reveal">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-20">
          <span className="text-[#E8553E] text-xs font-bold tracking-[0.3em] uppercase">
            06 —
          </span>
          <h2 className="font-display font-black text-[var(--ink)]" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
            Say Hello
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Form */}
          <ContactForm email={PRIVATE_EMAIL} />

          {/* Side info */}
          <div>
            <h3 className="font-display font-bold text-3xl text-[var(--ink)] mb-4">
              Let&apos;s connect.
            </h3>
            <p className="text-[var(--muted)] leading-relaxed mb-10">
              Whether it&apos;s a project, a collaboration, or just a
              conversation — I&apos;m always happy to chat.
            </p>

            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="neo-card-hover bg-[var(--surface)] flex items-center justify-between px-6 py-4 group"
                >
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[var(--muted)]">
                    {s.label}
                  </span>
                  <span className="text-[var(--ink)] text-sm font-semibold group-hover:text-[#E8553E] transition-colors">
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
