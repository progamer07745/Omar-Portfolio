"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );

    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a href="#hero" onClick={(e) => go(e, "hero")} className="nav-logo">
          Omar<span>.DEV</span>
        </a>

        <nav className="nav-links-desktop" aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => go(e, l.id)}
              className={`nav-link ${active === l.id ? "active" : ""}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
            style={{ marginLeft: "0.5rem" }}
          >
            <i className="fab fa-whatsapp" /> Hire Me
          </a>
        </nav>

        <button
          className="nav-burger"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <i className={`fas ${open ? "fa-times" : "fa-bars"}`} />
        </button>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={(e) => go(e, l.id)}>
            {l.label}
          </a>
        ))}
        <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary">
          <i className="fab fa-whatsapp" /> Hire Me on WhatsApp
        </a>
      </div>
    </>
  );
}
