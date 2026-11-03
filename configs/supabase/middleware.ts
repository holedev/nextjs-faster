import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import { _LOCALES } from "@/constants/lang";
import { _ROUTE_AUTH, _ROUTE_PRIVATES } from "@/constants/route";
import type { locale } from "@/types/global";
import { getSupabaseEnv } from "./env";

const matchesRoute = (path: string, route: string) => path === route || path.startsWith(`${route}/`);

// Split `/vi/profile` into `{ locale: "vi", path: "/profile" }`. Unprefixed paths get `locale: null`;
// next-intl redirects those to a prefixed URL, which is checked on the next request.
const splitLocale = (pathname: string): { locale: locale | null; path: string } => {
  const [, first, ...rest] = pathname.split("/");
  if (_LOCALES.includes(first as locale)) {
    return { locale: first as locale, path: `/${rest.join("/")}` };
  }
  return { locale: null, path: pathname };
};

const redirectKeepingCookies = (request: NextRequest, response: NextResponse, pathname: string) => {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  url.search = "";
  const redirect = NextResponse.redirect(url);
  // Carry over any refreshed Supabase session cookies.
  for (const cookie of response.cookies.getAll()) {
    redirect.cookies.set(cookie);
  }
  return redirect;
};

export async function updateSession(request: NextRequest, response: NextResponse) {
  const { url, key } = getSupabaseEnv();

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        for (const { name, value } of cookiesToSet) {
          request.cookies.set(name, value);
        }
        for (const { name, value, options } of cookiesToSet) {
          response.cookies.set(name, value, options);
        }
      }
    }
  });

  // Verifies the JWT locally against the cached JWKS; only hits the Auth server
  // when the access token has expired and must be refreshed.
  const { data } = await supabase.auth.getClaims();
  const isAuthenticated = Boolean(data?.claims);

  const { locale, path } = splitLocale(request.nextUrl.pathname);
  if (!locale) {
    return response;
  }

  if (!isAuthenticated && _ROUTE_PRIVATES.some((route) => matchesRoute(path, route))) {
    return redirectKeepingCookies(request, response, `/${locale}${_ROUTE_AUTH}`);
  }

  if (isAuthenticated && matchesRoute(path, _ROUTE_AUTH)) {
    return redirectKeepingCookies(request, response, `/${locale}`);
  }

  return response;
}
