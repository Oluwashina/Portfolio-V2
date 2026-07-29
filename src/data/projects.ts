export interface ProjectImpact {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  client: string;
  url?: string;
  role: string;
  problem: string;
  architecture: string[];
  challenges: string[];
  impact: ProjectImpact[];
  stack: string[];
  defaultOpen?: boolean;
}

export const projects: Project[] = [
  {
    id: "cryzed",
    number: "01",
    category: "Fintech / Crypto",
    title: "Cryzed",
    subtitle:
      "Digital asset exchange platform with customer and admin surfaces.",
    client: "Cryzed",
    url: "https://cryzed.com",
    role: "Frontend Engineer",
    defaultOpen: true,
    problem:
      "Cryzed needed both a customer exchange and a full administrative platform to run crypto trading, KYC onboarding, wallet management, bill payments, gift cards, and merchant operations under one coherent product surface.",
    architecture: [
      "Built the customer and admin platforms in Next.js and TypeScript with a shared component layer, so both surfaces stayed visually and behaviourally consistent as features grew.",
      "Modelled trading, wallet, and payments flows as isolated, typed modules with clear API boundaries to keep high risk financial paths auditable.",
      "Optimised busy transaction screens for mobile, the primary device for the target market, with responsive layouts and lazy loaded route segments.",
    ],
    challenges: [
      "Handling high traffic trading and payment flows without regressions in responsiveness.",
      "Coordinating with designers and backend engineers to keep KYC, wallet, and merchant flows in sync across two apps.",
      "Delivering production ready UX for regulated financial operations under tight release cycles.",
    ],
    impact: [
      { label: "Surfaces shipped", value: "Customer + Admin" },
      { label: "Modules", value: "Trading, KYC, Wallet, Bills, Gift cards" },
      { label: "Status", value: "Live in production" },
      { label: "Primary device", value: "Mobile first" },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    id: "rewrd",
    number: "02",
    category: "SaaS / Loyalty",
    title: "Rewrd",
    subtitle:
      "Customer loyalty platform for issuing, managing, and redeeming rewards.",
    client: "Rewrd",
    url: "https://getrewrd.com",
    role: "Frontend Engineer",
    problem:
      "Rewrd needed scalable frontend surfaces that let businesses issue store credit and manage customer rewards without the loyalty flow feeling bolted onto their existing product.",
    architecture: [
      "Built reusable UI primitives for reward issuance, redemption, and customer management so new business types could be onboarded without a separate screen for each one.",
      "Structured data fetching around TanStack Query to keep dashboards responsive as reward volumes grew.",
      "Prioritised typed API contracts to catch integration regressions before they reached production.",
    ],
    challenges: [
      "Designing a redemption flow that stayed simple as reward rules expanded.",
      "Keeping merchant dashboards fast on views with large data sets.",
      "Aligning frontend rollout with a backend API that was still evolving.",
    ],
    impact: [
      { label: "Focus", value: "Merchant dashboard + issuance" },
      { label: "Stack", value: "Next.js + TypeScript" },
      { label: "Status", value: "Live in production" },
      { label: "Role", value: "Frontend delivery" },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "TanStack Query",
    ],
  },
  {
    id: "terebinth",
    number: "03",
    category: "Care / Healthcare",
    title: "Terebinth Limited",
    subtitle:
      "Marketing site for a Fylde Coast residential care provider with three registered homes.",
    client: "Terebinth Limited",
    url: "https://terebinthltd.co.uk",
    role: "Frontend Engineer",
    problem:
      "Terebinth needed a site that could represent multiple care homes under one brand, surface CQC registration status for each location, and give families and referral professionals a clear path to get in touch without the tone feeling cold or corporate.",
    architecture: [
      "Structured the site around repeatable location and service sections so each home could share the same layout while keeping its own CQC status, copy and contact flows.",
      "Built enquiry and referral entry points early in the page flow so the primary actions stayed visible on mobile, where most family research starts.",
      "Used a calm visual system with strong typography and clear section hierarchy so dense care information stayed readable and trustworthy.",
    ],
    challenges: [
      "Presenting regulation and inspection status accurately across three separate services without confusing visitors.",
      "Balancing warmth and reassurance in the copy and layout with the formality families expect from a care provider.",
      "Keeping performance solid with image heavy location sections and review content on slower mobile connections.",
    ],
    impact: [
      { label: "Homes featured", value: "Redbricks, Watson House, Mariners Court" },
      { label: "Regions", value: "Blackpool, Thornton Cleveleys, Fleetwood" },
      { label: "Focus", value: "Family enquiry + referral" },
      { label: "Status", value: "Live" },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "energy",
    number: "04",
    category: "Music / Campaign",
    title: "Tiwa Savage: Energy",
    subtitle:
      "Interactive release site where fans build and share custom playing cards for a new single.",
    client: "Tiwa Savage",
    url: "https://energy-tiwasavage.netlify.app",
    role: "Frontend Engineer",
    problem:
      "The Energy release needed more than a standard landing page. The team wanted a shareable moment tied to the single: upload a photo, choose a suit and rank, preview the card, then download or post it for Instagram, X and TikTok.",
    architecture: [
      "Built the card builder as a self contained flow with upload, suit and rank selection, live preview, and export at 1080 by 1520 for social platforms.",
      "Handled photo positioning with drag on the preview so users could frame their image before export without leaving the page.",
      "Kept the release story and listen links alongside the interactive tool so the campaign worked for both passive listeners and fans who wanted to participate.",
    ],
    challenges: [
      "Making client side image composition feel instant on mid range phones with large uploads up to 10MB.",
      "Designing a preview that matched the exported card closely enough that fans would trust what they shared.",
      "Shipping a polished campaign surface on a tight release timeline without sacrificing mobile usability.",
    ],
    impact: [
      { label: "Core feature", value: "Custom playing card builder" },
      { label: "Export size", value: "1080 × 1520" },
      { label: "Channels", value: "Instagram, X, TikTok" },
      { label: "Status", value: "Live" },
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML Canvas",
      "Netlify",
    ],
  },
  {
    id: "queposts",
    number: "05",
    category: "Directory / Listings",
    title: "QuePosts",
    subtitle:
      "Business listing platform with paired customer portal and admin dashboard.",
    client: "QuePosts",
    url: "https://queposts.com",
    role: "Frontend Engineer, end to end",
    problem:
      "QuePosts required two aligned experiences: a public listings portal and an internal admin dashboard, delivered on a schedule that did not allow for a slow handoff between design and engineering.",
    architecture: [
      "Owned the frontend from design handoff through deployment, keeping a single mental model for both surfaces.",
      "Structured the codebase around shared layout and data components to keep the two apps consistent as features shipped.",
      "Locked in responsive behaviour and accessibility defaults early so QA rounds focused on business logic, not layout regressions.",
    ],
    challenges: [
      "Delivering two coordinated surfaces without duplicating logic.",
      "Balancing speed of delivery with a component architecture that would outlive the initial release.",
      "Making admin tooling that operators without a technical background could use without training.",
    ],
    impact: [
      { label: "Surfaces", value: "Portal + Admin" },
      { label: "Ownership", value: "Design to deploy" },
      { label: "Focus", value: "Responsive, maintainable" },
      { label: "Status", value: "Production" },
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
];
