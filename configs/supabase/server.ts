import { createServerClient } from "@supabase/ssr";
import type { JwtPayload } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { cache } from "react";
import { getSupabaseEnv } from "./env";

export async function createClientSsr() {
  const cookieStore = await cookies();
  const { url, key } = getSupabaseEnv();

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options);
          }
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored because the proxy refreshes user sessions.
        }
      }
    }
  });
}

/**
 * Auth claims of the current request, verified locally against the project's JWKS
 * (no Auth server round-trip with asymmetric signing keys). Deduplicated per request.
 * Returns `null` when there is no valid session.
 */
export const getAuthClaims = cache(async (): Promise<JwtPayload | null> => {
  const supabase = await createClientSsr();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data) {
    return null;
  }

  return data.claims;
});
