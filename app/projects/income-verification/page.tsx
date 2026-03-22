"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  Target,
  Users,
  Zap,
  Globe,
  FileCheck,
  Brain,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Server,
  BarChart3,
  Lock,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function IncomeVerificationPage() {
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
            <span className="text-2xl">🔐</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400">
              Shipped
            </span>
            <span className="text-sm text-text-tertiary">TartanHQ</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            API-Driven Income &amp; Work Verification
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-[800px]">
            Replacing the manual, fraud-prone income verification process with an instant,
            API-first solution that serves lenders, HR platforms, and fintech companies &mdash;
            making verified income data accessible in seconds, not days.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: "80%", label: "Faster Verification" },
            { value: "50%", label: "Fraud Reduction" },
            { value: "3", label: "Markets (IN/UK/LATAM)" },
            { value: "<1s", label: "API Response Time" },
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
            <Zap size={24} className="text-accent" />
            The Vision
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              Income verification is a foundational step in lending, hiring, and compliance workflows.
              Yet for decades, it has been stuck in a world of PDF uploads, manual reviews, and
              phone calls to HR departments. The result: days-long turnaround, high operational costs,
              and a gaping vulnerability to fraud.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The vision was simple but ambitious &mdash; build a single API that any business can call
              to instantly verify a person&apos;s income and employment history, with data pulled directly
              from authoritative sources. Not another document upload portal.{" "}
              <strong className="text-text-primary">
                A programmable, real-time verification layer
              </strong>{" "}
              that sits between employers, payroll systems, and the businesses that need verified data.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Think of it as Plaid for income &mdash; but designed for emerging markets where payroll
              infrastructure is fragmented, document fraud is rampant, and traditional credit bureau
              data is often incomplete or unavailable.
            </p>
          </div>
        </motion.section>

        {/* The Problem */}
        <motion.section {...fadeIn} transition={{ delay: 0.2, duration: 0.5 }} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Target size={24} className="text-accent" />
            The Problem
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <AlertTriangle size={20} />,
                title: "Manual Document Submission = Days of Turnaround",
                desc: "Borrowers and candidates submit payslips via email or upload portals. Operations teams manually open each document, extract data fields, cross-check against employer records, and flag discrepancies. A single verification can take 2-5 business days, creating bottlenecks in loan disbursement and hiring pipelines.",
              },
              {
                icon: <Shield size={20} />,
                title: "Fake Payslips & Forged Employment Records",
                desc: "In markets like India, generating a convincing fake payslip costs less than a cup of coffee. Templates are freely available online, and without automated forensic analysis, operations teams catch only a fraction of fraudulent submissions. The cost of undetected fraud compounds rapidly across lending portfolios.",
              },
              {
                icon: <BarChart3 size={20} />,
                title: "Expensive & Unscalable Processing",
                desc: "Every manual verification requires human reviewers, creating linear cost scaling. As loan volumes or hiring pipelines grow, businesses must proportionally expand their operations teams. For fintechs processing thousands of applications daily, this model breaks down both economically and operationally.",
              },
              {
                icon: <Layers size={20} />,
                title: "No Single Source of Truth",
                desc: "Employment and income data lives in fragmented silos &mdash; across HRMS platforms, payroll systems, government databases, and paper records. There is no unified, trusted layer that aggregates and normalises this data, forcing every verifier to reinvent the wheel for each verification request.",
              },
            ].map((problem) => (
              <div
                key={problem.title}
                className="bg-bg-secondary border border-border rounded-xl p-5 flex gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-text-primary mb-1">{problem.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {problem.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Users & Stakeholders */}
        <motion.section {...fadeIn} transition={{ delay: 0.25, duration: 0.5 }} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Users size={24} className="text-accent" />
            Users &amp; Stakeholders
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Lenders & Financial Institutions",
                desc: "Banks, NBFCs, and digital lenders who need to verify borrower income before disbursing loans. Speed of verification directly impacts conversion rates and loan processing TAT.",
                use: "Loan approvals & credit decisioning",
              },
              {
                title: "HR & Recruitment Platforms",
                desc: "Companies and staffing agencies that need to validate candidate employment claims during background checks. Manual verification slows down offer cycles and introduces risk.",
                use: "Candidate background validation",
              },
              {
                title: "Online Gaming & Fintech",
                desc: "Platforms subject to RBI and local KYC/AML regulations that require proof of income source. Particularly critical for high-value transactions and regulatory compliance.",
                use: "KYC & regulatory compliance",
              },
              {
                title: "Insurance & Underwriting",
                desc: "Insurers who factor income into premium calculations and coverage eligibility. Accurate income data directly impacts risk assessment and policy pricing.",
                use: "Risk assessment & policy pricing",
              },
            ].map((user) => (
              <div
                key={user.title}
                className="bg-bg-secondary border border-border rounded-xl p-5"
              >
                <h3 className="font-display font-semibold text-text-primary mb-1">{user.title}</h3>
                <p className="text-sm text-text-secondary mb-3">{user.desc}</p>
                <span className="inline-block text-xs text-accent bg-accent-subtle px-2.5 py-1 rounded-full">
                  {user.use}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-bg-secondary border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Globe size={18} className="text-accent" />
              <h3 className="font-display font-semibold text-text-primary text-sm">Target Markets</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["India", "United Kingdom", "Latin America (Brazil, Mexico)"].map((market) => (
                <span
                  key={market}
                  className="px-3 py-1.5 text-sm bg-accent-subtle border border-accent/20 rounded-lg text-accent"
                >
                  {market}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* The Solution — 3 Pillars */}
        <motion.section {...fadeIn} transition={{ delay: 0.3, duration: 0.5 }} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <CheckCircle2 size={24} className="text-accent" />
            The Solution &mdash; Three Pillars
          </h2>
          <div className="space-y-6">
            {/* Pillar 1 */}
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  <Server size={20} />
                </div>
                <div>
                  <span className="text-xs text-accent font-mono">Pillar 1</span>
                  <h3 className="font-display font-semibold text-text-primary">
                    API-First HRMS Integration
                  </h3>
                </div>
              </div>
              <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  We built direct API connectors to leading HRMS and payroll platforms &mdash; from enterprise
                  systems like SAP SuccessFactors and Keka to India-specific platforms like greytHR and
                  Zoho Payroll. This enables real-time income and work history sharing without any manual
                  document exchange.
                </p>
                <ul className="space-y-2 ml-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                    Real-time data pull from employer payroll systems via OAuth-based consent flows
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                    Standardised response schema across 20+ HRMS platforms for consistent downstream consumption
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                    GDPR and DPDPA-compliant data handling with employee-initiated consent and audit trails
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                    Webhook-based async flow for verifications that require employer approval
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  <Brain size={20} />
                </div>
                <div>
                  <span className="text-xs text-accent font-mono">Pillar 2</span>
                  <h3 className="font-display font-semibold text-text-primary">
                    Payslip Parsing &amp; Fraud Detection (AI-Powered)
                  </h3>
                </div>
              </div>
              <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  For cases where direct HRMS integration isn&apos;t available, we built an intelligent
                  document processing pipeline. Users upload payslips, and our system extracts, validates,
                  and cross-verifies data in real time.
                </p>
                <div className="grid md:grid-cols-2 gap-3 mt-3">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary text-sm mb-2">OCR &amp; Extraction</h4>
                    <p className="text-xs text-text-secondary">
                      Multi-format document parsing (PDF, images, scanned docs) with field-level
                      extraction for salary, employer, deductions, and employment dates.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary text-sm mb-2">Fraud Signals</h4>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>&#8226; Font mismatches &amp; tampered pixel regions</li>
                      <li>&#8226; Inconsistent tax deduction calculations</li>
                      <li>&#8226; Employer details vs registered company databases</li>
                      <li>&#8226; Metadata analysis (creation tools, edit history)</li>
                    </ul>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary text-sm mb-2">Cross-Verification</h4>
                    <p className="text-xs text-text-secondary">
                      Extracted data is validated against official employer records, PF/tax databases,
                      and historical verification patterns to produce a confidence score.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary text-sm mb-2">Confidence Scoring</h4>
                    <p className="text-xs text-text-secondary">
                      Every verification returns a composite trust score factoring data source,
                      document integrity, cross-reference matches, and historical fraud patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  <Lock size={20} />
                </div>
                <div>
                  <span className="text-xs text-accent font-mono">Pillar 3</span>
                  <h3 className="font-display font-semibold text-text-primary">
                    Seamless UX &amp; Compliance
                  </h3>
                </div>
              </div>
              <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  An API is only as good as its developer experience. We invested heavily in making
                  integration frictionless while maintaining rigorous regulatory compliance across
                  every market we operate in.
                </p>
                <ul className="space-y-2 ml-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                    Intuitive API dashboard for tracking verification requests, status, and analytics
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                    Multi-format output support &mdash; JSON responses, PDF verification reports, and real-time API callbacks
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                    AML &amp; KYC regulatory compliance baked into every verification flow
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                    SDKs for Python, Node.js, and Java with comprehensive API documentation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                    Sandbox environment with synthetic test data for safe integration testing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Product Decisions */}
        <motion.section {...fadeIn} transition={{ delay: 0.35, duration: 0.5 }} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <MessageSquare size={24} className="text-accent" />
            Key Product Decisions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "Why API-first over UI-first?",
                answer:
                  "Our buyers are B2B companies integrating verification into existing lending or HR workflows. They don't want another dashboard to log into — they want a single API call that returns structured data. By going API-first, we reduced integration time from weeks to days and made verification a composable building block rather than a standalone product. The dashboard exists for monitoring and debugging, not as the primary interface.",
              },
              {
                question: "Why OCR + rule-based fraud detection over pure ML?",
                answer:
                  "In compliance-critical workflows, explainability matters more than accuracy at the margin. A rule-based system can tell you exactly why a document was flagged — \"tax deduction inconsistent with declared salary bracket\" is actionable. A black-box ML score of 0.73 is not. We use ML for pattern recognition on document tampering, but the decisioning layer is deterministic and auditable.",
              },
              {
                question: "Why multi-market from the start?",
                answer:
                  "Income verification is a universal pain point, but the infrastructure varies wildly by market. India has UAN and EPFO. The UK has HMRC and RTI. LATAM has fragmented payroll systems. By designing the abstraction layer early — a unified API schema that normalises data from any source — we avoided rebuilding core architecture for each new market. The connectors are market-specific; the verification logic is universal.",
              },
            ].map((decision) => (
              <div
                key={decision.question}
                className="bg-bg-secondary border border-border rounded-xl p-6"
              >
                <h3 className="font-display font-semibold text-text-primary mb-2">
                  {decision.question}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {decision.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Technical Architecture */}
        <motion.section {...fadeIn} transition={{ delay: 0.4, duration: 0.5 }} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Server size={24} className="text-accent" />
            Technical Architecture
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  layer: "API Gateway",
                  desc: "Rate limiting, authentication, request routing, and API versioning. All client requests enter through a unified gateway with per-client throttling.",
                },
                {
                  layer: "Orchestration Layer",
                  desc: "Routes verification requests to the optimal data source — direct HRMS pull, document processing, or hybrid. Handles retry logic and async webhook delivery.",
                },
                {
                  layer: "Connector Framework",
                  desc: "Pluggable adapter pattern for HRMS and payroll integrations. Each connector implements a standard interface, making new platform onboarding a configuration task.",
                },
                {
                  layer: "Document Intelligence",
                  desc: "OCR pipeline with pre-processing (deskew, noise reduction), field extraction, and multi-stage fraud analysis. Returns structured data with confidence scores.",
                },
                {
                  layer: "Verification Engine",
                  desc: "Core business logic that cross-references extracted data against employer databases, historical patterns, and regulatory rules to produce a final verification result.",
                },
                {
                  layer: "Compliance & Audit",
                  desc: "Immutable audit trail for every verification. Consent management, data retention policies, and market-specific regulatory compliance (GDPR, DPDPA, LGPD).",
                },
              ].map((block) => (
                <div key={block.layer} className="border border-border rounded-lg p-4">
                  <h3 className="font-display font-semibold text-text-primary text-sm mb-2">
                    {block.layer}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{block.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "RESTful APIs",
                "OAuth 2.0",
                "OCR Pipeline",
                "Webhooks",
                "PostgreSQL",
                "Redis",
                "Docker",
                "AWS",
                "Microservices",
                "Event-Driven Architecture",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs bg-bg-primary border border-border rounded-lg text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Impact & Results */}
        <motion.section {...fadeIn} transition={{ delay: 0.45, duration: 0.5 }} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <BarChart3 size={24} className="text-accent" />
            Impact &amp; Results
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {[
              {
                metric: "80% Faster Verification",
                detail:
                  "Average verification time dropped from 3-5 business days to under 10 minutes for HRMS-connected employers, and under 2 hours for document-based verifications.",
              },
              {
                metric: "50% Fraud Reduction",
                detail:
                  "Automated fraud detection caught document manipulation that manual reviewers consistently missed — font tampering, metadata inconsistencies, and tax calculation anomalies.",
              },
              {
                metric: "Sub-Second API Response",
                detail:
                  "For HRMS-connected verifications, API response times averaged under 800ms. Even document-based flows returned preliminary results within seconds of upload.",
              },
              {
                metric: "3-Market Expansion",
                detail:
                  "Launched across India, UK, and LATAM with market-specific connectors and compliance frameworks, validating the universal API abstraction architecture.",
              },
            ].map((result) => (
              <div
                key={result.metric}
                className="bg-bg-secondary border border-border rounded-xl p-5"
              >
                <h3 className="font-display font-semibold text-accent mb-2">{result.metric}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{result.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* My Role */}
        <motion.section {...fadeIn} transition={{ delay: 0.5, duration: 0.5 }} className="mb-16">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <FileCheck size={24} className="text-accent" />
            My Role
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              I owned the verification vertical end-to-end as the product lead at TartanHQ &mdash;
              from initial problem framing and market research through to API design, go-to-market,
              and post-launch iteration.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Defined the product vision, roadmap, and success metrics for the verification platform",
                "Led user research with lenders, HR platforms, and fintech companies across India and UK",
                "Designed the API schema and developer experience in collaboration with engineering",
                "Authored PRDs for HRMS connectors, fraud detection pipeline, and compliance frameworks",
                "Coordinated cross-functional execution across engineering, data science, and compliance teams",
                "Drove go-to-market strategy including developer documentation, sandbox environments, and sales enablement",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-accent mt-1 shrink-0"
                  />
                  <p className="text-sm text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section {...fadeIn} transition={{ delay: 0.55, duration: 0.5 }} className="mb-12">
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-8 text-center">
            <p className="text-lg font-semibold text-text-primary mb-2">
              Want to discuss this project?
            </p>
            <p className="text-sm text-text-secondary mb-6">
              I&apos;d love to talk about API product design, fraud detection, or building for
              emerging markets.
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
            &larr; Back to all projects
          </Link>
        </div>
      </main>
    </div>
  );
}
