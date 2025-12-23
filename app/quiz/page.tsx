"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const QUESTIONS: {
  id: string;
  title: string;
  options: { id: string; label: string; icon?: string; sub?: string }[];
}[] = [
  {
    id: "property",
    title: "Welches Objekt <br /> besitzen Sie?",
    options: [
      { id: "haus", label: "Haus", icon: "🏠" },
      { id: "app", label: "Appartment", icon: "🏙️" },
      { id: "commercial", label: "Gewerbe", icon: "🏢" },
      { id: "land", label: "Grundstück", icon: "🌳" }
    ]
  },
  {
    id: "state",
    title: "In welchem <br /> Zustand ist es?",
    options: [
      { id: "neubau", label: "Neubau", sub: "Vision geplant" },
      { id: "bestand", label: "Bestand", sub: "In Bewohnung" },
      { id: "sanierung", label: "Altbau", sub: "Kernsanierung" },
      { id: "rohbau", label: "Rohbau", sub: "Bereits im Bau" }
    ]
  },
  {
    id: "priority",
    title: "Was ist Ihnen <br /> am wichtigsten?",
    options: [
      { id: "design", label: "Ästhetik", sub: "Hochwertiges Design" },
      { id: "energy", label: "Energetik", sub: "Maximale Dämmung" },
      { id: "health", label: "Wohngesundheit", sub: "Natürliche Stoffe" },
      { id: "time", label: "Geschwindigkeit", sub: "Schnelle Abwicklung" }
    ]
  }
];

export default function QuizPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (qId: string, optId: string) => {
    setAnswers(prev => ({ ...prev, [qId]: optId }));
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-32 text-stone-100">
      <div className="w-full max-w-xl">
        {!isFinished ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <span className="section-label opacity-40 italic">Frage {currentIdx + 1}/{QUESTIONS.length}</span>
                <h1 
                  className="font-serif text-5xl font-light italic leading-tight"
                  dangerouslySetInnerHTML={{ __html: QUESTIONS[currentIdx].title }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {QUESTIONS[currentIdx].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(QUESTIONS[currentIdx].id, opt.id)}
                    className="group relative h-40 overflow-hidden rounded-sm border border-white/10 bg-white/5 p-6 text-left transition-all hover:bg-white/10 hover:border-white/20"
                  >
                    {opt.icon && <span className="mb-4 block text-2xl">{opt.icon}</span>}
                    <span className="block text-sm font-medium uppercase tracking-widest">{opt.label}</span>
                    {opt.sub && <span className="mt-1 block text-[10px] opacity-40">{opt.sub}</span>}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-12"
          >
            <div className="inline-block h-px w-24 bg-zinc-800 mb-8" />
            <h2 className="font-serif text-5xl font-light italic leading-tight">Danke für Ihre <br /> Einschätzung.</h2>
            <p className="font-sans text-zinc-400 font-light max-w-md mx-auto">
              Basierend auf Ihren Angaben haben wir eine erste Idee für Ihr Projekt. 
              Sollen wir diese direkt in einem kurzen Gespräch vertiefen?
            </p>
            <div className="flex flex-col gap-4 mt-12">
              <Link href="/formular" className="bg-white py-6 text-zinc-950 text-[10px] font-medium uppercase tracking-[0.3em] hover:bg-stone-200 transition-all">
                Anfrage abschließen
              </Link>
              <Link href="/" className="section-label opacity-40 hover:opacity-100 transition-opacity">
                Zurück zur Startseite
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
