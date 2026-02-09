export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#0a0a0a]">
      {/* Animated fluid gradient orbs */}
      <div data-hero-orb="" />
      <div data-hero-orb-accent="" />
      <div data-hero-orb-glow="" />

      {/* Content pinned to the bottom */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:pb-24">
        {/* Overline */}
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/50">
          AI Copilot
        </p>

        {/* Two-tone headline */}
        <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-[6.5rem]">
          Accelerate your
          <br />
          biomanufacturing R&D.
        </h1>
        <p className="mt-4 max-w-5xl text-3xl font-light leading-[1.15] tracking-tight text-white/35 sm:text-5xl lg:text-6xl">
          From fermentation to cell culture,
          <br className="hidden sm:block" />
          guided by AI.
        </p>

        {/* Dual CTA buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#voyager"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#0a0a0a] transition-all hover:bg-white/90 hover:shadow-lg"
          >
            Discover Voyager
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="ml-1"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-medium text-white transition-all hover:border-white/50 hover:bg-white/5"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <a
          href="#voyager"
          aria-label="Scroll down"
          className="animate-bounce text-white/30 transition-colors hover:text-white/60"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
