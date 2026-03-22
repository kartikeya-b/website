"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, ExternalLink, Sparkles } from "lucide-react";
import { heroContent, siteConfig } from "@/lib/content";
import ProductBrief from "./ProductBrief";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 pb-20 px-6"
    >
      <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-text-secondary text-lg md:text-xl font-medium mb-2"
            >
              {heroContent.headline}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-[3.5rem] font-bold leading-tight tracking-tight bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent"
            >
              {heroContent.subHeadline}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl"
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
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-colors"
            >
              View Projects &rarr;
            </a>
            <a
              href={siteConfig.resumePath}
              download
              className="px-6 py-3 border border-border hover:border-border-hover text-text-primary font-medium rounded-lg transition-colors hover:bg-bg-secondary"
            >
              Download Resume
            </a>
            <a
              href="#jd-matcher"
              className="flex items-center gap-2 px-6 py-3 border border-accent/30 hover:border-accent text-accent font-medium rounded-lg transition-all hover:bg-accent/10"
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
              className="p-2 text-text-tertiary hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-2 text-text-tertiary hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={siteConfig.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-tertiary hover:text-accent transition-colors"
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
    </section>
  );
}
