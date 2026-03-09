export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#1F343F" }}>

      {/* Subscribe strip */}
      <div
        className="border-b"
        style={{ borderColor: "#2C3E47" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm font-sans" style={{ color: "rgba(237,232,228,0.6)" }}>
            Stay betterinformed — receive future Dubai Market Updates
          </p>
          <a
            href="#newsletter"
            className="inline-flex items-center justify-center px-7 py-3 text-[11px] tracking-[0.18em] uppercase font-sans font-semibold whitespace-nowrap hover:bg-[#ff6062] transition-colors duration-200"
            style={{ backgroundColor: "#FF787A", color: "#1F343F" }}
          >
            Subscribe
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <p className="font-serif text-sm font-bold" style={{ color: "#EDE8E4" }}>
            betterhomes
          </p>
          <span className="text-[11px] font-sans" style={{ color: "rgba(237,232,228,0.3)" }}>
            betterinsights. betterguidance. &middot; Est. 1986
          </span>
        </div>
        <p className="text-xs font-sans" style={{ color: "rgba(237,232,228,0.28)" }}>
          &copy; {new Date().getFullYear()} betterhomes. Dubai Market Update.
        </p>
      </div>

    </footer>
  );
}
