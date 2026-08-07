"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

/* Animated counter for the hero stats */
function Stat({ value, suffix, label, delay }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1500;
        const start = performance.now();

        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="hero-stat" style={{ transitionDelay: `${delay}ms` }}>
      <strong>
        {n}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export default function Hero() {
  const typeRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  /* Typewriter effect */
  useEffect(() => {
    const el = typeRef.current;
    if (!el) return;

    let role = 0;
    let i = 0;
    let deleting = false;
    let timeout;

    const tick = () => {
      const word = site.roles[role % site.roles.length];

      if (!deleting) {
        i += 1;
        el.innerHTML = word.slice(0, i) + '<span class="caret">|</span>';
        if (i === word.length) {
          deleting = true;
          timeout = setTimeout(tick, 1700);
          return;
        }
        timeout = setTimeout(tick, 65);
      } else {
        i -= 1;
        el.innerHTML = word.slice(0, i) + '<span class="caret">|</span>';
        if (i === 0) {
          deleting = false;
          role += 1;
          timeout = setTimeout(tick, 300);
          return;
        }
        timeout = setTimeout(tick, 32);
      }
    };

    tick();
    return () => clearTimeout(timeout);
  }, []);

  /* Tilt the profile photo with the mouse */
  const onMove = (e) => {
    const wrap = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - wrap.left) / wrap.width - 0.5;
    const py = (e.clientY - wrap.top) / wrap.height - 0.5;
    setTilt({ rx: -py * 10, ry: px * 12 });
  };

  const onLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-eyebrow">
            <span className="pulse-dot" />
            Available for freelance &amp; full-time
          </div>

          <h1>
            Hi, I&apos;m <span className="text-gradient">{site.name}</span>
            <br />
            <span className="hero-title-sub">Full Stack JS Developer</span>
          </h1>

          <div ref={typeRef} className="hero-typing text-gradient">
            <span className="caret">|</span>
          </div>

          <p className="hero-desc">
            I build <strong style={{ color: "#fff" }}>fast, secure, scalable web apps</strong> from{" "}
            database to pixels — React &amp; Next.js frontends, Node.js &amp; Express backends, and
            MongoDB powering it all. Plus a designer&apos;s eye for pixel-perfect UI.
          </p>

          <div className="hero-actions">
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary">
              <i className="fab fa-whatsapp" /> Hire Me
            </a>
            <a href="#projects" className="btn btn-ghost">
              View My Work <i className="fas fa-arrow-right" />
            </a>
            <a href={site.cv} download className="btn btn-purple">
              <i className="fas fa-download" /> Resume
            </a>
          </div>

          <div className="hero-stats">
            {site.stats.map((s, i) => (
              <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 120} />
            ))}
          </div>
        </div>

        <div>
          <div
            className="profile-wrap"
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`, transition: "transform 0.25s ease-out" }}
          >
            <div className="profile-glow" aria-hidden="true" />
            <div className="profile-frame">
              <div className="profile-img">
                <img src={site.photo} alt={`${site.name} — ${site.tagline}`} loading="eager" />
              </div>
            </div>

            <span className="fab-chip fab-1">
              <i className="fa-brands fa-react" /> React
            </span>
            <span className="fab-chip fab-2">
              <i className="fa-brands fa-node-js" /> Node.js
            </span>
            <span className="fab-chip fab-3">
              <i className="fas fa-leaf" /> MongoDB
            </span>
            <span className="fab-chip fab-4">
              <i className="fas fa-bolt" /> Next.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
