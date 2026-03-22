"use client";

import { motion } from "framer-motion";
import { productBriefLines } from "@/lib/content";

export default function ProductBrief() {
  return (
    <div className="bg-code-bg border border-border rounded-xl overflow-hidden shadow-2xl">
      {/* Terminal chrome */}
      <div className="flex items-center justify-between px-4 py-3 bg-bg-secondary border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-xs font-mono text-text-tertiary">
          product_brief.md
        </span>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-mono text-success">live</span>
        </div>
      </div>

      {/* Code content */}
      <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto">
        {productBriefLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.06, duration: 0.3 }}
            className={`${
              line === ""
                ? "h-3"
                : line.startsWith("//")
                  ? "text-text-tertiary"
                  : line.includes(":")
                    ? ""
                    : "text-text-secondary"
            }`}
          >
            {line && (
              <>
                {line.startsWith("//") ? (
                  <span className="text-text-tertiary">{line}</span>
                ) : line.includes(":") ? (
                  <>
                    <span className="text-accent">
                      {line.split(":")[0]}
                    </span>
                    <span className="text-text-tertiary">:</span>
                    <span className="text-text-primary">
                      {line.split(":").slice(1).join(":")}
                    </span>
                  </>
                ) : (
                  <span>{line}</span>
                )}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
