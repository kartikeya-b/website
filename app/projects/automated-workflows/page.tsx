"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Zap,
  Target,
  Users,
  Brain,
  BarChart3,
  Lightbulb,
  CheckCircle2,
  Settings,
  Clock,
  TrendingUp,
  GitBranch,
  MessageSquare,
  Calendar,
  FileText,
  Workflow,
  MousePointerClick,
  ShieldCheck,
  Rocket,
  Search,
  Layers,
} from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function AutomatedWorkflowsPage() {
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
            <span className="text-2xl"><Workflow size={28} className="text-accent" /></span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400">
              Shipped
            </span>
            <span className="text-xs text-text-tertiary">Joveo</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-display">
            Automated Workflows for Recruiters
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-[800px]">
            A trigger-based automation engine that freed recruiters from repetitive tasks,
            cutting manual work by 50% and driving measurable conversion uplift across
            UK and US recruitment markets.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: "50%", label: "Reduction in Manual Tasks" },
            { value: "10K+", label: "Candidate Workflows" },
            { value: "~20%", label: "Conversion Uplift" },
            { value: "UK/US", label: "Markets Served" },
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
              Recruiters were drowning. Not in a lack of candidates or job openings, but in the
              sheer volume of repetitive, manual tasks that consumed their days. Screening resumes.
              Sending acknowledgment emails. Scheduling interviews. Following up with candidates who
              hadn&apos;t responded. Every single one of these actions was being done by hand, one at a time,
              across hundreds of candidates.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">The vision was clear:</strong> let recruiters automate the mundane
              and focus on what actually matters — building genuine relationships with candidates. The best
              recruiters aren&apos;t the ones who send the most emails. They&apos;re the ones who have the most
              meaningful conversations. We wanted to give them back the time to have those conversations.
            </p>
            <p className="text-text-secondary leading-relaxed">
              This wasn&apos;t about replacing recruiters with automation. It was about amplifying them. Giving
              every recruiter the operational leverage of a team of three, without the headcount. The
              automation would handle the process; the recruiter would handle the people.
            </p>
          </div>
        </motion.section>

        {/* The Problem */}
        <motion.section {...fadeIn} transition={{ delay: 0.2, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Target size={24} className="text-accent" />
            The Problem
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 mb-4">
            <p className="text-text-secondary leading-relaxed mb-4">
              Recruitment is a high-volume, time-sensitive operation. When a good candidate applies,
              the window to engage them is narrow — often measured in hours, not days. Yet the
              recruiters we spoke to were spending upwards of 60% of their working hours on tasks
              that were entirely repetitive and rule-based. The same actions, repeated for every
              candidate, every role, every day.
            </p>
            <p className="text-text-secondary leading-relaxed">
              This wasn&apos;t a training problem or a motivation problem. It was a systems problem.
              Recruiters had no way to codify their own rules. They couldn&apos;t say &ldquo;when X happens,
              automatically do Y.&rdquo; Every action required manual intervention, which meant every
              action was a potential bottleneck.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: <Clock size={20} />,
                title: "60%+ Time on Repetitive Tasks",
                desc: "Recruiters were spending the majority of their day on screening, scheduling, and follow-ups — tasks that followed predictable patterns but had no automation layer. This left precious little time for high-value activities like candidate engagement and relationship building.",
              },
              {
                icon: <TrendingUp size={20} />,
                title: "Slow Turnaround = Candidate Drop-off",
                desc: "In competitive hiring markets like the UK and US, candidate expectations are high. A 48-hour delay in acknowledgment or scheduling was enough to lose top talent to faster-moving competitors. Manual processes made speed structurally impossible at scale.",
              },
              {
                icon: <Settings size={20} />,
                title: "No Systematic Automation Rules",
                desc: "There was no mechanism for recruiters to create if-this-then-that style rules. Every workflow lived in someone's head or in a spreadsheet. When that person was out sick or left the company, the process broke down entirely. Institutional knowledge was trapped in individuals.",
              },
              {
                icon: <MessageSquare size={20} />,
                title: "Manual Errors in Communication",
                desc: "Copy-pasting candidate names into email templates. Forgetting to update status fields. Sending the wrong interview link. These errors weren't rare — they were systemic. At volume, even a 2% error rate meant dozens of candidates receiving incorrect or delayed communications every week.",
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
                  <h3 className="font-semibold text-text-primary text-sm mb-1 font-display">{problem.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Users & Stakeholders */}
        <motion.section {...fadeIn} transition={{ delay: 0.25, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Users size={24} className="text-accent" />
            Users &amp; Stakeholders
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-bg-secondary border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-accent-subtle text-accent">
                  Primary Users
                </span>
              </div>
              <ul className="space-y-3">
                <li className="text-sm text-text-secondary">
                  <strong className="text-text-primary">Recruiters</strong> — The day-to-day operators managing
                  candidate pipelines. They needed speed, simplicity, and the ability to set rules without
                  writing code. For them, every minute saved on admin was a minute gained on sourcing.
                </li>
                <li className="text-sm text-text-secondary">
                  <strong className="text-text-primary">Talent Acquisition Specialists</strong> — Senior
                  practitioners who managed complex, multi-stage hiring funnels. They needed more
                  sophisticated workflow logic — conditional branches, multi-trigger sequences, and
                  integration with calendar and email systems.
                </li>
              </ul>
            </div>
            <div className="bg-bg-secondary border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-bg-primary text-text-tertiary border border-border">
                  Key Stakeholders
                </span>
              </div>
              <ul className="space-y-3">
                <li className="text-sm text-text-secondary">
                  <strong className="text-text-primary">Hiring Managers</strong> — Needed visibility into where
                  candidates stood in the pipeline without having to ask recruiters. Automation gave them
                  real-time status updates and reduced back-and-forth communication overhead.
                </li>
                <li className="text-sm text-text-secondary">
                  <strong className="text-text-primary">HR Leadership</strong> — Cared about compliance, consistency,
                  and operational efficiency. Automated workflows ensured every candidate received the
                  same standard of communication, reducing risk and improving employer brand.
                </li>
              </ul>
            </div>
            <div className="bg-bg-secondary border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-bg-primary text-text-tertiary border border-border">
                  Target Markets
                </span>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">UK Recruitment Firms</strong> — High-volume agencies
                  operating in competitive talent markets where response speed directly correlated with
                  placement success rates and revenue.
                </p>
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">US Recruitment Firms</strong> — Enterprise staffing
                  operations with complex multi-stage pipelines, compliance requirements, and a strong
                  push toward digital transformation of hiring operations.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* The Solution — How I Built It */}
        <motion.section {...fadeIn} transition={{ delay: 0.3, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Brain size={24} className="text-accent" />
            The Solution — How I Built It
          </h2>

          {/* Phase 1: User Research */}
          <div className="mb-6">
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  <Search size={20} />
                </div>
                <div>
                  <span className="text-xs text-accent font-mono">Phase 1</span>
                  <h3 className="font-semibold text-text-primary font-display">User Research &amp; Problem Validation</h3>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-text-secondary leading-relaxed">
                  Before writing a single line of spec, I spent three weeks embedded with recruitment teams
                  across both UK and US markets. I conducted 15+ in-depth interviews with recruiters ranging
                  from junior sourcers to senior talent acquisition leads. The goal was not to validate a
                  pre-conceived solution, but to deeply understand the shape of the problem.
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I complemented the qualitative research with product analytics data. We instrumented the
                  existing CRM to track time-on-task for every recruiter action. The data confirmed what the
                  interviews suggested: recruiters were spending an average of 3.2 hours per day on tasks
                  that followed repeatable, rule-based patterns. That&apos;s 16 hours per week, per recruiter,
                  of automatable work.
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I mapped every recruiter workflow on a whiteboard, identified the 12 most common action
                  sequences, and ranked them by frequency, time cost, and error rate. The top three — candidate
                  acknowledgment, interview scheduling, and status update notifications — accounted for 70%
                  of the total automatable time.
                </p>
              </div>
            </div>
          </div>

          {/* Phase 2: Workflow Design */}
          <div className="mb-6">
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  <GitBranch size={20} />
                </div>
                <div>
                  <span className="text-xs text-accent font-mono">Phase 2</span>
                  <h3 className="font-semibold text-text-primary font-display">Workflow Design &amp; Automation Engine</h3>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-text-secondary leading-relaxed">
                  The core of the solution was a drag-and-drop workflow builder that let recruiters
                  visually construct automation rules without any technical knowledge. Each workflow
                  consisted of a trigger event, optional conditions, and one or more actions.
                  Recruiters could see the entire logic flow at a glance and modify it in seconds.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-3 mt-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <h4 className="font-semibold text-text-primary text-sm font-display">Auto-Acknowledge</h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">Trigger:</strong> Candidate applies.{" "}
                    <strong className="text-text-primary">Action:</strong> Auto-send personalised
                    acknowledgment email within 60 seconds, including role details, expected timeline,
                    and next steps. Reduced first-response time from 24 hours to under a minute.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} className="text-accent" />
                    <h4 className="font-semibold text-text-primary text-sm font-display">Auto-Schedule</h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">Trigger:</strong> Candidate shortlisted.{" "}
                    <strong className="text-text-primary">Action:</strong> Auto-schedule interview with
                    calendar integration (Google Calendar, Outlook). Checks interviewer availability,
                    sends invite to both parties, and adds buffer time between back-to-back interviews.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText size={16} className="text-accent" />
                    <h4 className="font-semibold text-text-primary text-sm font-display">Auto-Generate Offer</h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">Trigger:</strong> Offer extended.{" "}
                    <strong className="text-text-primary">Action:</strong> Auto-generate offer letter from
                    approved template, pre-populated with candidate details, compensation package, and
                    start date. Routed for manager approval before sending, cutting offer generation
                    from 2 days to 15 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3: Implementation */}
          <div>
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  <Rocket size={20} />
                </div>
                <div>
                  <span className="text-xs text-accent font-mono">Phase 3</span>
                  <h3 className="font-semibold text-text-primary font-display">Implementation &amp; Iteration</h3>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-text-secondary leading-relaxed">
                  We launched the MVP with three core automation templates — acknowledgment, scheduling,
                  and status updates. Rather than building the full drag-and-drop builder upfront, the MVP
                  offered pre-built templates that recruiters could activate with a single click and
                  customise with basic parameters (email copy, timing delays, conditions).
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  This was a deliberate product decision. By shipping templates first, we could validate
                  that automation itself was valued before investing in the builder experience. The data
                  was unambiguous: within two weeks, 78% of active recruiters had activated at least one
                  automation. The demand signal was clear.
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  We then iterated based on direct recruiter feedback. The top requests were conditional
                  logic (if candidate has 5+ years experience, route to senior track), multi-step
                  sequences (acknowledge → wait 3 days → follow up if no response), and the visual
                  builder for custom workflows. Each was prioritised, specced, and shipped in two-week
                  sprints over the following quarter.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Product Decisions That Mattered */}
        <motion.section {...fadeIn} transition={{ delay: 0.35, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Lightbulb size={24} className="text-accent" />
            Product Decisions That Mattered
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <MousePointerClick size={20} />,
                decision: "Why Drag-and-Drop?",
                rationale: "Recruiters are not engineers. They think in sequences, not code. A visual, drag-and-drop interface meant zero learning curve — if you could arrange sticky notes on a wall, you could build a workflow. We tested three interaction models in prototype: form-based, natural language, and drag-and-drop. The visual builder had the highest task completion rate (94%) and the lowest time-to-first-workflow (under 4 minutes). It also had a secondary benefit: workflows became shareable artefacts. A senior recruiter could build a workflow and hand it to their entire team visually, without explanation.",
              },
              {
                icon: <Zap size={20} />,
                decision: "Why Trigger-Based Architecture?",
                rationale: "We chose an event-driven (trigger-based) architecture over polling for three reasons. First, instant response — when a candidate applies, the acknowledgment fires in under 60 seconds, not whenever the next polling cycle runs. In recruitment, minutes matter. Second, efficiency — event-driven systems only act when something happens, which meant lower infrastructure costs and no wasted compute. Third, mental model — triggers map directly to how recruiters already think: 'When this happens, I need to do that.' The architecture matched the user's mental model, which made the product feel intuitive rather than technical.",
              },
              {
                icon: <ShieldCheck size={20} />,
                decision: "Why MVP First?",
                rationale: "The temptation was to build the full visual workflow builder from day one. It was the sexy feature. But the riskiest assumption wasn't whether recruiters wanted a builder — it was whether they would trust automation to act on their behalf at all. If recruiters didn't trust automated emails going out under their name, no amount of builder UX would matter. So we shipped pre-built templates first. Simple, constrained, safe. This let us validate the core loop: does automation actually save time, and do recruiters trust it? Once we had that signal (78% adoption in two weeks), we earned the right to invest in the builder.",
              },
            ].map((item) => (
              <div
                key={item.decision}
                className="bg-bg-secondary border border-border rounded-xl p-6 flex gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2 font-display">{item.decision}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.rationale}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Impact & Results */}
        <motion.section {...fadeIn} transition={{ delay: 0.4, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <BarChart3 size={24} className="text-accent" />
            Impact &amp; Results
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              {
                metric: "50% Reduction in Repetitive Tasks",
                detail: "Recruiters reclaimed an average of 1.6 hours per day previously spent on manual screening, scheduling, and follow-up communications. Across a team of 20 recruiters, that translated to 160 hours per week of recovered capacity — the equivalent of four full-time hires.",
                icon: <Clock size={20} />,
              },
              {
                metric: "~20% Conversion Uplift",
                detail: "Faster response times and consistent candidate communication directly improved conversion rates through the hiring funnel. Candidates who received an acknowledgment within 60 seconds were significantly more likely to complete subsequent steps compared to those who waited 24+ hours.",
                icon: <TrendingUp size={20} />,
              },
              {
                metric: "10K+ Candidate Workflows Processed",
                detail: "Within the first quarter post-launch, the automation engine had processed over 10,000 individual candidate workflows across UK and US markets. Each workflow represented a sequence of actions that would have previously required manual recruiter intervention at every step.",
                icon: <Workflow size={20} />,
              },
              {
                metric: "Increased CRM Adoption",
                detail: "A notable second-order effect: CRM adoption and engagement increased as recruiters saw tangible value from the platform. Previously, many recruiters viewed the CRM as a logging burden. With automation, the CRM became the engine that powered their efficiency, fundamentally shifting their relationship with the tool.",
                icon: <BarChart3 size={20} />,
              },
            ].map((result) => (
              <div
                key={result.metric}
                className="bg-bg-secondary border border-border rounded-xl p-5 flex gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  {result.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary text-sm mb-1 font-display">{result.metric}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{result.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* My Role & Approach */}
        <motion.section {...fadeIn} transition={{ delay: 0.45, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Layers size={24} className="text-accent" />
            My Role &amp; Approach
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              As the Product Manager for this initiative, I owned the project end-to-end — from initial
              discovery through to launch and iteration. This project exercised the full spectrum of PM
              skills, and I approached it with a clear philosophy: validate before you build, ship before
              you polish, and measure before you celebrate.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {[
                {
                  skill: "User Research & Discovery",
                  detail: "Conducted 15+ recruiter interviews across UK and US markets. Ran time-on-task analysis using product analytics to quantify the problem. Built journey maps and identified the highest-leverage automation opportunities.",
                },
                {
                  skill: "Product Strategy & Prioritisation",
                  detail: "Defined the phased rollout strategy — templates first, builder second. Used RICE scoring to prioritise automation use cases. Made the hard call to defer the visual builder until we had validated core automation adoption.",
                },
                {
                  skill: "Cross-Functional Leadership",
                  detail: "Aligned engineering, design, and go-to-market teams around a shared vision. Ran weekly syncs with engineering leads, facilitated design reviews, and coordinated the beta launch with customer success teams in both markets.",
                },
                {
                  skill: "Data-Driven Iteration",
                  detail: "Instrumented every workflow with analytics — activation rates, completion rates, error rates, time savings. Used this data to drive sprint priorities and to build the business case for continued investment in the automation platform.",
                },
                {
                  skill: "Stakeholder Communication",
                  detail: "Presented quarterly business reviews to senior leadership showing ROI of the automation initiative. Translated technical progress into business outcomes that stakeholders cared about: recruiter efficiency, candidate experience, and revenue impact.",
                },
                {
                  skill: "Market Sensitivity",
                  detail: "Navigated the differences between UK and US recruitment markets — regulatory requirements, communication norms, and workflow expectations. Ensured the product was flexible enough to serve both markets without fragmenting into market-specific builds.",
                },
              ].map((item) => (
                <div key={item.skill} className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary text-sm mb-2 font-display">{item.skill}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section {...fadeIn} transition={{ delay: 0.5, duration: 0.5 }} className="mb-12">
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-8 text-center">
            <p className="text-lg font-semibold text-text-primary mb-2 font-display">
              Want to discuss this project?
            </p>
            <p className="text-sm text-text-secondary mb-6">
              I love talking about product strategy, automation design, and building tools that give
              people their time back. Let&apos;s connect.
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
