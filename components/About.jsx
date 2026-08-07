import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

const features = [
  { icon: "fa-solid fa-rocket", label: "Fast Delivery" },
  { icon: "fa-solid fa-shield-halved", label: "Secure & Scalable" },
  { icon: "fa-solid fa-database", label: "MongoDB Powered" },
];

const stack = [
  { label: "React", cls: "react" },
  { label: "Next.js", cls: "next" },
  { label: "Node.js", cls: "node" },
  { label: "Express", cls: "express" },
  { label: "MongoDB", cls: "mongo" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          kicker="About me"
          title="Full-Stack Mind, Designer&apos;s Eye"
          sub="From database schema to shipping pixels — I handle the whole journey."
        />

        <div className="about-grid">
          <Reveal>
            <div className="about-photo-wrap">
              <div className="about-photo">
                <img src={site.photo} alt={`${site.name} — ${site.tagline}`} loading="lazy" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="about-text">
              <h2>
                Hi, I&apos;m <span className="text-gradient">{site.name}</span>
              </h2>
              <p className="lead">
                I&apos;m a <strong>Full Stack JS Developer</strong> — I build React &amp; Next.js
                frontends, Node.js &amp; Express backends, and MongoDB databases that fit together
                as one fast, secure product.
              </p>
              <p>
                I started as a designer, so every API I write and every component I ship is
                obsessed with the pixel it lands on. Whether it&apos;s a marketing site, a web app or
                an e-commerce automation, I care about the details that make software feel
                effortless.
              </p>
              <div className="feature-badges">
                {features.map((f) => (
                  <span key={f.label} className="feature-badge">
                    <i className={f.icon} /> {f.label}
                  </span>
                ))}
              </div>
              <div className="stack-chips">
                {stack.map((s) => (
                  <span key={s.label} className={`stack-chip ${s.cls}`}>
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
