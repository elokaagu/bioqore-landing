"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "PRODUCT", href: "#product" },
  { label: "SECURITY", href: "#security" },
  { label: "MISSION & TEAM", href: "#mission" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLight = scrolled;
  const textClass = isLight
    ? "text-[#0a0a0a]"
    : "text-white";
  const linkClass = isLight
    ? "text-gray-500 hover:text-[#0a0a0a]"
    : "text-white/70 hover:text-white";
  const borderClass = isLight
    ? "border-gray-200/80"
    : "border-white/10";
  const bgClass = isLight
    ? "bg-white/90 shadow-lg"
    : "bg-black/40";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      {/* Dynamic Island pill */}
      <div
        className={`
          group flex items-center rounded-full overflow-hidden
          transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          border ${borderClass} ${bgClass} backdrop-blur-xl
          w-fit max-w-[200px] hover:max-w-[580px] md:max-w-[200px] md:hover:max-w-[580px]
        `}
      >
        {/* Logo + name (always visible) */}
        <a
          href="#"
          className="flex shrink-0 items-center gap-2.5 py-2.5 pl-4 pr-3"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="14"
              cy="14"
              r="14"
              fill={isLight ? "#0a0a0a" : "white"}
            />
            <circle
              cx="10"
              cy="14"
              r="4"
              fill={isLight ? "#f5f5f0" : "#0a0a0a"}
            />
          </svg>
          <span className={`text-sm font-semibold tracking-tight ${textClass}`}>
            bioqore
          </span>
        </a>

        {/* Desktop: expand on hover — links + CTA */}
        <div
          className={`
            hidden md:flex items-center flex-1 min-w-0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300 delay-75
          `}
        >
          <div className={`flex items-center gap-6 pl-2 pr-4 py-2 border-l ml-1 ${isLight ? "border-gray-200" : "border-white/10"}`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-medium tracking-wide whitespace-nowrap transition-colors ${linkClass}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`
                shrink-0 rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap transition-all
                ${isLight ? "bg-[#0a0a0a] text-white hover:bg-black" : "bg-white/15 text-white hover:bg-white/25"}
              `}
            >
              Start working with Bioqore
            </a>
          </div>
        </div>

        {/* Mobile: hamburger to expand */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke={isLight ? "currentColor" : "white"}
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile expanded menu (below island) */}
      {mobileOpen && (
        <div
          className={`
            absolute top-full left-4 right-4 mt-2 rounded-2xl overflow-hidden
            border ${borderClass} ${bgClass} backdrop-blur-xl
            py-4 px-5 md:hidden
          `}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`block py-2.5 text-sm font-medium ${linkClass}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0a0a0a]"
            onClick={() => setMobileOpen(false)}
          >
            Start working with Bioqore
          </a>
        </div>
      )}
    </nav>
  );
}
