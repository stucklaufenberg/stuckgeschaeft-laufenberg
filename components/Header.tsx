"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-700 ease-in-out px-8 md:px-12 py-8 ${
        isScrolled ? "bg-white/80 backdrop-blur-md dark:bg-black/80 py-4" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-4">
          <div className="h-0.5 w-8 bg-zinc-900 transition-all group-hover:w-12 dark:bg-zinc-100" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-900 dark:text-zinc-100">
            Antigravity
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          {["Projekte", "Atelier", "Kontakt"].map((item) => (
            <button
              key={item}
              onClick={() => {
                const id = item.toLowerCase();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative overflow-hidden py-1 text-[10px] uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <span>{item}</span>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-zinc-900 transition-all duration-500 group-hover:w-full dark:bg-zinc-100" />
            </button>
          ))}
        </nav>

        {/* Minimal Mobile Indicator if needed */}
        <div className="md:hidden">
           <div className="h-4 w-4 rounded-full border border-zinc-900/20 dark:border-zinc-100/20" />
        </div>
      </div>
    </header>
  );
}
