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
    <section id="about" className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
            About
          </h2>

          <div className="max-w-3xl">
            {aboutContent.short.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-text-secondary text-base md:text-lg leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
            <a
              href="/about"
              className="text-accent hover:text-accent-hover font-medium transition-colors"
            >
              Read my full story &rarr;
            </a>
            <Link
              href="/how-i-built-this"
              className="text-text-tertiary hover:text-accent font-medium transition-colors"
            >
              How I PM&apos;d this website &rarr;
            </Link>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {aboutContent.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-bg-secondary rounded-xl border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Metrics Dashboard */}
        <MetricsDashboard />
      </div>
    </section>
  );
}
