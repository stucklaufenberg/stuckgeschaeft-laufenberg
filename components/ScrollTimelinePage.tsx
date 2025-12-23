"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LabsProject } from "@/data/labs";

if (typeof globalThis.window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  data: LabsProject;
}

export default function ScrollTimelinePage({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Entrance
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
      });

      const slides = gsap.utils.toArray(".timeline-slide") as HTMLElement[];
      const totalSlides = slides.length;
      
      // CONFIG FROM USER SPEC
      const SCROLL_WEIGHT = 250; // vh per slide
      const INTRO_DURATION = 0.15; // 15% of total scroll for split transition
      const SCRUB = 1.5;

      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top top",
          end: `+=${(totalSlides * SCROLL_WEIGHT) + 100}vh`,
          pin: true,
          scrub: SCRUB,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Optional: Handle global state if needed
          }
        },
      });

      // 1. INTRO PHASE (0% - 15%)
      // Morph from Fullscreen-like state to Split Layout
      mainTl.fromTo(".split-container", 
        { width: "100%", x: 0 },
        { width: "90%", x: 0, duration: INTRO_DURATION, ease: "none" }
      );
      
      mainTl.fromTo(".content-column", 
        { width: "0%", opacity: 0 },
        { width: "33%", opacity: 1, duration: INTRO_DURATION, ease: "none" },
        0
      );

      // 2. STACKING PHASE (15% - 100%)
      slides.forEach((slide, i) => {
        const isLast = i === totalSlides - 1;
        
        // Stacking: Higher z-index for each subsequent slide
        gsap.set(slide, { zIndex: 10 + i });

        if (i > 0) {
          // Slide enters from bottom
          mainTl.fromTo(slide,
            { yPercent: 100 },
            { 
              yPercent: 0, 
              duration: 1, 
              ease: "none" 
            },
            INTRO_DURATION + (i - 1) * (1 - INTRO_DURATION) / (totalSlides - 1)
          );

          // Parallax effect on the image inside
          mainTl.fromTo(slide.querySelector(".slide-image"),
            { yPercent: 20, scale: 1.1 },
            { yPercent: 0, scale: 1, duration: 1, ease: "none" },
            INTRO_DURATION + (i - 1) * (1 - INTRO_DURATION) / (totalSlides - 1)
          );
        }

        // Text Sync: Fade + Zoom-in-95
        const content = slide.querySelector(".slide-content");
        if (content) {
          mainTl.fromTo(content,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" },
            INTRO_DURATION + (i) * (1 - INTRO_DURATION) / (totalSlides)
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  return (
    <div ref={containerRef} className="bg-stone-50 dark:bg-zinc-950">
      {/* 1. HERO SECTION */}
      <section 
        ref={heroRef} 
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={data.hero.image}
            alt={data.hero.title}
            fill
            className="object-cover opacity-30 grayscale brightness-110 dark:opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-stone-50 dark:to-zinc-950" />
        </div>

        <div className="hero-content relative z-10 px-6 text-center">
          <span className="section-label mb-8 block translate-y-4 animate-[fade-in-up_1s_ease-out_forwards] tracking-[0.3em] opacity-0 uppercase">
            {data.hero.navLogo}
          </span>
          <h1 className="mb-6 font-serif text-5xl font-light tracking-tight md:text-8xl lg:text-9xl">
            {data.hero.title.split('\n').map((line, i) => (
              <span key={`hero-line-${i}`} className="block">{line}</span>
            ))}
          </h1>
          <p className="font-serif text-lg italic text-zinc-400 md:text-2xl">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section 
        ref={introRef} 
        className="flex min-h-[70vh] items-center justify-center px-6 py-32 md:px-8"
      >
        <div className="max-w-4xl text-center">
          <blockquote className="mb-16 px-4 font-serif text-3xl font-light italic leading-tight text-foreground md:text-6xl">
            &ldquo;{data.intro.quote.split('\n').map((line, i) => (
              <span key={`quote-line-${i}`} className="block">{line}</span>
            ))}&rdquo;
          </blockquote>
          <p className="mx-auto max-w-xl font-sans text-base font-light leading-relaxed text-zinc-500 md:text-lg dark:text-zinc-400">
            {data.intro.description.split('\n').map((line, i) => (
              <span key={`desc-line-${i}`} className="block">{line}</span>
            ))}
          </p>
        </div>
      </section>

      <section 
        id="projekte"
        ref={timelineRef} 
        className="relative h-screen w-full overflow-hidden bg-zinc-950 text-stone-100"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="split-container relative h-full w-full overflow-hidden bg-zinc-900 shadow-2xl">
            
            {/* Left Content Side (Shared for all slides) */}
            <div className="content-column absolute left-0 top-0 z-50 h-full bg-zinc-950 p-6 md:p-16 flex flex-col justify-center border-r border-zinc-800">
              <div className="slide-content-container relative h-64 w-full">
                {data.chapter.slides.map((slide, i) => (
                  <div 
                    key={`text-${i}`}
                    className="slide-content absolute inset-0 flex flex-col justify-center opacity-0"
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <span className="font-mono text-[10px] opacity-40 md:text-xs">ITEM {String(i + 1).padStart(2, '0')}</span>
                      <div className="h-px w-6 bg-zinc-800 md:w-8" />
                    </div>
                    <h3 className="mb-4 font-serif text-2xl font-light tracking-wide md:mb-6 md:text-4xl">
                      {slide.title}
                    </h3>
                    <p className="font-sans text-xs font-light leading-relaxed text-zinc-400 md:text-sm">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-zinc-800 pt-6 md:mt-12 md:pt-8">
                <div className="flex flex-wrap gap-2">
                  {data.chapter.tags.map((tag, tagIdx) => (
                    <span key={`tag-${tagIdx}`} className="border border-zinc-800 px-2 py-0.5 text-[8px] uppercase tracking-widest text-zinc-500 md:px-2 md:py-1 md:text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image Side (Stacking) */}
            <div className="absolute right-0 top-0 h-full w-full md:w-2/3">
              {data.chapter.slides.map((slide, i) => (
                <div 
                  key={i} 
                  className="timeline-slide absolute inset-0 h-full w-full overflow-hidden"
                >
                  <div className="slide-image absolute inset-0 h-full w-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      quality={95}
                      sizes="(max-width: 768px) 100vw, 66vw"
                      className="object-cover object-top grayscale transition-all duration-1000 hover:grayscale-0"
                      priority={i < 2}
                    />
                    <div className="absolute inset-0 bg-zinc-950/20" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Chapter Info */}
        <div className="absolute bottom-6 left-6 z-20 md:bottom-12 md:left-12">
          <span className="section-label mb-1 block text-[10px] text-zinc-500 md:mb-2 md:text-xs">{data.chapter.category}</span>
          <h2 className="font-serif text-lg font-light italic md:text-2xl">{data.chapter.title}</h2>
        </div>
      </section>
      
      {/* Spacer for scroll depth */}
      <div className="h-[50vh] bg-zinc-950" />
    </div>
  );
}
