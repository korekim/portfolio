"use client";
import { useEffect, useState, ReactNode } from "react";

type Props = {
    lines: ReactNode[];
    speed?: number;      // ms between lines
    startDelay?: number; // ms before first line
    className?: string;
    wrapWithLi?: boolean;  // New prop instead of wrapper function
};

export default function TerminalLog({
    lines,
    speed = 500,
    startDelay = 0,
    className = "",
    wrapWithLi = false,
}: Props) {
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        if (visibleCount < lines.length) {
            const timer = setTimeout(() => {
                setVisibleCount(c => c + 1);
            }, visibleCount === 0 ? startDelay : speed);
            return () => clearTimeout(timer);
        }
    }, [visibleCount, lines.length, speed, startDelay]);

    const content = (
        <div className={`font-mono whitespace-pre-wrap ${className}`}>
            {lines.slice(0, visibleCount).map((line, i) => (
                <div key={i}>{line}</div>
            ))}
        </div>
    );

    if (!visibleCount) return null;
    
    return wrapWithLi ? <li>{content}</li> : content;
}