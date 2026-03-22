"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData, siteConfig } from "@/lib/content";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-text-primary mb-12"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experienceData.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative md:pl-8"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-0 top-6 w-2 h-2 rounded-full bg-accent -translate-x-[3.5px]" />

                <div className="bg-bg-secondary border border-border rounded-xl p-6 hover:border-border-hover transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {role.company}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {role.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-text-tertiary font-mono">
                        {role.dates}
                      </p>
                      <p className="text-xs text-text-tertiary">
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
                        className="px-2.5 py-1 text-xs font-medium text-accent bg-accent-subtle rounded-md"
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

        <p className="mt-8 text-text-secondary text-sm">
          For full details,{" "}
          <a
            href={siteConfig.resumePath}
            download
            className="text-accent hover:text-accent-hover transition-colors"
          >
            download my resume &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
