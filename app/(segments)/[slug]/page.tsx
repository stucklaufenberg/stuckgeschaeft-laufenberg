import { notFound } from "next/navigation";
import { segmentProjects } from "@/data/segments";
import ScrollTimelinePage from "@/components/ScrollTimelinePage";
import SectionAtelier from "@/components/sections/SectionAtelier";
import ContactForm from "@/components/ContactForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = segmentProjects[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full">
      <ScrollTimelinePage data={project} />
      
      {/* Secondary Breath for Segments */}
      <SectionAtelier />

      {/* Direct CTA */}
      <section id="kontakt" className="flex min-h-screen items-center justify-center bg-stone-50 px-8 py-32 dark:bg-zinc-950">
        <div className="w-full">
          <div className="mb-24 text-center">
            <span className="section-label mb-8 block translate-y-4 opacity-100 italic">Anfrage</span>
            <h2 className="font-serif text-5xl font-light italic text-foreground md:text-7xl">
              Starten Sie Ihr <br /> Projekt mit uns.
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
