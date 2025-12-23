"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ATELIER_IMAGES = [
  { id: 1, label: "Material.", speed: 0.05, type: "material" }, // Very slow, heavy
  { id: 2, label: "Zeit.", speed: 0.12, type: "detail" },      // Medium
  { id: 3, label: "Handwerk.", speed: 0.18, type: "hand" },   // Fastest, small movement
  { id: 4, label: "", speed: 0.1, type: "light" },            // Medium
];

export default function SectionAtelier() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        const config = ATELIER_IMAGES[index];
        
        // Intensity scale: Mobile is halved as per Principal recommendation
        const amplitude = isMobile ? 150 : 300;
        const yMove = config.speed * amplitude;

        gsap.fromTo(
          item,
          { y: yMove },
          {
            y: -yMove,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              // Rhythmic Start/End: Material starts later, Hand earlier
              start: config.type === "material" ? "top 80%" : "top bottom",
              end: config.type === "hand" ? "bottom 20%" : "bottom top",
              scrub: 1.2, // Smoother scrub for "breath" feel
              // Introduce stillness for "material"
              onUpdate: (self) => {
                if (config.type === "material" && self.progress > 0.4 && self.progress < 0.6) {
                   // Slight pause simulation could be handled via a more complex timeline
                   // but for MVP scrub: 1.2 provides the "weight"
                }
              }
            },
          }
        );
      });

      // Global fade transition for Atmosphere
      gsap.fromTo(containerRef.current, 
        { opacity: 0.8 },
        { 
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "top top",
            scrub: true
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[220vh] w-full bg-white py-32 dark:bg-black md:py-64"
    >
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 gap-y-32 md:grid-cols-12 md:gap-y-64">
          
          {/* Image 01 - Material (Heavy, slow) */}
          <div 
            ref={(el) => { itemsRef.current[0] = el; }} 
            className="md:col-span-5 md:col-start-2"
          >
            <div className="image-scale-container aspect-3/4 overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-sm">
               <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-tighter text-zinc-300">
                 [ Atelier 01 - Material ]
               </div>
            </div>
            <p className="section-label mt-8 italic">{ATELIER_IMAGES[0].label}</p>
          </div>

          {/* Image 02 - Detail */}
          <div 
            ref={(el) => { itemsRef.current[1] = el; }} 
            className="md:col-span-4 md:col-start-8 md:mt-32"
          >
            <div className="image-scale-container aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-sm">
               <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-tighter text-zinc-300">
                 [ Atelier 02 - Zeit ]
               </div>
            </div>
            <p className="section-label mt-8 italic text-right">{ATELIER_IMAGES[1].label}</p>
          </div>

          {/* Image 03 - Handwerk (Fastest, Smallest) */}
          <div 
            ref={(el) => { itemsRef.current[2] = el; }} 
            className="md:col-span-6 md:col-start-4"
          >
            <div className="image-scale-container aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-sm">
               <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-tighter text-zinc-300">
                 [ Atelier 03 - Hand ]
               </div>
            </div>
            <p className="section-label mt-8 italic text-center">{ATELIER_IMAGES[2].label}</p>
          </div>

          {/* Image 04 - Licht */}
          <div 
            ref={(el) => { itemsRef.current[3] = el; }} 
            className="md:col-span-4 md:col-start-2"
          >
            <div className="image-scale-container aspect-4/5 overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-sm">
               <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-tighter text-zinc-300">
                 [ Atelier 04 - Licht ]
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
