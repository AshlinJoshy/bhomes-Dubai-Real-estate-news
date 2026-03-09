"use client";

import { Home, TrendingUp, Key, BarChart2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const signals = [
  {
    id: "buying",
    label: "Buying",
    icon: Home,
    headline: "Buyer demand remains steady",
    body: "Families and long-term buyers continue to enter the market across established Dubai communities.",
    cta: "Speak to a buyer advisor",
    href: "#advisor",
  },
  {
    id: "selling",
    label: "Selling",
    icon: TrendingUp,
    headline: "Well-priced homes attract strong interest",
    body: "Quality inventory continues to sell quickly in areas with limited supply.",
    cta: "Request a property valuation",
    href: "#advisor",
  },
  {
    id: "renting",
    label: "Renting",
    icon: Key,
    headline: "Rental demand remains elevated",
    body: "Dubai's growing population continues to support strong rental activity across key neighbourhoods.",
    cta: "Explore property management",
    href: "#advisor",
  },
  {
    id: "investing",
    label: "Investing",
    icon: BarChart2,
    headline: "Dubai continues to attract global investors",
    body: "International capital remains drawn by stability, yield potential and long-term growth.",
    cta: "View investment opportunities",
    href: "#advisor",
  },
];

function SignalCard({
  signal,
  index,
  hovered,
  onEnter,
  onLeave,
}: {
  signal: typeof signals[0];
  index: number;
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);
  const Icon = signal.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setVisible(true), index * 80); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <a
      ref={ref}
      href={signal.href}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={cn(
        "group flex flex-col justify-between p-7 md:p-10 transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      )}
      style={{
        backgroundColor: hovered ? "#2C537A" : "#EDE8E4",
        color: hovered ? "#EDE8E4" : "#1F343F",
      }}
    >
      <div>
        <div className="flex items-center justify-between mb-8">
          <span
            className="text-[10px] tracking-[0.25em] uppercase font-sans transition-colors duration-300"
            style={{ color: hovered ? "rgba(237,232,228,0.55)" : "#5A6E78" }}
          >
            {signal.label}
          </span>
          <Icon
            size={18}
            className="transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ color: hovered ? "#7BA0B2" : "#5A6E78" }}
          />
        </div>

        <h3
          className="font-serif text-lg sm:text-xl font-semibold leading-snug mb-4 text-balance transition-colors duration-300"
          style={{ color: hovered ? "#EDE8E4" : "#1F343F" }}
        >
          {signal.headline}
        </h3>

        <p
          className="text-sm leading-relaxed font-sans transition-colors duration-300"
          style={{ color: hovered ? "rgba(237,232,228,0.7)" : "#5A6E78" }}
        >
          {signal.body}
        </p>
      </div>

      <div
        className="mt-8 sm:mt-10 text-[11px] font-sans tracking-[0.18em] uppercase border-t pt-5 transition-colors duration-300"
        style={{
          color: hovered ? "#FF787A" : "#2C537A",
          borderColor: hovered ? "rgba(237,232,228,0.15)" : "#C8C0B8",
        }}
      >
        {signal.cta} &rarr;
      </div>
    </a>
  );
}

export function MarketSignals() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="signals" className="py-16 sm:py-20 md:py-28" style={{ backgroundColor: "#EDE8E4" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-10 sm:mb-14">
          <p className="text-[11px] tracking-[0.25em] uppercase font-sans mb-2" style={{ color: "#5A6E78" }}>
            Current intelligence
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#1F343F" }}>
            Current Market Signals
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "#C8C0B8" }}>
          {signals.map((signal, i) => (
            <SignalCard
              key={signal.id}
              signal={signal}
              index={i}
              hovered={hoveredId === signal.id}
              onEnter={() => setHoveredId(signal.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
