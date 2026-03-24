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

const gradientMap: Record<string, string> = {
  Target: "from-indigo-500/10 to-transparent border-indigo-500/20 hover:bg-indigo-500/10",
  Code: "from-emerald-500/10 to-transparent border-emerald-500/20 hover:bg-emerald-500/10",
  Zap: "from-amber-500/10 to-transparent border-amber-500/20 hover:bg-amber-500/10",
  Palette: "from-pink-500/10 to-transparent border-pink-500/20 hover:bg-pink-500/10",
  Sparkles: "from-purple-500/10 to-transparent border-purple-500/20 hover:bg-purple-500/10",
  Wrench: "from-cyan-500/10 to-transparent border-cyan-500/20 hover:bg-cyan-500/10",
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`bg-gradient-to-br ${gradientMap[category.icon] || ""} border rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-subtle flex items-center justify-center text-accent">
                  {iconMap[category.icon]}
                </div>
                <h3 className="text-base font-bold font-display text-text-primary">
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
