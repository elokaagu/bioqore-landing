"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#f2f2f2] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <RevealOnScroll>
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-tight text-[#333]">
            FAQ
          </p>
          <h2 className="text-4xl font-light leading-tight tracking-tight text-[#333] sm:text-5xl">
            Frequently Asked
            <br />
            Questions
          </h2>
        </div>

        <div className="divide-y divide-gray-300">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`py-4 first:pt-0 ${
                openIndex === i ? "rounded-lg border-2 border-[#007bff] bg-white px-4 -mx-4" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 text-left text-lg font-medium text-[#333] transition-colors"
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
              {openIndex === i && (
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
