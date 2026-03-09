"use client";

import { useState } from "react";

const roles = ["Investor", "Owner", "Buyer", "Tenant"];

const LABEL_STYLE = "text-xs tracking-[0.18em] uppercase font-sans font-semibold mb-3";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<string | null>(null);
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="subscribe" className="py-20 sm:py-24 md:py-32" style={{ backgroundColor: "#2C537A" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl">
          <p className="text-[11px] tracking-[0.25em] uppercase font-sans mb-4" style={{ color: "rgba(237,232,228,0.4)" }}>
            Stay informed
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "#EDE8E4" }}>
            Stay betterinformed
          </h2>
          <p className="text-sm sm:text-base font-sans leading-relaxed mb-8 sm:mb-10" style={{ color: "rgba(237,232,228,0.7)" }}>
            Receive future Dubai Market Updates directly from the betterhomes team.
          </p>

          {submitted ? (
            <div className="py-10 border-t" style={{ borderColor: "rgba(237,232,228,0.15)" }}>
              <p className="font-serif text-2xl mb-2" style={{ color: "#EDE8E4" }}>
                You're subscribed.
              </p>
              <p className="text-sm font-sans" style={{ color: "rgba(237,232,228,0.55)" }}>
                We'll send you our next Dubai Market Update directly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* Role selector — pill toggle group */}
              <div>
                <p className={LABEL_STYLE} style={{ color: "#EDE8E4" }}>
                  I am a
                </p>
                <div className="flex flex-wrap gap-2">
                  {roles.map((r) => {
                    const isActive = role === r;
                    const isHovered = hoveredRole === r;
                    return (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(role === r ? null : r)}
                        onMouseEnter={() => setHoveredRole(r)}
                        onMouseLeave={() => setHoveredRole(null)}
                        className="text-[11px] font-sans tracking-[0.15em] uppercase px-5 py-2.5 transition-all duration-200 border"
                        style={
                          isActive
                            ? { backgroundColor: "#FF787A", color: "#1F343F", borderColor: "#FF787A" }
                            : isHovered
                            ? { backgroundColor: "rgba(237,232,228,0.12)", color: "#EDE8E4", borderColor: "rgba(237,232,228,0.45)" }
                            : { backgroundColor: "transparent", color: "rgba(237,232,228,0.55)", borderColor: "rgba(237,232,228,0.18)" }
                        }
                      >
                        {r}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Email + button inline */}
              <div>
                <p className={LABEL_STYLE} style={{ color: "#EDE8E4" }}>
                  Your email
                </p>
                <div
                  className="flex items-stretch border transition-colors duration-200 focus-within:border-[rgba(237,232,228,0.5)]"
                  style={{ borderColor: "rgba(237,232,228,0.2)" }}
                >
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 px-4 text-sm font-sans bg-transparent outline-none placeholder:opacity-30"
                    style={{ color: "#EDE8E4" }}
                  />
                  <button
                    type="submit"
                    className="h-12 px-6 text-[11px] tracking-[0.18em] uppercase font-sans font-semibold shrink-0 hover:bg-[#ff6062] transition-colors duration-200 border-l"
                    style={{ backgroundColor: "#FF787A", color: "#1F343F", borderColor: "#FF787A" }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              <p className="text-xs font-sans -mt-2" style={{ color: "rgba(237,232,228,0.28)" }}>
                No spam. Only verified market insights.
              </p>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}
