import { socials } from "@/data/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function SocialPresence() {
  return (
    <section id="social" className="section">
      <div className="container">
        <SectionHeading
          kicker="Community"
          title="Social Presence"
          sub="Teaching and sharing the craft with a growing community online."
        />

        <div className="social-grid">
          {socials.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="social-card card">
              <i className={s.icon} />
              <h3>{s.label}</h3>
              <p>
                <strong style={{ color: "#fff" }}>{s.value}</strong> {s.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
