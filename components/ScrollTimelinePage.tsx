"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LabsProject } from "@/data/labs";
import { ArrowRight, MoveRight, ChevronDown } from "lucide-react";

if (typeof globalThis.window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  readonly data: LabsProject;
}

export default function ScrollTimelinePage({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 0. Custom Cursor
      const cursor = cursorRef.current;
      if (cursor) {
        const handleMouseMove = (e: MouseEvent) => {
          gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.6,
            ease: "power2.out"
          });
        };
        globalThis.window.addEventListener("mousemove", handleMouseMove);
      }

      // 1. Hero Entrance
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        ease: "power4.out",
      });

      const slides = gsap.utils.toArray(".timeline-slide") as HTMLElement[];
      const totalSlides = slides.length;
      
      const SCROLL_WEIGHT = 250; 
      const INTRO_DURATION = 0.15; 
      const SCRUB = 1.5;

      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top top",
          end: `+=${(totalSlides * SCROLL_WEIGHT) + 150}vh`,
          pin: true,
          scrub: SCRUB,
          anticipatePin: 1,
        },
      });

      // 1. INTRO PHASE
      mainTl.fromTo(".split-container", 
        { width: "95vw", borderRadius: "4px" },
        { width: "100vw", borderRadius: "0px", duration: INTRO_DURATION, ease: "none" }
      );
      
      mainTl.fromTo(".content-column", 
        { width: "0%", opacity: 0, xPercent: -100 },
        { width: "33%", opacity: 1, xPercent: 0, duration: INTRO_DURATION, ease: "none" },
        0
      );

      // 2. STACKING PHASE
      slides.forEach((slide, i) => {
        gsap.set(slide, { zIndex: 10 + i });

        if (i > 0) {
          mainTl.fromTo(slide,
            { yPercent: 100 },
            { yPercent: 0, duration: 1, ease: "none" },
            INTRO_DURATION + (i - 1) * (1 - INTRO_DURATION) / (totalSlides)
          );

          mainTl.fromTo(slide.querySelector(".slide-image"),
            { yPercent: 25, scale: 1.15 },
            { yPercent: 0, scale: 1, duration: 1, ease: "none" },
            INTRO_DURATION + (i - 1) * (1 - INTRO_DURATION) / (totalSlides)
          );
        }

        const content = slide.querySelector(".slide-content");
        if (content) {
          mainTl.fromTo(content,
            { opacity: 0, scale: 0.95, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" },
            INTRO_DURATION + (i) * (1 - INTRO_DURATION) / (totalSlides)
          );
        }
      });

      // 3. EXIT / FUNNEL PHASE (Final 15% of scroll)
      mainTl.fromTo(".funnel-overlay",
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: 0, duration: 0.5, ease: "power3.inOut" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  return (
    <div ref={containerRef} className="relative bg-stone-50 dark:bg-zinc-950">
      {/* 0. CUSTOM CURSOR */}
      <div 
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-stone-400 bg-transparent mix-blend-difference md:flex"
      >
        <div className="h-1 w-1 rounded-full bg-stone-100" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110 animate-[slow-zoom_20s_ease-in-out_infinite]">
          <Image
            src={data.hero.image}
            alt={data.hero.title}
            fill
            className="object-cover opacity-20 grayscale brightness-110"
            priority
          />
        </div>

        <div className="hero-content relative z-10 px-6 text-center">
          <span className="section-label mb-12 flex items-center justify-center gap-4 text-[10px] tracking-[0.4em] text-stone-500 uppercase">
            <span className="h-px w-8 bg-stone-700" />
            {data.hero.navLogo}
            <span className="h-px w-8 bg-stone-700" />
          </span>
          <h1 className="mb-8 font-serif text-6xl font-light tracking-tighter md:text-9xl">
            {data.hero.title.split('\n').map((line, i) => (
              <span key={`hero-line-${i}`} className="block">{line}</span>
            ))}
          </h1>
          <div className="flex flex-col items-center gap-8">
            <p className="max-w-lg font-serif text-lg italic text-zinc-500 md:text-2xl">
              {data.hero.subtitle}
            </p>
            <div className="animate-bounce">
              <ChevronDown className="h-6 w-6 text-stone-600" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TIMELINE SECTION */}
      <section 
        id="projekte"
        ref={timelineRef} 
        className="relative h-screen w-full overflow-hidden bg-zinc-950"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="split-container relative h-full w-full overflow-hidden bg-zinc-900 shadow-2xl">
            
            {/* Left Content Column */}
            <div className="content-column absolute left-0 top-0 z-50 h-full bg-zinc-950 p-6 flex flex-col justify-center border-r border-zinc-900 md:p-16">
              <div className="slide-content-container relative h-72 w-full">
                {data.chapter.slides.map((slide, i) => (
                  <div 
                    key={`text-${i}`}
                    className="slide-content absolute inset-0 flex flex-col justify-center opacity-0"
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <span className="font-mono text-[10px] tracking-tighter text-stone-600">PROJECT {String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="mb-4 font-serif text-3xl font-light tracking-wide md:text-5xl">
                      {slide.title}
                    </h3>
                    <p className="font-sans text-xs font-light leading-relaxed text-zinc-500 md:text-sm">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-16 border-t border-zinc-900 pt-8">
                <div className="flex flex-wrap gap-2">
                  {data.chapter.tags.map((tag, tagIdx) => (
                    <span key={`tag-${tagIdx}`} className="bg-zinc-900/50 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Stacking Images */}
            <div className="absolute right-0 top-0 h-full w-full md:w-2/3">
              {data.chapter.slides.map((slide, i) => (
                <div 
                  key={`image-${i}`} 
                  className="timeline-slide absolute inset-0 h-full w-full overflow-hidden"
                >
                  <div className="slide-image absolute inset-0 h-full w-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      quality={100}
                      sizes="66vw"
                      className="object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                      priority={i < 2}
                    />
                    <div className="absolute inset-0 bg-zinc-950/40 mix-blend-multiply" />
                  </div>
                </div>
              ))}
            </div>

            {/* 3. FUNNEL OVERLAY (Dynamic Exit) */}
            <div className="funnel-overlay pointer-events-none absolute inset-0 z-[100] flex flex-col items-center justify-center bg-stone-100 p-8 text-center opacity-0 dark:bg-zinc-950">
               <div className="pointer-events-auto max-w-2xl">
                 <span className="mb-8 block font-mono text-xs tracking-widest text-stone-500 uppercase">Der nächste Schritt</span>
                 <h2 className="mb-12 font-serif text-5xl font-light leading-tight md:text-8xl">Bereit für Ihre Vision?</h2>
                 <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                   <Link 
                     href="/quiz"
                     className="group flex items-center gap-4 border border-stone-800 bg-stone-900 px-8 py-4 text-xs tracking-widest text-stone-100 uppercase transition-all hover:bg-transparent hover:text-stone-900"
                   >
                     Projekt-Check starten
                     <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                   </Link>
                   <Link 
                     href="/formular"
                     className="group flex items-center gap-4 border border-stone-300 px-8 py-4 text-xs tracking-widest text-stone-600 uppercase transition-all hover:border-stone-800 hover:text-stone-900"
                   >
                     Direktanfrage
                     <MoveRight className="h-4 w-4 text-stone-400 group-hover:text-stone-800" />
                   </Link>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spacer for scroll depth */}
      <div className="h-[20vh] bg-stone-100 dark:bg-zinc-950" />
    </div>
  );
}
