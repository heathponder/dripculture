"use client";

import { useEffect } from "react";

const sectionColors: Record<string, string> = {
  story: "#F7F4F0",    // bg (cream)
  stats: "#1A1A1A",    // ink (dark)
  menu: "#FAF8F5",     // cream
  space: "#F7F4F0",    // bg
  reviews: "#FAF8F5",  // cream
  visit: "#F7F4F0",    // bg
};

export default function ScrollColorShift() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const id = entry.target.id;
            const color = sectionColors[id];
            if (color) {
              document.body.style.transition = "background-color 0.6s ease";
              document.body.style.backgroundColor = color;
            }
          }
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return null;
}