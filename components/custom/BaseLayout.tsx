import "@/app/globals.css";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { _LOCALES } from "@/constants/lang";
import { cn } from "@/lib/utils";
import type { locale } from "@/types/global";
import { ThemeProvider } from "../theme-provider";
import { Toaster } from "../ui/toaster";
import { TooltipProvider } from "../ui/tooltip";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
  style: ["italic", "normal"]
});

type BaseLayoutType = { children: ReactNode; locale: locale };

export async function BaseLayout({ children, locale }: BaseLayoutType) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(roboto.className, "flex h-screen w-screen flex-col")}>
        <ThemeProvider attribute='class' defaultTheme='system' disableTransitionOnChange enableSystem>
          <TooltipProvider>
            <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
