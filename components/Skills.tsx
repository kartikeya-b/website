"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Code, Zap, Palette, Sparkles, Wrench } from "lucide-react";
import { skillsData } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target size={20} />,
  Code: <Code size={20} />,
  Zap: <Zap size={20} />,
  Palette: <Palette size={20} />,
  Sparkles: <Sparkles size={20} />,
  Wrench: <Wrench size={20} />,
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-text-primary mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-bg-secondary border border-border rounded-xl p-6 hover:border-border-hover transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-accent">{iconMap[category.icon]}</span>
                <h3 className="text-base font-semibold text-text-primary">
                  {category.category}
                </h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {category.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
