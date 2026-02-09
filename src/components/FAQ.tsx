"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import WordsReveal from "@/components/WordsReveal";

const faqs = [
  {
    q: "What is Bioqore's AI copilot?",
    a: "Bioqore's AI copilot is a no-code platform that guides your next move in fermentation and cell culture runs. It uses machine learning to analyze your bioprocess data in real-time and provides actionable recommendations to optimize your runs.",
  },
  {
    q: "How does the upstream-first approach work?",
    a: "Most tools look at data after a run or focus on small-scale chemistry. Bioqore jumps in at the very start of manufacturing—where you're actually growing cells or microbes—and fixes problems before they get expensive.",
  },
  {
    q: "What data do I need to get started?",
    a: "Missing sensors? Scrappy CSV files? No problem. Bioqore learns from whatever you have and still cuts pilot runs by about 80%. We handle messy, incomplete data and extract meaningful insights regardless of format.",
  },
  {
    q: "Is my data secure with Bioqore?",
    a: "Absolutely. We install our software inside your own cloud account or on your own servers. Nothing is uploaded to Bioqore's servers. The only information that leaves your walls is a tiny 'system is on / system is off' signal. All files and models are locked with encryption keys that you control.",
  },
  {
    q: "Is Bioqore ready for FDA/GMP audits?",
    a: "Yes. Bioqore is built for FDA/GMP audits with 21 CFR Part 11 e-signatures and audit-ready documentation.",
  },
  {
    q: "How do I get started with Bioqore?",
    a: "Get in touch with our team to see Bioqore in action and discuss your bioprocess needs. We'll guide you through setup and integration.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const selected = faqs[openIndex];

  return (
    <section id="faq" className="bg-[#f2f2f2] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <RevealOnScroll>
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-tight text-[var(--color-body)]">
            FAQ
          </p>
          <WordsReveal
            text="Frequently Asked Questions"
            as="h2"
            className="text-4xl font-light leading-tight tracking-tight text-[var(--color-main)] sm:text-5xl"
            stagger={0.04}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
          {/* Question list */}
          <div className="divide-y divide-gray-300">
            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => setOpenIndex(i)}
                className={`flex w-full items-center justify-between gap-4 py-4 text-left text-lg font-medium transition-colors first:pt-0 ${
                  openIndex === i
                    ? "text-[var(--color-blue-accent)]"
                    : "text-[var(--color-body)] hover:text-[var(--color-main)]"
                }`}
              >
                <span>{faq.q}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            ))}
          </div>

          {/* Answer panel */}
          <div className="rounded-xl border-2 border-[var(--color-blue-accent)] bg-white p-6 shadow-sm lg:p-8">
            <h3 className="mb-4 text-lg font-semibold text-[var(--color-main)]">
              {selected?.q}
            </h3>
            <p className="text-base leading-relaxed text-[var(--color-body)]">
              {selected?.a}
            </p>
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
