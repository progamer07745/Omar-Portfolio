"use client";

import { useEffect, useRef } from "react";

/**
 * Wrapper that adds a scroll-reveal entrance animation.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  style = {},
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeout;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
          // The entrance transition lasts ~0.7s. After it finishes, drop the
          // entrance delay so later transitions (hover, focus, etc.) are instant.
          timeout = setTimeout(() => {
            el.style.transitionDelay = "0ms";
          }, 900);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
