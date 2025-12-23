"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const STEPS = [
  "Typ",
  "Service",
  "Details",
  "Kontakt"
];

export default function FormularPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    type: "",
    service: "",
    size: "",
    timeframe: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (currentStep < 2) nextStep();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-stone-50 px-6 py-32 dark:bg-zinc-950">
      <div className="w-full max-w-2xl">
        {/* Progress Header */}
        <div className="mb-16 flex items-center justify-between">
          <Link href="/" className="section-label hover:text-foreground transition-colors">
            ← Abbrechen
          </Link>
          <div className="flex gap-2">
            {STEPS.map((_, i) => (
              <div 
                key={i} 
                className={`h-0.5 w-8 transition-all duration-500 ${i <= currentStep ? "bg-zinc-900 dark:bg-zinc-100" : "bg-zinc-200 dark:bg-zinc-800"}`} 
              />
            ))}
          </div>
          <span className="section-label opacity-50">Schritt {currentStep + 1}/{STEPS.length}</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            {currentStep === 0 && (
              <div className="space-y-8">
                <h1 className="font-serif text-4xl font-light italic text-foreground md:text-5xl">Wen dürfen wir <br /> beraten?</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {[
                    { id: "privat", label: "Privatkunde", sub: "Für Ihr Eigenheim" },
                    { id: "architekt", label: "Architekt / Planer", sub: "Für professionelle Projekte" },
                    { id: "b2b", label: "Gewerbe / B2B", sub: "Größere bauliche Anlagen" },
                    { id: "andere", label: "Sonstige", sub: "Fragen & Anliegen" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelect("type", item.id)}
                      className={`group flex flex-col items-start rounded-sm border p-6 text-left transition-all ${
                        formData.type === item.id 
                          ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900" 
                          : "border-zinc-200 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
                      }`}
                    >
                      <span className="mb-1 text-sm font-medium uppercase tracking-widest">{item.label}</span>
                      <span className={`text-xs opacity-60 ${formData.type === item.id ? "text-zinc-300 dark:text-zinc-600" : ""}`}>{item.sub}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-8">
                <h2 className="font-serif text-4xl font-light italic text-foreground md:text-5xl">Was für ein Vorhaben <br /> planen Sie?</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {[
                    "WDVS & Fassade",
                    "Innenputz & Design",
                    "Monolithischer Putz",
                    "Gips & Stuck",
                    "Sanierung",
                    "Sonstiges"
                  ].map((service) => (
                    <button
                      key={service}
                      onClick={() => handleSelect("service", service)}
                      className={`rounded-sm border px-6 py-4 text-left transition-all ${
                        formData.service === service 
                          ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900" 
                          : "border-zinc-200 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
                      }`}
                    >
                      <span className="text-sm font-medium uppercase tracking-widest">{service}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <h2 className="font-serif text-4xl font-light italic text-foreground md:text-5xl">Erzählen Sie uns <br /> ein wenig mehr.</h2>
                <div className="space-y-6">
                  <div>
                    <label className="section-label mb-2 block">Ungefähre Fläche (m²)</label>
                    <input 
                      type="text" 
                      placeholder="z.B. 150"
                      value={formData.size}
                      onChange={(e) => setFormData(p => ({...p, size: e.target.value}))}
                      className="w-full border-b border-zinc-200 bg-transparent py-4 font-sans text-xl font-light outline-none transition-colors focus:border-zinc-900 dark:border-zinc-800 dark:focus:border-zinc-100"
                    />
                  </div>
                  <div>
                    <label className="section-label mb-2 block">Gewünschter Zeitraum</label>
                    <input 
                      type="text" 
                      placeholder="z.B. Frühjahr 2026"
                      value={formData.timeframe}
                      onChange={(e) => setFormData(p => ({...p, timeframe: e.target.value}))}
                      className="w-full border-b border-zinc-200 bg-transparent py-4 font-sans text-xl font-light outline-none transition-colors focus:border-zinc-900 dark:border-zinc-800 dark:focus:border-zinc-100"
                    />
                  </div>
                </div>
                <div className="flex gap-4 pt-8">
                  <button onClick={prevStep} className="section-label font-sans opacity-50 hover:opacity-100">Zurück</button>
                  <button onClick={nextStep} className="bg-zinc-900 px-8 py-4 text-xs font-medium uppercase tracking-widest text-white transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">Weiter</button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                <h2 className="font-serif text-4xl font-light italic text-foreground md:text-5xl">Wie erreichen wir <br /> Sie am besten?</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <input 
                    type="text" 
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData(p => ({...p, name: e.target.value}))}
                    className="w-full border-b border-zinc-200 bg-transparent py-4 font-sans font-light outline-none focus:border-zinc-900 dark:border-zinc-800 dark:focus:border-zinc-100"
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData(p => ({...p, email: e.target.value}))}
                    className="w-full border-b border-zinc-200 bg-transparent py-4 font-sans font-light outline-none focus:border-zinc-900 dark:border-zinc-800 dark:focus:border-zinc-100"
                  />
                  <input 
                    type="tel" 
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={(e) => setFormData(p => ({...p, phone: e.target.value}))}
                    className="w-full border-b border-zinc-200 bg-transparent py-4 font-sans font-light outline-none focus:border-zinc-900 dark:border-zinc-800 dark:focus:border-zinc-100"
                  />
                  <input 
                    type="text" 
                    placeholder="Nachricht (optional)"
                    value={formData.message}
                    onChange={(e) => setFormData(p => ({...p, message: e.target.value}))}
                    className="w-full border-b border-zinc-200 bg-transparent py-4 font-sans font-light outline-none focus:border-zinc-900 dark:border-zinc-800 dark:focus:border-zinc-100"
                  />
                </div>
                <div className="flex items-center gap-8 pt-8">
                  <button onClick={prevStep} className="section-label font-sans opacity-50 hover:opacity-100">Zurück</button>
                  <button className="flex-1 bg-zinc-900 py-6 text-xs font-medium uppercase tracking-[0.3em] text-white transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">Anfrage senden</button>
                </div>
                <p className="text-center text-[10px] uppercase tracking-widest text-zinc-400">Mit dem Senden akzeptieren Sie unsere Datenschutzbestimmungen.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
