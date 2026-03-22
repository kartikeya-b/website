"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Zap,
  Target,
  Users,
  Shield,
  BarChart3,
  Layers,
  Lightbulb,
  CheckCircle2,
  RefreshCw,
  Database,
  Settings,
  Clock,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function B2BOnboardingsPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
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
            <span className="text-2xl">🏢</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400">
              Shipped
            </span>
            <span className="text-sm text-text-tertiary">TartanHQ</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            B2B Onboardings — Verifying Employees at Scale
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-[800px]">
            A universal HRMS sync layer that enables enterprises to onboard thousands of
            employees in minutes — reading, writing, and updating employee data across any
            HR platform, so benefits activation happens on day one instead of day thirty.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: "10x", label: "Faster Onboarding" },
            { value: "Millions", label: "Records Processed" },
            { value: "SOC-2", label: "& GDPR Compliant" },
            { value: "Enterprise", label: "Ready" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-bg-secondary border border-border rounded-xl p-4 text-center"
            >
              <p className="text-2xl font-bold text-accent">{stat.value}</p>
              <p className="text-xs text-text-tertiary mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* The Vision */}
        <motion.section {...fadeIn} transition={{ delay: 0.15, duration: 0.5 }} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Lightbulb size={24} className="text-accent" />
            The Vision
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              Every enterprise that offers employee benefits — insurance, lending, wellness programmes —
              faces the same bottleneck: getting verified employee data out of HRMS systems and into their
              platforms. The process is manual, fragile, and painfully slow. CSV uploads. Back-and-forth
              emails. Data mismatches that take weeks to resolve.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">We set out to eliminate that bottleneck entirely.</strong>{" "}
              The vision was a universal HRMS sync layer — a single integration point that could read
              employee data (salary, role, tenure, benefits eligibility), write back updates (enrolment
              status, coverage details), and keep everything in sync in real time. Not for one HRMS. For
              all of them. So that enterprises could onboard thousands of employees in minutes, not days.
            </p>
            <p className="text-text-secondary leading-relaxed">
              This wasn&apos;t just an API project. It was a product that had to earn the trust of HR
              teams, compliance officers, and CISOs — while being simple enough that a benefits
              administrator could self-serve without filing a single support ticket.
            </p>
          </div>
        </motion.section>

        {/* The Problem */}
        <motion.section {...fadeIn} transition={{ delay: 0.2, duration: 0.5 }} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Target size={24} className="text-accent" />
            The Problem
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: <Clock size={20} />,
                title: "Manual Bulk Uploads",
                desc: "HR teams were spending hours reformatting CSVs, manually mapping fields, and re-uploading after every failed validation. A single onboarding batch could take days — and a single typo could invalidate hundreds of records.",
              },
              {
                icon: <AlertTriangle size={20} />,
                title: "Data Inconsistencies Across Systems",
                desc: "Employee data lived in different formats across different HRMS platforms. Salary fields, date formats, role hierarchies — nothing was standardised. This caused silent failures downstream when financial services tried to process the data.",
              },
              {
                icon: <RefreshCw size={20} />,
                title: "Slow Integration with Financial Services",
                desc: "Benefits providers needed verified employee data before they could activate insurance or lending products. Without a real-time data pipe, activation was delayed by weeks — leaving employees without coverage during their most vulnerable period.",
              },
              {
                icon: <Database size={20} />,
                title: "No Real-Time Sync",
                desc: "When an employee changed roles, got promoted, or left the company, there was no mechanism to propagate that change to external providers. Stale data meant incorrect coverage, compliance violations, and financial exposure.",
              },
            ].map((problem) => (
              <div
                key={problem.title}
                className="bg-bg-secondary border border-border rounded-xl p-5 flex gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-text-primary mb-1">{problem.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Users */}
        <motion.section {...fadeIn} transition={{ delay: 0.25, duration: 0.5 }} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Users size={24} className="text-accent" />
            Who We Built For
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "HR & Payroll Teams",
                desc: "The people who own employee data. They needed a way to share verified records with external providers without exporting CSVs, sanitising fields, or playing email tag with integration teams.",
              },
              {
                title: "Benefits Administrators",
                desc: "Responsible for ensuring every employee has the right coverage. They needed real-time visibility into sync status — who&apos;s onboarded, who&apos;s pending, and what&apos;s blocking activation.",
              },
              {
                title: "Insurance & Lending Platforms",
                desc: "The downstream consumers of employee data. They needed a reliable, compliant data pipe that could handle millions of records without manual intervention or data quality issues.",
              },
              {
                title: "Large Enterprises with Complex HRMS Setups",
                desc: "Organisations running multiple HRMS platforms across regions and business units. They needed one integration to rule them all — not a different connector for every provider.",
              },
            ].map((user) => (
              <div
                key={user.title}
                className="bg-bg-secondary border border-border rounded-xl p-5"
              >
                <h3 className="font-display font-semibold text-text-primary mb-2">{user.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{user.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* The Solution — 3 Pillars */}
        <motion.section {...fadeIn} transition={{ delay: 0.3, duration: 0.5 }} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Layers size={24} className="text-accent" />
            The Solution — Three Pillars
          </h2>
          <div className="space-y-4">
            {[
              {
                pillar: "Pillar 1",
                title: "API-Driven HRMS Integrations",
                icon: <Zap size={20} />,
                points: [
                  "Plug-and-play connectors for major HRMS platforms (Keka, Darwinbox, greytHR, BambooHR, and more)",
                  "Read employee data — salary, role, tenure, department, benefits eligibility — normalised into a universal schema",
                  "Write & update records back — payroll processing status, insurance enrolment, coverage changes",
                  "Automated compliance checks on every sync — flagging missing fields, invalid formats, and policy violations before they reach downstream systems",
                ],
              },
              {
                pillar: "Pillar 2",
                title: "HRMS Sync Dashboard — Enterprise Self-Serve",
                icon: <BarChart3 size={20} />,
                points: [
                  "Bulk onboard by linking an HRMS platform — no CSV uploads, no manual mapping, no engineering tickets",
                  "Real-time sync status tracking — see exactly which employees are synced, pending, or blocked, with clear error messages",
                  "Automatic data conflict resolution — when the same employee exists in two systems with different data, the platform resolves it using configurable precedence rules instead of blocking the entire batch",
                ],
              },
              {
                pillar: "Pillar 3",
                title: "Scalable & Secure Data Processing",
                icon: <Shield size={20} />,
                points: [
                  "High-throughput APIs capable of processing millions of employee records — batch onboarding that scales linearly, not exponentially in cost",
                  "GDPR & SOC-2 compliant encryption at rest and in transit — every data field encrypted, every access logged, every permission auditable",
                  "Secure data handling end-to-end — zero-trust architecture, role-based access controls, and automated data retention policies",
                ],
              },
            ].map((pillar) => (
              <div
                key={pillar.pillar}
                className="bg-bg-secondary border border-border rounded-xl p-6"
              >
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-accent font-mono">{pillar.pillar}</span>
                      <h3 className="font-display font-semibold text-text-primary">{pillar.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {pillar.points.map((point, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-text-secondary leading-relaxed">
                          <CheckCircle2 size={16} className="shrink-0 text-accent mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Product Decisions */}
        <motion.section {...fadeIn} transition={{ delay: 0.35, duration: 0.5 }} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Settings size={24} className="text-accent" />
            Product Decisions That Mattered
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "Why a self-serve dashboard?",
                answer:
                  "Enterprise customers don&apos;t want to file support tickets to onboard their own employees. They want control, visibility, and speed. A self-serve dashboard meant that a benefits administrator could link their HRMS, trigger a bulk sync, and monitor progress — all without waiting on our team. This reduced our support burden by an order of magnitude and made the product sticky: once an enterprise configured their dashboard, switching costs were real.",
              },
              {
                question: "Why automatic conflict resolution?",
                answer:
                  "At scale, data conflicts aren&apos;t edge cases — they&apos;re the norm. The same employee might have slightly different records in two systems. Manual resolution meant a human had to review every conflict, which created a bottleneck that grew linearly with customer size. We built configurable precedence rules: the enterprise defines which system is the source of truth for which fields, and the platform resolves conflicts automatically. This turned a human bottleneck into a machine operation.",
              },
              {
                question: "Why a connector architecture?",
                answer:
                  "The naive approach would be to build bespoke integrations for each HRMS platform. That doesn&apos;t scale. Every new HRMS would mean a new codebase, new tests, new maintenance burden. Instead, we designed a connector architecture with a universal schema layer. Each connector translates a specific HRMS&apos;s data model into our canonical format. Adding a new HRMS means writing one connector — not rebuilding the pipeline. This let us go from supporting 3 platforms to 12+ without proportional engineering cost.",
              },
            ].map((decision) => (
              <div
                key={decision.question}
                className="bg-bg-secondary border border-border rounded-xl p-6"
              >
                <h3 className="font-display font-semibold text-accent mb-3 flex items-center gap-2">
                  <ArrowRight size={16} />
                  {decision.question}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{decision.answer}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Impact & Results */}
        <motion.section {...fadeIn} transition={{ delay: 0.4, duration: 0.5 }} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <BarChart3 size={24} className="text-accent" />
            Impact & Results
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                metric: "10x Faster Onboarding",
                detail: "Reduced enterprise employee onboarding from days of manual CSV processing to minutes of automated HRMS sync.",
              },
              {
                metric: "Millions of Records",
                detail: "Platform processed millions of employee records across multiple enterprise clients, with zero data loss incidents.",
              },
              {
                metric: "Zero-Touch Benefits Activation",
                detail: "Insurance and lending products activated on day one of employment — no manual data handoff required.",
              },
              {
                metric: "12+ HRMS Platforms Supported",
                detail: "Connector architecture scaled from 3 initial platforms to 12+ without proportional engineering investment.",
              },
              {
                metric: "Enterprise Trust Earned",
                detail: "SOC-2 and GDPR compliance unlocked contracts with large enterprises that previously couldn&apos;t share employee data with third parties.",
              },
              {
                metric: "Support Tickets Reduced",
                detail: "Self-serve dashboard eliminated the majority of onboarding-related support requests, freeing the team to focus on product development.",
              },
            ].map((result) => (
              <div
                key={result.metric}
                className="bg-bg-secondary border border-border rounded-xl p-5"
              >
                <p className="font-semibold text-accent mb-1">{result.metric}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{result.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* My Role */}
        <motion.section {...fadeIn} transition={{ delay: 0.45, duration: 0.5 }} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Zap size={24} className="text-accent" />
            My Role
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">End-to-end product ownership.</strong> I led this
              product from problem discovery through to scale — defining the vision, shaping the
              architecture, and driving execution across engineering, design, and go-to-market.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-display font-semibold text-text-primary text-sm mb-2">Discovery & Strategy</h3>
                <p className="text-xs text-text-secondary">
                  Interviewed HR leaders and benefits administrators to map the onboarding workflow.
                  Identified the HRMS fragmentation problem as the core bottleneck and defined the
                  connector architecture strategy.
                </p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-display font-semibold text-text-primary text-sm mb-2">Execution & Delivery</h3>
                <p className="text-xs text-text-secondary">
                  Wrote PRDs for every pillar. Defined the universal schema with engineering. Designed
                  the self-serve dashboard flows. Ran weekly sprints and shipped iteratively with tight
                  feedback loops from enterprise design partners.
                </p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-display font-semibold text-text-primary text-sm mb-2">Scale & Compliance</h3>
                <p className="text-xs text-text-secondary">
                  Drove SOC-2 and GDPR compliance workstreams. Defined data retention policies and
                  access control models. Worked with security teams to ensure the platform met
                  enterprise-grade trust requirements.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section {...fadeIn} transition={{ delay: 0.5, duration: 0.5 }} className="mb-12">
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-8 text-center">
            <p className="text-lg font-semibold text-text-primary mb-2">
              Want to discuss B2B product challenges?
            </p>
            <p className="text-sm text-text-secondary mb-6">
              I love talking about enterprise onboarding, data infrastructure, and building products
              that earn trust at scale.
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
