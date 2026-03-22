"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fullStory = [
  "Hey, I'm Kartikeya.",
  "I'm a Product Manager based in Bristol, UK. Right now, I'm at Bupa Global, where I own MembersWorld — the digital platform that 100,000+ high-net-worth international health insurance members use to manage their policies, submit claims, and access healthcare services.",
  "My journey into product started at KPMG in Mumbai, where I cut my teeth on process audits and regulatory automation for financial services clients. That experience taught me something I still carry: the best products don't just solve user problems — they navigate real-world constraints like compliance, regulation, and organisational complexity.",
  "From there, I moved into product at Equifax, where I launched 10+ identity and verification APIs in a highly regulated domain. That role gave me my first taste of API-first product development, and I was hooked. I went on to TartanHQ, where I owned the roadmap for payroll APIs used by fintech lenders, reducing underwriting time by 40%. Then to Joveo, where I built workflow automation that improved recruiter efficiency by 20%.",
  "At Bupa, I've had the chance to combine everything — customer empathy, commercial thinking, and technical product skills — on a product that genuinely impacts people's health and wellbeing. I've led a strategic bancassurance partnership with a major international bank, launched a predictive digital health offering, and reshaped the product roadmap through competitive benchmarking.",
  "When I'm not building products at work, I'm building them on the side. I'm currently developing a gym management SaaS platform using AI-assisted development tools (Lovable, Cursor AI, Claude Code), and I recently shipped F1 Intelligence — a web app for Formula 1 enthusiasts.",
  "Outside of product, you'll find me watching F1 (Lewis Hamilton, always), reading spy thrillers, playing tennis, or exploring a new city. I'm an economics nerd, a tech optimist, and someone who believes the best PM superpower is genuine empathy — for your users, your engineers, and your stakeholders.",
  "I'm currently open to Senior Product Manager roles in health-tech, fintech, and B2B SaaS. If you're building something interesting, I'd love to chat.",
];

export default function AboutPage() {
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
            <div className="flex items-center gap-6 mb-10">
              <Image
                src="/kartikeya-headshot.png"
                alt="Kartikeya Bahuguna"
                width={100}
                height={100}
                className="rounded-full border-2 border-border"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
                  About Me
                </h1>
                <p className="text-text-secondary mt-1">
                  The full story behind the product brief
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {fullStory.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  className={`text-text-secondary text-base md:text-lg leading-relaxed ${
                    i === 0 ? "text-2xl font-semibold text-text-primary" : ""
                  }`}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
