"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Zap, Target, Users, Brain, BarChart3, Layers, BookOpen, Lightbulb, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const screenshots = [
  { src: "/product-buddy/hero.png", alt: "Product Buddy — Hero section with tagline: Think like the best PMs in the world", caption: "Landing page — Bold positioning backed by 311 podcast episodes" },
  { src: "/product-buddy/problem.png", alt: "The Problem section — You don't have an information problem, you have an application problem", caption: "Problem framing — Bridging the gap between knowing and doing" },
  { src: "/product-buddy/solution.png", alt: "Solution section — The world's best product thinking turned into tools", caption: "Core value proposition — Expert-backed, structured tools not chatbot responses" },
  { src: "/product-buddy/comparison.png", alt: "Before vs After Product Buddy comparison", caption: "Before vs After — Clear differentiation from generic AI" },
  { src: "/product-buddy/how-it-works.png", alt: "Three-step process: Pick a Tool, Add Context, Get Expert Output", caption: "How it works — Three steps from question to expert-backed output" },
  { src: "/product-buddy/personas.png", alt: "Built for people who build products — PM, Founders, Business Owners, Team Leads", caption: "Personas — Adapts to PMs, founders, business owners, and team leads" },
  { src: "/product-buddy/tools.png", alt: "23 tools across 7 problem areas", caption: "Tool clusters — 23 tools organised across 7 problem areas" },
  { src: "/product-buddy/experts.png", alt: "Powered by the world's best product minds — Shreyas Doshi, Marty Cagan, Teresa Torres", caption: "Expert credibility — Every recommendation traced to named practitioners" },
  { src: "/product-buddy/tool-detail.png", alt: "Discovery & Understanding cluster with tools like User Interview Question Builder", caption: "Tool detail — Deep tooling for discovery, artefact creation, and more" },
];

export default function ProductBuddyPage() {
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
            <span className="text-2xl">⚡</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-subtle text-accent">
              In Development
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Product Buddy
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-[800px]">
            The opinionated, context-aware PM toolkit — powered by 311 episodes of Lenny&apos;s Podcast,
            4.74 million words, and the wisdom of 300+ world-class practitioners.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: "311", label: "Podcast Episodes" },
            { value: "4.74M", label: "Words Indexed" },
            { value: "23", label: "Phase 1 Tools" },
            { value: "7", label: "Problem Areas" },
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

        {/* Hero Screenshot */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-16"
        >
          <div className="rounded-xl overflow-hidden border border-border shadow-2xl">
            <Image
              src="/product-buddy/hero.png"
              alt="Product Buddy landing page"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-text-tertiary text-center mt-3">
            Product Buddy — Landing page
          </p>
        </motion.div>

        {/* Why I'm Building This */}
        <motion.section {...fadeIn} transition={{ delay: 0.2, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Lightbulb size={24} className="text-accent" />
            Why I&apos;m Building This
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              Lenny&apos;s Podcast is the single greatest concentration of real, practitioner-level product wisdom
              ever assembled. Shreyas Doshi on prioritisation. Marty Cagan on empowered teams. Teresa Torres on
              continuous discovery. April Dunford on positioning. 311 episodes. 4.74 million words.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">But it sits there passively.</strong> You consume it on your commute.
              You can&apos;t ask it a question. You can&apos;t say: &ldquo;I have this specific situation at work right now —
              what does the collective wisdom of every expert you&apos;ve ever interviewed have to say about it?&rdquo;
            </p>
            <p className="text-text-secondary leading-relaxed">
              Product Buddy answers that question. Not as a chatbot that mimics intelligence. As a{" "}
              <strong className="text-text-primary">toolkit — opinionated, structured, and grounded</strong> in what
              practitioners actually do. The difference is the difference between a library and a consultant.
              Both have the same knowledge. Only one applies it to your specific situation.
            </p>
          </div>
        </motion.section>

        {/* The Problem */}
        <motion.section {...fadeIn} transition={{ delay: 0.25, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Target size={24} className="text-accent" />
            The Problem
          </h2>
          <div className="rounded-xl overflow-hidden border border-border shadow-lg mb-6">
            <Image
              src="/product-buddy/problem.png"
              alt="The Problem — You don't have an information problem"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="bg-bg-secondary border border-border rounded-xl p-6">
            <p className="text-text-secondary leading-relaxed mb-4">
              Product management is one of the most context-dependent, judgement-heavy roles in technology.
              Every decision is a tradeoff. Every roadmap is a hypothesis. Every stakeholder meeting is a negotiation.
              There are no right answers — only better-reasoned ones.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Yet the majority of PMs, founders, and builders face these decisions alone — without a senior PM mentor,
              without access to real-world examples, without structured frameworks applied to their specific context.
            </p>
          </div>
        </motion.section>

        {/* Why Not Just Use ChatGPT? */}
        <motion.section {...fadeIn} transition={{ delay: 0.3, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Brain size={24} className="text-accent" />
            Why Not Just Use ChatGPT?
          </h2>
          <div className="rounded-xl overflow-hidden border border-border shadow-lg mb-6">
            <Image
              src="/product-buddy/comparison.png"
              alt="Before vs After Product Buddy"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-bg-secondary border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <XCircle size={18} className="text-red-400" />
                <h3 className="font-semibold text-text-primary text-sm">Generic AI Tools</h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Max ~17% of the corpus fits in context window</li>
                <li>• Blank box — you must know what to ask</li>
                <li>• Prose advice — unstructured, not usable</li>
                <li>• Zero memory — starts fresh every time</li>
                <li>• No attribution — can&apos;t verify claims</li>
                <li>• Individual only — no team layer</li>
              </ul>
            </div>
            <div className="bg-bg-secondary border border-accent/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 size={18} className="text-success" />
                <h3 className="font-semibold text-text-primary text-sm">Product Buddy</h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Full 311-episode corpus via RAG retrieval</li>
                <li>• Job-first tools — the structure does the framing</li>
                <li>• Structured artefacts — ready to share or act on</li>
                <li>• Persistent context profile that compounds</li>
                <li>• Every claim traced to named practitioners</li>
                <li>• Shared team profiles and playbooks</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Product Architecture */}
        <motion.section {...fadeIn} transition={{ delay: 0.35, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Layers size={24} className="text-accent" />
            Product Architecture — Three Layers
          </h2>
          <div className="space-y-4">
            {[
              {
                layer: "Layer 1",
                title: "Pre-Built Expert Tools",
                desc: "23 structured tools across 7 problem areas. Each one built on real frameworks from named practitioners. PRD Builder, OKR Builder, Exec Review Prep, Stakeholder Alignment Checker, and more.",
                icon: <Zap size={20} />,
              },
              {
                layer: "Layer 2",
                title: "Context Profile System",
                desc: "Your company stage, team size, leadership style shape every output. Two PMs get different answers to the same question — because their contexts are different.",
                icon: <Users size={20} />,
              },
              {
                layer: "Layer 3",
                title: "Open-Ended Expert Chat",
                desc: "Ask any product question and get an answer grounded in the full corpus. Every claim traceable to a specific guest and episode. Not generic AI — expert-backed intelligence.",
                icon: <BookOpen size={20} />,
              },
            ].map((layer) => (
              <div
                key={layer.layer}
                className="bg-bg-secondary border border-border rounded-xl p-6 flex gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  {layer.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-accent font-mono">{layer.layer}</span>
                    <h3 className="font-semibold text-text-primary">{layer.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* The 23 Tools */}
        <motion.section {...fadeIn} transition={{ delay: 0.4, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <BarChart3 size={24} className="text-accent" />
            23 Tools Across 7 Problem Areas
          </h2>
          <div className="rounded-xl overflow-hidden border border-border shadow-lg mb-6">
            <Image
              src="/product-buddy/tools.png"
              alt="23 tools across 7 problem areas"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { cluster: "Discovery & Understanding", tools: ["User Interview Question Builder", "Opportunity Solution Tree Builder", "Assumption Mapping Tool", "Customer Problem Validator"], count: 4 },
              { cluster: "Artefact Creation", tools: ["PRD Builder", "One-Pager Builder", "Product Strategy Builder", "OKR Builder", "JTBD Statement Writer"], count: 5 },
              { cluster: "Prioritisation & Decisions", tools: ["Backlog Prioritisation Tool", "Tradeoff Articulator", "Feature vs Problem Reframer", "Now/Next/Later Roadmap"], count: 4 },
              { cluster: "Stakeholder & Communication", tools: ["Exec Review Prep", "Stakeholder Alignment Checker", "Roadmap Pitch Builder", "Difficult Conversation Planner"], count: 4 },
              { cluster: "Metrics & Goals", tools: ["North Star Definer", "Metrics Health Checker"], count: 2 },
              { cluster: "Validation & Positioning", tools: ["Business Idea Validator", "Positioning Builder"], count: 2 },
              { cluster: "Reflection & Growth", tools: ["Weekly Reflection Tool", "Release Comms Builder"], count: 2 },
            ].map((cluster) => (
              <div
                key={cluster.cluster}
                className="bg-bg-secondary border border-border rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-text-primary text-sm">{cluster.cluster}</h3>
                  <span className="text-xs text-accent bg-accent-subtle px-2 py-0.5 rounded-full">
                    {cluster.count} tools
                  </span>
                </div>
                <ul className="text-xs text-text-secondary space-y-1">
                  {cluster.tools.map((tool) => (
                    <li key={tool}>• {tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Jobs to be Done */}
        <motion.section {...fadeIn} transition={{ delay: 0.45, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Target size={24} className="text-accent" />
            Jobs to Be Done
          </h2>
          <div className="space-y-3">
            {[
              { emoji: "😰", job: "The Confidence Check", trigger: "\"I've written this PRD but I'm not fully confident it's good. Am I missing something?\"", freq: "Weekly" },
              { emoji: "🤔", job: "The Decision Unlock", trigger: "\"I'm genuinely stuck. Should I kill this feature? Push back on sales? I don't know if I'm framing this correctly.\"", freq: "Monthly" },
              { emoji: "🏃", job: "The Running Start", trigger: "\"First product strategy. First exec presentation. I need to not embarrass myself and not start from zero.\"", freq: "Career transitions" },
              { emoji: "👥", job: "The Team Standard", trigger: "\"I want my whole team working from the same playbook, using the same frameworks.\"", freq: "Ongoing" },
              { emoji: "📈", job: "The Friday Reflection", trigger: "\"I want to get better over time and I want to see it. I want my growth to be visible.\"", freq: "Weekly" },
            ].map((jtbd) => (
              <div
                key={jtbd.job}
                className="bg-bg-secondary border border-border rounded-xl p-5 flex gap-4"
              >
                <span className="text-2xl shrink-0">{jtbd.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-text-primary text-sm">{jtbd.job}</h3>
                    <span className="text-xs text-text-tertiary">{jtbd.freq}</span>
                  </div>
                  <p className="text-sm text-text-secondary italic">{jtbd.trigger}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Target Users */}
        <motion.section {...fadeIn} transition={{ delay: 0.5, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Users size={24} className="text-accent" />
            Who It&apos;s For
          </h2>
          <div className="rounded-xl overflow-hidden border border-border shadow-lg mb-6">
            <Image
              src="/product-buddy/personas.png"
              alt="Built for people who build products"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Product Managers", desc: "Write better PRDs, prepare for exec reviews, and make confident prioritisation calls — backed by frameworks from the world's best practitioners." },
              { title: "Founders", desc: "Validate your idea, define positioning, and make roadmap decisions without a Head of Product — using the same thinking as the best founders." },
              { title: "Business Owners", desc: "Understand your customers, decide what to focus on, and put your thinking on paper — no PM jargon required." },
              { title: "Team Leads", desc: "Give your team a shared playbook and consistent standards for product decisions across the organisation." },
            ].map((persona) => (
              <div
                key={persona.title}
                className="bg-bg-secondary border border-border rounded-xl p-5"
              >
                <h3 className="font-semibold text-text-primary mb-2">{persona.title}</h3>
                <p className="text-sm text-text-secondary">{persona.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* More Screenshots Gallery */}
        <motion.section {...fadeIn} transition={{ delay: 0.55, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Layers size={24} className="text-accent" />
            Product Screenshots
          </h2>
          <div className="space-y-6">
            {screenshots.slice(2).map((screenshot) => (
              <div key={screenshot.src}>
                <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={1400}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xs text-text-tertiary text-center mt-2">
                  {screenshot.caption}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* My Approach */}
        <motion.section {...fadeIn} transition={{ delay: 0.6, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Zap size={24} className="text-accent" />
            My Approach
          </h2>
          <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              I&apos;m building Product Buddy the way I&apos;d build any product — starting with the problem,
              validating with real users, and iterating fast. The 56-page product spec covers everything from
              JTBD analysis to technical architecture to monetisation strategy.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-text-primary text-sm mb-2">Phase 1</h4>
                <p className="text-xs text-text-secondary">23 core tools + context profiles + RAG pipeline. Individual PM focus.</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-text-primary text-sm mb-2">Phase 2</h4>
                <p className="text-xs text-text-secondary">Team workspaces, shared playbooks, PM skill tracker, analytics dashboards.</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-text-primary text-sm mb-2">Phase 3</h4>
                <p className="text-xs text-text-secondary">Enterprise features, API integrations (Jira, Confluence), custom corpus support.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section {...fadeIn} transition={{ delay: 0.65, duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Claude AI (Anthropic)", "RAG Pipeline", "Semantic Search", "Supabase", "Vercel", "Framer Motion"].map((tech) => (
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
        <motion.section {...fadeIn} transition={{ delay: 0.7, duration: 0.5 }} className="mb-12">
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-8 text-center">
            <p className="text-lg font-semibold text-text-primary mb-2">
              Interested in Product Buddy?
            </p>
            <p className="text-sm text-text-secondary mb-6">
              This project is currently in active development. Want to learn more or get early access?
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
