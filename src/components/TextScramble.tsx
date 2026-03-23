"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function TextScramble({ text, className = "" }: TextScrambleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(text);
  const hasPlayed = useRef(false);

  const scramble = useCallback(() => {
    const original = text;
    const duration = 600;
    const frameRate = 24;
    const totalFrames = Math.floor(duration / (1000 / frameRate));
    let frame = 0;

    // Lock dimensions before animating
    const el = ref.current;
    if (el) {
      el.style.minHeight = el.offsetHeight + "px";
      el.style.minWidth = el.offsetWidth + "px";
    }

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      const result = original
        .split("")
        .map((char, i) => {
          if (char === " " || char === "." || char === "," || char === "'") return char;
          const charProgress = i / original.length;
          if (charProgress < progress - 0.15) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplay(result);

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplay(original);
        // Unlock dimensions
        if (el) {
          el.style.minHeight = "";
          el.style.minWidth = "";
        }
      }
    }, 1000 / frameRate);
  }, [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed.current) {
          hasPlayed.current = true;
          scramble();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [scramble]);

  return (
    <div ref={ref} className={className} aria-label={text}>
      {display}
    </div>
  );
}