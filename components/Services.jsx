import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: "fa-solid fa-code",
    title: "Frontend Development",
    desc: "React & Next.js interfaces that are fast, responsive and pixel-perfect.",
    list: [
      { icon: "fa-solid fa-wand-magic-sparkles", text: "Unique Designs" },
      { icon: "fa-solid fa-bolt", text: "High Performance" },
      { icon: "fa-solid fa-layer-group", text: "Scalable Systems" },
    ],
  },
  {
    icon: "fa-solid fa-server",
    title: "Backend & APIs",
    desc: "Node.js & Express REST APIs with authentication, security and clean architecture.",
    list: [
      { icon: "fa-solid fa-shield-halved", text: "JWT Authentication" },
      { icon: "fa-solid fa-plug", text: "RESTful APIs" },
      { icon: "fa-solid fa-lock", text: "Secure Middleware" },
    ],
  },
  {
    icon: "fa-solid fa-database",
    title: "MongoDB & Data",
    desc: "Flexible data modeling with Mongoose — schemas, indexes and aggregation pipelines.",
    list: [
      { icon: "fa-solid fa-cubes", text: "Data Modeling" },
      { icon: "fa-solid fa-arrows-rotate", text: "CRUD & Aggregation" },
      { icon: "fa-solid fa-rocket", text: "Query Optimization" },
    ],
  },
  {
    icon: "fa-solid fa-pen-nib",
    title: "UI / UX Design",
    desc: "Clean visual identities and interfaces people actually enjoy using.",
    list: [
      { icon: "fa-solid fa-fingerprint", text: "Visual Identity" },
      { icon: "fa-solid fa-mobile-screen", text: "Mobile-first Layouts" },
      { icon: "fa-solid fa-share-nodes", text: "Social Content" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          kicker="What I do"
          title="Services"
          sub="Full-cycle delivery — design, frontend, backend and data, all in one hand."
        />

        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 90} className="service-card card">
              <div className="service-icon-tile">
                <i className={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service-list">
                {s.list.map((li) => (
                  <li key={li.text}>
                    <i className={li.icon} /> {li.text}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
