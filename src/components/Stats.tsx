"use client";

import ScrollReveal from "./ScrollReveal";

const stats = [
  { number: "12K+", label: "Cups poured monthly" },
  { number: "4.9", label: "Google rating" },
  { number: "6", label: "Single origins on rotation" },
  { number: "90s", label: "Average brew time" },
];

export default function Stats() {
  return (
    <div className="bg-ink py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="stat-number font-heading text-4xl md:text-5xl text-bg tracking-wide mb-1">
                {stat.number}
              </div>
              <div className="text-bg/50 text-xs tracking-[0.15em] uppercase">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}