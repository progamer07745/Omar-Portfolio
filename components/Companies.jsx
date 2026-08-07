import { companies } from "@/data/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Companies() {
  return (
    <section id="companies" className="section">
      <div className="container">
        <SectionHeading
          kicker="Experience"
          title="Brands I&apos;ve Worked With"
          sub="Real teams and real products — frontend, branding and full builds."
        />

        <div className="companies-grid">
          {companies.map((c, i) => (
            <Reveal key={c.name} delay={i * 120} className="company-card card">
              <div className="company-logo">
                <img src={c.logo} alt={`${c.name} logo`} loading="lazy" />
              </div>
              <h3>{c.name}</h3>
              <p className="company-role">{c.role}</p>
              <div className="company-links">
                {c.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="company-link"
                    aria-label={`${c.name} on social media`}
                  >
                    <i className={l.icon} />
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
