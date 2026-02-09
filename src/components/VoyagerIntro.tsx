import BioreactorModel from "@/components/BioreactorModel";
import DemoVideo from "@/components/DemoVideo";
import RevealOnScroll from "@/components/RevealOnScroll";
import WordsReveal from "@/components/WordsReveal";

export default function VoyagerIntro() {
  return (
    <section id="voyager" className="bg-[#f7f7f7] py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
        {/* Two-column: label + headline left, body + CTA right */}
        <div className="border-t border-gray-300 pt-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div>
              <p className="mb-4 font-mono text-sm font-medium uppercase tracking-wide text-gray-500">
                Platform
              </p>
              <WordsReveal
                text="Introducing Voyager"
                as="h2"
                className="text-4xl font-bold leading-[1.1] tracking-tighter text-[var(--color-main)] sm:text-5xl"
                stagger={0.05}
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="max-w-xl text-lg leading-relaxed text-[var(--color-body)]">
                Our AI-powered bioprocess platform that monitors, predicts, and
                optimizes your runs in real time.
              </p>
              <a
                href="#product"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border-2 border-[var(--color-blue-accent)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-blue-accent)] transition-colors hover:bg-[var(--color-blue-accent)]/5"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        </RevealOnScroll>

        {/* 3D Bioreactor */}
        <RevealOnScroll className="mt-20">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] shadow-2xl">
            <BioreactorModel className="aspect-[16/9] w-full" />
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            Interactive 3D model &middot; Drag to rotate
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-16">
          <DemoVideo />
        </RevealOnScroll>
      </div>
    </section>
  );
}
