import "@/app/globals.css";
import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { type ReactNode } from "react";
import { BaseLayout } from "@/components/custom/BaseLayout";
import { PageLayout } from "@/components/custom/PageLayout";
import { routing } from "@/configs/i18n/routing";
import { _LOCALES } from "@/constants/lang";
import type { locale } from "@/types/global";

type LocaleLayoutType = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return _LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutType) {
  "use cache";
  cacheLife("max");

  const { locale: localeParam } = await params;
  const locale = localeParam as locale;

  setRequestLocale(locale);

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return (
    <BaseLayout locale={locale}>
      <PageLayout>{children}</PageLayout>
    </BaseLayout>
  );
}
