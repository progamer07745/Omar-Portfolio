import { site } from "@/data/site";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-logo">
        Omar<span>.DEV</span>
      </div>

      <div className="footer-links">
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`}>
            {l.label}
          </a>
        ))}
        <a href={site.github} target="_blank" rel="noreferrer">
          <i className="fab fa-github" /> GitHub
        </a>
      </div>

      <p>
        © {year} <b>Omar Mostafa</b>. All Rights Reserved.
      </p>
    </footer>
  );
}
