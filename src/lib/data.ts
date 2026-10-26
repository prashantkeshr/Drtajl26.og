export type BrandLanguage = {
  code: string;
  language: string;
  text: string;
  fontClass: string;
};

// Rotating hero subtitle — representative spread across major script families.
export const brandLanguages: BrandLanguage[] = [
  { code: "en", language: "English", text: "The Clever Choice", fontClass: "font-sans" },
  { code: "sa", language: "Sanskrit", text: "धूर्तः – चतुरः समाधानकर्ता", fontClass: "font-devanagari" },
  { code: "hi", language: "Hindi", text: "धूर्त – चतुर विकल्प", fontClass: "font-devanagari" },
  { code: "bn", language: "Bengali", text: "ধূর্ত – চতুর পছন্দ", fontClass: "font-bengali" },
  { code: "ar", language: "Arabic", text: "دهورتا – الاختيار الذكي", fontClass: "font-arabic" },
  { code: "zh", language: "Chinese", text: "达尔塔 – 聪明的选择", fontClass: "font-sc" },
  { code: "ja", language: "Japanese", text: "ダルタ – 賢い選択", fontClass: "font-jp" },
  { code: "ko", language: "Korean", text: "다르타 – 똑똑한 선택", fontClass: "font-kr" },
  { code: "th", language: "Thai", text: "ฑูรตะ – ทางเลือกที่ชาญฉลาด", fontClass: "font-thai" },
  { code: "ta", language: "Tamil", text: "தூர்த்தா – திறமையான தேர்வு", fontClass: "font-tamil" },
  { code: "fr", language: "French", text: "Dhurta – Le choix intelligent", fontClass: "font-sans" },
  { code: "es", language: "Spanish", text: "Dhurta – La elección inteligente", fontClass: "font-sans" },
  { code: "de", language: "German", text: "Dhurta – Die kluge Wahl", fontClass: "font-sans" },
  { code: "sw", language: "Swahili", text: "Dhurta – Chaguo mahiri", fontClass: "font-sans" },
];

export const uiLanguages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "bn", label: "বাংলা" },
  { code: "ar", label: "العربية" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "pt", label: "Português" },
  { code: "sw", label: "Kiswahili" },
];

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/ventures", label: "Ventures" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/presence", label: "Global Presence" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

// ---------------------------------------------------------------------------
// Group brand pillars — the through-line of the DHURTA umbrella brand.
// ---------------------------------------------------------------------------

export type GroupPillar = {
  name: string;
  sanskrit: string;
  description: string;
  icon: string;
  color: string;
};

export const groupPillars: GroupPillar[] = [
  {
    name: "Trust",
    sanskrit: "विश्वासः",
    description:
      "Privacy-first, verifiable engineering. Zero telemetry, zero servers where none are needed — code you can read, claims you can check.",
    icon: "shield",
    color: "gold",
  },
  {
    name: "Technology",
    sanskrit: "तन्त्रज्ञानम्",
    description:
      "A shipping product ecosystem, not a slide deck. Browser, communication, and information tools that exist today and are used today.",
    icon: "cpu",
    color: "teal",
  },
  {
    name: "Culture",
    sanskrit: "संस्कृतिः",
    description:
      "A Sanskrit name worn proudly — Dhurta, the clever one. Products designed to feel native in every script, language, and market.",
    icon: "globe",
    color: "blue",
  },
];

// ---------------------------------------------------------------------------
// Group ventures — real, shipping products of the Dhurta group.
// ---------------------------------------------------------------------------

export type Venture = {
  slug: string;
  name: string;
  devanagari: string;
  tagline: string;
  description: string;
  pillar: string;
  status: "Shipping";
  icon: string;
  color: string;
  highlights: string[];
  links: { label: string; href: string }[];
};

export const ventures: Venture[] = [
  {
    slug: "dhurta-browser",
    name: "Dhurta Browser",
    devanagari: "धूर्त",
    tagline: "The flagship. A privacy-first browser with zero telemetry.",
    description:
      "Our flagship product — a browser built on a simple promise: your browsing belongs to you. No telemetry, no phoning home, no dark-pattern defaults. Open source, so the promise is verifiable, not marketing.",
    pillar: "Trust",
    status: "Shipping",
    icon: "compass",
    color: "gold",
    highlights: ["Zero telemetry, by design", "Open source & auditable", "Privacy-first defaults"],
    links: [
      { label: "dhurta.com", href: "https://dhurta.com" },
      { label: "GitHub", href: "https://github.com/prashantkeshr/drtajl26.n" },
    ],
  },
  {
    slug: "dhurta-connect",
    name: "Dhurta Connect",
    devanagari: "संपर्क",
    tagline: "Zero-server, end-to-end encrypted P2P communication.",
    description:
      "Chat, calls, and file sharing with no server in the middle — connections are peer-to-peer and end-to-end encrypted. There is no database of your conversations because there is no server to keep one.",
    pillar: "Trust",
    status: "Shipping",
    icon: "message-circle",
    color: "teal",
    highlights: ["Peer-to-peer, zero servers", "End-to-end encrypted", "Chat, calls & file share"],
    links: [{ label: "dhurta.com", href: "https://dhurta.com" }],
  },
  {
    slug: "dhurta-setu",
    name: "Dhurta Setu",
    devanagari: "सेतु",
    tagline: "A curated web index — your bridge to the useful internet.",
    description:
      "Setu — Sanskrit for bridge. A hand-curated index of the web that values signal over scale: the useful, the credible, and the culturally rich, organized so you find them without wading through noise.",
    pillar: "Culture",
    status: "Shipping",
    icon: "library",
    color: "blue",
    highlights: ["Hand-curated, not crawled", "Signal over scale", "An information bridge"],
    links: [{ label: "dhurta.com", href: "https://dhurta.com" }],
  },
];

// ---------------------------------------------------------------------------
// Future sectors — honest roadmap, not fake divisions.
// ---------------------------------------------------------------------------

export type FutureSector = {
  name: string;
  description: string;
  icon: string;
};

export const futureSectors: FutureSector[] = [
  {
    name: "IT & Cybersecurity",
    description: "Extending the trust discipline of our products into security engineering and managed defense.",
    icon: "shield-check",
  },
  {
    name: "Artificial Intelligence",
    description: "Applied AI built with the same privacy-first ethos — intelligence without surveillance.",
    icon: "brain",
  },
  {
    name: "Design",
    description: "A design practice rooted in the multi-script, culturally fluent craft of the Dhurta brand.",
    icon: "pen-tool",
  },
  {
    name: "Infrastructure",
    description: "Resilient digital and physical infrastructure, engineered for uptime across regions.",
    icon: "server",
  },
  {
    name: "Mechanical & Electrical",
    description: "Long-horizon ambitions in hardware and engineering — the group's frontier sector.",
    icon: "cog",
  },
];

export type Service = {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  color: string;
};

export const services: Service[] = [
  {
    slug: "web-app-development",
    title: "Web & App Development",
    shortDesc: "Clever engineering, built to scale globally.",
    description:
      "From high-performance web platforms to native mobile apps, we engineer products that scale across markets, languages, and devices — fast, secure, and built to last.",
    icon: "code",
    color: "gold",
  },
  {
    slug: "digital-strategy",
    title: "Digital Strategy",
    shortDesc: "Outsmart the market before you build a line of code.",
    description:
      "We map the smartest path to your goals — market intelligence, competitive positioning, and a roadmap that turns ambiguity into a clear, executable plan.",
    icon: "brain",
    color: "teal",
  },
  {
    slug: "brand-experience",
    title: "Brand & UX Design",
    shortDesc: "Design that adapts to every culture, instantly.",
    description:
      "Interfaces and identities crafted with cultural fluency — design systems that feel native in Tokyo, Lagos, São Paulo, and everywhere in between.",
    icon: "sparkles",
    color: "blue",
  },
  {
    slug: "cloud-engineering",
    title: "Cloud & Infrastructure",
    shortDesc: "Resilient systems that never sleep, worldwide.",
    description:
      "Multi-region cloud architecture, DevOps automation, and infrastructure engineered for uptime — because global businesses can't afford downtime.",
    icon: "cloud",
    color: "gold",
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    shortDesc: "The clever edge, powered by intelligent systems.",
    description:
      "We embed AI where it actually moves the needle — automation, predictive insight, and intelligent workflows tuned to your business, not the hype cycle.",
    icon: "cpu",
    color: "teal",
  },
  {
    slug: "growth-marketing",
    title: "Growth & Performance Marketing",
    shortDesc: "Cleverly targeted, globally measured.",
    description:
      "Full-funnel growth strategy localized for every region we touch — data-driven campaigns that speak the local language, literally and culturally.",
    icon: "trending-up",
    color: "blue",
  },
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 42, suffix: "+", label: "Countries Served" },
  { value: 380, suffix: "+", label: "Projects Delivered" },
  { value: 97, suffix: "%", label: "Client Retention" },
  { value: 24, suffix: "/7", label: "Global Support" },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  region: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Amara Okafor",
    role: "VP of Digital",
    company: "Lagos Fintech Group",
    region: "West Africa",
    quote:
      "DHURTA didn't just deliver a platform — they anticipated problems we hadn't even identified yet. Genuinely clever work.",
  },
  {
    name: "Haruto Sato",
    role: "Head of Product",
    company: "Tokyo Mobility Labs",
    region: "East Asia",
    quote:
      "The cultural nuance in their design work was unlike any agency we'd worked with globally. They understood us instantly.",
  },
  {
    name: "Sofia Herrera",
    role: "CMO",
    company: "Andes Retail Collective",
    region: "South America",
    quote:
      "Fast, sharp, and always three steps ahead. DHURTA is the team you call when everyone else says it can't be done.",
  },
  {
    name: "Daniel Cohen",
    role: "CTO",
    company: "TelAviv Cloud Systems",
    region: "Middle East",
    quote:
      "Their engineering team solved an infrastructure problem that had stalled us for two quarters — in three weeks.",
  },
  {
    name: "Priya Nair",
    role: "Founder",
    company: "Mumbai Health Tech",
    region: "South Asia",
    quote:
      "Dhurta means clever, and they live up to it daily. Strategic, sharp, and relentlessly resourceful.",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "We dig into your market, culture, and constraints to find the angle others miss.",
  },
  {
    step: "02",
    title: "Strategize",
    description: "A clever, focused roadmap — no bloat, no guesswork, just the shortest path to impact.",
  },
  {
    step: "03",
    title: "Design & Build",
    description: "Culturally fluent design paired with resilient engineering, shipped in tight iterative cycles.",
  },
  {
    step: "04",
    title: "Launch & Localize",
    description: "Global rollout with regional adaptation — language, currency, compliance, all handled.",
  },
  {
    step: "05",
    title: "Scale & Optimize",
    description: "Continuous, data-driven refinement so performance compounds long after launch.",
  },
];

export type Region = {
  id: string;
  name: string;
  city: string;
  x: number;
  y: number;
  clients: number;
};

export const regions: Region[] = [
  { id: "na", name: "North America", city: "New York", x: 22, y: 34, clients: 64 },
  { id: "sa", name: "South America", city: "São Paulo", x: 32, y: 68, clients: 28 },
  { id: "eu", name: "Europe", city: "London", x: 48, y: 26, clients: 71 },
  { id: "af", name: "Africa", city: "Lagos", x: 50, y: 58, clients: 33 },
  { id: "me", name: "Middle East", city: "Dubai", x: 60, y: 42, clients: 26 },
  { id: "sas", name: "South Asia", city: "Mumbai", x: 68, y: 48, clients: 58 },
  { id: "ea", name: "East Asia", city: "Tokyo", x: 84, y: 36, clients: 47 },
  { id: "oc", name: "Oceania", city: "Sydney", x: 88, y: 74, clients: 19 },
];

export const regionTimeZones = [
  { city: "New York", offset: -4 },
  { city: "São Paulo", offset: -3 },
  { city: "London", offset: 1 },
  { city: "Lagos", offset: 1 },
  { city: "Dubai", offset: 4 },
  { city: "Mumbai", offset: 5.5 },
  { city: "Tokyo", offset: 9 },
  { city: "Sydney", offset: 10 },
];

export type Milestone = { year: string; title: string; description: string };

export const milestones: Milestone[] = [
  {
    year: "2016",
    title: "The Name",
    description:
      "Founded on a reclaimed word — ‘Dhurta,’ Sanskrit for clever — chosen deliberately to embrace intelligence over convention.",
  },
  {
    year: "2018",
    title: "First Global Client",
    description:
      "Delivered our first cross-border engagement, proving cultural fluency could be engineered, not improvised.",
  },
  {
    year: "2020",
    title: "Remote-First, By Design",
    description:
      "Restructured as a fully distributed studio so talent — and client trust — could come from anywhere.",
  },
  {
    year: "2022",
    title: "42 Countries",
    description:
      "Crossed our first major global-reach milestone, with regional design consultants embedded in every hub.",
  },
  {
    year: "2025",
    title: "AI-Native Delivery",
    description:
      "Embedded intelligent automation across strategy, design, and engineering — clever work, delivered faster.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  region: string;
  bio: string;
};

export const team: TeamMember[] = [
  { name: "Rhea Kapoor", role: "Founder & Global CEO", region: "Mumbai", bio: "Leads global strategy with a philosophy of clever-first execution." },
  { name: "Marcus Chen", role: "Head of Engineering", region: "Singapore", bio: "Architects resilient systems for multi-region scale." },
  { name: "Amina Diallo", role: "Global Creative Director", region: "Lagos", bio: "Shapes culturally fluent design across every region we serve." },
  { name: "Lucas Ferreira", role: "VP of Growth", region: "São Paulo", bio: "Builds performance marketing engines tuned to local nuance." },
  { name: "Yuki Tanaka", role: "Head of AI & Automation", region: "Tokyo", bio: "Embeds intelligent systems where they create real leverage." },
  { name: "Layla Haddad", role: "Director of Client Success", region: "Dubai", bio: "Ensures every engagement runs as smoothly as it was promised." },
];

export type Industry = {
  slug: string;
  name: string;
  description: string;
  highlights: string[];
};

export const industries: Industry[] = [
  {
    slug: "fintech",
    name: "Fintech & Banking",
    description:
      "Secure, compliant, and fast — digital finance platforms engineered for trust across regulatory regimes.",
    highlights: ["Multi-currency architecture", "Regulatory-grade security", "Real-time transaction UX"],
  },
  {
    slug: "healthtech",
    name: "Health & Life Sciences",
    description:
      "Patient-first platforms that navigate complex compliance while staying genuinely easy to use.",
    highlights: ["HIPAA/GDPR-aware design", "Telehealth infrastructure", "Clinical workflow UX"],
  },
  {
    slug: "retail",
    name: "Retail & E-Commerce",
    description:
      "Storefronts and supply chains built to convert — localized for currency, language, and buying behavior.",
    highlights: ["Headless commerce", "Localized checkout flows", "Inventory intelligence"],
  },
  {
    slug: "mobility",
    name: "Mobility & Logistics",
    description:
      "Real-time systems for fleets, riders, and routes — built for the unpredictability of the physical world.",
    highlights: ["Live tracking infrastructure", "Route optimization", "Driver/rider apps"],
  },
  {
    slug: "media",
    name: "Media & Entertainment",
    description:
      "Content platforms that scale globally without losing the cultural texture that makes them resonate.",
    highlights: ["Streaming architecture", "Multi-language CMS", "Creator tooling"],
  },
  {
    slug: "publicsector",
    name: "Public Sector & NGOs",
    description:
      "Mission-driven platforms held to a higher bar — accessible, transparent, and built to last.",
    highlights: ["Accessibility-first builds", "Multi-language civic UX", "Data transparency tooling"],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  region: string;
  industry: string;
  summary: string;
  metrics: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "lagos-fintech-platform",
    title: "Rebuilding Trust in Digital Banking",
    client: "Lagos Fintech Group",
    region: "West Africa",
    industry: "Fintech & Banking",
    summary:
      "A full platform rebuild that cut transaction latency by 68% while achieving regional compliance across five countries.",
    metrics: [
      { label: "Latency Reduction", value: "68%" },
      { label: "Countries Live", value: "5" },
      { label: "Uptime", value: "99.98%" },
    ],
  },
  {
    slug: "tokyo-mobility-app",
    title: "Reimagining Urban Mobility",
    client: "Tokyo Mobility Labs",
    region: "East Asia",
    industry: "Mobility & Logistics",
    summary:
      "A rider-first mobile experience with live tracking, cutting average wait times by 41% across metro Tokyo.",
    metrics: [
      { label: "Wait Time Cut", value: "41%" },
      { label: "Daily Active Riders", value: "220K" },
      { label: "App Rating", value: "4.8★" },
    ],
  },
  {
    slug: "andes-retail-collective",
    title: "Scaling Retail Across the Andes",
    client: "Andes Retail Collective",
    region: "South America",
    industry: "Retail & E-Commerce",
    summary:
      "A headless commerce migration localized for four currencies and three languages, lifting conversion by 33%.",
    metrics: [
      { label: "Conversion Lift", value: "33%" },
      { label: "Markets Launched", value: "4" },
      { label: "Page Speed", value: "1.2s" },
    ],
  },
  {
    slug: "telaviv-cloud-systems",
    title: "Infrastructure That Never Sleeps",
    client: "TelAviv Cloud Systems",
    region: "Middle East",
    industry: "Fintech & Banking",
    summary:
      "Multi-region cloud re-architecture that resolved a two-quarter scaling stall in three weeks flat.",
    metrics: [
      { label: "Scaling Issue Resolved", value: "3 wks" },
      { label: "Cost Reduction", value: "24%" },
      { label: "Regions", value: "6" },
    ],
  },
  {
    slug: "mumbai-health-tech",
    title: "Telehealth for a Billion",
    client: "Mumbai Health Tech",
    region: "South Asia",
    industry: "Health & Life Sciences",
    summary:
      "A telehealth platform localized across 8 Indian languages, onboarding 1.2M patients in year one.",
    metrics: [
      { label: "Patients Onboarded", value: "1.2M" },
      { label: "Languages Supported", value: "8" },
      { label: "Consult Completion", value: "94%" },
    ],
  },
  {
    slug: "sydney-media-platform",
    title: "Streaming Without Borders",
    client: "Southern Cross Media",
    region: "Oceania",
    industry: "Media & Entertainment",
    summary:
      "A streaming platform re-architected for multi-region delivery, cutting buffering complaints by 76%.",
    metrics: [
      { label: "Buffering Complaints", value: "-76%" },
      { label: "Concurrent Streams", value: "180K" },
      { label: "Markets", value: "12" },
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  region: string;
  readTime: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cultural-fluency-in-global-design",
    title: "Cultural Fluency Is a Design Discipline, Not a Checklist",
    excerpt:
      "Why localization that stops at translation fails — and what it actually takes to design for a culture, not just a language.",
    category: "Design",
    region: "Global",
    readTime: "6 min read",
    date: "2026-05-12",
  },
  {
    slug: "clever-not-clever-clever",
    title: "Clever, Not ‘Clever-Clever’: A Note on Reclaiming Dhurta",
    excerpt:
      "The story behind our name — and why we chose to lean into a word most brands would run from.",
    category: "Brand",
    region: "Global",
    readTime: "4 min read",
    date: "2026-04-28",
  },
  {
    slug: "multi-region-architecture-lessons",
    title: "Five Lessons From Six Multi-Region Cloud Migrations",
    excerpt:
      "What actually breaks when you scale infrastructure across continents — and how to design around it upfront.",
    category: "Engineering",
    region: "Global",
    readTime: "9 min read",
    date: "2026-04-10",
  },
  {
    slug: "ai-automation-without-hype",
    title: "Where AI Automation Actually Pays Off (And Where It Doesn't)",
    excerpt:
      "A practical framework for deciding when intelligent automation is worth the investment for your product.",
    category: "AI & Automation",
    region: "Global",
    readTime: "7 min read",
    date: "2026-03-22",
  },
  {
    slug: "localized-checkout-conversion",
    title: "The Checkout Flow Details That Move Conversion Across Markets",
    excerpt:
      "Currency formatting, payment method defaults, and trust signals — the unglamorous details that decide sales.",
    category: "Growth",
    region: "Global",
    readTime: "5 min read",
    date: "2026-03-05",
  },
  {
    slug: "remote-first-global-teams",
    title: "Running a Genuinely Global Team Without Losing Coherence",
    excerpt:
      "How we structure a remote-first studio across a dozen time zones without slowing delivery down.",
    category: "Culture",
    region: "Global",
    readTime: "6 min read",
    date: "2026-02-18",
  },
];
