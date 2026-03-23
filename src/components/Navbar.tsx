"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "STORY", href: "#story" },
  { label: "MENU", href: "#menu" },
  { label: "SPACE", href: "#space" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "VISIT", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 ${scrolled ? "nav-solid" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className={`font-heading text-3xl md:text-4xl tracking-widest transition-colors ${scrolled ? "text-ink" : "text-white"}`}
        >
          DRIP CULTURE<span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-semibold tracking-[0.15em] transition-colors ${scrolled ? "text-ink-muted hover:text-ink" : "text-white/80 hover:text-white"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-t-2 border-ink">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-ink text-sm font-semibold tracking-[0.15em]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
