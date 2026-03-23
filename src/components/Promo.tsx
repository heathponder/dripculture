"use client";

import ScrollReveal from "./ScrollReveal";

const items = [
  { number: "14", label: "Countries sourced from" },
  { number: "3", label: "Local artists featured monthly" },
  { number: "100%", label: "Compostable packaging" },
  { number: "FREE", label: "Wi-Fi, no time limits" },
];

export default function Promo() {
  return (
    <div className="bg-ink py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {items.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <div className="stat-number font-heading text-4xl md:text-5xl text-bg tracking-wide mb-1">
                {item.number}
              </div>
              <div className="text-bg/50 text-xs tracking-[0.15em] uppercase">
                {item.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}