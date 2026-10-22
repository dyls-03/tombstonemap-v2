import "server-only";

import { createClient } from "@supabase/supabase-js";

export function createSupabaseReadClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Set SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY in .env.local or Vercel environment variables."
    );
  }

  // Public reads must go through RLS, even when they run on the server.
  if (!key.startsWith("sb_publishable_")) {
    throw new Error("SUPABASE_PUBLISHABLE_KEY must be a publishable key.");
  }

  return createClient(url, key, {
    db: { timeout: 15_000 },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    global: {
      fetch: (input, options) => fetch(input, { ...options, cache: "no-store" }),
    },
  });
}
