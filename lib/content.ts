export const siteConfig = {
  name: "Kartikeya Bahuguna",
  title: "Kartikeya Bahuguna | Senior Product Manager",
  description:
    "Senior Product Manager with 6+ years across health-tech, fintech, and B2B SaaS. Currently at Bupa Global. Based in Bristol, UK. Open to new opportunities.",
  email: "k.bahuguna0109@gmail.com",
  linkedin: "https://www.linkedin.com/in/kartikeya-bahuguna-924670bb/",
  portfolio:
    "https://rose-cup-00e.notion.site/KartikeyaB-Product-Management-Journey-17efdce6d4b48053a464cd30a5717848",
  location: "Bristol, UK",
  resumePath: "/KartikeyaBahuguna_Resume.pdf",
  headshot: "/kartikeya-headshot.png",
};

export const heroContent = {
  headline: "Product Manager",
  subHeadline: "Kartikeya Bahuguna",
  tagline:
    "Building products people rely on — from health-tech platforms serving 100K+ members to API-first products processing millions of calls monthly. Currently shaping the digital experience at Bupa Global.",
};

export const aboutContent = {
  short: `I'm a Product Manager who combines deep customer empathy with commercial sharpness. Over 6+ years across health-tech, fintech, and HR tech, I've built products that drive adoption, reduce cost, and open new revenue channels — from customer-facing apps serving 100K+ high-net-worth users to API-first platforms processing millions of calls monthly.

What sets me apart? I give engineering teams clarity on the "why" while trusting them with the "how." I'm the PM people come to when they need to untangle complexity, tell the right story, and ship something that actually matters.`,
  stats: [
    { value: "6+", label: "Years in Product" },
    { value: "100K+", label: "Platform Users" },
    { value: "5", label: "Industries Spanned" },
    { value: "30+", label: "Squad Members Led" },
  ],
};

export const metricsData = [
  { value: 100, suffix: "K+", label: "Platform Users" },
  { value: 15, suffix: "%", label: "NPS Growth" },
  { value: 40, suffix: "%", label: "Faster Integrations" },
  { value: 10, suffix: "+", label: "Products Shipped" },
];

export const experienceData = [
  {
    company: "Bupa Global",
    role: "Digital Product Manager (FTC)",
    location: "Bristol, UK",
    dates: "Aug 2025 – Present",
    highlights: [
      "Driving the digital experience for 100K+ high-net-worth IPMI members through MembersWorld, Bupa Global's flagship customer platform across web and app.",
      "Unlocking a double-digit million-dollar revenue channel through a strategic bancassurance partnership with a major international bank, including launching a predictive digital health offering.",
      "Lifted product NPS by 15% and increased automated pre-approval acceptance from 30% to 36% through systematic feedback loops and claims journey optimisation.",
    ],
    tags: [
      "Health-Tech",
      "IPMI",
      "Bancassurance",
      "NPS",
      "Digital Health",
      "Competitive Benchmarking",
      "Cross-Platform",
    ],
  },
  {
    company: "Joveo",
    role: "Product Manager II",
    location: "New Delhi, India (Remote with UK/US teams)",
    dates: "Oct 2023 – Jan 2025",
    highlights: [
      "Spearheaded a workflow automation platform that improved recruiter-candidate funnel conversion rates by ~20%, reducing manual tasks across 10K+ candidate workflows.",
      "Designed metrics frameworks with data science teams that drove experimentation for candidate re-engagement, increasing reapplication rates by 15%.",
      "Led backend data enrichment APIs powering real-time profile matching across thousands of active job postings.",
    ],
    tags: [
      "HR Tech",
      "Workflow Automation",
      "API",
      "Data Enrichment",
      "A/B Testing",
      "SaaS",
    ],
  },
  {
    company: "TartanHQ",
    role: "Senior Product Manager",
    location: "New Delhi, India",
    dates: "Jan 2022 – Oct 2023",
    highlights: [
      "Owned the product roadmap for payroll APIs enabling real-time income verification, reducing underwriting time by over 40% for fintech lenders and HR SaaS platforms.",
      "Launched a modular KYC/KYB engine improving pass-through rates while reducing fraud and manual reviews.",
      "Delivered developer-focused documentation and sandbox environments driving a 30% reduction in client integration time.",
    ],
    tags: [
      "Fintech",
      "API-First",
      "KYC/KYB",
      "Payroll",
      "Developer Experience",
      "Compliance",
    ],
  },
  {
    company: "Equifax",
    role: "Product Manager",
    location: "Mumbai, India",
    dates: "Jun 2020 – Jan 2022",
    highlights: [
      "Launched 10+ identity and verification APIs with 99.9% accuracy and sub-second response times in a highly regulated domain.",
      "Acted as India SPOC, co-creating 15+ regional business cases with global PMs and securing investment approval from SVPs.",
      "Improved B2B client onboarding journeys, reducing API implementation time by 40%.",
    ],
    tags: [
      "Identity Verification",
      "Regulation",
      "API",
      "B2B",
      "Global Product",
      "Business Cases",
    ],
  },
  {
    company: "KPMG",
    role: "Consultant",
    location: "Mumbai, India",
    dates: "May 2019 – Apr 2020",
    highlights: [
      "Translated complex operational risks into structured recommendations for BFSI clients, including a $2B bank's internal control framework.",
      "Led requirement gathering for a regulatory reporting automation tool, reducing turnaround time by 40%.",
    ],
    tags: [
      "Consulting",
      "BFSI",
      "Process Audit",
      "Regulatory",
      "Power BI",
      "Compliance",
    ],
  },
];

export const sideProjectsData = [
  {
    title: "Product Buddy",
    status: "In Development",
    description:
      "An opinionated, context-aware PM toolkit powered by 311 episodes of Lenny's Podcast (4.74M words). 23 structured tools across 7 problem areas — from writing PRDs to preparing for exec reviews — all grounded in real practitioner wisdom.",
    builtWith: "Next.js, Claude AI, RAG Pipeline, Tailwind CSS, Vercel",
    type: "Side Project — Full Product Lifecycle",
    link: null,
    internalLink: "/projects/product-buddy",
  },
  {
    title: "F1 Intelligence",
    status: "Live",
    description:
      "A web app for Formula 1 enthusiasts — real-time data, insights, and analysis for F1 nerds.",
    builtWith:
      "ChatGPT & Figma (product docs & design), Emergent & Claude Code (development), Vercel & Railway (deployment)",
    type: "Side Project — Shipped",
    link: "https://f1intelligence.vercel.app/",
  },
  {
    title: "Gym Management SaaS Platform",
    status: "In Development",
    description:
      "A two-sided platform to digitize gym operations and enhance fitness journeys for members. Covers onboarding, personal training, payments, analytics, and in-app communication.",
    builtWith: "Lovable.dev, Cursor AI, ChatPRD, ChatGPT, Figma",
    type: "Side Project — Full Product Lifecycle",
    link: null,
  },
  {
    title: "Notion Portfolio",
    status: "Live",
    description:
      "A comprehensive product management portfolio documenting my product journey, case studies, and frameworks.",
    builtWith: "Notion",
    type: "Portfolio",
    link: "https://rose-cup-00e.notion.site/KartikeyaB-Product-Management-Journey-17efdce6d4b48053a464cd30a5717848",
  },
];

export const professionalProjectsData = [
  {
    title: "Automated Workflows for Recruiters",
    company: "Joveo",
    status: "Shipped",
    description:
      "Spearheaded a drag-and-drop workflow automation platform that eliminated manual recruiter tasks — auto-screening, interview scheduling, and follow-ups — reducing repetitive work by 50%.",
    impact: "50% reduction in manual tasks",
    tags: ["HR Tech", "Workflow Automation", "CRM"],
    internalLink: "/projects/automated-workflows",
  },
  {
    title: "Recruitment Marketing CRM",
    company: "Joveo",
    status: "Shipped",
    description:
      "Led the end-to-end development of a full-stack Recruitment CRM with AI-powered Talent Match scoring, automated email/SMS campaigns, and unified candidate profiles — boosting recruiter efficiency by 60%.",
    impact: "60% reduction in recruiter workload",
    tags: ["HR Tech", "AI/ML", "SaaS", "CRM"],
    internalLink: "/projects/recruitment-crm",
  },
  {
    title: "API-Driven Income & Work Verification",
    company: "TartanHQ",
    status: "Shipped",
    description:
      "Built an API-first income and employment verification solution with real-time HRMS integrations and AI-powered payslip fraud detection — cutting verification time from days to minutes.",
    impact: "80% faster verification turnaround",
    tags: ["Fintech", "API-First", "Fraud Detection", "OCR"],
    internalLink: "/projects/income-verification",
  },
  {
    title: "KYC Vertical — Identity Verification Suite",
    company: "TartanHQ",
    status: "Shipped",
    description:
      "Built a comprehensive KYC verification suite with real-time API-driven identity, financial, and address verification — reducing verification time by 90% and fraud cases by 60%.",
    impact: "90% faster KYC verification",
    tags: ["Fintech", "KYC", "Compliance", "API"],
    internalLink: "/projects/kyc-vertical",
  },
  {
    title: "B2B Onboardings — HRMS Sync Dashboard",
    company: "TartanHQ",
    status: "Shipped",
    description:
      "Led the development of an API-driven HRMS sync platform enabling enterprises to bulk onboard employees, sync workforce data, and automate payroll/insurance integrations at 10x speed.",
    impact: "10x faster employee onboarding",
    tags: ["B2B", "HRMS", "API Platform", "Enterprise"],
    internalLink: "/projects/b2b-onboardings",
  },
  {
    title: "New Product Initiatives (NPI) at Equifax India",
    company: "Equifax",
    status: "Shipped",
    description:
      "Acted as India SPOC driving 10+ identity and verification APIs with 99.9% accuracy, co-created 15+ regional business cases with global PMs, and reduced B2B client API integration time by 40%.",
    impact: "10+ APIs launched, 40% faster integrations",
    tags: ["Identity Verification", "Global PM", "B2B", "API"],
    internalLink: "/projects/equifax-npi",
  },
];

// Combined for backward compatibility
export const projectsData = [...sideProjectsData];

export const skillsData = [
  {
    category: "Strategy & Commercial",
    icon: "Target",
    skills:
      "Product Strategy, Roadmapping, Competitive Analysis, GTM Planning, Pricing & Packaging, Feature Prioritisation (RICE, MoSCoW, KANO), OKR/KPI Development, Market Research, Customer Development, JTBD, Value Stream Mapping",
  },
  {
    category: "API & Platform",
    icon: "Code",
    skills:
      "REST API Design, API Documentation, Developer Onboarding, Sandbox Environments, Integration Workflows, Data Enrichment, B2B SaaS Platforms",
  },
  {
    category: "Agile & Delivery",
    icon: "Zap",
    skills:
      "Sprint Planning, Backlog Management, User Story Writing, UAT, Scrum, Kanban, Lean Product Management, Product Discovery, Cross-Functional Squad Leadership",
  },
  {
    category: "UX & Design",
    icon: "Palette",
    skills:
      "Wireframing, Prototyping (Low/High Fidelity), Design Thinking, User Research, Persona Development, Feedback Analysis, UI/UX Collaboration",
  },
  {
    category: "AI & Rapid Prototyping",
    icon: "Sparkles",
    skills:
      "AI-Assisted Product Development, Lovable, Cursor AI, Claude, Claude Code, Emergent, ChatPRD, Vibe Coding, Prompt Engineering",
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills:
      "Jira, Confluence, Notion, Aha!, Figma, Miro, Amplitude, Google Analytics, Snowflake, Superset, SQL, Power BI, Vercel, Railway, GitHub",
  },
];

export const shipLogEntries = [
  "[2025] Launched predictive digital health offering @ Bupa Global",
  "[2025] Shipped bancassurance partnership → $XX M revenue channel",
  "[2025] NPS +15% | Auto pre-approval 30% → 36% @ Bupa",
  "[2024] Workflow automation platform → 20% conversion uplift @ Joveo",
  "[2023] Payroll APIs → 40% faster underwriting @ TartanHQ",
  "[2022] KYC/KYB engine launched → reduced fraud @ TartanHQ",
  "[2021] 10+ verification APIs shipped (99.9% accuracy) @ Equifax",
  "[2020] Regulatory automation → 40% faster reporting @ KPMG",
  "[2025] Building gym SaaS platform → side project [in progress]",
  "[2025] F1 Intelligence web app → shipped & live",
];

export const productBriefLines = [
  '// WHO',
  'name: "Kartikeya Bahuguna"',
  'title: Senior Product Manager',
  'location: Bristol, UK',
  'education: MBA (IIM Kashipur) · B.Tech (CS)',
  '',
  '// STATUS',
  'current: Digital Product Manager @ Bupa Global',
  'open_to: Senior PM · Product Lead · B2B SaaS · Health-Tech · Fintech',
  'availability: Open to new roles',
  '',
  '// TRACK RECORD',
  'bupa: MembersWorld (100K+ users) · Bancassurance · Digital Health',
  'joveo: Workflow Automation · 20% conversion uplift',
  'tartanhq: Payroll APIs · KYC/KYB · 40% faster underwriting',
  'equifax: 10+ Verification APIs · 99.9% accuracy · Global PM',
  '',
  '// BUILDING',
  'side_projects: Gym SaaS Platform · F1 Intelligence (live)',
  'tools: Lovable · Cursor AI · Claude Code · Figma',
  '',
  '// SUPERPOWER',
  'approach: "Clarity on the why. Trust on the how."',
];

export const commandPaletteItems = [
  {
    category: "Navigation",
    items: [
      { label: "Home", action: "scroll", target: "hero" },
      { label: "About", action: "scroll", target: "about" },
      { label: "Experience", action: "scroll", target: "experience" },
      { label: "Projects", action: "scroll", target: "projects" },
      { label: "Skills", action: "scroll", target: "skills" },
      { label: "Contact", action: "scroll", target: "contact" },
    ],
  },
  {
    category: "Actions",
    items: [
      { label: "Download Resume", action: "download", target: "/KartikeyaBahuguna_Resume.pdf" },
      { label: "Open LinkedIn", action: "link", target: "https://www.linkedin.com/in/kartikeya-bahuguna-924670bb/" },
      { label: "Open Portfolio (Notion)", action: "link", target: "https://rose-cup-00e.notion.site/KartikeyaB-Product-Management-Journey-17efdce6d4b48053a464cd30a5717848" },
      { label: "Send Email", action: "link", target: "mailto:k.bahuguna0109@gmail.com" },
      { label: "Toggle Dark/Light Mode", action: "theme", target: "" },
    ],
  },
  {
    category: "Projects",
    items: [
      { label: "F1 Intelligence", action: "link", target: "https://f1intelligence.vercel.app/" },
      { label: "Gym SaaS Platform", action: "none", target: "" },
    ],
  },
];
