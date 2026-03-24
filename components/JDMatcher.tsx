"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Upload, Sparkles, Loader2, RotateCcw } from "lucide-react";

export default function JDMatcher() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [jdText, setJdText] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [usageCount, setUsageCount] = useState(0);
  const MAX_USES = 3;

  const handleAnalyze = async () => {
    if (!jdText.trim()) return;
    if (usageCount >= MAX_USES) {
      setError("You've used all 3 analyses for this session. Refresh the page to try again, or reach out directly!");
      return;
    }

    setLoading(true);
    setError("");
    setAnalysis("");

    try {
      const res = await fetch("/api/match-jd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription: jdText }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }

      setAnalysis(data.analysis);
      setUsageCount((prev) => prev + 1);
    } catch {
      setError("Failed to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setJdText("");
    setAnalysis("");
    setError("");
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type === "text/plain" || file.name.endsWith(".txt")) {
      const text = await file.text();
      setJdText(text);
    } else {
      setError("Please upload a .txt file, or paste the job description directly.");
    }
    e.target.value = "";
  };

  return (
    <section id="jd-matcher" className="py-24">
      <div className="breakout">
        <div className="bg-bg-secondary/30 border-y border-border py-20 relative overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5 pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-6 relative" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-sm font-medium text-accent mb-4 font-mono">
                <Sparkles size={14} />
                AI-Powered
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-4">
                Is Kartikeya the right fit?
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Paste a job description below and let AI analyse why Kartikeya could be a strong match for your role.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Input side */}
              <div className="space-y-4">
                <div className="relative">
                  <textarea
                    value={jdText}
                    onChange={(e) => setJdText(e.target.value)}
                    placeholder="Paste the job description here..."
                    className="w-full h-64 p-4 bg-bg-primary border border-border rounded-2xl text-text-primary text-sm leading-relaxed resize-none focus:outline-none focus:border-accent transition-colors placeholder:text-text-tertiary"
                    disabled={loading}
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-text-tertiary font-mono">
                    {jdText.length.toLocaleString()} / 10,000
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleAnalyze}
                    disabled={loading || !jdText.trim() || usageCount >= MAX_USES}
                    className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-full font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Analysing...
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        Analyse Fit
                      </>
                    )}
                  </button>

                  <label className="flex items-center gap-2 px-4 py-3 border border-border rounded-full text-sm text-text-secondary hover:border-border-hover cursor-pointer transition-colors">
                    <Upload size={16} />
                    Upload .txt
                    <input
                      type="file"
                      accept=".txt"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>

                  {analysis && (
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-1 px-3 py-3 text-sm text-text-tertiary hover:text-text-primary transition-colors"
                    >
                      <RotateCcw size={14} />
                      Reset
                    </button>
                  )}
                </div>

                <p className="text-xs text-text-tertiary font-mono">
                  {usageCount}/{MAX_USES} analyses used &middot; Powered by Claude AI
                </p>
              </div>

              {/* Output side */}
              <div className="bg-bg-primary border border-border rounded-2xl p-6 min-h-[280px] flex flex-col">
                {loading ? (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <Loader2
                        size={32}
                        className="animate-spin text-accent mx-auto mb-3"
                      />
                      <p className="text-sm text-text-secondary">
                        Analysing job description against Kartikeya&apos;s profile...
                      </p>
                    </div>
                  </div>
                ) : analysis ? (
                  <div className="prose prose-sm max-w-none">
                    {analysis.split("\n").map((line, i) => {
                      const fitMatch = line.match(/\*?\*?Fit Level:\s*(High|Medium|Low)\*?\*?/i);
                      if (fitMatch) {
                        const level = fitMatch[1].toLowerCase();
                        const colorMap: Record<string, { bg: string; text: string; border: string; label: string; desc: string }> = {
                          high: { bg: "bg-green-500/15", text: "text-green-600 dark:text-green-400", border: "border-green-500/30", label: "High", desc: "Strong alignment — Kartikeya's experience maps well to this role" },
                          medium: { bg: "bg-yellow-500/15", text: "text-yellow-600 dark:text-yellow-400", border: "border-yellow-500/30", label: "Medium", desc: "Partial alignment — relevant transferable skills with some gaps" },
                          low: { bg: "bg-red-500/15", text: "text-red-600 dark:text-red-400", border: "border-red-500/30", label: "Low", desc: "Limited alignment — this role falls outside Kartikeya's core expertise" },
                        };
                        const style = colorMap[level] || colorMap.medium;
                        return (
                          <div key={i} className="mb-4">
                            <div className="flex items-center gap-3 mb-1">
                              <span className="text-base font-semibold text-text-primary">Fit Level:</span>
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold border ${style.bg} ${style.text} ${style.border}`}>
                                {style.label}
                              </span>
                            </div>
                            <p className="text-xs text-text-tertiary ml-0.5">{style.desc}</p>
                          </div>
                        );
                      }
                      if (line.startsWith("**") && line.endsWith("**")) {
                        return (
                          <h3
                            key={i}
                            className="text-base font-semibold font-display text-text-primary mt-3 mb-1 first:mt-0"
                          >
                            {line.replace(/\*\*/g, "")}
                          </h3>
                        );
                      }
                      if (line.startsWith("- ")) {
                        return (
                          <p
                            key={i}
                            className="text-sm text-text-secondary leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/50 mb-1"
                          >
                            {line.slice(2).replace(/\*\*/g, "")}
                          </p>
                        );
                      }
                      if (line.trim() === "") return <div key={i} className="h-2" />;
                      return (
                        <p
                          key={i}
                          className="text-sm text-text-secondary leading-relaxed mb-1"
                        >
                          {line.replace(/\*\*/g, "")}
                        </p>
                      );
                    })}
                  </div>
                ) : error ? (
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-sm text-red-400 text-center">{error}</p>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <Sparkles
                        size={32}
                        className="text-text-tertiary/30 mx-auto mb-3"
                      />
                      <p className="text-sm text-text-tertiary">
                        Paste a job description and click &ldquo;Analyse Fit&rdquo; to see how Kartikeya matches your role.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
