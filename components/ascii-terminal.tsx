"use client";
import { useEffect, useState } from "react";

type Props = {
    lines: string[];
    speed?: number;
    startDelay?: number;
    className?: string;
    shouldAnimate?: boolean;
};

export default function AsciiTerminal({
    lines,
    speed = 500,
    startDelay = 0,
    className = "",
    shouldAnimate = true,
}: Props) {
    const [visibleCount, setVisibleCount] = useState(shouldAnimate ? 0 : lines.length);

    useEffect(() => {
        if (shouldAnimate && visibleCount < lines.length) {
            const timer = setTimeout(() => {
                setVisibleCount(c => c + 1);
            }, visibleCount === 0 ? startDelay : speed);
            return () => clearTimeout(timer);
        }
    }, [visibleCount, lines.length, speed, startDelay, shouldAnimate]);

    return (
        <div className={className}>
            {lines.slice(0, visibleCount).map((line, i) => (
                <span key={i} className="block leading-[3px]">{line}</span>
            ))}
        </div>
    );
}
