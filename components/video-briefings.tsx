"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

const videos = [
  {
    id: 1,
    question: "Is the Dubai property market slowing down?",
    duration: "45 sec",
    bg: "#1F343F",
  },
  {
    id: 2,
    question: "Is now a good time to invest in Dubai property?",
    duration: "60 sec",
    bg: "#2C537A",
  },
  {
    id: 3,
    question: "Are rental yields still strong?",
    duration: "35 sec",
    bg: "#1F343F",
  },
  {
    id: 4,
    question: "Should owners consider selling now?",
    duration: "50 sec",
    bg: "#2C537A",
  },
];

export function VideoBriefings() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="videos" className="py-16 sm:py-20 md:py-28" style={{ backgroundColor: "#D9B9A0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase font-sans mb-2" style={{ color: "#5A6E78" }}>
              Expert answers
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#1F343F" }}>
              Market Questions We're Hearing
            </h2>
          </div>

        </div>

        {/* Video grid — 1 col mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActive(active === video.id ? null : video.id)}
              className={cn(
                "group text-left relative overflow-hidden w-full flex flex-col",
                "outline-offset-0 transition-all duration-200",
                active === video.id ? "outline outline-2 outline-[#FF787A]" : "hover:outline hover:outline-1 hover:outline-[#C8C0B8]"
              )}
            >
              {/* Thumbnail — fixed aspect ratio, never shrinks */}
              <div
                className="aspect-video w-full flex-shrink-0 flex items-center justify-center relative"
                style={{ backgroundColor: video.bg }}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-200",
                    active === video.id ? "scale-110" : "group-hover:scale-110"
                  )}
                  style={{
                    backgroundColor: active === video.id ? "#FF787A" : "rgba(237,232,228,0.12)",
                    borderColor: active === video.id ? "#FF787A" : "rgba(237,232,228,0.22)",
                  }}
                >
                  <Play size={18} className="ml-0.5" style={{ color: "#EDE8E4" }} fill="#EDE8E4" />
                </div>
                <span
                  className="absolute bottom-3 right-3 text-xs font-sans tracking-wide"
                  style={{ color: "rgba(237,232,228,0.55)" }}
                >
                  {video.duration}
                </span>
              </div>

              {/* Question — flex-1 so all text areas match height across the row */}
              <div
                className="flex-1 p-4 sm:p-5 border-t text-left flex items-start"
                style={{ backgroundColor: "#EDE8E4", borderColor: "#C8C0B8" }}
              >
                <p className="text-sm font-sans leading-relaxed" style={{ color: "#1F343F" }}>
                  {video.question}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 flex justify-center sm:justify-start">
          <a
            href="#subscribe"
            className="inline-flex items-center px-8 sm:px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-sans font-semibold hover:bg-[#ff6062] transition-colors"
            style={{ backgroundColor: "#FF787A", color: "#1F343F" }}
          >
            Subscribe to receive future market briefings
          </a>
        </div>
      </div>
    </section>
  );
}
