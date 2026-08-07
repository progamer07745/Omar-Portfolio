/**
 * Skills — grouped by category.
 * Each skill has either `img` (a real image), `brand` (a hand-drawn icon) or `glyph` (a character/symbol)
 */

export const skillGroups = [
  {
    title: "Frontend",
    icon: "fa-solid fa-code",
    blurb: "React & Next.js interfaces that are fast, responsive and pixel-perfect.",
    skills: [
      { name: "HTML5", level: 95, img: "/images/html.webp" },
      { name: "CSS3", level: 95, img: "/images/css.webp" },
      { name: "JavaScript", level: 90, img: "/images/js.webp" },
      { name: "React", level: 85, img: "/images/react.webp" },
      { name: "Next.js", level: 80, brand: "nextjs" },
      { name: "Tailwind CSS", level: 85, img: "/images/tailwind.webp" },
      { name: "Bootstrap", level: 90, img: "/images/bootstrap.webp" },
    ],
  },
  {
    title: "Backend",
    icon: "fa-solid fa-server",
    blurb: "Scalable server-side logic, secure APIs and authentication with Node.js.",
    skills: [
      { name: "Node.js", level: 80, brand: "nodejs" },
      { name: "Express.js", level: 80, brand: "express" },
      { name: "REST APIs", level: 85, brand: "rest" },
      { name: "JWT & Auth", level: 75, brand: "jwt" },
      { name: "Middleware & Security", level: 75, glyph: "⛨", color: "#5eead4" },
    ],
  },
  {
    title: "Database",
    icon: "fa-solid fa-database",
    blurb: "Designing flexible data models and queries with MongoDB & Mongoose.",
    skills: [
      { name: "MongoDB", level: 80, brand: "mongodb" },
      { name: "Mongoose", level: 80, brand: "mongoose" },
      { name: "Data Modeling", level: 75, glyph: "◈", color: "#00eaff" },
      { name: "Aggregation & CRUD", level: 78, glyph: "⇆", color: "#67e8f9" },
    ],
  },
  {
    title: "Tools & Design",
    icon: "fa-solid fa-wand-magic-sparkles",
    blurb: "The daily toolkit that keeps the workflow clean and the design sharp.",
    skills: [
      { name: "Git", level: 85, img: "/images/git.webp" },
      { name: "GitHub", level: 85, img: "/images/github.webp" },
      { name: "Figma", level: 90, img: "/images/figma.webp" },
      { name: "VS Code", level: 90, brand: "vscode" },
      { name: "Postman", level: 75, brand: "postman" },
    ],
  },
];
