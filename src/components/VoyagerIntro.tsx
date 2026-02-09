import DemoVideo from "@/components/DemoVideo";

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

        <DemoVideo />
      </div>
    </section>
  );
}
