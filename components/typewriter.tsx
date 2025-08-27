// components/Typewriter.tsx
"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;     // <-- nest children; don't pass children=
  speed?: number;
  startDelay?: number;
  className?: string;
  cursor?: boolean;
  rerunKey?: any;
};

export default function Typewriter({
  children,
  speed = 25,
  startDelay = 150,
  className = "",
  cursor = true,
  rerunKey,
}: Props) {
  // Normalize to array with stable keys (prevents jsx-key noise internally)
  const nodes = useMemo(() => React.Children.toArray(children), [children]);

  const [idx, setIdx] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  const tickTimer = useRef<number | null>(null);
  const startTimer = useRef<number | null>(null);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    setIdx(0); setCharCount(0); setDone(false); setStarted(false);
    if (tickTimer.current) window.clearTimeout(tickTimer.current);
    if (startTimer.current) window.clearTimeout(startTimer.current);
  }, [rerunKey, nodes]);

  useEffect(() => {
    if (prefersReduced) { setDone(true); setStarted(false); return; }
    if (done) return;

    if (!started && idx === 0 && charCount === 0) {
      startTimer.current = window.setTimeout(() => {
        setStarted(true);
        setCharCount(c => c); // kick loop
      }, startDelay) as unknown as number;
      return () => { if (startTimer.current) window.clearTimeout(startTimer.current); };
    }

    if (idx >= nodes.length) { setDone(true); return; }

    const current = nodes[idx];

    if (typeof current === "string") {
      if (charCount < current.length) {
        tickTimer.current = window.setTimeout(() => {
          setCharCount(c => c + 1);
        }, speed) as unknown as number;
      } else {
        setIdx(i => i + 1);
        setCharCount(0);
      }
      return () => { if (tickTimer.current) window.clearTimeout(tickTimer.current); };
    }

    // Non-string React element: reveal atomically
    tickTimer.current = window.setTimeout(() => {
      setIdx(i => i + 1);
      setCharCount(0);
    }, speed) as unknown as number;

    return () => { if (tickTimer.current) window.clearTimeout(tickTimer.current); };
  }, [idx, charCount, nodes, speed, startDelay, done, started, prefersReduced]);

  const rendered: React.ReactNode[] = [];
  for (let i = 0; i < idx; i++) {
    rendered.push(<React.Fragment key={`full-${i}`}>{nodes[i]}</React.Fragment>);
  }
  if (!prefersReduced && !done && idx < nodes.length) {
    const current = nodes[idx];
    if (typeof current === "string") {
      rendered.push(<span key={`partial-${idx}`}>{current.slice(0, charCount)}</span>);
    }
  } else if (prefersReduced) {
    for (let i = 0; i < nodes.length; i++) {
      rendered.push(<React.Fragment key={`rm-${i}`}>{nodes[i]}</React.Fragment>);
    }
  }

  return (
    <span className={className}>
      {rendered}
      {started && !done && !prefersReduced && cursor && (
        <span className="inline-block w-[2px] h-[1em] bg-current align-baseline animate-pulse" />
      )}
    </span>
  );
}
