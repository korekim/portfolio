"use client";
import { useEffect, useState, ReactNode } from "react";

type Props = {
  lines: ReactNode[]; // instead of string[]
  delay?: number;     // ms between lines
  className?: string;
};

export default function TerminalLog({ lines, delay = 500, className = "" }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < lines.length) {
      const timer = setTimeout(() => {
        setVisibleCount(c => c + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, lines.length, delay]);

  return (
    <div className={`font-mono whitespace-pre-wrap ${className}`}>
      {lines.slice(0, visibleCount).map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
}