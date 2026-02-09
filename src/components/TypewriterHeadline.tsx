"use client";

import { useState, useEffect } from "react";

const DEFAULT_SPEED_MS = 60;
const CURSOR_BLINK_MS = 530;

type Props = {
  text: string;
  speed?: number;
  className?: string;
};

export default function TypewriterHeadline({ text, speed = DEFAULT_SPEED_MS, className = "" }: Props) {
  const [visibleLength, setVisibleLength] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (visibleLength >= text.length) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setVisibleLength((n) => n + 1), speed);
    return () => clearTimeout(t);
  }, [visibleLength, text.length, speed]);

  const visible = text.slice(0, visibleLength);
  const parts = visible.split("\n");

  return (
    <span className={className}>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <br />}
        </span>
      ))}
      {!done && (
        <span
          className="inline-block w-[2px] h-[0.85em] ml-0.5 align-text-bottom bg-white animate-pulse"
          style={{ animationDuration: `${CURSOR_BLINK_MS}ms` }}
          aria-hidden
        />
      )}
    </span>
  );
}
