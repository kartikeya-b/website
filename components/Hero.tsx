"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, ExternalLink, Sparkles, ChevronDown } from "lucide-react";
import { heroContent, siteConfig } from "@/lib/content";
import ProductBrief from "./ProductBrief";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 pb-20 px-6 relative"
    >
      <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-bg-secondary/50 text-sm font-medium text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-text-secondary text-lg md:text-xl font-medium mb-2 font-mono uppercase tracking-widest text-sm"
            >
              {heroContent.headline}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl md:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight font-display bg-gradient-to-r from-accent to-indigo-400 bg-clip-text text-transparent"
            >
              {heroContent.subHeadline}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl"
          >
            {heroContent.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-200 transition-colors dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              View Projects &rarr;
            </a>
            <a
              href={siteConfig.resumePath}
              download
              className="px-8 py-4 border border-border hover:border-border-hover text-text-primary font-medium rounded-full transition-colors hover:bg-bg-secondary"
            >
              Download Resume
            </a>
            <a
              href="#jd-matcher"
              className="flex items-center gap-2 px-8 py-4 border border-accent/30 hover:border-accent text-accent font-medium rounded-full transition-all hover:bg-accent/10"
            >
              <Sparkles size={16} />
              Am I the right fit?
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-4 pt-2"
          >
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-tertiary hover:text-accent transition-colors hover:-translate-y-1 duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-2 text-text-tertiary hover:text-accent transition-colors hover:-translate-y-1 duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={siteConfig.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-tertiary hover:text-accent transition-colors hover:-translate-y-1 duration-200"
              aria-label="Portfolio"
            >
              <ExternalLink size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Product Brief */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <ProductBrief />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex"
      >
        <span className="text-xs font-mono text-text-tertiary uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown size={16} className="text-text-tertiary animate-bounce" />
      </motion.div>
    </section>
  );
}
