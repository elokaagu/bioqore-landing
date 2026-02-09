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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f5f0]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="14"
              cy="14"
              r="14"
              fill={scrolled ? "#0a0a0a" : "white"}
            />
            <circle
              cx="10"
              cy="14"
              r="4"
              fill={scrolled ? "#f5f5f0" : "#0a0a0a"}
            />
          </svg>
          <span
            className={`text-base font-semibold tracking-tight transition-colors ${
              scrolled ? "text-[#0a0a0a]" : "text-white"
            }`}
          >
            bioqore
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-gray-500 hover:text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className={`hidden rounded-full px-4 py-2 text-xs font-medium transition-all md:block ${
            scrolled
              ? "bg-[#0a0a0a] text-white hover:bg-black"
              : "border border-white/25 text-white hover:bg-white/10"
          }`}
        >
          Start working with Bioqore
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke={scrolled ? "currentColor" : "white"}
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200/20 bg-[#0a0a0a]/95 backdrop-blur-md px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2.5 text-sm font-medium text-white/70 hover:text-white"
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
