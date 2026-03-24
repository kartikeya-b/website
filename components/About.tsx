"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { aboutContent } from "@/lib/content";
import MetricsDashboard from "./MetricsDashboard";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8">
            About
          </h2>

          <div className="max-w-3xl">
            {aboutContent.short.split("\n\n").map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="text-text-secondary text-lg leading-relaxed mb-4"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-x-6 gap-y-2 mt-4"
          >
            <a
              href="/about"
              className="text-accent hover:text-accent-hover font-medium transition-colors group"
            >
              Read my full story <span className="group-hover:translate-x-1 inline-block transition-transform">&rarr;</span>
            </a>
            <Link
              href="/how-i-built-this"
              className="text-text-tertiary hover:text-accent font-medium transition-colors group"
            >
              How I PM&apos;d this website <span className="group-hover:translate-x-1 inline-block transition-transform">&rarr;</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {aboutContent.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              className="card-glow text-center p-6 bg-bg-secondary/40 rounded-2xl border border-border hover:border-border-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-text-tertiary uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics Dashboard */}
        <MetricsDashboard />
      </div>
    </section>
  );
}
