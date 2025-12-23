"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHero from "./sections/SectionHero";
import ProjectSection from "./sections/ProjectSection";
import ContactForm from "./ContactForm";
import { curatedProjects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollExhibition() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Global orchestration could happen here if needed
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <SectionHero />
      
      {/* 5 Projects × 3 Images Scroll-Timeline */}
      {curatedProjects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}

      {/* Contact Section */}
      <section className="flex min-h-screen items-center justify-center bg-stone px-8 py-32">
        <div className="w-full">
          <div className="mb-24 text-center">
            <span className="section-label mb-8 block translate-y-4 opacity-100 italic">Einladung zum Gespräch</span>
            <h2 className="font-serif text-5xl font-light italic text-foreground md:text-7xl">
              Ihr Projekt <br /> in guten Händen.
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
