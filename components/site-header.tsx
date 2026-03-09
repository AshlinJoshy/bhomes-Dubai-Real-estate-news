"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = ["Signals", "Data", "Timeline", "Videos"];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setShowSticky(y > window.innerHeight * 0.4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || menuOpen
            ? "border-b border-[#C8C0B8] bg-[#EDE8E4]/97 backdrop-blur-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          {/* Wordmark */}
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] tracking-[0.22em] uppercase text-[#5A6E78] font-sans hidden sm:block">
              betterhomes market briefing
            </span>
            <span className="font-serif text-sm font-bold text-[#1F343F] tracking-tight">
              Dubai Market Update
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs tracking-[0.15em] uppercase text-[#5A6E78] hover:text-[#1F343F] font-sans"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Subscribe CTA — hidden on mobile to save space */}
            <a
              href="#subscribe"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#FF787A] text-[#1F343F] text-[11px] tracking-[0.18em] uppercase font-sans font-semibold hover:bg-[#ff6062]"
            >
              Subscribe
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 text-[#1F343F]"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            menuOpen ? "max-h-80 border-t border-[#C8C0B8]" : "max-h-0"
          )}
          style={{ backgroundColor: "#EDE8E4" }}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm tracking-[0.15em] uppercase text-[#5A6E78] hover:text-[#1F343F] font-sans border-b border-[#C8C0B8] last:border-0"
              >
                {item}
              </a>
            ))}
            <a
              href="#subscribe"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center px-5 py-3 bg-[#FF787A] text-[#1F343F] text-[11px] tracking-[0.18em] uppercase font-sans font-semibold hover:bg-[#ff6062]"
            >
              Subscribe
            </a>
          </nav>
        </div>
      </header>

      {/* Sticky subscribe bar — appears after 40% scroll */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ease-in-out border-t border-[#2C3E47] bg-[#1F343F] text-[#EDE8E4]",
          showSticky ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-14 gap-4">
          <p className="text-xs font-sans tracking-wide text-[#EDE8E4]/80 hidden sm:block">
            Stay betterinformed — receive future Dubai Market Updates
          </p>
          <p className="text-xs font-sans tracking-wide text-[#EDE8E4]/80 sm:hidden">
            Stay betterinformed
          </p>
          <a
            href="#subscribe"
            className="inline-flex items-center px-5 sm:px-8 py-2 bg-[#FF787A] text-[#1F343F] text-[11px] tracking-[0.18em] uppercase font-sans font-semibold hover:bg-[#ff6062] shrink-0"
          >
            Subscribe
          </a>
        </div>
      </div>
    </>
  );
}
