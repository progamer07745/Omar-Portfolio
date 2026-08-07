/**
 * PROJECTS
 * Add a new project by copying any entry and changing the values.
 *
 * {
 *   title: "Project title",
 *   category: "frontend" | "fullstack" | "design",
 *   tags: ["React", "Node.js"],          // shown as badges
 *   image: "/images/example.png",        // thumbnail, or null for a gradient
 *   gradient: "from-cyan-500/40 ...",    // used when image is null
 *   description: "Short professional description",
 *   live: "https://...",                 // demo link ("" if not available)
 *   code: "https://...",                 // repo link ("" if not available)
 *   status: "",                          // e.g. "In Development"
 *   featured: true,                      // shows the "Featured" badge
 *   show: true                           // false = keep as a template
 * }
 */

export const projects = [
  {
    title: "E-Commerce Platform — MERN",
    category: "fullstack",
    tags: ["React", "Express", "MongoDB", "JWT", "Payments"],
    image: "/images/ecommerse-store.png",
    gradient: "from-cyan-500/40 via-blue-500/25 to-violet-500/30",
    description:
      "A complete e-commerce platform: product catalog, shopping cart, secure checkout, order tracking and an admin dashboard. Replace this placeholder with your real project details.",
    live: "https://nexus-ecommerse-store.pages.dev",
    // code: "",
    featured: true,
    show: true,
  },

  {
    title: "Mawkeb Alfursan",
    category: "frontend",
    tags: ["React", "UI/UX", "Responsive", "Branding"],
    image: "/images/mawkeb-alfursan.png",
    gradient: "from-cyan-500/40 via-blue-500/25 to-violet-500/30",
    description:
      "Official web platform for Mawkeb Alfursan Contracting, showcasing elite construction services, structural engineering projects, and architectural finishing with a seamless user experience and administrative management system",
    live: "https://mawkeb-alfursan.pages.dev",
    // code: "",
    featured: true,
    show: true,
  },

  {
    title: "Trio Coders Portfolio",
    category: "frontend",
    tags: ["React", "Responsive", "Branding"],
    image: "/images/trio-coders-portfolio.png",
    description:
      "Full marketing site for the Trio Coders agency — bold hero, animated sections and a clean conversion-focused layout.",
    live: "https://tc-portfolio-2026.pages.dev",
    // code: "",
    featured: true,
    show: true,
  },
  {
    title: "Client Portfolio — MK Project",
    category: "frontend",
    tags: ["UI/UX", "CSS3", "Personal Brand"],
    image: "/images/mk-portfolio.png",
    description:
      "Personal portfolio for a client — designed the visual identity and built a responsive experience that puts the work first.",
    live: "https://mkhaled.pages.dev",
    // code: "",
    featured: false,
    show: true,
  },
  {
    title: "Client Portfolio — AR Project",
    category: "frontend",
    tags: ["UI/UX", "JavaScript", "Responsive"],
    image: "/images/ar-portfolio.png",
    description:
      "A tailored portfolio for a client with a distinctive style — custom sections, smooth interactions and full responsiveness.",
    live: "https://mohamedkhaledfap2-afk.github.io/Ar_projects/",
    // code: "",
    featured: false,
    show: true,
  },
  // {
  //   title: "Salla Store Automation",
  //   category: "fullstack",
  //   tags: ["Salla API", "Node.js", "Webhooks", "E-commerce"],
  //   image: null,
  //   gradient: "from-emerald-500/40 via-teal-500/25 to-cyan-500/30",
  //   description:
  //     "Automating a live Salla e-commerce store — instant WhatsApp order notifications, Google app integrations, product management and custom store styling.",
  //   live: "",
  //   code: "",
  //   status: "In Development",
  //   featured: true,
  //   show: true,
  // },
  {
    title: "Study Buddy",
    category: "frontend",
    tags: ["React", "Study Tools", "UX"],
    image: "/images/study-buddy.png",
    description:
      "A study companion web app focused on a clean, distraction-free workflow with a friendly interface.",
    live: "https://study-buddy-ev9.pages.dev",
    // code: "",
    featured: false,
    show: true,
  },
  {
    title: "Mr. Englishawy — Link-In-Bio",
    category: "frontend",
    tags: ["UI/UX", "Mobile-first", "Branding"],
    image: "/images/englishawy-linkinbio.png",
    description:
      "A personal link-in-bio page for a client — crafted to feel premium, load instantly and organize all their content in one place.",
    live: "https://mrenglishawy-media.pages.dev",
    // code: "",
    featured: false,
    show: true,
  },
  {
    title: "Istighfar Counter",
    category: "frontend",
    tags: ["JavaScript", "LocalStorage", "PWA-style"],
    image: "/images/istighfar-counter.png",
    description:
      "A focused digital dhikr counter with a calm interface, persistent state and satisfying micro-interactions.",
    live: "https://istighfar-counter.pages.dev",
    // code: "",
    featured: false,
    show: true,
  },
  {
    title: "Trio Coders — Link-In-Bio",
    category: "design",
    tags: ["UI/UX", "Mobile-first", "Branding"],
    image: "/images/trio-coders-links.png",
    description:
      "An agency link-in-bio page that consolidates all Trio Coders channels behind one strong visual identity.",
    live: "https://triocoders-media.pages.dev",
    code: "",
    featured: false,
    show: true,
  },

  /* ───────────────── Ready-made Full Stack templates ─────────────────
     Copy any template, fill in the details, then flip `show: true`. */

  {
    title: "Task Manager — MERN App",
    category: "fullstack",
    tags: ["React", "Express", "MongoDB", "JWT"],
    image: null,
    gradient: "from-cyan-500/40 via-blue-500/25 to-violet-500/30",
    description:
      "Full-stack task manager: JWT authentication, MongoDB models and a React dashboard. Replace this with your real project.",
    live: "",
    // code: "",
    featured: false,
    show: false,
  },
  {
    title: "Realtime Chat — Socket.io",
    category: "fullstack",
    tags: ["Next.js", "Socket.io", "MongoDB"],
    image: null,
    gradient: "from-violet-500/40 via-fuchsia-500/25 to-cyan-500/30",
    description:
      "Real-time chat app with rooms and presence. Replace this with your real project.",
    live: "",
    // code: "",
    featured: false,
    show: false,
  },
];

// Project filter tabs shown in the UI
export const projectFilters = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "design", label: "UI / UX" },
];
