import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { _DEFAULT_LOCALE, _LOCALES } from "@/constants/lang";

export const routing = defineRouting({
  locales: _LOCALES,
  defaultLocale: _DEFAULT_LOCALE
  // localeDetection: false
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
