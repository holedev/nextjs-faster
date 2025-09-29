"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useHandleError } from "@/hooks/use-handle-error";
import { updateNickname } from "./actions";

type FormClientType = { nickname: string };

const FormClient = ({ nickname }: FormClientType) => {
  const t = useTranslations("profile.form");
  const { handleErrorClient } = useHandleError();
  const [value, setValue] = useState<string>(nickname);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    await handleErrorClient({
      cb: async () => updateNickname(value),
      withSuccessNotify: true
    });
  };

  return (
    <form className='flex items-center space-x-2' onSubmit={handleSubmit}>
      <Input
        className='text-center'
        name='nickname'
        onChange={(e) => setValue(e.target.value)}
        placeholder={t("placeholer")}
        value={value}
      />
      <Button type='submit'>{t("submit")}</Button>
    </form>
  );
};

export { FormClient };
