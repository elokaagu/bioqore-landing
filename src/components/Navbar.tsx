"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
  const linkClass = isLight
    ? "text-gray-600 hover:text-[#0a0a0a]"
    : "text-white/80 hover:text-white";
  const borderClass = isLight
    ? "border-gray-200/40"
    : "border-white/10";
  const bgClass = "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b ${borderClass} ${bgClass} transition-colors duration-300`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        {/* Logo */}
        <a
          href="#"
          className="relative flex shrink-0 items-center"
        >
          <Image
            src="/bioqore-logo.png"
            alt="Bioqore"
            width={96}
            height={26}
            className={`h-6 w-auto object-contain ${isLight ? "" : "brightness-0 invert"}`}
            priority
          />
        </a>

        {/* Desktop: links + CTA */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-mono text-sm font-medium transition-colors ${linkClass}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${isLight ? "bg-[#0a0a0a] text-white hover:bg-black" : "bg-white/20 text-white hover:bg-white/30"}`}
          >
            Start working with Bioqore
          </a>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`border-t px-6 py-4 md:hidden ${isLight ? "border-gray-200 bg-white" : "border-white/10 bg-black/95"}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`block py-3 font-mono text-sm font-medium ${isLight ? "text-gray-600 hover:text-[#0a0a0a]" : "text-white/90 hover:text-white"}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`mt-3 inline-block rounded-lg px-4 py-2.5 text-sm font-medium ${isLight ? "bg-[#0a0a0a] text-white" : "bg-white text-[#0a0a0a]"}`}
            onClick={() => setMobileOpen(false)}
          >
            Start working with Bioqore
          </a>
        </div>
      )}
    </nav>
  );
}
