import MissionTeam from "@/components/MissionTeam";
import RevealOnScroll from "@/components/RevealOnScroll";
import WordsReveal from "@/components/WordsReveal";
import type { TeamMemberProfile } from "@/components/TeamMemberModal";

const team: TeamMemberProfile[] = [
  {
    name: "Joshua Hinckley, PhD",
    role: "CEO",
    image: "/Joshua%20Hinckley.jpeg",
    linkedInUrl: "https://www.linkedin.com/in/joshuahinckley",
    biography:
      "Joshua leads Bioqore's vision and strategy. With a background in fermentation, high-throughput biology, and AI, he founded Bioqore to turn biomanufacturing from guesswork into science.\n\nHis experience spans academic research and industry, with a focus on making bioprocess R&D faster and more predictable so life-changing therapies can reach patients sooner.",
  },
  {
    name: "Brendan Dang",
    role: "CSO",
    image: "/Brendan%20Dang.jpeg",
    linkedInUrl: "https://www.linkedin.com/in/brendandang",
    biography:
      "Brendan drives scientific strategy and platform development at Bioqore. He brings deep expertise in cell culture, scale-up, and data-driven optimization.\n\nBefore Bioqore, he worked across biotech and pharma on process development and analytics. He is focused on building tools that let teams move from pilot to production with confidence.",
  },
];

const missionCopy =
  "We started Bioqore after years in the lab, frustrated by slow, inefficient bioprocesses holding back breakthrough ideas. With experience in fermentation, high-throughput biology, and AI, we\u2019re turning biomanufacturing from guesswork into science\u2014to help life-changing therapies reach the people who need them.";

export default function Mission() {
  return (
    <section id="mission" className="bg-[#f5f5f5] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <RevealOnScroll>
        {/* Two-column: label + headline left, body + CTA right */}
        <div className="border-t border-gray-300 pt-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div>
              <p className="mb-4 font-mono text-sm font-medium uppercase tracking-wide text-gray-500">
                About Us
              </p>
              <WordsReveal
                text="We are on a mission"
                as="h2"
                className="text-4xl font-bold leading-[1.1] tracking-tighter text-[var(--color-main)] sm:text-5xl"
                stagger={0.05}
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="max-w-xl text-lg leading-relaxed text-[var(--color-body)]">
                {missionCopy}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border-2 border-[var(--color-blue-accent)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-blue-accent)] transition-colors hover:bg-[var(--color-blue-accent)]/5"
              >
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        </RevealOnScroll>

        {/* Team */}
        <RevealOnScroll className="mt-24 border-t border-gray-300 pt-12">
          <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
            <p className="font-mono text-sm font-medium uppercase tracking-wide text-gray-500">
              Team
            </p>

            <div>
              {/* Team members in a clean table grid — click to open profile */}
              <MissionTeam team={team} />

              {/* Join card */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <p className="max-w-md text-base leading-relaxed text-[var(--color-body)]">
                  We&apos;re building the future, and we can&apos;t do it alone.
                  If you&apos;re a builder, a thinker, a doer, we&apos;d love to
                  hear from you.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-main)] underline-offset-4 hover:underline"
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
        </RevealOnScroll>
      </div>
    </section>
  );
}
