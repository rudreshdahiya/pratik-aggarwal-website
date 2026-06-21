import { useEffect } from "react";

export function useRevealAll(threshold = 0.12) {
  useEffect(() => {
    const els = document.querySelectorAll<Element>(".reveal, .reveal-stagger");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);
}
