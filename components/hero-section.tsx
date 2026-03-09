import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-16 sm:pb-20 pt-28 sm:pt-32"
      style={{ backgroundColor: "#1F343F" }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#EDE8E4 1px, transparent 1px), linear-gradient(90deg, #EDE8E4 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        {/* Edition label */}
        <div className="mb-6 sm:mb-8">
          <span
            className="inline-flex items-center gap-2.5 border text-[11px] tracking-[0.25em] uppercase font-sans px-3 py-1.5"
            style={{ borderColor: "rgba(237,232,228,0.18)", color: "rgba(237,232,228,0.55)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#FF787A" }} />
            betterhomes market briefing &middot; March 2026
          </span>
        </div>

        {/* Main headline */}
        <div className="max-w-5xl">
          <p
            className="text-[11px] tracking-[0.32em] uppercase font-sans mb-4 sm:mb-5"
            style={{ color: "rgba(237,232,228,0.35)" }}
          >
            betterinsights. betterguidance.
          </p>
          <h1
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold leading-[0.93] tracking-tight text-balance mb-6 sm:mb-8"
            style={{ color: "#EDE8E4" }}
          >
            Dubai<br />
            Market<br />
            Update
          </h1>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 pt-8 sm:pt-12 mt-8 sm:mt-12 border-t"
          style={{ borderColor: "rgba(237,232,228,0.1)" }}
        >
          <div className="max-w-md">
            <p className="text-sm sm:text-base leading-relaxed font-sans" style={{ color: "rgba(237,232,228,0.68)" }}>
              Market insight from nearly four decades in Dubai real estate.
              Our team is tracking the key signals buyers, sellers, renters and investors should understand.
            </p>
            <p className="text-xs font-sans mt-3 tracking-wide" style={{ color: "rgba(237,232,228,0.35)" }}>
              Insights from the betterhomes team &middot; Established 1986
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#subscribe"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-sans font-semibold bg-[#FF787A] hover:bg-[#ff6062] text-[#1F343F] text-center"
            >
              Subscribe for market updates
            </a>
            <a
              href="#videos"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-sans font-semibold border hover:bg-white/5 text-center"
              style={{ borderColor: "rgba(237,232,228,0.28)", color: "#EDE8E4" }}
            >
              Watch the latest briefing
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#confidence"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hover:opacity-70"
        aria-label="Scroll down"
        style={{ color: "rgba(237,232,228,0.28)" }}
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
