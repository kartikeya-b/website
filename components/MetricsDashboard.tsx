"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { metricsData } from "@/lib/content";

function AnimatedCounter({
  value,
  suffix,
  shouldAnimate,
}: {
  value: number;
  suffix: string;
  shouldAnimate: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * value);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [shouldAnimate, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function MetricsDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="breakout mt-16">
      <div
        ref={ref}
        className="py-16 bg-bg-secondary/50 border-y border-border backdrop-blur-sm"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metricsData.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                    shouldAnimate={isInView}
                  />
                </div>
                <div className="text-xs font-mono text-text-tertiary uppercase tracking-widest">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
