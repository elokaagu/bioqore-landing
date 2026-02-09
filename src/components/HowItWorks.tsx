import RevealOnScroll from "@/components/RevealOnScroll";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f5f5f5] py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
          <div className="border-t border-gray-300 pt-12">
            <p className="mb-2 font-mono text-sm font-medium uppercase tracking-wide text-gray-500">
              Process
            </p>
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tighter text-[#1a1a1a] sm:text-5xl">
              How Voyager works
            </h2>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-gray-600">
              An iterative loop that de-risks bioprocess development from parameters to insights.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-16">
          <div className="mx-auto max-w-4xl">
            {/* Grid: 5 cols = left card | line | center | line | right card; rows = top line+card, middle row, bottom details */}
            <div className="grid grid-cols-[1fr_20px_auto_20px_1fr] grid-rows-[auto_auto_1fr] items-center justify-items-center gap-0">
              {/* Row 0: vertical connector + top card */}
              <div className="col-span-5 flex flex-col items-center">
                <div className="h-6 w-0.5 shrink-0 bg-[#1a1a1a]" aria-hidden />
                <div className="mt-0 rounded-xl border-2 border-[#1a1a1a] bg-white px-4 py-2.5 text-center text-sm font-semibold text-[#1a1a1a] shadow-sm sm:text-base">
                  Execute ML Optimization Pipeline
                </div>
              </div>

              {/* Row 1: left card | horizontal line | center | horizontal line | right card */}
              <div className="col-start-1 row-start-2 flex flex-col items-end justify-start pt-8">
                <div className="max-w-[200px] rounded-xl border-2 border-[#1a1a1a] bg-white px-3 py-2.5 text-center text-sm font-semibold text-[#1a1a1a] shadow-sm sm:max-w-[220px] sm:px-4 sm:text-base">
                  Lab Team Executes Experiment Pipeline
                </div>
                <div className="mt-4 h-5 w-0.5 shrink-0 self-center bg-gray-400" aria-hidden />
                <div className="mt-1 max-w-[200px] rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-left sm:max-w-[220px]">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Client provides
                  </p>
                  <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-xs text-gray-700 sm:text-sm">
                    <li>Initial parameter space</li>
                    <li>Materials</li>
                  </ul>
                </div>
              </div>

              <div className="col-start-2 row-start-2 flex h-full min-h-[140px] items-center" aria-hidden>
                <div className="h-0.5 w-full bg-[#1a1a1a]" />
              </div>

              <div className="col-start-3 row-start-2 flex flex-shrink-0 items-center justify-center pt-8 pb-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[var(--color-blue-accent)] bg-white px-2 text-center shadow-md sm:h-28 sm:w-28">
                  <span className="text-xs font-bold leading-tight text-[#1a1a1a] sm:text-sm">
                    De-risk Iteration Loop
                  </span>
                </div>
              </div>

              <div className="col-start-4 row-start-2 flex h-full min-h-[140px] items-center" aria-hidden>
                <div className="h-0.5 w-full bg-[#1a1a1a]" />
              </div>

              <div className="col-start-5 row-start-2 flex flex-col items-start justify-start pt-8">
                <div className="max-w-[200px] rounded-xl border-2 border-[#1a1a1a] bg-white px-3 py-2.5 text-center text-sm font-semibold text-[#1a1a1a] shadow-sm sm:max-w-[220px] sm:px-4 sm:text-base">
                  Process Experiment Data
                </div>
                <div className="mt-4 h-5 w-0.5 shrink-0 self-center bg-gray-400" aria-hidden />
                <div className="mt-1 max-w-[200px] rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-left sm:max-w-[220px]">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Deliverables
                  </p>
                  <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-xs text-gray-700 sm:text-sm">
                    <li>Optimized parameter space</li>
                    <li>Data insights and key findings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
