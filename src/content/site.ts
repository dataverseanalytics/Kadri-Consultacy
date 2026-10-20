import {
  BrainCircuit,
  Building2,
  Cloud,
  Code2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  LifeBuoy,
  PenTool,
  Plane,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * All site copy lives here. Edit text, numbers, images and contact details in
 * this file — components only handle layout.
 *
 * NOTE: stats, case studies and testimonials are realistic placeholders.
 * Replace them with real figures and client quotes before going live.
 */

export const company = {
  name: "Kadri Consultancy",
  short: "Kadri",
  tagline: "IT consulting & software delivery",
  email: "hello@kadriconsultancy.com",
  phone: "+91 73836 78267",
  phoneHref: "tel:+917383678267",
  whatsappHref: "https://wa.me/917383678267",
  location: "Remote-first · Serving clients worldwide",
  hours: "Mon–Fri, 9:00–18:00 IST",
  social: {
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
    instagram: "https://www.instagram.com/",
    github: "https://github.com/",
  },
};

export const mainNav = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Case studies" },
  { href: "/#process", label: "How we work" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 94, suffix: "%", label: "Shipped on or before the agreed date" },
  { value: 12, suffix: "", label: "Industries served" },
  { value: 4.9, suffix: "/5", label: "Average client rating", decimals: 1 },
];

/* -------------------------------------------------------------------------- */
/* Services                                                                    */
/* -------------------------------------------------------------------------- */

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  desc: string;
  image: string;
  idealFor: string;
  features: { title: string; desc: string }[];
  deliverables: string[];
  tags: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    icon: Code2,
    title: "Custom Software Development",
    short: "Portals, platforms and business apps",
    desc: "Business applications, portals and platforms engineered around how your organisation actually works — secure, scalable and easy to extend.",
    image: "/images/svc-custom.jpg",
    idealFor: "Companies replacing spreadsheets, legacy tools or off-the-shelf software that no longer fits.",
    features: [
      { title: "Web platforms & portals", desc: "Customer, partner and employee portals with role-based access and audit trails." },
      { title: "Internal tools", desc: "Back-office apps that automate approvals, reporting and repetitive work." },
      { title: "SaaS products", desc: "Multi-tenant products with billing, onboarding and admin built in." },
      { title: "APIs & integrations", desc: "Clean, documented APIs that connect your ERP, CRM, payments and partners." },
    ],
    deliverables: ["Solution architecture", "Production-ready codebase", "Automated tests & CI/CD", "Technical documentation"],
    tags: ["React", "Node.js", ".NET", "Python", "PostgreSQL"],
  },
  {
    slug: "web-and-mobile-apps",
    icon: Smartphone,
    title: "Web & Mobile Apps",
    short: "Web, iOS and Android products",
    desc: "Responsive web apps and native-quality iOS and Android apps from a single, maintainable codebase — designed to convert and built to last.",
    image: "/images/svc-apps.jpg",
    idealFor: "Founders launching an MVP and businesses taking their service to mobile.",
    features: [
      { title: "MVP development", desc: "Launch a focused first version in weeks and learn from real users." },
      { title: "Cross-platform apps", desc: "One codebase for iOS and Android with React Native or Flutter." },
      { title: "Progressive web apps", desc: "Fast, installable web apps that work offline and rank in search." },
      { title: "App store launch", desc: "Store listings, review guidelines, analytics and crash reporting handled." },
    ],
    deliverables: ["Clickable prototype", "iOS & Android builds", "Admin dashboard", "Store submission"],
    tags: ["Next.js", "React Native", "Flutter", "Firebase"],
  },
  {
    slug: "cloud-and-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    short: "Migration, CI/CD and infrastructure",
    desc: "Cloud architecture, migration, CI/CD pipelines and infrastructure-as-code that scales smoothly — without surprises on the monthly bill.",
    image: "/images/svc-cloud.jpg",
    idealFor: "Teams moving off on-premise servers or struggling with slow, manual releases.",
    features: [
      { title: "Cloud migration", desc: "Plan and execute moves to AWS, Azure or Google Cloud with zero-drama cutovers." },
      { title: "CI/CD pipelines", desc: "Automated build, test and deploy so releases take minutes, not days." },
      { title: "Infrastructure as code", desc: "Reproducible environments with Terraform and container orchestration." },
      { title: "Cost optimisation", desc: "Right-sizing, reserved capacity and monitoring that cut cloud spend." },
    ],
    deliverables: ["Cloud architecture plan", "Migration runbook", "CI/CD pipelines", "Monitoring & alerting"],
    tags: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
  },
  {
    slug: "data-and-ai",
    icon: BrainCircuit,
    title: "Data & AI Solutions",
    short: "Dashboards, automation and AI features",
    desc: "Dashboards, data pipelines and practical AI features — intelligent search, assistants and automation that save your team real hours.",
    image: "/images/svc-ai.jpg",
    idealFor: "Businesses sitting on data they can't easily use, or curious where AI can genuinely help.",
    features: [
      { title: "AI assistants & chatbots", desc: "Assistants grounded in your own documents and systems, with guardrails." },
      { title: "Process automation", desc: "Automate document handling, data entry and routine decisions." },
      { title: "BI dashboards", desc: "Live dashboards leadership can read in two minutes." },
      { title: "Data engineering", desc: "Reliable pipelines that bring scattered data into one trusted place." },
    ],
    deliverables: ["AI opportunity assessment", "Proof of concept", "Production rollout", "Usage & accuracy reporting"],
    tags: ["LLMs", "Python", "Analytics", "Automation"],
  },
  {
    slug: "ui-ux-design",
    icon: PenTool,
    title: "UI/UX & Product Design",
    short: "Research, prototypes and interfaces",
    desc: "User research, wireframes and polished interfaces — validated with clickable prototypes before a single line of code is written.",
    image: "/images/svc-design.jpg",
    idealFor: "Products that need to look credible, convert better or simply be easier to use.",
    features: [
      { title: "User research", desc: "Interviews and usability tests that reveal what users actually need." },
      { title: "Wireframes & prototypes", desc: "Clickable prototypes you can test with customers in days." },
      { title: "Visual design", desc: "Modern, on-brand interfaces for web and mobile." },
      { title: "Design systems", desc: "Reusable components that keep products consistent as they grow." },
    ],
    deliverables: ["Research findings", "User flows & wireframes", "High-fidelity designs", "Design system in Figma"],
    tags: ["Figma", "Prototyping", "Design systems", "Usability testing"],
  },
  {
    slug: "it-staff-augmentation",
    icon: Users,
    title: "IT Staff Augmentation",
    short: "Vetted engineers within days",
    desc: "Add pre-vetted developers, testers or project managers to your team within days — working in your tools, your process and your time zone.",
    image: "/images/svc-team.jpg",
    idealFor: "Product teams with a growing backlog and no time for a long hiring cycle.",
    features: [
      { title: "Dedicated developers", desc: "Full-time engineers who join your stand-ups and ship in your repos." },
      { title: "Extended squads", desc: "A ready-made team — developers, QA and a delivery lead." },
      { title: "Flexible scaling", desc: "Scale up for a launch, scale down after, with 30 days' notice." },
      { title: "Managed quality", desc: "Code reviews, performance check-ins and replacements at no cost." },
    ],
    deliverables: ["Shortlisted profiles in 72 hours", "Onboarding plan", "Monthly performance reports", "Knowledge-transfer docs"],
    tags: ["Developers", "QA engineers", "Project managers", "DevOps"],
  },
  {
    slug: "qa-and-security-testing",
    icon: ShieldCheck,
    title: "QA & Security Testing",
    short: "Automated, performance and security tests",
    desc: "Manual and automated testing, performance checks and security reviews — so issues are caught before they ever reach your users.",
    image: "/images/svc-qa.jpg",
    idealFor: "Teams preparing for a launch, an audit, or tired of bugs slipping into production.",
    features: [
      { title: "Test automation", desc: "Automated UI and API test suites that run on every change." },
      { title: "Performance testing", desc: "Load and stress tests that prove your system handles peak traffic." },
      { title: "Security assessment", desc: "Vulnerability scans and OWASP-based reviews with a fix plan." },
      { title: "Release QA", desc: "Structured regression testing and sign-off before each release." },
    ],
    deliverables: ["Test strategy", "Automated test suite", "Performance report", "Security findings & fixes"],
    tags: ["Playwright", "Cypress", "k6", "OWASP"],
  },
  {
    slug: "support-and-maintenance",
    icon: LifeBuoy,
    title: "Support & Maintenance",
    short: "SLA-backed monitoring and fixes",
    desc: "Monitoring, bug fixes, upgrades and continuous improvements under a clear service-level agreement — so your product gets better, not older.",
    image: "/images/svc-support.jpg",
    idealFor: "Live products that need reliable care — whether we built them or someone else did.",
    features: [
      { title: "24/7 monitoring", desc: "Uptime, error and performance monitoring with on-call response." },
      { title: "SLA-backed fixes", desc: "Agreed response and resolution times for every severity level." },
      { title: "Upgrades & patches", desc: "Framework, dependency and security updates on a regular schedule." },
      { title: "Monthly improvements", desc: "A set allowance of hours for enhancements each month." },
    ],
    deliverables: ["Support SLA", "Monitoring dashboard", "Monthly health report", "Improvement roadmap"],
    tags: ["24/7 monitoring", "SLA", "Upgrades", "Backups"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/* -------------------------------------------------------------------------- */
/* Audiences                                                                   */
/* -------------------------------------------------------------------------- */

export const audiences = [
  {
    id: "business",
    badge: "B2B",
    label: "For businesses",
    title: "A delivery partner that plugs straight into your team",
    intro:
      "Whether you need a full product built, an extra squad for your roadmap or a legacy system moved to the cloud, we own the outcome — not just the hours.",
    image: "/images/b2b.jpg",
    points: [
      "Product engineering & SaaS platforms",
      "Dedicated teams & staff augmentation",
      "Cloud migration & modernisation",
      "ERP, CRM & payment integrations",
      "SLA-backed support",
    ],
    cta: "Book a business consultation",
  },
  {
    id: "individual",
    badge: "B2C",
    label: "For individuals & small teams",
    title: "From an idea to a live product — without hiring a tech team",
    intro:
      "Founders, shop owners and professionals bring us an idea and a budget. We turn it into something real, explain every step in plain language, and stay with you after launch.",
    image: "/images/b2c.jpg",
    points: [
      "Websites & landing pages",
      "MVP apps for founders",
      "Online stores & booking systems",
      "Domains, business email & IT setup",
      "Monthly care plans",
    ],
    cta: "Get a fixed-price quote",
  },
];

/* -------------------------------------------------------------------------- */
/* Industries                                                                  */
/* -------------------------------------------------------------------------- */

export const industries: { icon: LucideIcon; name: string; desc: string; image: string }[] = [
  { icon: HeartPulse, name: "Healthcare", desc: "Patient apps, booking, telehealth and records integrations.", image: "/images/ind-health.jpg" },
  { icon: Landmark, name: "Fintech & BFSI", desc: "Secure portals, payments, lending and compliance workflows.", image: "/images/ind-fintech.jpg" },
  { icon: ShoppingBag, name: "Retail & E-commerce", desc: "Storefronts, marketplaces, inventory and loyalty programs.", image: "/images/ind-retail.jpg" },
  { icon: Truck, name: "Logistics", desc: "Dispatch, fleet tracking, warehouse and delivery platforms.", image: "/images/ind-logistics.jpg" },
  { icon: GraduationCap, name: "Education", desc: "Learning platforms, student portals and online assessments.", image: "/images/ind-education.jpg" },
  { icon: Building2, name: "Real Estate", desc: "Listings, CRM, site-visit booking and property management.", image: "/images/ind-realestate.jpg" },
  { icon: Factory, name: "Manufacturing", desc: "ERP integrations, IoT dashboards and production tracking.", image: "/images/ind-manufacturing.jpg" },
  { icon: Plane, name: "Travel & Hospitality", desc: "Booking engines, guest apps and channel-manager integrations.", image: "/images/ind-travel.jpg" },
];

/* -------------------------------------------------------------------------- */
/* Process, models, principles                                                 */
/* -------------------------------------------------------------------------- */

export const process = [
  {
    title: "Discover",
    time: "Week 0–1",
    desc: "We learn your goals, users and constraints, then agree what success looks like.",
    deliverables: ["Scope document", "Estimate & timeline", "Risk register"],
  },
  {
    title: "Plan & Design",
    time: "Week 1–3",
    desc: "Architecture, roadmap and a clickable prototype you can test before we build.",
    deliverables: ["Product roadmap", "Technical design", "Clickable prototype"],
  },
  {
    title: "Build",
    time: "2-week sprints",
    desc: "Working software every sprint, with a live demo and a staging link every week.",
    deliverables: ["Weekly demos", "Staging environment", "Sprint reports"],
  },
  {
    title: "Test & Launch",
    time: "Go-live",
    desc: "Testing sign-off, a planned release, and training for the people who will use it.",
    deliverables: ["QA sign-off", "Production release", "Docs & training"],
  },
  {
    title: "Support & Grow",
    time: "Ongoing",
    desc: "We monitor, fix and keep improving — so the product gets better after launch.",
    deliverables: ["SLA support", "Monitoring", "Monthly improvements"],
  },
];

export const models = [
  {
    name: "Fixed Price",
    tagline: "Know the full price before we start.",
    bestFor: "Clear requirements, MVPs, websites and most individual clients",
    pricing: "One agreed price, paid against milestones",
    length: "4–16 weeks",
    featured: false,
  },
  {
    name: "Dedicated Team",
    tagline: "Your own squad, managed by us.",
    bestFor: "Long-term B2B roadmaps that need a stable, scalable team",
    pricing: "Monthly fee per team member — scale up or down",
    length: "3 months +",
    featured: true,
  },
  {
    name: "Time & Materials",
    tagline: "Flexibility as priorities change.",
    bestFor: "Evolving products where you learn and adjust as you go",
    pricing: "Pay for hours worked, reported weekly",
    length: "Flexible",
    featured: false,
  },
];

export const principles = [
  { title: "A demo every week", desc: "You see working software, not slide decks. Progress is never a matter of opinion." },
  { title: "Fixed means fixed", desc: "Agreed a fixed price? Scope changes are discussed openly — never slipped into an invoice." },
  { title: "You own everything", desc: "Source code, designs, credentials and documentation are yours from the first commit." },
  { title: "Senior people on your project", desc: "Every project is led by an experienced delivery lead and reviewed by senior engineers." },
];

export const compliance = ["GDPR", "HIPAA-ready", "ISO 27001 practices", "SOC 2 controls", "OWASP Top 10", "NDA on request"];

/* -------------------------------------------------------------------------- */
/* Case studies & testimonials                                                 */
/* -------------------------------------------------------------------------- */

export const caseStudies = [
  {
    slug: "freight-dispatch-platform",
    sector: "Logistics",
    type: "B2B",
    title: "Dispatch platform for a regional freight operator",
    summary: "Replaced spreadsheets and phone calls with a live dispatch board, driver app and customer tracking portal.",
    image: "/images/case-logistics.jpg",
    challenge: "Dispatchers juggled spreadsheets, WhatsApp groups and phone calls to assign 400+ daily loads. Customers had no visibility and errors were costly.",
    solution: "We built a real-time dispatch board, a driver mobile app with proof-of-delivery, and a customer portal with live tracking — integrated with their accounting system.",
    metrics: [
      { value: "38%", label: "faster dispatch" },
      { value: "0", label: "spreadsheets left" },
      { value: "14 wks", label: "to go-live" },
    ],
    tags: ["React", "Node.js", "React Native", "AWS"],
  },
  {
    slug: "clinic-booking-app",
    sector: "Healthcare",
    type: "B2B",
    title: "Patient booking app for a multi-site clinic chain",
    summary: "Online booking, reminders and payments across web and mobile, integrated with the clinic's records system.",
    image: "/images/case-health.jpg",
    challenge: "Phone-only booking caused long hold times, double-bookings and a high no-show rate across six locations.",
    solution: "A patient app and web booking flow with automated reminders, online pre-payment and two-way sync with the clinic's existing records system.",
    metrics: [
      { value: "22k", label: "bookings in Q1" },
      { value: "−31%", label: "no-show rate" },
      { value: "4.8★", label: "app store rating" },
    ],
    tags: ["Flutter", "Next.js", "PostgreSQL", "Stripe"],
  },
  {
    slug: "fashion-storefront",
    sector: "Retail",
    type: "B2C",
    title: "Online store for an independent fashion label",
    summary: "A founder-led brand moved from social-media DMs to a fast storefront with inventory, payments and shipping.",
    image: "/images/case-retail.jpg",
    challenge: "Orders came through Instagram DMs, inventory lived in a notebook and payment follow-ups took hours every day.",
    solution: "A fast, mobile-first Shopify storefront with custom theme, inventory sync, automated shipping labels and abandoned-cart recovery.",
    metrics: [
      { value: "2.1×", label: "mobile conversion" },
      { value: "6 wks", label: "idea to launch" },
      { value: "−9 hrs", label: "admin per week" },
    ],
    tags: ["Shopify", "Figma", "Stripe"],
  },
];

export const testimonials = [
  {
    quote:
      "Kadri gave us something we never had with previous vendors: certainty. Every Thursday we saw real progress, and the platform went live a week ahead of plan.",
    name: "Operations Director",
    org: "Regional logistics company",
    initials: "OD",
  },
  {
    quote:
      "I'm not technical, and they never made me feel it. They explained every decision, kept to the quote, and my store was taking orders in six weeks.",
    name: "Founder",
    org: "Independent fashion label",
    initials: "FL",
  },
  {
    quote:
      "Their engineers joined our sprints within a week and were shipping in our codebase by the second. It felt like hiring, minus the six-month search.",
    name: "VP of Engineering",
    org: "B2B SaaS company",
    initials: "VE",
  },
  {
    quote:
      "The booking app transformed our front desk. Patients love it, our staff finally have time back, and support has been fast every single time.",
    name: "Practice Manager",
    org: "Multi-site clinic group",
    initials: "PM",
  },
];

/* -------------------------------------------------------------------------- */
/* FAQ & form                                                                  */
/* -------------------------------------------------------------------------- */

export const faqs = [
  {
    q: "How much does a project cost?",
    a: "It depends on scope. Websites for small businesses typically start in the low thousands, MVP apps in the mid range, and enterprise platforms are estimated after a short discovery. After a free 30-minute call we send a written estimate within three business days.",
  },
  {
    q: "How long until my project is live?",
    a: "Most websites go live in 3–6 weeks, MVP apps in 8–14 weeks, and larger platforms are delivered in phases so you get value early. Your timeline is agreed in writing before work starts.",
  },
  {
    q: "I'm not technical. Can I still work with you?",
    a: "Absolutely — many of our clients aren't. You'll have one point of contact, plain-language updates, and a demo every week so you can see and click through what's been built.",
  },
  {
    q: "Who owns the code and designs?",
    a: "You do. Everything we create lives in your accounts and repositories from day one, and full ownership transfers to you on payment.",
  },
  {
    q: "Can you work with our existing team and tools?",
    a: "Yes. Our engineers join your Slack or Teams, work in your Jira or Linear, follow your code standards and attend your ceremonies.",
  },
  {
    q: "What happens after launch?",
    a: "Choose a support plan with agreed response times, monitoring and a monthly allowance for improvements — or take a full handover and run it yourself. Either way, you're never locked in.",
  },
];

export const budgets = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k +", "Not sure yet"];
