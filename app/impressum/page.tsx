import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="container mx-auto max-w-3xl px-8 py-32 font-sans selection:bg-zinc-100 dark:selection:bg-zinc-800">
      <header className="mb-24">
        <span className="section-label mb-8 block">Rechtliches</span>
        <h1 className="font-serif text-5xl font-light italic">Impressum</h1>
      </header>
      
      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-12 text-zinc-600 dark:text-zinc-400">
        <section>
          <h2 className="text-foreground font-medium mb-4 uppercase tracking-widest text-xs">Angaben gemäß § 5 TMG</h2>
          <p>
            Stuckgeschäft Laufenberg<br />
            [Strasse / Hausnummer]<br />
            [PLZ / Stadt]
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-medium mb-4 uppercase tracking-widest text-xs">Vertreten durch</h2>
          <p>Timo Laufenberg</p>
        </section>

        <section>
          <h2 className="text-foreground font-medium mb-4 uppercase tracking-widest text-xs">Kontakt</h2>
          <p>
            Telefon: [Telefonnummer]<br />
            E-Mail: [E-Mail-Adresse des CEO]
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-medium mb-4 uppercase tracking-widest text-xs">Redaktionell verantwortlich</h2>
          <p>Timo Laufenberg</p>
        </section>

        <section className="pt-12 border-t border-zinc-100 dark:border-zinc-900">
          <p className="text-xs italic">
            Diese Webpräsenz repräsentiert das Stuckgeschäft Laufenberg.
          </p>
        </section>
      </div>

      <footer className="mt-24 pt-12 border-t border-zinc-100 dark:border-zinc-900">
        <Link href="/" className="section-label hover:text-foreground transition-colors inline-flex items-center gap-2">
          ← Zurück zum Hauptauftritt
        </Link>
      </footer>
    </main>
  );
}
