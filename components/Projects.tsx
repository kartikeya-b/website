"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/lib/content";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-text-primary mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, i) => {
            const hasInternalLink = "internalLink" in project && project.internalLink;

            const cardContent = (
              <>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                      project.status === "Live"
                        ? "bg-success/10 text-success"
                        : "bg-accent-subtle text-accent"
                    }`}
                  >
                    {project.status === "Live" ? (
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-success" />
                        Live
                      </span>
                    ) : (
                      project.status
                    )}
                  </span>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs text-text-tertiary mb-1">Built with</p>
                  <p className="text-sm text-text-secondary">
                    {project.builtWith}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-tertiary">
                    {project.type}
                  </span>
                  {hasInternalLink ? (
                    <span className="flex items-center gap-1 text-sm text-accent group-hover:text-accent-hover transition-colors">
                      View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  ) : project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-xs text-text-tertiary italic">
                      Coming Soon
                    </span>
                  )}
                </div>
              </>
            );

            return hasInternalLink ? (
              <Link key={i} href={(project as { internalLink: string }).internalLink}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group bg-bg-secondary border border-border rounded-xl p-6 hover:border-border-hover hover:scale-[1.02] transition-all cursor-pointer h-full"
                >
                  {cardContent}
                </motion.div>
              </Link>
            ) : (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-bg-secondary border border-border rounded-xl p-6 hover:border-border-hover hover:scale-[1.02] transition-all"
              >
                {cardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
