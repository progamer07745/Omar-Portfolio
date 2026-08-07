"use client";

import { useMemo, useState } from "react";
import { projects, projectFilters } from "@/data/projects";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

/* Fixed gradient map instead of dynamic Tailwind classes */
const gradients = {
  "from-emerald-500/40 via-teal-500/25 to-cyan-500/30":
    "linear-gradient(135deg, rgba(16,185,129,.38), rgba(45,212,191,.22) 45%, rgba(6,182,212,.30))",
  "from-cyan-500/40 via-blue-500/25 to-violet-500/30":
    "linear-gradient(135deg, rgba(6,182,212,.38), rgba(59,130,246,.22) 45%, rgba(139,92,246,.30))",
  "from-violet-500/40 via-fuchsia-500/25 to-cyan-500/30":
    "linear-gradient(135deg, rgba(139,92,246,.38), rgba(217,70,239,.22) 45%, rgba(6,182,212,.30))",
};

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const list = useMemo(
    () => projects.filter((p) => p.show && (filter === "all" || p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          kicker="Portfolio"
          title="Featured Work"
          sub="A mix of frontend, full-stack and design work — real clients, real deadlines."
        />

        <Reveal className="filters">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              className={`filter-btn ${filter === f.id ? "active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="projects-grid">
          {list.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90} className="project-card card">
              <div className="project-thumb">
                {p.image ? (
                  <img src={p.image} alt={p.title} loading="lazy" />
                ) : (
                  <div
                    className="project-placeholder"
                    style={{ background: gradients[p.gradient] || "linear-gradient(135deg, rgba(0,234,255,.22), rgba(192,132,252,.16))" }}
                  >
                    <i className="fa-solid fa-layer-group" />
                    <span>{p.status || p.category}</span>
                  </div>
                )}
                {p.featured && <span className="badge badge-featured">Featured</span>}
                {p.status && (
                  <span className="badge badge-progress" style={{ left: "auto", right: "12px" }}>
                    {p.status}
                  </span>
                )}
              </div>

              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tech-chips">
                  {p.tags.map((t) => (
                    <span key={t} className="tech-chip">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
                      <i className="fa-solid fa-arrow-up-right-from-square" /> Live
                    </a>
                  ) : (
                    <a className="btn btn-ghost btn-sm" aria-disabled="true">
                      <i className="fa-solid fa-lock" /> Live
                    </a>
                  )}
                  {/* {p.code ? (
                    <a href={p.code} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                      <i className="fa-brands fa-github" /> Code
                    </a>
                  ) : (
                    <a className="btn btn-primary btn-sm" aria-disabled="true">
                      <i className="fa-brands fa-github" /> Code
                    </a>
                  )} */}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
