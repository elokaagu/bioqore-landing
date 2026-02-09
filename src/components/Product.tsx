const features = [
  {
    title: "Upstream-first",
    description:
      "Bioqore jumps in at the very start of manufacturing\u2014where you\u2019re actually growing cells or microbes\u2014and fixes problems before they get expensive.",
    icon: "wave",
  },
  {
    title: "Real-time control",
    description:
      "Our AI adjusts feed, pH, and temperature while the culture is still growing, so bad batches are avoided instead of explained later.",
    icon: "wave",
  },
  {
    title: "Handles messy data",
    description:
      "Missing sensors? Scrappy CSV files? No problem. Bioqore learns from whatever you have and still cuts pilot runs by about 80%.",
    icon: "db",
  },
  {
    title: "Built for alt-food scale-ups",
    description:
      "Already proven on plant-based and precision-fermentation proteins, and ready for FDA/GMP audits with 21 CFR Part 11 e-signatures.",
    icon: "flask",
  },
];

function WaveIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[var(--color-red-accent)]">
      <path d="M2 12h2.5l1-4 2 8 2-6 1.5 2 2-4 2 4 2-6 1.5 4H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[var(--color-red-accent)]">
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[var(--color-red-accent)]">
      <path d="M9 3h6v4l4 10H5l4-10V3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 7h6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function FeatureIcon({ type }: { type: string }) {
  if (type === "wave") return <WaveIcon />;
  if (type === "db") return <DbIcon />;
  if (type === "flask") return <FlaskIcon />;
  return null;
}

export default function Product() {
  return (
    <section id="product" className="bg-[#f5f5f5] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header — asymmetric label + headline */}
        <div className="border-t border-gray-300 pt-12">
          <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
              Features
            </p>

            <div>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl">
                Why Bioqore
              </h2>
              <p className="mt-4 max-w-2xl text-lg font-light text-gray-400">
                Purpose-built for bioprocess R&D from day one.
              </p>
            </div>
          </div>
        </div>

        {/* Feature cards — 2x2 grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-charcoal p-8 text-white"
            >
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <FeatureIcon type={feature.icon} />
              </div>
              <h3 className="mb-3 text-lg font-bold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
