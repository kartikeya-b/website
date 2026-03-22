"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { sideProjectsData, professionalProjectsData } from "@/lib/content";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        {/* Professional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-3">
            Professional Work
          </h2>
          <p className="text-text-secondary text-lg mb-12">
            Products I&apos;ve led from 0→1, scaled, and shipped across HR tech, fintech, and identity verification.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {professionalProjectsData.map((project, i) => (
            <Link key={i} href={project.internalLink}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative bg-bg-secondary/40 border border-border rounded-2xl overflow-hidden hover:bg-bg-secondary/60 hover:border-border-hover transition-all duration-500 flex flex-col h-full"
              >
                {/* Gradient accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-accent via-indigo-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="p-6 flex-1 flex flex-col">
                  {/* Company badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-accent-subtle text-accent">
                      {project.company}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-success font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-success" />
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-text-primary mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-bg-tertiary text-text-tertiary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Impact + CTA */}
                  <div className="border-t border-border pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-display font-bold text-text-primary">
                        {project.impact}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-tertiary group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">
                      <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        {/* Side Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-3">
            Side Projects
          </h2>
          <p className="text-text-secondary text-lg mb-12">
            Things I build on weekends — because product sense doesn&apos;t stop at 5 PM.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {sideProjectsData.map((project, i) => {
            const hasInternalLink = "internalLink" in project && project.internalLink;

            const cardContent = (
              <>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold font-display text-text-primary group-hover:text-accent transition-colors">
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
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="group bg-bg-secondary/40 border border-border rounded-2xl p-6 hover:border-border-hover hover:bg-bg-secondary/60 transition-all duration-500 cursor-pointer h-full"
                >
                  {cardContent}
                </motion.div>
              </Link>
            ) : (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="group bg-bg-secondary/40 border border-border rounded-2xl p-6 hover:border-border-hover hover:bg-bg-secondary/60 transition-all duration-500"
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
