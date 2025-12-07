import { cacheLife } from "next/cache";
import { setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { _LOCALES } from "@/constants/lang";
import type { locale } from "@/types/global";

type LayoutType = { children: ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return _LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutType) {
  const { locale } = await params;
  setRequestLocale(locale as locale);

  return <>{children}</>;
}
