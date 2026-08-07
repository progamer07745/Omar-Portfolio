"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 1000);
    const t2 = setTimeout(() => setGone(true), 1550);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`preloader ${hidden ? "preloader-hidden" : ""}`} aria-hidden="true">
      <div className="preloader-logo">
        Omar<span>.DEV</span>
      </div>
      <div className="preloader-bar">
        <span />
      </div>
      <div style={{ fontSize: "0.72rem", letterSpacing: "0.35em", color: "#9aa7bd", textTransform: "uppercase" }}>
        {site.tagline}
      </div>
    </div>
  );
}
