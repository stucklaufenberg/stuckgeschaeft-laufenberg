"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

interface ProjectSectionProps {
  readonly project: Project;
}

export default function ProjectSection({ project }: ProjectSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%", // 3 viewports for 3 images
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Sequence: Material (Initial) -> Detail (Fade In) -> Raum (Fade In)
      
      // Image 2 (Detail) reveals
      tl.to(img2Ref.current, {
        opacity: 1,
        scale: 1,
        ease: "none",
      }, 0.33); // Start at 1/3 of the timeline

      // Image 3 (Raum) reveals
      tl.to(img3Ref.current, {
        opacity: 1,
        scale: 1,
        ease: "none",
      }, 0.66); // Start at 2/3 of the timeline

      // subtle text movement
      tl.to(textRef.current, {
        y: -20,
        opacity: 0.8,
        ease: "none",
      }, 0);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full overflow-hidden bg-white dark:bg-black">
      <div ref={containerRef} className="relative h-full w-full">
        
        {/* Image Stack */}
        <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16 lg:p-24">
          <div className="relative aspect-[4/5] h-full max-h-[80vh] w-auto overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-2xl">
            
            {/* Image 1: Material */}
            <div ref={img1Ref} className="absolute inset-0 z-10">
              <div className="flex h-full w-full items-center justify-center text-zinc-400">
                <span className="section-label">01 // Material</span>
                <div className="absolute bottom-4 left-4 text-[10px] uppercase opacity-30">{project.images.material}</div>
              </div>
            </div>

            {/* Image 2: Detail */}
            <div 
              ref={img2Ref} 
              className="absolute inset-0 z-20 opacity-0 scale-105 bg-zinc-200 dark:bg-zinc-800"
            >
              <div className="flex h-full w-full items-center justify-center text-zinc-400">
                <span className="section-label">02 // Detail</span>
                <div className="absolute bottom-4 left-4 text-[10px] uppercase opacity-30">{project.images.detail}</div>
              </div>
            </div>

            {/* Image 3: Raum */}
            <div 
              ref={img3Ref} 
              className="absolute inset-0 z-30 opacity-0 scale-105 bg-white dark:bg-black"
            >
              <div className="flex h-full w-full items-center justify-center text-zinc-400">
                <span className="section-label text-foreground">03 // Raum</span>
                <div className="absolute bottom-4 left-4 text-[10px] uppercase opacity-30">{project.images.raum}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Overlay */}
        <div 
          ref={textRef}
          className="pointer-events-none absolute bottom-12 left-12 z-40 max-w-sm md:bottom-24 md:left-24"
        >
          <span className="section-label mb-4 block">Projekt {project.number}</span>
          <h2 className="font-serif text-4xl font-light md:text-6xl">{project.title}</h2>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <div className="mt-8 flex gap-8 text-xs uppercase tracking-[0.2em] text-zinc-400">
            <div>{project.location}</div>
            <div>{project.year}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
