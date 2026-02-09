"use client";

import Image from "next/image";

const CAREERS_IMAGE = ""; // e.g. "/careers-hero.jpg" — leave empty for gradient

export default function CareersHero() {
  return (
    <section
      id="careers"
      className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Background: image or gradient */}
      <div className="absolute inset-0">
        {CAREERS_IMAGE ? (
          <>
            <Image
              src={CAREERS_IMAGE}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"
              aria-hidden
            />
          </>
        ) : (
          <div
            className="h-full w-full bg-gradient-to-br from-[#0f1f14] via-[#1a2f1e] to-[#0f1f14]"
            aria-hidden
          />
        )}
      </div>

      {/* Centered content — subtle fade-in on load */}
      <div className="careers-hero-content relative z-10 flex flex-col items-center text-center">
        <span className="mb-6 inline-block font-mono rounded-full border-2 border-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white shadow-lg">
          Careers
        </span>
        <h2 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
          Help build the future of biomanufacturing
        </h2>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-black/50 px-6 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-black/60 hover:shadow-xl"
        >
          Join us
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </section>
  );
}
