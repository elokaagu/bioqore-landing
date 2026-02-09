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
        {/* Header — asymmetric like Diamond Foundry */}
        <div className="border-t border-gray-300 pt-12">
          <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
              Data Security
            </p>

            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl">
                  Your data stays 100% in your hands.
                </h2>
                <p className="mt-4 max-w-xl text-lg font-light text-gray-400">
                  With Voyager, nothing leaves your infrastructure.
                </p>
              </div>
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="mt-1 shrink-0 text-gray-300"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Security cards — 4-column grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {securityItems.map((item) => (
            <div key={item.title} className="bg-white p-7">
              <div className="mb-4 h-1.5 w-1.5 rounded-full bg-[var(--color-red-accent)]" />
              <h3 className="mb-2 text-base font-bold text-[#1a1a1a]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
