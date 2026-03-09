import { ArrowRight } from "lucide-react";

const links = [
  { label: "Investor Guide", href: "#" },
  { label: "Property Valuation", href: "#" },
  { label: "Off-Plan Opportunities", href: "#" },
  { label: "Speak to an Advisor", href: "#" },
];

export function AdvisorCTA() {
  return (
    <section id="advisor" className="border-t py-16 sm:py-20 md:py-28" style={{ backgroundColor: "#EDE8E4", borderColor: "#C8C0B8" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 sm:gap-12">
          {/* Left */}
          <div className="max-w-lg">
            <p className="text-[11px] tracking-[0.25em] uppercase font-sans mb-2" style={{ color: "#5A6E78" }}>
              Personalised guidance
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ color: "#1F343F" }}>
              Need personalised guidance?
            </h2>
            <p className="text-sm sm:text-base font-sans leading-relaxed mb-8" style={{ color: "#5A6E78" }}>
              Talk to a betterhomes advisor. Our team has been helping buyers, sellers, renters and investors navigate Dubai's property market since 1986.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-sans font-semibold hover:bg-[#ff6062]"
              style={{ backgroundColor: "#FF787A", color: "#1F343F" }}
            >
              Speak to an expert <ArrowRight size={14} />
            </a>
          </div>

          {/* Right — related links */}
          <div
            className="flex flex-col gap-0 lg:min-w-[280px] border-t lg:border-t-0 lg:border-l lg:pl-12 pt-8 lg:pt-0"
            style={{ borderColor: "#C8C0B8" }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center justify-between py-4 text-sm font-sans border-b hover:text-[#2C537A]"
                style={{ color: "#1F343F", borderColor: "#C8C0B8" }}
              >
                <span>{link.label}</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                  style={{ color: "#7BA0B2" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
