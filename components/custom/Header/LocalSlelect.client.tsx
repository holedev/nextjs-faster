"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname, useRouter } from "@/configs/i18n/routing";
import { locale } from "@/types/global";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";

const LocaleSelect = () => {
  const t = useTranslations("common.locale");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeLocale = (newLocale: locale) => {
    startTransition(() => {
      router.replace({ pathname }, { locale: newLocale });
    });
  };

  if (isPending) {
    return <Skeleton className='h-10 w-[180px] border-2' />;
  }

  return (
    <Select defaultValue={locale} onValueChange={handleChangeLocale}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='en'>{t("en")}</SelectItem>
        <SelectItem value='vi'>{t("vi")}</SelectItem>
      </SelectContent>
    </Select>
  );
};

export { LocaleSelect };
