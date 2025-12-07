import { cacheLife } from "next/cache";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { locale } from "@/types/global";
import { LoginClient } from "./auth.client";

type PageType = { params: Promise<{ locale: locale }> };

export async function generateMetadata({ params }: PageType) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "auth" });
  return {
    title: t("title")
  };
}

export default async function Page({ params }: PageType) {
  "use cache";
  cacheLife("max");
  const { locale } = await params;
  setRequestLocale(locale as locale);

  return (
    <section className='flex h-full items-center justify-center'>
      <LoginClient />
    </section>
  );
}
