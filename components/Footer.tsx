"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-50 py-16 dark:bg-zinc-950 md:py-24">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-start justify-between gap-16 md:flex-row md:items-end">
          
          <div className="max-w-md">
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-900 dark:text-zinc-100">
              Stuckgeschäft Laufenberg
            </h3>
            <p className="font-serif text-lg italic text-zinc-500 dark:text-zinc-400">
              Handwerkliche Exzellenz. Digitale Präzision. 
              Wir formen Räume mit der Schwere des Materials 
              und der Leichtigkeit des Details.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400">Menü</span>
              <nav className="flex flex-col gap-2">
                 <button onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} className="text-left text-sm hover:text-zinc-500 transition-colors">Startseite</button>
                 <Link href="/impressum" className="text-sm hover:text-zinc-500 transition-colors">Impressum</Link>
                 <Link href="/datenschutz" className="text-sm hover:text-zinc-500 transition-colors">Datenschutz</Link>
              </nav>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400">Kontakt</span>
              <div className="flex flex-col gap-2 text-sm italic">
                <p>Kölner Straße 123</p>
                <p>50667 Köln</p>
                <a href="mailto:info@stuck-laufenberg.de" className="hover:text-zinc-500 transition-colors">info@stuck-laufenberg.de</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 md:flex-row">
          <p className="text-[10px] uppercase tracking-widest text-zinc-400">
            © {currentYear} Stuckgeschäft Laufenberg
          </p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-400">
            Antigravity v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
