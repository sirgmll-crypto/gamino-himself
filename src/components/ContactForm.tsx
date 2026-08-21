"use client";
import { useState } from "react";

// To deliver messages straight to your inbox, create a free form at
// https://formspree.io (New Form → copy the ID after /f/) and paste it below.
// Until then, the form gracefully falls back to opening the visitor's email app.
const FORMSPREE_ID = "";

export default function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Fallback: no Formspree configured → open the visitor's mail client
    if (!FORMSPREE_ID) {
      const name = String(data.get("name") || "");
      const from = String(data.get("email") || "");
      const message = String(data.get("message") || "");
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        `Hello from your site — ${name}`
      )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${from})`)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="neo-card bg-[#E8553E] p-8 flex flex-col justify-center min-h-[300px]">
        <p className="text-4xl mb-4">✓</p>
        <p className="font-display font-bold text-2xl text-[#F5EFE0] mb-2">
          Message sent!
        </p>
        <p className="text-[#FDDDD6] text-sm">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-[10px] font-black tracking-[0.3em] uppercase text-[var(--muted)] mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="w-full neo-card bg-[var(--surface)] px-5 py-4 text-[var(--ink)] text-sm outline-none focus:border-[#E8553E]"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label className="block text-[10px] font-black tracking-[0.3em] uppercase text-[var(--muted)] mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="w-full neo-card bg-[var(--surface)] px-5 py-4 text-[var(--ink)] text-sm outline-none focus:border-[#E8553E]"
          placeholder="your@email.com"
          required
        />
      </div>

      <div>
        <label className="block text-[10px] font-black tracking-[0.3em] uppercase text-[var(--muted)] mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full neo-card bg-[var(--surface)] px-5 py-4 text-[var(--ink)] text-sm outline-none focus:border-[#E8553E] resize-none"
          placeholder="What's on your mind?"
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="neo-btn w-full bg-[#E8553E] text-[#F5EFE0] py-4 font-black text-xs tracking-[0.2em] uppercase disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-[#E8553E] text-xs font-bold text-center">
          Something went wrong — please try again or email me directly.
        </p>
      )}
    </form>
  );
}