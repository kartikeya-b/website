"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  Target,
  Users,
  Zap,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Fingerprint,
  Code2,
  BarChart3,
  Lock,
  Globe,
  FileCheck,
  BadgeCheck,
  Server,
  Eye,
} from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const verificationMatrix = [
  { category: "Identity", types: ["Aadhaar (National ID)", "PAN (Tax ID)", "Driving License", "Passport", "Voter ID"], icon: <Fingerprint size={18} /> },
  { category: "Financial", types: ["Bank Account Verification", "GST Verification", "ITR (Income Tax Returns)", "Credit Score Check"], icon: <BarChart3 size={18} /> },
  { category: "Employment", types: ["EPFO (Pension Fund)", "Employment History", "Salary Verification", "Company Registration (MCA)"], icon: <BadgeCheck size={18} /> },
  { category: "Contact & Address", types: ["Mobile Number Verification", "Address via Telecom Records", "Address via Utility Bills", "Email Verification"], icon: <Globe size={18} /> },
];

export default function KYCVerticalPage() {
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
            <span className="text-2xl">🛡️</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400">
              Shipped
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-bg-secondary text-text-tertiary border border-border">
              TartanHQ
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-display">
            KYC Vertical
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-[800px]">
            Authenticate &amp; verify customers with ease — India&apos;s most comprehensive,
            developer-friendly KYC verification suite enabling businesses to verify identities,
            financial records, and addresses in real-time through simple API calls.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: "90%", label: "Faster KYC Processing" },
            { value: "60%", label: "Fewer Fraud Cases" },
            { value: "<2s", label: "Real-Time Verification" },
            { value: "Plug & Play", label: "API Integration" },
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
            <Eye size={24} className="text-accent" />
            The Vision
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              India is digitising at an unprecedented pace. Every fintech, every neobank, every lending platform,
              every insurance company needs to verify who their customers are before onboarding them. But the
              verification landscape is fragmented — Aadhaar sits with UIDAI, PAN with the Income Tax department,
              driving licences with state RTOs, and employment records with EPFO. No single platform unifies
              these into a coherent, developer-friendly experience.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">The vision was clear:</strong> build a single API layer
              that abstracts away the complexity of India&apos;s identity infrastructure. One integration,
              one documentation set, one dashboard — and access to every verification type a business could
              ever need. Not just identity checks, but financial verification, employment history, address
              validation, and fraud detection — all through RESTful API calls that return results in seconds.
            </p>
            <p className="text-text-secondary leading-relaxed">
              This wasn&apos;t about building another KYC tool. It was about building{" "}
              <strong className="text-text-primary">the verification layer for India&apos;s digital economy</strong> —
              one that any developer could integrate in hours, not weeks.
            </p>
          </div>
        </motion.section>

        {/* The Problem */}
        <motion.section {...fadeIn} transition={{ delay: 0.2, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Target size={24} className="text-accent" />
            The Problem
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: <AlertTriangle size={20} className="text-red-400" />,
                title: "Manual Document Submissions",
                desc: "Businesses relied on customers uploading documents manually — leading to 3-5 day verification cycles, high drop-off rates during onboarding, and an army of back-office staff doing visual document checks that were inherently error-prone.",
              },
              {
                icon: <Shield size={20} className="text-red-400" />,
                title: "Rampant Fraud Risk",
                desc: "Fake PAN cards, morphed Aadhaar documents, stolen identities — without automated verification against government databases, businesses were essentially trusting customers to be who they claimed. The result: rising fraud losses and regulatory penalties.",
              },
              {
                icon: <BarChart3 size={20} className="text-red-400" />,
                title: "Expensive Compliance Overhead",
                desc: "Meeting RBI, SEBI, and IRDAI compliance requirements meant building custom verification workflows for each regulation. Smaller fintech companies spent months and lakhs on compliance infrastructure before they could even start onboarding customers.",
              },
              {
                icon: <Layers size={20} className="text-red-400" />,
                title: "No Unified Verification Layer",
                desc: "Verifying an Aadhaar required one vendor, PAN verification another, bank account checks a third. Each with different APIs, different formats, different reliability. Businesses juggled 5-7 vendors just to complete basic KYC — a maintenance and integration nightmare.",
              },
            ].map((problem) => (
              <div
                key={problem.title}
                className="bg-bg-secondary border border-border rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  {problem.icon}
                  <h3 className="font-semibold text-text-primary text-sm font-display">{problem.title}</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Users */}
        <motion.section {...fadeIn} transition={{ delay: 0.25, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Users size={24} className="text-accent" />
            Who We Built For
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Financial Institutions & Fintech",
                desc: "Banks, NBFCs, lending platforms, and neobanks that need to verify customer identities at scale during onboarding. For these users, KYC isn't optional — it's regulatory mandate. They need instant verification, audit trails, and compliance-ready reports.",
                emoji: "🏦",
              },
              {
                title: "HR & Recruitment Platforms",
                desc: "Companies verifying employee backgrounds — employment history via EPFO, educational qualifications, identity verification. A single fraudulent hire can cost organisations lakhs in damages. They need batch verification for bulk hiring cycles.",
                emoji: "👥",
              },
              {
                title: "Online Gaming & E-Commerce",
                desc: "Gaming platforms required by law to verify player identities before allowing real-money transactions. E-commerce platforms verifying sellers and high-value buyers. Speed is critical — every second of verification delay means drop-off.",
                emoji: "🎮",
              },
              {
                title: "Compliance & Fraud Prevention Teams",
                desc: "Internal compliance officers who need dashboards showing verification success rates, flagged fraud attempts, and audit-ready compliance reports. They don't write code — they need a visual layer on top of the API infrastructure.",
                emoji: "🔍",
              },
            ].map((user) => (
              <div
                key={user.title}
                className="bg-bg-secondary border border-border rounded-xl p-5 flex gap-4"
              >
                <span className="text-2xl shrink-0">{user.emoji}</span>
                <div>
                  <h3 className="font-semibold text-text-primary text-sm mb-2 font-display">{user.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{user.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* The Solution — 3 Layers */}
        <motion.section {...fadeIn} transition={{ delay: 0.3, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Layers size={24} className="text-accent" />
            The Solution — Three Layers
          </h2>
          <div className="space-y-4">
            {/* Layer 1 */}
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  <Fingerprint size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-accent font-mono">Layer 1</span>
                    <h3 className="font-semibold text-text-primary font-display">API-Driven Identity Verification</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    The core engine — a unified API that connects to every major government and institutional
                    database in India for real-time identity, financial, and employment verification.
                  </p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      "Aadhaar (National ID) — UIDAI database verification with consent-based flow",
                      "PAN (Tax ID) — instant validation against Income Tax department records",
                      "Driving License & Passport — state RTO and passport authority lookups",
                      "EPFO (Pension Fund) — employment history, employer details, and salary verification",
                      "Mobile Number Verification — telecom operator records for name-number matching",
                      "Bank Account Verification — penny drop and reverse penny drop verification",
                      "Address Verification — cross-referencing telecom, utility, and postal records",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                        <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  <Lock size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-accent font-mono">Layer 2</span>
                    <h3 className="font-semibold text-text-primary font-display">Fraud Detection &amp; Compliance Automation</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    Verification alone isn&apos;t enough — businesses need to know if the documents are genuine
                    and if the person is really who they claim to be. This layer adds intelligence on top of raw verification.
                  </p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      "AI-powered document analysis — detects tampered, photoshopped, or fabricated IDs",
                      "Automated liveness checks — ensures the person is physically present, not a photo",
                      "Facial recognition matching — cross-references selfie with ID photo",
                      "RBI & SEBI compliance rules engine — auto-applies regulatory requirements",
                      "AML (Anti-Money Laundering) screening — checks against global watchlists",
                      "GDPR-compliant data handling — encryption at rest and in transit, auto-purge policies",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                        <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  <Code2 size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-accent font-mono">Layer 3</span>
                    <h3 className="font-semibold text-text-primary font-display">Developer Experience &amp; Integration</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    The best verification engine is useless if developers can&apos;t integrate it quickly.
                    This layer ensures that going from signup to first successful verification takes hours, not weeks.
                  </p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      "Plug-and-play RESTful API — consistent request/response format across all endpoints",
                      "Batch verification — upload CSV of 10,000 records and get results asynchronously",
                      "Real-time lookups — sub-2-second response times for individual verifications",
                      "Comprehensive SDK support — Node.js, Python, Java, and Go client libraries",
                      "Webhook notifications — get notified when async verifications complete",
                      "Analytics dashboard — success rates, average response times, fraud detection metrics",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                        <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Product Decisions */}
        <motion.section {...fadeIn} transition={{ delay: 0.35, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Zap size={24} className="text-accent" />
            Product Decisions That Shaped the Vertical
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "Why API-first for KYC?",
                answer: "Enterprises don't want manual upload portals — they need programmatic access that plugs into their existing onboarding flows. An API-first approach means a lending platform can verify a loan applicant's PAN, bank account, and employment history as part of their application flow without the user ever leaving the app. The alternative — redirect-based verification portals — creates friction, increases drop-off, and breaks the user experience. API-first was the only path to enterprise adoption.",
              },
              {
                question: "Why support both batch and real-time verification?",
                answer: "Different use cases demand different patterns. A neobank onboarding a single customer needs real-time verification in under 2 seconds. An HR platform running background checks on 500 new hires needs batch processing with async webhooks. Building only one pattern would have locked us out of half the market. The batch system processes CSVs asynchronously and notifies via webhooks, while the real-time system guarantees sub-2-second response times through connection pooling and cached government API routes.",
              },
              {
                question: "Why build compliance into the platform?",
                answer: "KYC without compliance is unusable in regulated industries — and nearly every KYC use case involves a regulated industry. Instead of making compliance an afterthought, we baked RBI, SEBI, and IRDAI rules directly into the verification engine. When a fintech calls our API, they don't need to separately check if they've met regulatory requirements — the API response includes compliance status. This turned a painful, error-prone manual process into a zero-effort automated one.",
              },
            ].map((decision) => (
              <div
                key={decision.question}
                className="bg-bg-secondary border border-border rounded-xl p-6"
              >
                <h3 className="font-semibold text-accent text-sm mb-2 font-display">{decision.question}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{decision.answer}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Verification Matrix */}
        <motion.section {...fadeIn} transition={{ delay: 0.4, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <FileCheck size={24} className="text-accent" />
            The Verification Matrix
          </h2>
          <p className="text-sm text-text-secondary mb-6 leading-relaxed">
            A comprehensive grid of every verification type supported by the platform — covering identity,
            financial, employment, and contact verification across India&apos;s major government and institutional databases.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {verificationMatrix.map((category) => (
              <div
                key={category.category}
                className="bg-bg-secondary border border-border rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                    {category.icon}
                  </div>
                  <div className="flex items-center justify-between flex-1">
                    <h3 className="font-semibold text-text-primary text-sm font-display">{category.category}</h3>
                    <span className="text-xs text-accent bg-accent-subtle px-2 py-0.5 rounded-full">
                      {category.types.length} types
                    </span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {category.types.map((type) => (
                    <li key={type} className="flex items-center gap-2 text-xs text-text-secondary">
                      <CheckCircle2 size={12} className="text-green-400 shrink-0" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Impact & Results */}
        <motion.section {...fadeIn} transition={{ delay: 0.45, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <BarChart3 size={24} className="text-accent" />
            Impact &amp; Results
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              {
                metric: "90% Faster Verification",
                detail: "Reduced KYC processing time from 3-5 days (manual review) to under 2 seconds (API-driven). Customers verified and onboarded in the same session.",
              },
              {
                metric: "60% Reduction in Fraud",
                detail: "AI-powered document analysis and liveness detection caught forged documents and identity theft attempts that manual reviewers consistently missed.",
              },
              {
                metric: "Enterprise Adoption",
                detail: "Multiple fintech companies, lending platforms, and HR tech products integrated the API into their onboarding workflows, processing thousands of verifications daily.",
              },
              {
                metric: "Developer-First Metrics",
                detail: "Average integration time dropped from weeks to hours. Comprehensive docs, sandbox environments, and SDK support meant developers could ship verification in a single sprint.",
              },
            ].map((result) => (
              <div
                key={result.metric}
                className="bg-bg-secondary border border-border rounded-xl p-5"
              >
                <h3 className="font-semibold text-accent text-sm mb-2 font-display">{result.metric}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{result.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* My Role */}
        <motion.section {...fadeIn} transition={{ delay: 0.5, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2 font-display">
            <Server size={24} className="text-accent" />
            My Role
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Owned the KYC vertical end-to-end at TartanHQ</strong> —
              from initial problem discovery and market research through to API design, developer experience,
              and go-to-market execution.
            </p>
            <div className="grid md:grid-cols-2 gap-3 mt-4">
              {[
                "Defined the product vision and roadmap for the entire KYC verification suite",
                "Designed the API architecture — endpoint structure, request/response schemas, error handling patterns",
                "Collaborated with engineering to build the verification engine connecting to government databases",
                "Owned the developer experience — API documentation, SDK design, sandbox environment",
                "Built the analytics dashboard for compliance teams to monitor verification metrics",
                "Worked with sales and partnerships to drive enterprise adoption and integration support",
                "Defined compliance requirements and worked with legal to ensure regulatory adherence",
                "Prioritised the verification roadmap — deciding which verification types to ship first based on market demand",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section {...fadeIn} transition={{ delay: 0.55, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 font-display">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "RESTful APIs",
              "Node.js",
              "Python",
              "Government API Integrations",
              "AI/ML (Document Analysis)",
              "Facial Recognition",
              "Webhook Architecture",
              "Redis (Caching)",
              "PostgreSQL",
              "Analytics Dashboard",
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
        <motion.section {...fadeIn} transition={{ delay: 0.6, duration: 0.5 }} className="mb-12">
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-8 text-center">
            <p className="text-lg font-semibold text-text-primary mb-2 font-display">
              Want to know more about this project?
            </p>
            <p className="text-sm text-text-secondary mb-6">
              Happy to walk through the product decisions, API architecture, or compliance design in detail.
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
