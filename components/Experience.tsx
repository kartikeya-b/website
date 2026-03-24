"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData, siteConfig } from "@/lib/content";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left sticky column */}
          <div className="lg:col-span-4">
            <div className="sticky-scroll-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
                  Experience
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  6+ years building products across health-tech, fintech, HR tech, and identity verification.
                </p>
                <a
                  href={siteConfig.resumePath}
                  download
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
                >
                  Download full resume &rarr;
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right scrolling timeline */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

              <div className="space-y-8">
                {experienceData.map((role, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="relative pl-8"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-7 w-3 h-3 rounded-full -translate-x-[5px] border-2 ${
                        i === 0
                          ? "bg-accent border-accent shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                          : "bg-bg-primary border-border"
                      }`}
                    />

                    <div className="card-glow bg-bg-secondary/40 border border-border rounded-2xl p-6 hover:border-border-hover hover:bg-bg-secondary/60 transition-all duration-500 hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                        <div>
                          <h3 className="text-xl font-bold font-display text-text-primary">
                            {role.company}
                          </h3>
                          <p className="text-accent text-sm font-medium">
                            {role.role}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs font-mono text-text-tertiary bg-bg-tertiary px-2 py-1 rounded">
                            {role.dates}
                          </p>
                          <p className="text-xs text-text-tertiary mt-1">
                            {role.location}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {role.highlights.map((highlight, j) => (
                          <li
                            key={j}
                            className="text-sm text-text-secondary leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {role.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="px-2.5 py-1 text-xs font-medium text-accent bg-accent-subtle rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
