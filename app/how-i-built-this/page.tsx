"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "The Problem",
    content:
      'Every product starts with a problem. Mine was: "How do I stand out in a competitive PM job market where everyone has the same resume format and LinkedIn profile?"',
  },
  {
    title: "User Research",
    content:
      "My target users are hiring managers and recruiters. They see hundreds of PM profiles. The average time spent on a portfolio site is under 30 seconds. So the product requirement was clear: hook in 5 seconds, differentiate in 15, drive action in 30.",
  },
  {
    title: "Key Decisions",
    content: null,
    bullets: [
      "Single-page over multi-page: Recruiters don't click through tabs. Everything important is one scroll away.",
      "Dark mode default: Signals technical sophistication without saying it.",
      "AI chatbot: Lets visitors explore my experience through pre-defined questions. It's the ultimate FAQ — interactive, conversational, and zero friction.",
      "Product Brief code block: Shows I think natively in product terms. It's form meeting function.",
      "Command palette: An easter egg for the right audience. If you found it, you're my kind of person.",
    ],
  },
  {
    title: "Tech Stack Choices",
    content:
      "Built with Next.js and deployed on Vercel — the same tools I use for my side projects. The FAQ chatbot is entirely frontend-based, keeping things simple and fast.",
  },
  {
    title: "Metrics I'd Track",
    content: null,
    bullets: [
      "Resume download rate (primary conversion)",
      "Chatbot interaction rate (engagement)",
      "Contact form submissions (leads)",
      "Average scroll depth (content quality)",
      "Cmd+K usage (delight factor)",
    ],
  },
  {
    title: "What I'd Iterate On",
    content:
      "This is V1. Like any good product, it'll evolve based on data and feedback. If you have thoughts, I'd love to hear them.",
  },
];

export default function HowIBuiltThis() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
              How I&apos;d PM This Website
            </h1>
            <p className="text-text-secondary mb-10">
              The product thinking behind every pixel
            </p>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <h2 className="text-xl font-semibold text-text-primary mb-3">
                    {section.title}
                  </h2>
                  {section.content && (
                    <p className="text-text-secondary leading-relaxed">
                      {section.content}
                    </p>
                  )}
                  {section.bullets && (
                    <ul className="space-y-2">
                      {section.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-text-secondary leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
