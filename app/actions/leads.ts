"use server";

import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  projectType: z.string().optional(),
});

export type LeadState = {
  success?: boolean;
  error?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitLead(prevState: LeadState, formData: FormData): Promise<LeadState> {
  const validatedFields = leadSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    projectType: formData.get("projectType"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message, projectType } = validatedFields.data;

  try {
    // 1. Simulate Email to Timo Laufenberg
    console.log(`[LEAD] New inquiry for Timo Laufenberg`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Type: ${projectType || "General"}`);
    console.log(`Message: ${message}`);

    // 2. TODO: Integrat Resend or similar for real mail
    // 3. TODO: Optional Supabase logging

    // Artificial delay for premium feel / feedback
    await new Promise((resolve) => setTimeout(resolve, 800));

    return { success: true };
  } catch (e) {
    console.error("Lead submission error:", e);
    return { error: "Fehler beim Senden. Bitte versuchen Sie es später erneut." };
  }
}
