"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "43,812", label: "Properties sold this year", note: "YTD 2026" },
  { value: "+9.4%", label: "Average rental growth", note: "Year on year" },
  { value: "38%", label: "International buyer share", note: "Q1 2026" },
  { value: "High", label: "Active buyer demand", note: "Current reading" },
];

export function DataSnapshot() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="data" className="py-16 sm:py-20 md:py-28 border-t" style={{ backgroundColor: "#EDE8E4", borderColor: "#C8C0B8" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-10 sm:mb-14">
          <p className="text-[11px] tracking-[0.25em] uppercase font-sans mb-2" style={{ color: "#5A6E78" }}>
            Numbers
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#1F343F" }}>
            Dubai Market Snapshot
          </h2>
          <p className="text-sm font-sans mt-2" style={{ color: "#5A6E78" }}>
            Source: betterhomes market data
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "#C8C0B8" }}>
          {stats.map((stat, i) => {
            const hovered = hoveredId === stat.label;
            return (
              <div
                key={stat.label}
                onMouseEnter={() => setHoveredId(stat.label)}
                onMouseLeave={() => setHoveredId(null)}
                className={cn(
                  "p-6 sm:p-8 md:p-12 flex flex-col justify-between gap-4 sm:gap-6 cursor-default",
                  "transition-all duration-300",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{
                  backgroundColor: hovered ? "#2C537A" : (i % 2 === 0 ? "#EDE8E4" : "#F5F2EF"),
                  transitionDelay: visible ? "0ms" : `${i * 100}ms`,
                }}
              >
                <span
                  className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold transition-colors duration-300"
                  style={{ color: hovered ? "#EDE8E4" : "#2C537A" }}
                >
                  {stat.value}
                </span>
                <div>
                  <p
                    className="text-xs sm:text-sm font-sans leading-snug mb-1 transition-colors duration-300"
                    style={{ color: hovered ? "rgba(237,232,228,0.85)" : "#1F343F" }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-xs font-sans tracking-wide transition-colors duration-300"
                    style={{ color: hovered ? "rgba(237,232,228,0.5)" : "#5A6E78" }}
                  >
                    {stat.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
