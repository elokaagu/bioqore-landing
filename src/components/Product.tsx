import RevealOnScroll from "@/components/RevealOnScroll";

const cards = [
  {
    title: "Upstream fermentation",
    tagline: "Real-time control",
    href: "#security",
  },
  {
    title: "Cell culture",
    tagline: "Predict & optimize",
    href: "#product",
  },
  {
    title: "Scale-up",
    tagline: "Lab to production",
    href: "#get-started",
  },
];

export default function Product() {
  return (
    <section id="product" className="bg-[#f5f5f5] py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
        {/* Two-column: label + headline left, body + CTA right */}
        <div className="border-t border-gray-300 pt-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div>
              <p className="mb-4 font-mono text-sm font-medium uppercase tracking-wide text-gray-500">
                Features
              </p>
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tighter text-[#1a1a1a] sm:text-5xl">
                Why Bioqore
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="max-w-xl text-lg leading-relaxed text-gray-600">
                Purpose-built for bioprocess R&D from day one.
              </p>
              <a
                href="#security"
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

        {/* 3 dark cards: title, tagline, image area, LEARN MORE */}
        <RevealOnScroll stagger className="mt-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group flex flex-col overflow-hidden rounded-xl bg-black transition-transform hover:scale-[1.02]"
              style={{ aspectRatio: "3 / 4" }}
            >
              <div className="flex flex-col gap-1 p-6">
                <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {card.title}
                </h3>
                <p className="text-sm font-medium text-white/80">
                  {card.tagline}
                </p>
              </div>
              <div className="relative min-h-0 flex-1 bg-gray-900">
                <div
                  className="h-full w-full bg-gradient-to-b from-gray-900 to-black"
                  aria-hidden
                />
              </div>
              <div className="p-6 pt-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--color-red-accent)] transition-colors group-hover:underline">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
        </RevealOnScroll>
        </RevealOnScroll>
      </div>
    </section>
  );
}
