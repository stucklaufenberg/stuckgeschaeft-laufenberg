"use client";



export default function SectionHero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-stone">
      <div className="container relative z-10 flex flex-col items-center text-center">
        <span className="section-label mb-8 block translate-y-4 opacity-0 animate-[fade-in-up_1s_ease-out_forwards]">
          Stuckgeschäft Laufenberg
        </span>
        <h1 className="max-w-4xl font-serif text-5xl font-light tracking-tight md:text-7xl lg:text-8xl">
          Schwere Materialien. <br />
          <span className="italic">Leichte Wirkung.</span>
        </h1>
        <p className="mt-12 max-w-md font-sans text-lg font-light text-zinc-600 dark:text-zinc-400">
          Eine digitale Ausstellung hochwertiger Stuckarbeiten. Erleben Sie die Verbindung von Tradition und Moderne.
        </p>
      </div>
      
      {/* Background Gradient/Atmosphere */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-stone/50" />
    </section>
  );
}
