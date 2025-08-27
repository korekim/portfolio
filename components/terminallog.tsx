// components/TerminalLog.tsx
"use client";
import React, { useEffect, useMemo, useState } from "react";

type Props = {
  lines: React.ReactNode[];   // each item can be a string or any React element
  delay?: number;             // pause between finishing a line and starting the next
  speed?: number;             // ms per character for string lines
  startDelay?: number;        // initial pause before first line starts
  className?: string;
  cursor?: boolean;           // optional blinking caret on the current line
};

export default function TerminalLog({
  lines,
  delay = 400,
  speed = 20,
  startDelay = 200,
  className = "",
  cursor = false,
}: Props) {
  // Normalize children to an array with stable keys
  const normalized = useMemo(() => React.Children.toArray(lines), [lines]);

  const [started, setStarted]   = useState(false); // respect startDelay
  const [lineIdx, setLineIdx]   = useState(0);     // current line index
  const [charCount, setChars]   = useState(0);     // chars typed in current string line
  const [done, setDone]         = useState(false); // all lines completed

  // Reset when input changes
  useEffect(() => {
    setStarted(false);
    setLineIdx(0);
    setChars(0);
    setDone(false);
  }, [normalized, delay, speed, startDelay]);

  // Kick off after startDelay
  useEffect(() => {
    if (started || done || normalized.length === 0) return;
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [started, done, startDelay, normalized.length]);

  // Typing / revealing state machine
  useEffect(() => {
    if (!started || done) return;
    if (lineIdx >= normalized.length) return;

    const current = normalized[lineIdx];
    const isString = typeof current === "string";

    // STRING LINE: type characters
    if (isString) {
      const text = current as string;

      // keep typing until full
      if (charCount < text.length) {
        const t = setTimeout(() => setChars(c => c + 1), speed);
        return () => clearTimeout(t);
      }

      // full string reached
      const isLast = lineIdx === normalized.length - 1;
      if (isLast) {
        // show the fully-typed last line and mark done (do NOT advance index)
        setDone(true);
        return;
      }

      // move to next line after an inter-line delay
      const t = setTimeout(() => {
        setLineIdx(i => i + 1);
        setChars(0);
      }, delay);
      return () => clearTimeout(t);
    }

    // NON-STRING LINE: reveal atomically after the correct delay
    const isLast = lineIdx === normalized.length - 1;
    if (isLast) {
      // reveal final element then mark done (no index advance)
      // Use a micro-delay so it doesn't flash before startDelay
      const t = setTimeout(() => setDone(true), 0);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIdx(i => i + 1);
        setChars(0);
      }, delay);
      return () => clearTimeout(t);
    }
  }, [started, done, lineIdx, charCount, normalized, delay, speed]);

  // Respect reduced motion
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  if (prefersReduced) {
    return (
      <div className={`font-mono whitespace-pre-wrap ${className}`}>
        {normalized.map((line, i) => (
          <div key={`line-${i}`}>{line}</div>
        ))}
      </div>
    );
  }

  return (
    <div className={`font-mono whitespace-pre-wrap ${className}`}>
      {/* Completed lines (strictly before the current index) */}
      {started &&
        normalized.slice(0, lineIdx).map((line, i) => (
          <div key={`line-${i}`}>{line}</div>
        ))}

      {/* Current line:
          - hidden until started
          - for strings: show partial slice
          - for elements: show entire element
          - IMPORTANT: still render even when 'done' is true so the final line is visible */}
      {started && lineIdx < normalized.length && (
        <div key={`line-${lineIdx}`} className="inline-flex items-baseline">
          {typeof normalized[lineIdx] === "string"
            ? (normalized[lineIdx] as string).slice(
                0,
                // if done on last string, ensure full line visible
                done ? (normalized[lineIdx] as string).length : charCount
              )
            : normalized[lineIdx]}

          {/* Optional blinking caret only while actively typing lines before done */}
          {cursor &&
            !done &&
            typeof normalized[lineIdx] === "string" &&
            charCount < (normalized[lineIdx] as string).length && (
              <span className="inline-block w-[2px] h-[1em] bg-current animate-pulse align-baseline" />
            )}
        </div>
      )}
    </div>
  );
}
