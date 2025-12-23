"use client";

import { useActionState } from "react";
import { submitLead, LeadState } from "@/app/actions/leads";

const initialState: LeadState = {};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center animate-in fade-in duration-700">
        <h3 className="font-serif text-3xl font-light italic text-foreground">Vielen Dank.</h3>
        <p className="mt-4 text-zinc-500">Ihre Nachricht wurde direkt an Timo Laufenberg übermittelt. <br /> Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="mx-auto flex w-full max-w-xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="section-label">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Ihr Name"
          className="bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 outline-none focus:border-foreground transition-colors"
        />
        {state.errors?.name && <p className="text-xs text-red-500">{state.errors.name[0]}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="section-label">E-Mail</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="email@beispiel.de"
          className="bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 outline-none focus:border-foreground transition-colors"
        />
        {state.errors?.email && <p className="text-xs text-red-500">{state.errors.email[0]}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="section-label">Nachricht</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Wie können wir Ihnen helfen?"
          className="bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 outline-none focus:border-foreground transition-colors resize-none"
        />
        {state.errors?.message && <p className="text-xs text-red-500">{state.errors.message[0]}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-8 flex h-14 items-center justify-center rounded-full bg-foreground px-12 text-background transition-all hover:bg-zinc-800 disabled:opacity-50"
      >
        {isPending ? "Wird gesendet..." : "Projekt besprechen"}
      </button>

      {state.error && <p className="text-center text-sm text-red-500">{state.error}</p>}
    </form>
  );
}
