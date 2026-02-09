export default function VoyagerIntro() {
  return (
    <section id="voyager" className="bg-[#f2f2f2] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Asymmetric two-column: small label left, headline + description right */}
        <div className="border-t border-gray-300 pt-12">
          <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
              Platform
            </p>

            <div>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl">
                Introducing Voyager
              </h2>
              <p className="mt-5 max-w-2xl text-xl font-light leading-relaxed text-gray-400 sm:text-2xl">
                Our AI-powered bioprocess platform that monitors, predicts, and
                optimizes your runs in real time.
              </p>

              <a
                href="#product"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-[#333] shadow-sm transition-all hover:border-gray-400 hover:shadow-md"
              >
                Learn more
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Video placeholder — cinematic dark block */}
        <div
          data-voyager-video=""
          className="mt-20 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#1a1a1a] py-32 shadow-xl sm:py-40"
        >
          <button
            type="button"
            className="flex flex-col items-center gap-4 transition-opacity hover:opacity-80"
            aria-label="Play demo animation"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm transition-transform hover:scale-110">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="white"
                className="ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="text-sm font-medium tracking-wide text-white/50">
              Watch demo
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
