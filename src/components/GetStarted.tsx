import RevealOnScroll from "@/components/RevealOnScroll";
import WordsReveal from "@/components/WordsReveal";

const cards = [
  {
    title: "Get in touch",
    description:
      "Contact the team to see Bioqore in action and request a demo. We'll walk you through Voyager and your use case.",
    href: "#contact",
    icon: "contact",
  },
  {
    title: "Documentation",
    description:
      "Guides, API reference, and integration docs to get you up and running with the Voyager platform.",
    href: "#product",
    icon: "docs",
  },
  {
    title: "Data security",
    description:
      "Your data stays in your infrastructure. Nothing leaves your walls except a minimal status signal.",
    href: "#security",
    icon: "shield",
  },
  {
    title: "Partners",
    description:
      "Bioqore is available through select partners and integrations. Ask us about your stack.",
    href: "#contact",
    icon: "partners",
  },
];

function ContactIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#1a1a1a]">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function DocsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#1a1a1a]">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#1a1a1a]">
      <path d="M12 2L4 6v6c0 5.25 3.5 9.74 7 11 3.5-1.26 7-5.75 7-11V6l-8-4z" />
    </svg>
  );
}

function PartnersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#1a1a1a]">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CardIcon({ icon }: { icon: string }) {
  if (icon === "contact") return <ContactIcon />;
  if (icon === "docs") return <DocsIcon />;
  if (icon === "shield") return <ShieldIcon />;
  if (icon === "partners") return <PartnersIcon />;
  return null;
}

export default function GetStarted() {
  return (
    <section id="get-started" className="bg-[#fafafa] py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
        {/* Two-column header: title left, body right */}
        <div className="border-t border-gray-300 pt-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <WordsReveal
              text="Start working with Bioqore"
              as="h2"
              className="text-4xl font-bold leading-[1.1] tracking-tighter text-[var(--color-main)] sm:text-5xl"
              stagger={0.04}
            />
            <div className="flex flex-col justify-center">
              <p className="max-w-xl text-lg leading-relaxed text-[var(--color-body)]">
                Voyager is available as a platform you run in your own environment.
                Get in touch for a demo, explore the docs, or ask about security and
                partner integrations.
              </p>
            </div>
          </div>
        </div>
        </RevealOnScroll>

        {/* 2x2 grid of white cards */}
        <RevealOnScroll stagger className="mt-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-[#1a1a1a]">
                <CardIcon icon={card.icon} />
              </div>
              <h3 className="mb-2 flex items-center gap-2 text-base font-bold text-[var(--color-main)]">
                {card.title}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-70">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-body)]">
                {card.description}
              </p>
            </a>
          ))}
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
