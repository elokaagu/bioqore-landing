"use client";

import UnicornScene from "unicornstudio-react/next";
import TypewriterHeadline from "@/components/TypewriterHeadline";
import WordsReveal from "@/components/WordsReveal";

const UNICORN_STUDIO_PROJECT = "P0se60zan30bsR7i3bBt";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden bg-[#0a0a0a]">
      {/* Unicorn Studio embed (background) */}
      <div className="absolute inset-0 min-h-screen w-full">
        <UnicornScene
          projectId={UNICORN_STUDIO_PROJECT}
          width="100%"
          height="100%"
          className="block h-full min-h-screen w-full"
          lazyLoad={false}
        />
      </div>

      {/* Text and buttons overlay */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:pb-24">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-wide text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          AI Copilot
        </p>
        <h1 className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl xl:text-7xl">
          <TypewriterHeadline text={"Accelerate your\nbiomanufacturing R&D."} speed={55} />
        </h1>
        <div className="mt-3 max-w-5xl text-xl font-light leading-[1.15] tracking-tight text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] sm:text-2xl lg:text-3xl">
          <WordsReveal
            text="From fermentation to cell culture, guided by AI."
            as="p"
            className=""
            scrollTrigger={false}
            delay={1.2}
            stagger={0.04}
            duration={0.5}
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#voyager"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-white/90 hover:shadow-lg"
          >
            Discover Voyager
            <svg
              width="14"
              height="14"
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
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-white/50 hover:bg-white/5"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8">
        <a
          href="#voyager"
          aria-label="Scroll down"
          className="animate-bounce text-white/70 transition-colors hover:text-white"
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
