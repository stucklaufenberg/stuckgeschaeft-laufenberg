"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle parallax for background
      gsap.to(bgRef.current, {
        scale: 1.1,
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Character-like reveal for title
      gsap.fromTo(titleRef.current, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5, 
          ease: "power4.out",
          delay: 0.5
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-black"
    >
      {/* Living Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-stone-100 dark:bg-zinc-950"
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-zinc-400 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        <span className="section-label mb-8 block translate-y-4 opacity-0 animate-[fade-in-up_1s_ease-out_forwards] delay-300">
          Stuckgeschäft Laufenberg
        </span>
        
        <h1 
          ref={titleRef}
          className="max-w-4xl font-serif text-5xl font-light tracking-tight md:text-7xl lg:text-8xl"
        >
          Antigravity. <br />
          <span className="italic text-zinc-400">Schwere Materialien. <br className="md:hidden" /> Leichte Wirkung.</span>
        </h1>
        
        <div className="mt-16 h-12 w-px bg-linear-to-b from-zinc-900 to-transparent dark:from-zinc-100 opacity-20" />
        
        <p className="mt-12 max-w-md font-sans text-lg font-light text-zinc-500 dark:text-zinc-400 opacity-0 animate-[fade-in_1.5s_ease-out_forwards] delay-1000">
          Stuck- und Putzarbeiten mit Haltung. <br />
          Die Schwere des Gipses trifft auf die Leichtigkeit des Designs.
        </p>
      </div>
      
      {/* Down Arrow Hint */}
      <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
      </div>
    </section>
  );
}
