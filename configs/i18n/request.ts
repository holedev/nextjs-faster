import { getRequestConfig } from "next-intl/server";
import type { locale } from "@/types/global";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!(locale && routing.locales.includes(locale as locale))) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    timeZone: "Asia/Ho_Chi_Minh",
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
