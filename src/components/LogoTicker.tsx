"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

const partners = [
  "CYTENA",
  "NVIDIA",
  "BICO",
  "Evident",
  "Sartorius",
  "Thermo Fisher",
  "MilliporeSigma",
  "Lonza",
];

export default function LogoTicker() {
  return (
    <section className="overflow-hidden bg-[#fafafa] py-10 sm:py-12" aria-label="Trusted by">
      <RevealOnScroll>
      <p className="mb-8 text-center font-mono text-xs font-medium uppercase tracking-widest text-gray-500">
        Trusted by teams at
      </p>
      <div className="relative">
        <div className="flex w-max animate-ticker gap-12 px-4">
          {[...partners, ...partners].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-4 text-sm font-semibold tracking-tight text-gray-700"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}
