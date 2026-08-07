import { skillGroups } from "@/data/skills";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import BrandIcon from "@/components/BrandIcon";

function SkillLogo({ skill }) {
  if (skill.img) return <img src={skill.img} alt={skill.name} loading="lazy" />;
  if (skill.brand) return <BrandIcon name={skill.brand} size={20} />;
  return (
    <span className="glyph" style={{ color: skill.color }}>
      {skill.glyph}
    </span>
  );
}

export default function TechStack() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          kicker="Skills & Tools"
          title="My Tech Stack"
          sub="The MERN toolchain I use daily — from database to browser tab."
        />

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 90} className="skill-group card">
              <div className="skill-group-head">
                <div className="service-icon-tile">
                  <i className={group.icon} />
                </div>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.blurb}</p>
                </div>
              </div>

              {group.skills.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-logo">
                    <SkillLogo skill={skill} />
                  </div>
                  <div className="skill-meta">
                    <div className="name">
                      {skill.name} <em>{skill.level}%</em>
                    </div>
                    <div className="skill-bar">
                      <span style={{ "--level": `${skill.level}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
