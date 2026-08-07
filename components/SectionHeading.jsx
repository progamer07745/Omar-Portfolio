import Reveal from "@/components/Reveal";

export default function SectionHeading({ kicker, title, sub }) {
  return (
    <Reveal className="section-head">
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  );
}
