"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
};

export default function Typewriter({
  text,
  speed = 30,
  startDelay = 200,
  className = "",
}: Props) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  const i = useRef(0);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    setOut(""); setDone(false); i.current = 0;  // reset on text change
    if (prefersReduced) { setOut(text); setDone(true); return; }

    let tickTimer: number | undefined;
    const start = window.setTimeout(() => {
      const tick = () => {
        i.current++;
        setOut(text.slice(0, i.current));
        if (i.current < text.length) {
          tickTimer = window.setTimeout(tick, speed);
        } else {
          setDone(true);
        }
      };
      tick();
    }, startDelay);

    return () => { clearTimeout(start); if (tickTimer) clearTimeout(tickTimer); };
  }, [text, speed, startDelay, prefersReduced]);

  return (
    <span className={`font-mono ${className}`}>
      {out}
      {!done && !prefersReduced && (
        <span className="inline-block w-[2px] h-[1em] bg-current align-baseline animate-pulse" />
      )}
    </span>
  );
}
