import { contactChannels, site } from "@/data/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          kicker="Contact"
          title="Let&apos;s Connect"
          sub="Got a project in mind? My inbox (and WhatsApp) is always open."
        />

        <div className="contact-grid">
          {contactChannels.map((c, i) => (
            <Reveal key={c.label} delay={(i % 5) * 70}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="contact-item card"
              >
                <i className={c.icon} />
                <h3>{c.label}</h3>
                <small>{c.value}</small>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="contact-cta">
          <h3>Ready to build something great?</h3>
          <p>I&apos;m currently available for freelance projects and full-time roles.</p>
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary">
            <i className="fab fa-whatsapp" /> Let&apos;s Talk
          </a>
          <a href={site.cv} download className="btn btn-purple">
            <i className="fa-solid fa-file-arrow-down" /> Download CV
          </a>
        </Reveal>
      </div>
    </section>
  );
}
