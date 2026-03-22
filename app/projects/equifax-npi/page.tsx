"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Globe, Target, Users, Zap, BarChart3, Lightbulb, CheckCircle2, Shield, Layers, BookOpen } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function EquifaxNPIPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-bg-primary/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-[1000px] mx-auto px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
        </div>
      </nav>

      <main className="max-w-[1000px] mx-auto px-6 py-12">
        {/* Header */}
        <motion.div {...fadeIn} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🌐</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-subtle text-accent">
              Equifax
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-success/10 text-success flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              Shipped
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-text-primary mb-4">
            Driving New Product Initiatives (NPI) at Equifax India
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-[800px]">
            Transforming Equifax India from an execution center into a strategic product hub — launching
            10+ verification APIs, co-creating business cases with global PMs, and cutting B2B integration
            time by 40%.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
        >
          {[
            { value: "10+", label: "APIs Launched" },
            { value: "99.9%", label: "Accuracy" },
            { value: "<1s", label: "Response Time" },
            { value: "15+", label: "Business Cases" },
            { value: "40%", label: "Faster Integrations" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-bg-secondary border border-border rounded-xl p-4 text-center"
            >
              <p className="text-2xl font-bold font-display text-accent">{stat.value}</p>
              <p className="text-xs text-text-tertiary mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* The Vision */}
        <motion.section {...fadeIn} transition={{ delay: 0.15, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold font-display text-text-primary mb-6 flex items-center gap-2">
            <Lightbulb size={24} className="text-accent" />
            The Vision
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              Equifax India had world-class engineering talent but operated primarily as a delivery arm for
              global product decisions. The opportunity was clear: India&apos;s identity verification market was
              exploding, and we had the data assets, regulatory knowledge, and technical capability to build
              products specifically for this market — not just execute on someone else&apos;s roadmap.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">My mission was to change that narrative.</strong> Position
              India as a strategic product hub by driving new product initiatives, launching APIs that met global
              accuracy standards, and creating a repeatable framework for evaluating and pitching new product
              opportunities to global leadership.
            </p>
          </div>
        </motion.section>

        {/* The Problem */}
        <motion.section {...fadeIn} transition={{ delay: 0.2, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold font-display text-text-primary mb-6 flex items-center gap-2">
            <Target size={24} className="text-accent" />
            The Problem
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Execution-Only Mindset",
                desc: "India operations were focused on building what global PMs defined. No structured mechanism for India to propose, validate, or champion new product ideas.",
              },
              {
                title: "Slow B2B Onboarding",
                desc: "Client API integration was complex and poorly documented. Banks and NBFCs took weeks to go live, losing revenue and trust in the process.",
              },
              {
                title: "No NPI Framework",
                desc: "There was no standardised way to evaluate market opportunities, build business cases, or secure investment approval from SVPs for India-specific products.",
              },
              {
                title: "Regulated Domain Complexity",
                desc: "Identity verification in financial services requires 99.9%+ accuracy, audit trails, and compliance with RBI and data protection regulations — the bar is extremely high.",
              },
            ].map((problem) => (
              <div
                key={problem.title}
                className="bg-bg-secondary border border-border rounded-xl p-5"
              >
                <h3 className="font-semibold font-display text-text-primary mb-2">{problem.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Users & Stakeholders */}
        <motion.section {...fadeIn} transition={{ delay: 0.25, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold font-display text-text-primary mb-6 flex items-center gap-2">
            <Users size={24} className="text-accent" />
            Users &amp; Stakeholders
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-bg-secondary border border-border rounded-xl p-5">
              <h3 className="font-semibold font-display text-text-primary mb-3">External Clients</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                  Banks &amp; NBFCs — loan underwriting
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                  Fintech companies — digital onboarding
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                  Insurance providers — risk assessment
                </li>
              </ul>
            </div>
            <div className="bg-bg-secondary border border-border rounded-xl p-5">
              <h3 className="font-semibold font-display text-text-primary mb-3">Internal Stakeholders</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                  Global PMs — product strategy alignment
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                  SVPs — investment approval authority
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                  Regional business teams — market intelligence
                </li>
              </ul>
            </div>
            <div className="bg-bg-secondary border border-border rounded-xl p-5">
              <h3 className="font-semibold font-display text-text-primary mb-3">End Impact</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                  Consumers — faster loan approvals
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                  Businesses — reduced fraud exposure
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                  Regulators — better compliance coverage
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* The Solution — 3 Tracks */}
        <motion.section {...fadeIn} transition={{ delay: 0.3, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold font-display text-text-primary mb-6 flex items-center gap-2">
            <Layers size={24} className="text-accent" />
            The Solution — Three Strategic Tracks
          </h2>
          <div className="space-y-6">
            {/* Track 1 */}
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  <Zap size={20} />
                </div>
                <div>
                  <span className="text-xs text-accent font-mono">Track 1</span>
                  <h3 className="font-semibold font-display text-text-primary">Identity &amp; Verification APIs</h3>
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Launched 10+ verification APIs covering the full spectrum of identity, credit, and fraud
                signals — all meeting the 99.9% accuracy bar required by financial regulators.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "PAN verification — instant tax ID validation",
                  "Aadhaar-based identity checks with consent flow",
                  "Bank account verification for lending workflows",
                  "Credit data APIs for risk assessment",
                  "Fraud signal detection across data sources",
                  "Employment & income verification endpoints",
                  "Sub-second response times across all APIs",
                  "Full audit trail for regulatory compliance",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <CheckCircle2 size={14} className="text-success mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2 */}
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  <Globe size={20} />
                </div>
                <div>
                  <span className="text-xs text-accent font-mono">Track 2</span>
                  <h3 className="font-semibold font-display text-text-primary">India SPOC — Global Product Collaboration</h3>
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Acted as the single point of contact between India&apos;s market reality and global product
                strategy. This wasn&apos;t just liaison work — it was about building a repeatable framework for
                India to propose and win investment for new product lines.
              </p>
              <div className="space-y-3">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold font-display text-text-primary text-sm mb-2">15+ Business Cases Co-Created</h4>
                  <p className="text-xs text-text-secondary">Each business case included market sizing, competitive landscape, revenue projections, technical feasibility, and regulatory requirements — built collaboratively with global PMs who brought global context while I brought India-specific insights.</p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold font-display text-text-primary text-sm mb-2">Investment Approval from SVPs</h4>
                  <p className="text-xs text-text-secondary">Presented business cases to senior leadership and secured investment approval for new product lines. This required translating local market opportunities into global strategic value — speaking the language of portfolio impact, not just feature requests.</p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold font-display text-text-primary text-sm mb-2">Bridging Markets &amp; Strategy</h4>
                  <p className="text-xs text-text-secondary">India&apos;s identity verification landscape (Aadhaar, PAN, UPI) is fundamentally different from the US/UK (SSN, credit bureaus). My role was to ensure global product decisions accounted for these structural differences rather than forcing a one-size-fits-all approach.</p>
                </div>
              </div>
            </div>

            {/* Track 3 */}
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  <BookOpen size={20} />
                </div>
                <div>
                  <span className="text-xs text-accent font-mono">Track 3</span>
                  <h3 className="font-semibold font-display text-text-primary">B2B Client Onboarding Optimisation</h3>
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                B2B API adoption lives or dies on integration experience. If it takes a bank 6 weeks to go
                live, they&apos;ll question the partnership. I owned the mission to cut that to days.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-display font-bold text-accent">40%</p>
                  <p className="text-xs text-text-tertiary mt-1">Faster API integration</p>
                  <p className="text-xs text-text-secondary mt-2">Through comprehensive developer docs, sandbox environments, and guided onboarding flows</p>
                </div>
                <div className="border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-display font-bold text-accent">Self-Serve</p>
                  <p className="text-xs text-text-tertiary mt-1">Sandbox environments</p>
                  <p className="text-xs text-text-secondary mt-2">Developers could test all APIs with realistic mock data before committing to production integration</p>
                </div>
                <div className="border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-display font-bold text-accent">Guided</p>
                  <p className="text-xs text-text-tertiary mt-1">Integration flows</p>
                  <p className="text-xs text-text-secondary mt-2">Step-by-step implementation guides with code samples in multiple languages</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Product Decisions That Mattered */}
        <motion.section {...fadeIn} transition={{ delay: 0.35, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold font-display text-text-primary mb-6 flex items-center gap-2">
            <BarChart3 size={24} className="text-accent" />
            Product Decisions That Mattered
          </h2>
          <div className="space-y-4">
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <h3 className="font-semibold font-display text-text-primary mb-2">Why sub-second response times?</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Financial APIs compete on latency. When a bank is processing a loan application, every second
                of delay increases drop-off risk. We benchmarked against competitors and set a non-negotiable
                target: every API must respond in under one second. This wasn&apos;t a nice-to-have — it was the
                difference between being embedded in real-time lending flows vs. being relegated to batch processing.
              </p>
            </div>
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <h3 className="font-semibold font-display text-text-primary mb-2">Why co-create business cases instead of just building?</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                In a global organisation, influence is everything. If I had just built products and asked for
                retroactive approval, they would have been deprioritised or killed. By co-creating business cases
                with global PMs, I ensured shared ownership — they had skin in the game. When SVPs asked questions,
                it wasn&apos;t &ldquo;India wants this&rdquo; — it was &ldquo;we&apos;ve identified this opportunity together.&rdquo;
              </p>
            </div>
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <h3 className="font-semibold font-display text-text-primary mb-2">Why developer-first onboarding?</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                In B2B API products, the buyer and user are different people. The CTO signs the deal, but the
                engineering team decides if adoption sticks. Poor documentation or a clunky sandbox means engineers
                push back, timelines slip, and the client churns before they even go live. Developer experience
                isn&apos;t a nice-to-have — it&apos;s the conversion funnel for B2B API products.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Navigating a Global Organisation */}
        <motion.section {...fadeIn} transition={{ delay: 0.4, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold font-display text-text-primary mb-6 flex items-center gap-2">
            <Shield size={24} className="text-accent" />
            Navigating a Global Organisation
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              Driving product initiatives at Equifax India meant influencing without direct authority across
              time zones, cultures, and competing priorities. Here&apos;s what I learned:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold font-display text-text-primary text-sm mb-2">Speak Their Language</h4>
                <p className="text-xs text-text-secondary">Global SVPs don&apos;t care about India-specific feature requests. They care about portfolio-level impact, TAM expansion, and strategic positioning. I learned to frame every India opportunity in terms of global strategic value.</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold font-display text-text-primary text-sm mb-2">Build Trust Through Delivery</h4>
                <p className="text-xs text-text-secondary">The first two business cases were the hardest — no track record, no proof. After those shipped successfully with measurable impact, the next 13 came with less friction. Trust compounds.</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold font-display text-text-primary text-sm mb-2">Time Zone as Advantage</h4>
                <p className="text-xs text-text-secondary">Instead of treating the time zone gap as a blocker, I used it as an asynchronous advantage. Send a proposal at EOD India → global PMs review it during their morning → feedback ready by my next morning. 24-hour iteration cycles.</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold font-display text-text-primary text-sm mb-2">Data Wins Arguments</h4>
                <p className="text-xs text-text-secondary">When proposing a new product line, I never led with opinion. Market sizing data, competitive benchmarks, regulatory requirements, projected revenue — these cut through corporate politics faster than any presentation.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Impact */}
        <motion.section {...fadeIn} transition={{ delay: 0.45, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold font-display text-text-primary mb-6 flex items-center gap-2">
            <Zap size={24} className="text-accent" />
            Impact &amp; Results
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { metric: "10+ APIs", desc: "Launched with 99.9% accuracy and sub-second response times in a highly regulated financial domain" },
              { metric: "15+ Business Cases", desc: "Co-created with global PMs and secured investment approval from SVPs for new India product lines" },
              { metric: "40% Faster Integrations", desc: "Reduced B2B client API implementation time through developer-first documentation and sandbox environments" },
              { metric: "Strategic Repositioning", desc: "Helped shift India from an execution-only center to an active product strategy contributor within the global organisation" },
            ].map((result) => (
              <div
                key={result.metric}
                className="bg-bg-secondary border border-accent/20 rounded-xl p-5"
              >
                <p className="text-xl font-display font-bold text-accent mb-2">{result.metric}</p>
                <p className="text-sm text-text-secondary">{result.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* My Role */}
        <motion.section {...fadeIn} transition={{ delay: 0.5, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold font-display text-text-primary mb-6">My Role &amp; PM Skills Demonstrated</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Product Strategy",
              "Business Case Development",
              "Stakeholder Management",
              "Global Product Collaboration",
              "API Product Management",
              "Developer Experience",
              "B2B Client Onboarding",
              "Regulatory Compliance",
              "Market Analysis",
              "Cross-Functional Leadership",
              "Influencing Without Authority",
              "Data-Driven Decision Making",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm bg-bg-secondary border border-border rounded-lg text-text-secondary"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section {...fadeIn} transition={{ delay: 0.55, duration: 0.5 }} className="mb-12">
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-8 text-center">
            <p className="text-lg font-semibold font-display text-text-primary mb-2">
              Want to discuss this project?
            </p>
            <p className="text-sm text-text-secondary mb-6">
              I&apos;d love to walk you through the product decisions, stakeholder dynamics, and lessons learned from driving NPI at a global enterprise.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors text-sm font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </motion.section>

        {/* Back link */}
        <div className="text-center pb-8">
          <Link
            href="/#projects"
            className="text-sm text-text-tertiary hover:text-accent transition-colors"
          >
            ← Back to all projects
          </Link>
        </div>
      </main>
    </div>
  );
}
