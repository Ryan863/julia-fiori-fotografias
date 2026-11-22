"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function LandingPageShell({ children }: { children: ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-reveal", {
          y: 26,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });

        const grids = gsap.utils.toArray<HTMLElement>(".reveal-grid");
        grids.forEach((grid) => {
          const cards = grid.querySelectorAll(".reveal-card");
          if (cards.length === 0) return;

          gsap.from(cards, {
            y: 28,
            opacity: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: grid,
              start: "top 90%",
              once: true,
            },
          });
        });

        if (typeof document !== "undefined" && document.fonts?.ready) {
          document.fonts.ready.then(() => {
            ScrollTrigger.refresh();
          });
        }
      });
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="overflow-x-clip">
      {children}
    </main>
  );
}
