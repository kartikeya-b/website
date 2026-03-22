"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Briefcase,
  Users,
  Mail,
  Brain,
  Target,
  BarChart3,
  Layers,
  Lightbulb,
  CheckCircle2,
  TrendingUp,
  Zap,
  ArrowRight,
  Clock,
  MessageSquare,
  Search,
  GitBranch,
  Shield,
} from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function RecruitmentCRMPage() {
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
            <span className="text-2xl">🎯</span>
            <span className="text-sm text-text-secondary">Joveo</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400">
              Shipped
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-display">
            Recruitment Marketing CRM
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-[800px]">
            A unified recruitment platform that doesn&apos;t just track candidates — it actively
            helps recruiters find, engage, and place the right talent faster through AI-powered
            matching and automated outreach.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: "60%", label: "Reduction in Recruiter Workload" },
            { value: "40%", label: "Improved Response Rates" },
            { value: "3X", label: "Faster High-Match Placements" },
            { value: "5", label: "Core Modules" },
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
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Lightbulb size={24} className="text-accent" />
            The Vision
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              Recruitment is fundamentally broken at the workflow level. Recruiters spend the majority
              of their time on administrative tasks — copying data between systems, writing the same
              emails with minor tweaks, manually scanning resumes for keywords, and juggling dozens of
              open roles across disconnected tools. The actual human judgement work — evaluating cultural
              fit, selling the opportunity, coaching candidates through interviews — gets squeezed into
              whatever time is left.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The Recruitment Marketing CRM was built on a simple conviction:{" "}
              <strong className="text-text-primary">
                the best recruitment platform is one that makes the recruiter the bottleneck for
                decisions, not for data entry.
              </strong>{" "}
              Every module was designed to automate the mechanical and surface the strategic — giving
              recruiters back the hours they need to do what only humans can do: build relationships
              and make judgement calls.
            </p>
            <p className="text-text-secondary leading-relaxed">
              This wasn&apos;t about building another ATS. The market had plenty of those. This was
              about building a system where jobs, applicants, candidates, outreach, and AI-powered
              matching all live in a single, interconnected workflow — where an action in one module
              automatically triggers the right response in another.
            </p>
          </div>
        </motion.section>

        {/* The Problem */}
        <motion.section {...fadeIn} transition={{ delay: 0.2, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Target size={24} className="text-accent" />
            The Problem
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <Layers size={20} />,
                title: "Manual Candidate Tracking Across Fragmented Systems",
                desc: "Recruiters were managing candidate pipelines across spreadsheets, email threads, LinkedIn messages, and sometimes even paper notes. A single candidate's history could be scattered across 4-5 different tools. This meant every time a recruiter picked up a requisition, they spent 20-30 minutes just reconstructing context — who applied, what stage they were at, what the last communication was. Multiply that by 30-50 open roles per recruiter, and the math becomes devastating.",
              },
              {
                icon: <Mail size={20} />,
                title: "Inefficient Communication Without Personalisation",
                desc: "Outreach was a binary: either hand-craft every email (slow, unscalable) or send generic blasts (fast, but terrible response rates). Most recruiters defaulted to the blast approach — the same template to 500 candidates regardless of their experience, their match quality, or where they were in the funnel. The result was sub-10% response rates and a growing reputation problem: candidates started ignoring recruiter emails entirely because they all felt robotic and irrelevant.",
              },
              {
                icon: <Search size={20} />,
                title: "Poor Job-to-Applicant Matching at Scale",
                desc: "Human review was the bottleneck for every hiring decision. A single job posting could attract 200-500 applicants within days. Recruiters were manually scanning each resume, trying to pattern-match skills, experience, and qualifications against job requirements. This created a quality problem (fatigue leads to missed great candidates) and a speed problem (the best candidates get picked up by competitors while they sit in an unreviewed pile).",
              },
              {
                icon: <Clock size={20} />,
                title: "Losing Candidates to Competitors Due to Slow Response",
                desc: "In a competitive talent market, speed is the single biggest differentiator. Top candidates — especially in tech and healthcare — often have 3-4 active conversations with recruiters simultaneously. The recruiter who responds first, schedules fastest, and maintains momentum wins the placement. Our data showed that candidates contacted within 24 hours of application were 3X more likely to accept an interview than those contacted after 72 hours. The manual workflow was costing placements.",
              },
            ].map((problem) => (
              <div
                key={problem.title}
                className="bg-bg-secondary border border-border rounded-xl p-6 flex gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2 font-display">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* The Solution — 5 Modules */}
        <motion.section {...fadeIn} transition={{ delay: 0.25, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-2 flex items-center gap-2 font-display">
            <Zap size={24} className="text-accent" />
            The Solution — 5 Core Modules
          </h2>
          <p className="text-text-secondary mb-8">
            Each module was designed to solve a specific workflow pain point while connecting
            seamlessly with the others to create a unified recruitment engine.
          </p>

          {/* Module 1: Jobs Page */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle text-accent flex items-center justify-center text-sm font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-text-primary font-display">
                Jobs Page — Centralised Job Management
              </h3>
            </div>
            <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
              <p className="text-text-secondary leading-relaxed">
                The Jobs Page serves as the command centre for all open requisitions. Instead of
                managing job postings across individual job boards, social media platforms, and career
                sites separately, recruiters create a single job listing and distribute it everywhere
                from one interface.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={16} className="text-accent" />
                    <h4 className="font-semibold text-text-primary text-sm">
                      Automated Distribution
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary">
                    One-click publishing to 50+ job boards, LinkedIn, Indeed, and company career
                    pages. Automatic formatting per platform — no more copy-pasting and reformatting
                    job descriptions manually.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 size={16} className="text-accent" />
                    <h4 className="font-semibold text-text-primary text-sm">
                      Real-Time Performance Analytics
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Live dashboards showing views, applications, and conversion rates per channel.
                    Recruiters can see which job boards are performing and reallocate budget in
                    real time rather than waiting for monthly reports.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={16} className="text-accent" />
                    <h4 className="font-semibold text-text-primary text-sm">
                      Smart Templates
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Pre-built job description templates based on role type and industry, with
                    AI-suggested optimisations for better candidate attraction. Templates learn from
                    which postings historically attracted the highest-quality applicants.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Module 2: Applicants Page */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle text-accent flex items-center justify-center text-sm font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-text-primary font-display">
                Applicants Page — Intelligent ATS
              </h3>
            </div>
            <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
              <p className="text-text-secondary leading-relaxed">
                The Applicants Page reimagines the traditional ATS by adding intelligence to what is
                typically a passive database. Instead of just storing applications and letting
                recruiters manually sift through them, it actively surfaces the right candidates and
                moves them through the pipeline based on predefined rules.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Search size={16} className="text-accent" />
                    <h4 className="font-semibold text-text-primary text-sm">
                      Custom Filters & Smart Views
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Advanced filtering by skills, experience, location, education, and custom
                    attributes. Saved filter views mean recruiters don&apos;t rebuild their search
                    criteria every session. Filters combine with AI match scores for powerful
                    compound queries.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GitBranch size={16} className="text-accent" />
                    <h4 className="font-semibold text-text-primary text-sm">
                      Auto-Advance Workflows
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Rule-based automation that moves applicants through pipeline stages based on
                    predefined criteria. Candidates meeting minimum thresholds automatically advance
                    to screening, freeing recruiters to focus on borderline cases that require human
                    judgement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Module 3: Candidates Page */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle text-accent flex items-center justify-center text-sm font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-text-primary font-display">
                Candidates Page — Unified Talent Pool
              </h3>
            </div>
            <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
              <p className="text-text-secondary leading-relaxed">
                The Candidates Page is the long-term talent database — every person who has ever
                interacted with the organisation, whether they applied, were sourced, referred, or
                engaged through a campaign. Unlike the Applicants Page (which is job-specific), the
                Candidates Page is the global view across all roles and all time.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={16} className="text-accent" />
                    <h4 className="font-semibold text-text-primary text-sm">
                      Unified Profiles
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Single source of truth for every candidate — merging data from multiple
                    applications, LinkedIn imports, referrals, and manual entries. Complete
                    interaction history, notes, and status across every role they&apos;ve been
                    considered for.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={16} className="text-accent" />
                    <h4 className="font-semibold text-text-primary text-sm">
                      Resume Parsing
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Automated extraction of skills, experience, education, and certifications from
                    uploaded resumes. Structured data feeds directly into the matching algorithm,
                    eliminating the manual data-entry step that traditionally eats hours of recruiter
                    time.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Search size={16} className="text-accent" />
                    <h4 className="font-semibold text-text-primary text-sm">
                      Keyword Search
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Full-text search across the entire talent pool — including resume content,
                    notes, and tags. Boolean operators for power users. Recruiters can find
                    candidates they spoke to months ago in seconds rather than scrolling through
                    spreadsheets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Module 4: Email & SMS Campaigns */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle text-accent flex items-center justify-center text-sm font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-text-primary font-display">
                Email & SMS Campaigns — Automated Personalised Outreach
              </h3>
            </div>
            <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
              <p className="text-text-secondary leading-relaxed">
                This module transforms recruiter outreach from a manual, one-at-a-time activity into
                an intelligent, automated system that sends the right message to the right candidate
                at the right time. The key innovation is behavioural triggers — the system watches
                for specific candidate actions (or inactions) and automatically responds with
                contextually appropriate communication.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-text-primary text-sm">
                  Behavioural Trigger Workflows
                </h4>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="border border-border rounded-lg p-4 bg-bg-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={16} className="text-yellow-400" />
                      <h5 className="font-semibold text-text-primary text-xs">
                        No Response in 48hrs
                      </h5>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <ArrowRight size={12} className="text-text-tertiary" />
                      <span className="text-xs text-accent">Auto Follow-Up</span>
                    </div>
                    <p className="text-xs text-text-secondary">
                      System detects unresponsive candidates and sends a personalised follow-up with
                      a different angle — perhaps highlighting a benefit not mentioned in the first
                      outreach, or including a relevant company culture detail. Timing is
                      configurable per campaign.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-4 bg-bg-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 size={16} className="text-green-400" />
                      <h5 className="font-semibold text-text-primary text-xs">
                        Shortlisted
                      </h5>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <ArrowRight size={12} className="text-text-tertiary" />
                      <span className="text-xs text-accent">Interview Scheduling</span>
                    </div>
                    <p className="text-xs text-text-secondary">
                      When a candidate is moved to shortlisted status, the system automatically
                      sends an interview scheduling link with available slots pulled from the
                      hiring manager&apos;s calendar. Zero back-and-forth emails to find a time.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-4 bg-bg-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare size={16} className="text-blue-400" />
                      <h5 className="font-semibold text-text-primary text-xs">
                        Rejected
                      </h5>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <ArrowRight size={12} className="text-text-tertiary" />
                      <span className="text-xs text-accent">Re-Engagement for Future Roles</span>
                    </div>
                    <p className="text-xs text-text-secondary">
                      Candidates not selected for the current role aren&apos;t discarded — they enter
                      a nurture campaign. When matching roles open in the future, these candidates
                      are automatically re-engaged with a personalised message referencing their
                      previous interaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 5: Talent Match */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle text-accent flex items-center justify-center text-sm font-bold">
                5
              </div>
              <h3 className="text-xl font-bold text-text-primary font-display">
                Talent Match — AI-Powered Candidate Scoring
              </h3>
            </div>
            <div className="bg-bg-secondary border border-accent/30 rounded-xl p-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-subtle text-accent text-xs font-medium mb-2">
                <Brain size={14} />
                AI Innovation — Partnered with Data Science Team
              </div>
              <p className="text-text-secondary leading-relaxed">
                Talent Match is the crown jewel of the platform — a machine learning system that
                automatically scores every candidate against every open role, giving recruiters an
                instant, data-driven view of who they should prioritise. This was a cross-functional
                initiative where I partnered closely with the Data Science team to translate
                recruiting domain expertise into model features.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="border border-accent/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <h4 className="font-semibold text-text-primary text-sm">High Match</h4>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Strong alignment on skills, experience, and historical hiring patterns. These
                    candidates are surfaced immediately and trigger priority outreach. Recruiters
                    see these first and can act within hours of application.
                  </p>
                </div>
                <div className="border border-accent/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <h4 className="font-semibold text-text-primary text-sm">Mid Match</h4>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Partial alignment — meets core requirements but may lack specific
                    qualifications or have non-traditional backgrounds. These candidates warrant
                    human review and often include hidden gems that pure keyword matching would miss.
                  </p>
                </div>
                <div className="border border-accent/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <h4 className="font-semibold text-text-primary text-sm">Low Match</h4>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Significant gaps between candidate profile and job requirements. Auto-routed to
                    a holding pool for future opportunities where they might be a better fit.
                    Respectful rejection emails sent automatically with opt-in for future roles.
                  </p>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 mt-2">
                <h4 className="font-semibold text-text-primary text-sm mb-2">
                  How the ML Model Works
                </h4>
                <ul className="space-y-2 text-xs text-text-secondary">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-text-primary">Training Data:</strong> Historical
                      hiring decisions — which candidates were hired, which were rejected, and for
                      what reasons. The model learns the implicit preferences of successful hiring
                      patterns specific to each client.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-text-primary">Feature Engineering:</strong> Skills
                      overlap, years of experience, industry relevance, education match,
                      geographic proximity, career trajectory patterns, and semantic similarity
                      between resume content and job descriptions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-text-primary">Real-Time Scoring:</strong> Every new
                      application is scored within seconds of submission. The model runs
                      continuously, re-scoring existing candidates when job requirements change.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Product Architecture */}
        <motion.section {...fadeIn} transition={{ delay: 0.3, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Layers size={24} className="text-accent" />
            Product Architecture — How Modules Connect
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-6">
            <p className="text-text-secondary leading-relaxed">
              The power of this platform isn&apos;t in any single module — it&apos;s in how they
              interconnect. Every module feeds data to the others, creating a compounding intelligence
              loop that gets smarter with every interaction.
            </p>
            <div className="space-y-3">
              {[
                {
                  flow: "Jobs → Applicants",
                  desc: "New job postings automatically create intake funnels in the Applicants module. Applicants are pre-sorted by AI match score on arrival.",
                },
                {
                  flow: "Applicants → Candidates",
                  desc: "Every applicant — hired or not — is added to the global Candidates pool. Their complete interaction history travels with them, building a richer profile over time.",
                },
                {
                  flow: "Candidates → Talent Match",
                  desc: "The Talent Match engine continuously scans the Candidates pool against open Jobs. When a high-match candidate is identified for a new role, the system proactively alerts recruiters.",
                },
                {
                  flow: "Talent Match → Campaigns",
                  desc: "Match scores determine outreach priority and messaging. High-match candidates get personalised, urgency-driven messages. Mid-match candidates receive exploratory outreach. Low-match candidates enter nurture sequences.",
                },
                {
                  flow: "Campaigns → Applicants",
                  desc: "Campaign engagement data (opens, clicks, replies) feeds back into candidate profiles and influences future match scoring. Candidates who engage positively score higher on interest signals.",
                },
              ].map((connection) => (
                <div
                  key={connection.flow}
                  className="flex items-start gap-3 border border-border rounded-lg p-4"
                >
                  <div className="shrink-0 px-2 py-1 rounded bg-accent-subtle text-accent text-xs font-mono font-medium whitespace-nowrap">
                    {connection.flow}
                  </div>
                  <p className="text-sm text-text-secondary">{connection.desc}</p>
                </div>
              ))}
            </div>
            <div className="border border-accent/20 rounded-lg p-4 bg-accent-subtle/30">
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">The Flywheel Effect:</strong> The more
                the system is used, the better it gets. Every hiring decision refines the ML model.
                Every campaign response improves messaging effectiveness. Every candidate
                interaction enriches the talent pool. This creates a compounding advantage — clients
                who use the platform longer get significantly better results.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Product Decisions */}
        <motion.section {...fadeIn} transition={{ delay: 0.35, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Shield size={24} className="text-accent" />
            Key Product Decisions
          </h2>
          <div className="space-y-4">
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <h3 className="font-semibold text-text-primary mb-3 font-display">
                Why AI Scoring Over Manual Review?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">
                    The manual review model simply doesn&apos;t scale. A recruiter handling 40 open
                    roles with 200 applicants each is looking at 8,000 resumes. Even at 2 minutes
                    per resume — an unrealistically fast pace — that&apos;s 267 hours of pure
                    screening time. There aren&apos;t enough hours in the quarter.
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Beyond scale, AI scoring provides consistency. Human reviewers have well-documented
                    biases — they evaluate candidates differently at 9am versus 4pm, give different
                    weight to the same criteria depending on mood, and develop unconscious pattern
                    preferences. The ML model applies the same criteria uniformly, every time.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 bg-bg-primary">
                  <h4 className="text-xs font-semibold text-accent mb-2">THE TRADEOFF</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    AI scoring requires trust. Recruiters initially resisted — they worried about
                    missing great candidates. We addressed this by making the system transparent
                    (showing why a score was given), keeping humans in the loop for all hiring
                    decisions, and running a 3-month parallel test where AI scores were shown
                    alongside manual reviews. When recruiters saw 94% agreement with their own
                    assessments — plus the candidates AI caught that they missed — adoption became
                    organic.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <h3 className="font-semibold text-text-primary mb-3 font-display">
                Why 3 Tiers Instead of a Percentage Score?
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                Early prototypes used a 0-100 percentage score. In user testing, this created
                more problems than it solved. Recruiters would agonise over the difference between
                a 72 and a 74. They would set arbitrary cutoffs (say, 80%) and miss strong candidates
                at 79%. The granularity gave a false sense of precision that the model couldn&apos;t
                actually deliver.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Three tiers — High, Mid, Low — are{" "}
                <strong className="text-text-primary">actionable</strong>. Each tier maps to a
                clear workflow:{" "}
                <span className="text-green-400">High = contact immediately</span>,{" "}
                <span className="text-yellow-400">Mid = review when time allows</span>,{" "}
                <span className="text-red-400">Low = auto-route to future pool</span>. Recruiters
                don&apos;t need to interpret a number — they need to know what to do next. The
                tier system reduced average decision time by 40%.
              </p>
            </div>

            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <h3 className="font-semibold text-text-primary mb-3 font-display">
                Why Behavioural Triggers Over Scheduled Campaigns?
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                Traditional recruitment outreach is time-based: send initial email on Monday,
                follow-up on Thursday, final nudge the following Monday. This ignores the most
                important signal — what the candidate actually did.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Behavioural triggers are{" "}
                <strong className="text-text-primary">event-based</strong> — the right message at
                the right time based on what just happened. A candidate who opens your email 3
                times but doesn&apos;t reply needs a different follow-up than one who never opened
                it. A candidate who clicks on the job description link but doesn&apos;t apply needs
                a nudge, not a full pitch. This approach improved response rates by 40% compared
                to time-based sequences because every message felt relevant and timely.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Impact & Results */}
        <motion.section {...fadeIn} transition={{ delay: 0.4, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <TrendingUp size={24} className="text-accent" />
            Impact & Results
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              {
                metric: "60% Reduction in Recruiter Workload",
                detail:
                  "Automation of resume screening, outreach sequencing, and pipeline management freed recruiters to focus on high-value relationship building and candidate evaluation.",
              },
              {
                metric: "40% Improved Response Rates",
                detail:
                  "Behavioural triggers and personalised messaging dramatically outperformed generic email blasts. Candidates responded more because messages were relevant and timely.",
              },
              {
                metric: "3X Faster Placement for High-Match Candidates",
                detail:
                  "AI scoring enabled instant prioritisation. High-match candidates were contacted within hours instead of days, significantly reducing time-to-fill for critical roles.",
              },
              {
                metric: "Compounding Data Advantage",
                detail:
                  "Every hiring decision improved the ML model. Clients using the platform for 6+ months saw measurably better match accuracy compared to their first month.",
              },
            ].map((result) => (
              <div
                key={result.metric}
                className="bg-bg-secondary border border-border rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <h3 className="font-semibold text-text-primary text-sm font-display">
                    {result.metric}
                  </h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">{result.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* My Role */}
        <motion.section {...fadeIn} transition={{ delay: 0.45, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Users size={24} className="text-accent" />
            My Role
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              I owned this product end-to-end — from initial problem discovery through to shipped
              product and measured outcomes. This was a cross-functional effort that required
              coordinating across engineering, data science, design, sales, and customer success.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                {
                  area: "Product Strategy & Vision",
                  details:
                    "Defined the product vision, conducted competitive analysis, and built the business case that secured executive buy-in and engineering resources.",
                },
                {
                  area: "User Research & Discovery",
                  details:
                    "Led 30+ recruiter interviews across enterprise and staffing agency clients. Mapped end-to-end workflows to identify the highest-leverage automation opportunities.",
                },
                {
                  area: "Cross-Functional Leadership",
                  details:
                    "Partnered with the Data Science team on the Talent Match ML model — translating recruiting domain expertise into model features and evaluation criteria.",
                },
                {
                  area: "Execution & Delivery",
                  details:
                    "Wrote detailed specs for all 5 modules, managed sprint planning with engineering, made daily prioritisation decisions, and drove the product from 0 to launch.",
                },
              ].map((role) => (
                <div key={role.area} className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary text-sm mb-2 font-display">
                    {role.area}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{role.details}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section {...fadeIn} transition={{ delay: 0.5, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 font-display">Tech Context</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Python",
              "Machine Learning",
              "NLP / Resume Parsing",
              "REST APIs",
              "PostgreSQL",
              "Redis",
              "SendGrid / Twilio",
              "Elasticsearch",
              "AWS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm bg-bg-secondary border border-border rounded-lg text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section {...fadeIn} transition={{ delay: 0.55, duration: 0.5 }} className="mb-12">
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-8 text-center">
            <p className="text-lg font-semibold text-text-primary mb-2 font-display">
              Want to discuss this project?
            </p>
            <p className="text-sm text-text-secondary mb-6">
              I&apos;d love to walk you through the product decisions, architecture, and results
              in more detail.
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
