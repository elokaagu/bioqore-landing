const team = [
  { name: "Joshua Hinckley, PhD", role: "CEO" },
  { name: "Brendan Dang", role: "CSO" },
];

const missionCopy =
  "We started Bioqore after years in the lab, frustrated by slow, inefficient bioprocesses holding back breakthrough ideas. With experience in fermentation, high-throughput biology, and AI, we\u2019re turning biomanufacturing from guesswork into science\u2014to help life-changing therapies reach the people who need them.";

export default function Mission() {
  return (
    <section id="mission" className="bg-[#f5f5f5] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Mission — asymmetric header */}
        <div className="border-t border-gray-300 pt-12">
          <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
              About Us
            </p>

            <div>
              <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl">
                We are on a mission
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-500">
                {missionCopy}
              </p>
            </div>
          </div>
        </div>

        {/* Team — Airloom-style grid table */}
        <div className="mt-24 border-t border-gray-300 pt-12">
          <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
              Team
            </p>

            <div>
              {/* Team members in a clean table grid */}
              <div className="grid gap-x-12 gap-y-0 sm:grid-cols-3">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="border-t border-gray-200 py-6"
                  >
                    <p className="text-base font-semibold text-[#1a1a1a]">
                      {member.name}
                    </p>
                    {member.role && (
                      <p className="mt-0.5 text-sm text-gray-400">
                        {member.role}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Join card */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <p className="max-w-md text-base leading-relaxed text-gray-500">
                  We&apos;re building the future, and we can&apos;t do it alone.
                  If you&apos;re a builder, a thinker, a doer, we&apos;d love to
                  hear from you.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] underline-offset-4 hover:underline"
                >
                  Get in touch
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
