"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
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

    let start = 0;
    const duration = 1500;
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
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
    >
      {metricsData.map((metric, i) => (
        <div key={i} className="text-center p-6">
          <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
            <AnimatedCounter
              value={metric.value}
              suffix={metric.suffix}
              shouldAnimate={isInView}
            />
          </div>
          <div className="text-sm text-text-secondary">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}
