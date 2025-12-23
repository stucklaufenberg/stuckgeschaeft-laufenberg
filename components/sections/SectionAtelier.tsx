"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof globalThis.window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ATELIER_IMAGES = [
  { id: 1, label: "Material.", speed: 0.05, type: "material", src: "/atelier/1.png" }, 
  { id: 2, label: "Zeit.", speed: 0.12, type: "detail", src: "/atelier/2.png" },      
  { id: 3, label: "Handwerk.", speed: 0.18, type: "hand", src: "/atelier/3.png" },   
  { id: 4, label: "Präzision.", speed: 0.1, type: "light", src: "/atelier/4.png" },            
];

export default function SectionAtelier() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const isMobile = globalThis.window.innerWidth < 768;

      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        const config = ATELIER_IMAGES[index];
        
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
              start: config.type === "material" ? "top 80%" : "top bottom",
              end: config.type === "hand" ? "bottom 20%" : "bottom top",
              scrub: 1.2,
            },
          }
        );
      });

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
      className="relative min-h-[220vh] w-full bg-stone-50 py-32 dark:bg-zinc-950 md:py-64"
    >
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 gap-y-32 md:grid-cols-12 md:gap-y-64">
          
          {/* Image 01 - Material */}
          <div 
            ref={(el) => { itemsRef.current[0] = el; }} 
            className="md:col-span-5 md:col-start-2"
          >
            <div className="relative aspect-3/4 overflow-hidden bg-zinc-100 shadow-2xl dark:bg-zinc-900">
               <Image 
                 src={ATELIER_IMAGES[0].src} 
                 alt="Atelier Material" 
                 fill 
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
            </div>
            <p className="section-label mt-8 italic text-stone-500">{ATELIER_IMAGES[0].label}</p>
          </div>

          {/* Image 02 - Detail */}
          <div 
            ref={(el) => { itemsRef.current[1] = el; }} 
            className="md:col-span-4 md:col-start-8 md:mt-32"
          >
            <div className="relative aspect-square overflow-hidden bg-zinc-100 shadow-2xl dark:bg-zinc-900">
               <Image 
                 src={ATELIER_IMAGES[1].src} 
                 alt="Atelier Detail" 
                 fill 
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
            </div>
            <p className="section-label mt-8 italic text-right text-stone-500">{ATELIER_IMAGES[1].label}</p>
          </div>

          {/* Image 03 - Handwerk */}
          <div 
            ref={(el) => { itemsRef.current[2] = el; }} 
            className="md:col-span-6 md:col-start-4"
          >
            <div className="relative aspect-video overflow-hidden bg-zinc-100 shadow-2xl dark:bg-zinc-900">
               <Image 
                 src={ATELIER_IMAGES[2].src} 
                 alt="Atelier Handwerk" 
                 fill 
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
            </div>
            <p className="section-label mt-8 italic text-center text-stone-500">{ATELIER_IMAGES[2].label}</p>
          </div>

          {/* Image 04 - Licht */}
          <div 
            ref={(el) => { itemsRef.current[3] = el; }} 
            className="md:col-span-4 md:col-start-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 shadow-2xl dark:bg-zinc-900">
               <Image 
                 src={ATELIER_IMAGES[3].src} 
                 alt="Atelier Licht & Präzision" 
                 fill 
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
            </div>
            <p className="section-label mt-8 italic text-stone-500">{ATELIER_IMAGES[3].label}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
