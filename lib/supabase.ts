import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  if (typeof window !== "undefined") {
    console.warn("Supabase credentials missing. Forms will not submit to database.");
  }
}

// Only initialize the client if we have both URL and Key to avoid "supabaseUrl is required" error during build
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any; // Safe cast for optional usage in forms
