"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import RoadmapMilestoneImage from "@/components/RoadmapMilestoneImage";
import WordsReveal from "@/components/WordsReveal";

const milestones = [
  {
    year: "2023",
    label: "R&D foundation",
    image: "/roadmap/2023-r-d-foundation.jpg",
    alt: "Early R&D",
  },
  {
    year: "2024",
    label: "Voyager alpha",
    image: "/roadmap/2024-voyager-alpha.jpg",
    alt: "Voyager platform",
  },
  {
    year: "2025",
    label: "Pilot deployments",
    image: "/roadmap/2025-pilot-deployments.jpg",
    alt: "Pilot runs",
  },
  {
    year: "2026",
    label: "Scale & commercial",
    image: "/roadmap/2026-scale-commercial.jpg",
    alt: "Commercial scale",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-[#f7f7f7] py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
          <div className="border-t border-gray-300 pt-12">
            <p className="mb-2 font-mono text-sm font-medium uppercase tracking-wide text-gray-500">
              Timeline
            </p>
            <WordsReveal
              text="Technical Roadmap"
              as="h2"
              className="text-4xl font-bold leading-[1.1] tracking-tighter text-[var(--color-main)] sm:text-5xl"
              stagger={0.05}
            />
            <p className="mt-3 text-lg text-[var(--color-body)]">
              Bioqore&apos;s innovation milestones
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-16">
          {/* Timeline: horizontal line with ticks, years above, milestones below */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible">
            <div className="relative min-w-[560px] md:min-w-0">
              {/* Top row: year badges + line through center */}
              <div className="grid grid-cols-4 gap-6 md:gap-8 mb-0">
                {milestones.map((m) => (
                  <div key={m.year} className="flex flex-col items-center">
                    <span className="font-mono rounded-full bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700">
                      {m.year}
                    </span>
                  </div>
                ))}
              </div>
              {/* Horizontal line with vertical ticks - same grid so ticks align */}
              <div className="grid grid-cols-4 gap-6 md:gap-8 relative -mt-2">
                <div className="absolute inset-x-0 top-3 h-px bg-gray-300" aria-hidden />
                {milestones.map((_, i) => (
                  <div key={i} className="relative flex justify-center">
                    <div className="h-2 w-px bg-gray-400" />
                  </div>
                ))}
              </div>
              {/* Milestone labels + images */}
              <div className="grid grid-cols-4 gap-6 md:gap-8 mt-6">
                {milestones.map((m) => (
                  <div key={m.year} className="flex flex-col items-center min-w-0">
                    <p className="mb-4 text-center text-sm font-semibold text-[var(--color-main)]">
                      {m.label}
                    </p>
                    <div className="relative w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 shadow-sm" style={{ aspectRatio: "4/3" }}>
                      {m.image ? (
                        <RoadmapMilestoneImage src={m.image} alt={m.alt} />
                      ) : (
                        <div
                          className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300"
                          aria-hidden
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
