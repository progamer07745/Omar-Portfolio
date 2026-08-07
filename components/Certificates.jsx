"use client";

import { useState } from "react";
import { certificates } from "@/data/certificates";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

// Extract "Level N" from the title (e.g. "TOFAS Certified (Level 2) ...")
function getLevel(title) {
  const match = title.match(/Level\s*(\d+)/i);
  return match ? Number(match[1]) : null;
}

export default function Certificates() {
  const [active, setActive] = useState(null);
  const featured = certificates.filter((c) => c.featured);
  const rest = certificates.filter((c) => !c.featured);

  return (
    <section id="certificates" className="section">
      <div className="container">
        <SectionHeading
          kicker="Credentials"
          title="Certificates"
          sub="Continuous learning — certified across frontend, JavaScript and UI fundamentals."
        />

        {/* Premium showcase for the top credentials */}
        {featured.length > 0 && (
          <>
            <Reveal className="cert-premium-label">
              <i className="fa-solid fa-crown" /> Top Credentials
            </Reveal>

            <div className="cert-premium-grid">
              {featured.map((c, i) => {
                const level = getLevel(c.title);
                return (
                  <Reveal key={c.title} delay={i * 110} className="cert-premium-wrap">
                    <div className={`cert-premium lv-${level || i + 1}`}>
                      <span className="cert-premium-badge">
                        <i className="fa-solid fa-star" /> Certified
                      </span>

                      {level && (
                        <span className="cert-premium-level">
                          <i className="fa-solid fa-medal" /> Level {level}
                        </span>
                      )}

                      <div className="cert-premium-inner">
                        <button
                          type="button"
                          className="cert-premium-btn"
                          onClick={() => setActive(c)}
                          aria-label={`Open certificate: ${c.title}`}
                        >
                          <div className="cert-premium-img">
                            <img src={c.image} alt={c.title} loading="lazy" />
                          </div>
                          <h3>{c.title}</h3>
                        </button>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </>
        )}

        {/* Other certificates */}
        {rest.length > 0 && (
          <div className="cert-grid">
            {rest.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 80} className="cert-card card">
                <button
                  type="button"
                  className="cert-card-btn"
                  onClick={() => setActive(c)}
                  aria-label={`Open certificate: ${c.title}`}
                >
                  <img src={c.image} alt={c.title} loading="lazy" />
                  <h3>{c.title}</h3>
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <div
        className={`lightbox ${active ? "open" : ""}`}
        onClick={() => setActive(null)}
        aria-hidden={!active}
      >
        {active && (
          <>
            <img src={active.image} alt={active.title} />
            <p className="lightbox-caption">{active.title}</p>
          </>
        )}
        <button
          type="button"
          className="lightbox-close"
          onClick={() => setActive(null)}
          aria-label="Close certificate preview"
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
    </section>
  );
}
