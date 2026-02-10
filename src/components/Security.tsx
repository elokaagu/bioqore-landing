import RevealOnScroll from "@/components/RevealOnScroll";
import WordsReveal from "@/components/WordsReveal";

const securityItems = [
  {
    title: "On your computers",
    description:
      "We install our software inside your own cloud account or on your own servers. Nothing is uploaded to Bioqore\u2019s servers.",
  },
  {
    title: "Health lights only",
    description:
      "The only information that leaves your walls is a tiny \u201Csystem is on / system is off\u201D signal. We never see temperatures, yields, or any sensitive details.",
  },
  {
    title: "You hold the keys",
    description:
      "All files and models are locked with encryption keys that you control. Even if we wanted to peek, we couldn\u2019t.",
  },
  {
    title: "Audit-ready by default",
    description:
      "Every change gets time-stamped and stored inside your system, so you can show regulators everything stayed secure.",
  },
];

export default function Security() {
  return (
    <section id="security" className="bg-[#f2f2f2] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <RevealOnScroll>
        {/* Two-column: label + headline left, body + CTA right */}
        <div className="border-t border-gray-300 pt-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div>
              <p className="mb-4 font-mono text-sm font-medium uppercase tracking-wide text-gray-500">
                Data Security
              </p>
              <WordsReveal
                text="Your data stays 100% in your hands."
                as="h2"
                className="text-4xl font-bold leading-[1.1] tracking-tighter text-[var(--color-main)] sm:text-5xl"
                stagger={0.04}
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="max-w-xl text-lg leading-relaxed text-[var(--color-body)]">
                With Voyager, nothing leaves your infrastructure.
              </p>
              <a
                href="#mission"
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

        {/* Security cards — 4-column grid */}
        <RevealOnScroll stagger className="mt-16">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {securityItems.map((item) => (
            <div
              key={item.title}
              className="bg-white p-7 transition-colors transition-shadow duration-200 hover:bg-gray-50 hover:shadow-md"
            >
              <div className="mb-4 h-1.5 w-1.5 rounded-full bg-[var(--color-blue-accent)]" />
              <h3 className="mb-2 text-base font-bold text-[var(--color-main)]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-body)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        </RevealOnScroll>
        </RevealOnScroll>
      </div>
    </section>
  );
}
