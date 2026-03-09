"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Building2, Key, TrendingDown, Globe, RefreshCw, ArrowUpRight, Compass } from "lucide-react";

const milestones = [
  {
    year: "1986",
    icon: Building2,
    title: "Dubai diversifies beyond oil",
    body: "Global oil prices collapse. Dubai begins building a new economic model. betterhomes founded the same year.",
    highlight: false,
  },
  {
    year: "2002",
    icon: Key,
    title: "Foreign ownership introduced",
    body: "Dubai opens freehold property ownership to international investors. The modern property market begins.",
    highlight: false,
  },
  {
    year: "2008",
    icon: TrendingDown,
    title: "Global financial crisis",
    body: "Lehman Brothers collapses. Dubai property prices fall sharply. The market restructures and rebuilds.",
    highlight: false,
  },
  {
    year: "2013",
    icon: Globe,
    title: "Dubai wins Expo 2020",
    body: "Global attention returns to the city. Infrastructure and development accelerate.",
    highlight: false,
  },
  {
    year: "2020",
    icon: RefreshCw,
    title: "Pandemic reshapes global living",
    body: "Borders close worldwide. Dubai reopens early and attracts global talent and investors.",
    highlight: false,
  },
  {
    year: "2022–",
    icon: ArrowUpRight,
    title: "Dubai becomes a global investment hub",
    body: "Record luxury property sales. Dubai leads the world in ultra-prime home transactions.",
    highlight: false,
  },
  {
    year: "2026",
    icon: Compass,
    title: "Dubai Market Update",
    body: "Understanding the next chapter of the market. betterhomes.",
    highlight: true,
  },
];

function TimelineCard({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const Icon = milestone.icon;

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
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-3 transition-all duration-600 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      )}
    >
      {/* Year dot */}
      <div className="flex items-center gap-2">
        <div
          className="w-2.5 h-2.5 rounded-full border-2 shrink-0"
          style={
            milestone.highlight
              ? { backgroundColor: "#FF787A", borderColor: "#FF787A" }
              : { backgroundColor: "#EDE8E4", borderColor: "#2C537A" }
          }
        />
        <span
          className="font-sans text-[10px] tracking-[0.22em] uppercase font-semibold"
          style={{ color: milestone.highlight ? "#FF787A" : "#7BA0B2" }}
        >
          {milestone.year}
        </span>
      </div>

      {/* Card */}
      <div
        className="p-5 border h-full"
        style={
          milestone.highlight
            ? { backgroundColor: "#2C537A", borderColor: "#2C537A" }
            : { backgroundColor: "rgba(237,232,228,0.08)", borderColor: "rgba(237,232,228,0.14)" }
        }
      >
        <Icon size={16} className="mb-3" style={{ color: milestone.highlight ? "#FF787A" : "#7BA0B2" }} />
        <h3 className="font-serif text-sm font-bold leading-snug mb-2" style={{ color: "#EDE8E4" }}>
          {milestone.title}
        </h3>
        <p
          className="text-xs leading-relaxed font-sans"
          style={{ color: milestone.highlight ? "rgba(237,232,228,0.75)" : "rgba(237,232,228,0.5)" }}
        >
          {milestone.body}
        </p>
      </div>
    </div>
  );
}

export function MarketTimeline() {
  return (
    <section
      id="timeline"
      className="py-16 sm:py-20 md:py-28 border-t overflow-hidden"
      style={{ backgroundColor: "#1F343F", borderColor: "#2C3E47" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <p className="text-[11px] tracking-[0.25em] uppercase font-sans mb-2" style={{ color: "#7BA0B2" }}>
            Experience
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#EDE8E4" }}>
            Dubai Market Timeline
          </h2>
          <p className="text-sm font-sans mt-2" style={{ color: "#7BA0B2" }}>
            Nearly four decades of Dubai's property story.
          </p>
        </div>

        {/* Ticker bar — continuously scrolling marquee */}
        <div
          className="relative mb-10 sm:mb-12 py-3 -mx-6 lg:-mx-10 overflow-hidden"
          style={{ backgroundColor: "#2C537A" }}
          aria-hidden="true"
        >
          {/* Two identical tracks; animating -50% brings first to end, second fills gap = seamless loop */}
          <div className="animate-marquee">
            {[0, 1].map((n) => (
              <span
                key={n}
                className="text-[10px] tracking-[0.22em] uppercase font-sans whitespace-nowrap pr-16"
                style={{ color: "rgba(237,232,228,0.65)" }}
              >
                betterhomes advising clients through every market cycle since 1986
                <span className="mx-8" style={{ color: "rgba(237,232,228,0.3)" }}>&middot;</span>
                betterhomes advising clients through every market cycle since 1986
                <span className="mx-8" style={{ color: "rgba(237,232,228,0.3)" }}>&middot;</span>
                betterhomes advising clients through every market cycle since 1986
                <span className="mx-8" style={{ color: "rgba(237,232,228,0.3)" }}>&middot;</span>
                betterhomes advising clients through every market cycle since 1986
                <span className="mx-8" style={{ color: "rgba(237,232,228,0.3)" }}>&middot;</span>
              </span>
            ))}
          </div>
        </div>

        {/* Timeline grid — 1 col mobile, 2 tablet, 4 wide tablet, 7 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 md:gap-5">
          {milestones.map((m, i) => (
            <TimelineCard key={m.year} milestone={m} index={i} />
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-14 sm:mt-20 max-w-2xl border-t pt-10 sm:pt-12" style={{ borderColor: "rgba(237,232,228,0.1)" }}>
          <p className="font-serif text-lg sm:text-xl font-semibold mb-4" style={{ color: "#EDE8E4" }}>
            Experience through every cycle
          </p>
          <p className="text-sm leading-relaxed font-sans" style={{ color: "#7BA0B2" }}>
            Since 1986, betterhomes has helped clients navigate Dubai's property market through global crises,
            corrections and periods of exceptional growth. Our role remains the same: helping people make confident property decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
