"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { shipLogEntries } from "@/lib/content";

const emojis = ["🚀", "🏦", "📈", "⚡", "🔗", "🔐", "🆔", "📊", "🏋️", "🏎️"];

export default function ShipLog() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [currentLineComplete, setCurrentLineComplete] = useState(false);

  useEffect(() => {
    if (!isInView || visibleLines >= shipLogEntries.length) return;

    const currentLine = shipLogEntries[visibleLines];
    if (typedChars < currentLine.length) {
      const timer = setTimeout(() => {
        setTypedChars((c) => c + 1);
      }, 25);
      return () => clearTimeout(timer);
    } else {
      setCurrentLineComplete(true);
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setTypedChars(0);
        setCurrentLineComplete(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isInView, visibleLines, typedChars]);

  return (
    <section className="py-12 px-6">
      <div className="max-w-[900px] mx-auto" ref={ref}>
        <div className="bg-code-bg border border-border rounded-xl overflow-hidden">
          {/* Terminal chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary border-b border-border">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs font-mono text-text-tertiary">
              ship_log.sh
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-5 font-mono text-sm min-h-[320px]">
            {shipLogEntries.map((entry, i) => {
              if (i > visibleLines) return null;
              const isCurrentLine = i === visibleLines;
              const displayText = isCurrentLine
                ? entry.slice(0, typedChars)
                : entry;

              // Split into parts for coloring
              const yearMatch = displayText.match(/^\[(\d{4})\]\s*/);
              const year = yearMatch ? yearMatch[1] : "";
              const rest = yearMatch
                ? displayText.slice(yearMatch[0].length)
                : displayText;

              // Find metrics (numbers with %)
              const parts = rest.split(/([\d.]+[%KM+]+)/g);

              return (
                <div key={i} className="flex gap-2 py-0.5">
                  <span className="text-success shrink-0">
                    {year ? `[${year}]` : ""}
                  </span>
                  <span className="shrink-0">{emojis[i] || "📦"}</span>
                  <span className="text-text-primary">
                    {parts.map((part, j) =>
                      /[\d.]+[%KM+]+/.test(part) ? (
                        <span key={j} className="text-accent font-semibold">
                          {part}
                        </span>
                      ) : (
                        <span key={j}>{part}</span>
                      )
                    )}
                    {isCurrentLine && !currentLineComplete && (
                      <span className="inline-block w-2 h-4 bg-accent ml-0.5 animate-blink" />
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
