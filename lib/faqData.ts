export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQ[] = [
  {
    category: "Experience",
    question: "What's your current role?",
    answer:
      "I'm a Digital Product Manager at Bupa Global, where I own MembersWorld — the customer-facing platform that 100K+ high-net-worth international health insurance members use to manage their policies, submit claims, and access healthcare. I lead a cross-platform squad of 30+ across web and app, and I've been driving some exciting initiatives like a major bancassurance partnership and a predictive digital health offering.",
  },
  {
    category: "Experience",
    question: "How many years of experience do you have?",
    answer:
      "6+ years in product management, spanning health-tech, fintech, HR tech, and identity verification. Before product, I started my career at KPMG in consulting, which gave me a strong foundation in business analysis, stakeholder management, and working in regulated environments.",
  },
  {
    category: "Experience",
    question: "What industries have you worked in?",
    answer:
      "I've worked across five industries: health-tech and insurance (Bupa Global), HR tech and recruitment (Joveo), fintech and lending (TartanHQ), identity verification and credit (Equifax), and financial consulting (KPMG). This breadth means I can ramp up quickly in new domains and bring cross-industry perspectives to product decisions.",
  },
  {
    category: "Experience",
    question: "Tell me about your biggest achievement",
    answer:
      "At Bupa, I led the digital workstream for a strategic bancassurance partnership with a major international bank — tailoring our platform with exclusive product tiers, co-branded features, and a predictive digital health offering. This is unlocking a double-digit million-dollar revenue channel for Bupa. It was complex, spanning 6+ months of stakeholder alignment, but seeing it come together has been incredibly rewarding.",
  },
  {
    category: "Skills",
    question: "What type of products have you built?",
    answer:
      "I've built across the spectrum — customer-facing apps serving 100K+ users, API-first platforms processing millions of identity calls monthly, developer-facing documentation and sandbox tools, workflow automation systems, and internal tools that improved operational efficiency. I'm equally comfortable with B2B and B2C, and I love the challenge of API/platform products where you're serving both end-users and developers.",
  },
  {
    category: "Skills",
    question: "How do you work with engineering teams?",
    answer:
      "I believe my job is to give engineering teams clarity on the 'why' — the user problem, the business context, the impact — while trusting them with the 'how.' I write detailed user stories that focus on outcomes rather than prescribing solutions, and I make sure engineers understand how their work ties back to our goals. My engineering leads would tell you I'm accommodative, collaborative, and I take the time to explain impact rather than just throwing tickets over the wall.",
  },
  {
    category: "Skills",
    question: "What's your experience with APIs and platform products?",
    answer:
      "APIs are a core part of my product DNA. At Equifax, I launched 10+ identity verification APIs with 99.9% accuracy and sub-second response times. At TartanHQ, I owned payroll APIs used by fintech lenders, processing millions of calls monthly. I've built developer-focused documentation, sandbox environments, and onboarding flows that reduced integration time by 30-40%. I understand REST API design, developer experience, and the unique challenges of serving technical users.",
  },
  {
    category: "Skills",
    question: "Do you have experience with AI?",
    answer:
      "Yes — both professionally and personally. At Bupa, I'm driving the launch of a predictive digital health offering. On the side, I actively use AI-assisted development tools like Lovable, Cursor AI, Claude Code, and Emergent to build real products — including a gym management SaaS platform and an F1 web app. I'm not just talking about AI; I'm shipping with it.",
  },
  {
    category: "Job Search",
    question: "What roles are you looking for?",
    answer:
      "I'm targeting Senior Product Manager roles in health-tech, fintech, or B2B SaaS across the UK. I'm drawn to companies where I can own a meaningful product surface, work with smart cross-functional teams, and drive measurable business impact. I'm open to both permanent and contract opportunities.",
  },
  {
    category: "Job Search",
    question: "Are you authorised to work in the UK?",
    answer: "Yes, I'm based in Bristol, UK and have the right to work here.",
  },
  {
    category: "Job Search",
    question: "Why are you looking to move?",
    answer:
      "My current role at Bupa is a fixed-term contract, so I'm proactively looking for my next opportunity. I've had a great experience at Bupa — I've shipped meaningful work and grown as a product leader — and I'm excited to take that momentum into a new challenge.",
  },
  {
    category: "Job Search",
    question: "What's your notice period?",
    answer:
      "I'm on a fixed-term contract, so my availability is flexible. Best to discuss specifics directly — feel free to reach out via email or LinkedIn.",
  },
  {
    category: "Side Projects",
    question: "What's your educational background?",
    answer:
      "I have an MBA from the Indian Institute of Management (IIM) Kashipur, where I focused on Marketing, Analytics, Product Management, and Strategy. Before that, I did my B.Tech in Computer Science Engineering from Rajasthan Technical University. The combination gives me both business acumen and technical fluency.",
  },
  {
    category: "Side Projects",
    question: "Tell me about your side projects",
    answer:
      "I'm currently building two things. First, a two-sided gym management SaaS platform — I'm using AI tools like Lovable, Cursor AI, and ChatPRD to go from PRD to working prototype. Second, F1 Intelligence (f1intelligence.vercel.app) — a web app for F1 fans, built with Emergent, Claude Code, and deployed on Vercel and Railway. These projects keep me sharp and let me experiment with the latest product and development tools.",
  },
  {
    category: "Culture",
    question: "What motivates you as a PM?",
    answer:
      "I'm driven by solving tangible problems for real people. The idea of fitting into the life of consumers — understanding how technology can genuinely make their experience better — that's what gets me out of bed. I also love the storytelling side of product management: tying together the user need, the business case, and the technical approach into a narrative that the whole team can rally behind.",
  },
  {
    category: "Culture",
    question: "How would your team describe you?",
    answer:
      "I think they'd say I'm empathetic, thorough, and someone who gives them space to do their best work. I take time to explain the 'why' behind what we're building, I'm accommodative when problems come up, and I keep the team on track without micromanaging. I also genuinely care about the people I work with — I still have great relationships with former team members and direct reports.",
  },
  {
    category: "Other",
    question: "Other / I have a different question",
    answer:
      "Great — I'd love to hear from you directly! You can reach me at:\n\nk.bahuguna0109@gmail.com\nlinkedin.com/in/kartikeya-bahuguna-924670bb/\n\nI typically respond within 24 hours. Looking forward to connecting!",
  },
];

export const faqCategories = [
  "Experience",
  "Skills",
  "Job Search",
  "Side Projects",
  "Culture",
  "Other",
];
