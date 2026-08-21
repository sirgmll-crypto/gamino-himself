"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="neo-btn no-print bg-[#E8553E] text-[#F5EFE0] px-8 py-3.5 font-bold text-xs tracking-[0.2em] uppercase"
      style={{ boxShadow: "3px 3px 0px #F5EFE0" }}
    >
      ↓ Save as PDF
    </button>
  );
}