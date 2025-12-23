import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="container mx-auto max-w-3xl px-8 py-32 font-sans selection:bg-zinc-100 dark:selection:bg-zinc-800">
      <header className="mb-24">
        <span className="section-label mb-8 block">Rechtliches</span>
        <h1 className="font-serif text-5xl font-light italic">Datenschutz</h1>
      </header>
      
      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-12 text-zinc-600 dark:text-zinc-400">
        <section>
          <h2 className="text-foreground font-medium mb-4 uppercase tracking-widest text-xs">1. Datenschutz auf einen Blick</h2>
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-medium mb-4 uppercase tracking-widest text-xs">2. Datenerfassung auf dieser Website</h2>
          <h3 className="text-foreground text-sm font-medium mt-6 mb-2">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="mt-4">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-medium mb-4 uppercase tracking-widest text-xs">3. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter: <br />
            <strong>Vercel Inc.</strong>
          </p>
        </section>

        <section className="pt-12 border-t border-zinc-100 dark:border-zinc-900">
          <p className="text-xs italic">
            Stand: Dezember 2025. Diese Website verzichtet bewusst auf unnötiges Tracking und Cookies von Drittanbietern.
          </p>
        </section>
      </div>

      <footer className="mt-24 pt-12 border-t border-zinc-100 dark:border-zinc-900">
        <Link href="/" className="section-label hover:text-foreground transition-colors inline-flex items-center gap-2">
          ← Zurück zur Ausstellung
        </Link>
      </footer>
    </main>
  );
}
