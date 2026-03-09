"use client";

import { useEffect, useRef, useState } from "react";

const POSITION = 65; // 0–100; 65 = stable growth

export function ConfidenceIndicator() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="confidence" className="border-b py-14 sm:py-20" style={{ backgroundColor: "#EDE8E4", borderColor: "#C8C0B8" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase font-sans mb-2" style={{ color: "#5A6E78" }}>
              Market Overview
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#1F343F" }}>
              Dubai Market Confidence
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#7BA0B2" }} />
            <span className="text-sm font-sans tracking-wide" style={{ color: "#5A6E78" }}>
              Updated: March 2026
            </span>
          </div>
        </div>

        {/* Indicator */}
        <div className="max-w-3xl" ref={ref}>
          <div className="flex justify-between text-[10px] font-sans tracking-[0.22em] uppercase mb-3" style={{ color: "#5A6E78" }}>
            <span>Declining</span>
            <span>Stable</span>
            <span>Expanding</span>
          </div>

          {/* Track */}
          <div className="relative h-[2px] mb-4" style={{ backgroundColor: "#C8C0B8" }}>
            <div
              className="absolute left-0 top-0 h-full transition-all duration-1000 ease-out"
              style={{ width: animated ? `${POSITION}%` : "0%", backgroundColor: "#2C537A" }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 shadow-sm transition-all duration-1000 ease-out"
              style={{ left: animated ? `${POSITION}%` : "0%", backgroundColor: "#7BA0B2", borderColor: "#1F343F" }}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 mt-6">
            <span className="font-serif text-xl sm:text-2xl font-bold" style={{ color: "#1F343F" }}>
              Stable growth
            </span>
            <span className="text-sm font-sans leading-relaxed max-w-sm" style={{ color: "#5A6E78" }}>
              Buyer demand, rental activity and international investment remain supportive of the Dubai property market.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
