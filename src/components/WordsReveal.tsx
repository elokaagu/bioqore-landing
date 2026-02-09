"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  /** When true, animate on scroll into view. When false, animate on mount (e.g. hero). */
  scrollTrigger?: boolean;
};

export default function WordsReveal({
  text,
  as: Tag = "span",
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.03,
  duration = 0.6,
  scrollTrigger: useScroll = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(/\s+/).filter(Boolean);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const wordSpans = el.querySelectorAll<HTMLElement>(".word-reveal");
    if (wordSpans.length === 0) return;

    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(wordSpans, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(wordSpans, { opacity: 0, y: 14 });
      const anim = gsap.to(wordSpans, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        delay,
        ease: "power3.out",
      });
      if (useScroll) {
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          end: "bottom 15%",
          animation: anim,
          toggleActions: "play none none none",
        });
      }
    }, el);

    return () => ctx.revert();
  }, [text, delay, stagger, duration, useScroll]);

  return (
    <div ref={containerRef} className="inline-block">
      <Tag className={className}>
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={`word-reveal inline-block whitespace-pre-wrap ${wordClassName}`}
          >
            {word}{" "}
          </span>
        ))}
      </Tag>
    </div>
  );
}
