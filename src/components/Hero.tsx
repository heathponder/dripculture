"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let currentY = 0;
    let targetY = 0;

    const lerp = () => {
      currentY += (targetY - currentY) * 0.08;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${currentY}px, 0)`;
      }
      if (Math.abs(targetY - currentY) > 0.5) {
        requestAnimationFrame(lerp);
      } else {
        ticking = false;
      }
    };

    const onScroll = () => {
      targetY = window.scrollY * 0.2;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(lerp);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div ref={bgRef} className="absolute inset-0 -top-20 -bottom-20">
          <img src="/images/hero.jpg" alt="" className="w-full h-full object-cover grayscale-[30%] contrast-[1.1]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/40" />
      </div>

      {/* Content — bottom-aligned, editorial */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <hr className="editorial-rule w-16 mb-6 bg-white/80" />
          <h1 className="font-heading text-[4rem] md:text-[7rem] lg:text-[9rem] leading-[0.85] text-white mb-4 tracking-wide">
            COFFEE,
            <br />
            CULTURE,
            <br />
            <span className="text-accent">COMMUNITY.</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed mb-8 font-light">
            Single-origin pour-overs. House-roasted beans.
            A neighborhood spot for people who give a damn about their cup.
          </p>
          <div className="flex gap-4">
            <a
              href="#menu"
              className="btn-magnetic bg-accent hover:bg-accent-light text-white font-semibold text-sm tracking-[0.1em] uppercase px-7 py-3.5"
            >
              See Menu
            </a>
            <a
              href="#visit"
              className="btn-magnetic border-2 border-white/40 hover:border-white text-white font-semibold text-sm tracking-[0.1em] uppercase px-7 py-3.5"
            >
              Visit Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
