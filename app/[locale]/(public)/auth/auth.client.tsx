"use client";

import type { Provider } from "@supabase/supabase-js";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/configs/supabase/client";
import { _ROUTE_AUTH_CALLBACK } from "@/constants/route";
import { useHandleError } from "@/hooks/use-handle-error";
import type { ResponseType } from "@/types/response";

const LoginClient = () => {
  const t = useTranslations("common.text");
  const tAuth = useTranslations("auth");

  const { handleErrorClient } = useHandleError();

  const handleLogin = async (provider: Provider) => {
    const supabase = createClient();
    const redirectTo = `${location.origin}${_ROUTE_AUTH_CALLBACK}`;

    await handleErrorClient({
      cb: async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider,
          options: { redirectTo }
        });
        return { data, error } as ResponseType;
      },
      withSuccessNotify: false
    });
  };

  return (
    <Card className='w-[400px]'>
      <CardHeader>
        <CardTitle className='font-bold text-xl uppercase'>{tAuth("title")}</CardTitle>
        <CardDescription className='text-muted-foreground'>{tAuth("description")}</CardDescription>
      </CardHeader>
      <CardContent className='space-y-3'>
        <Button className='w-full max-w-sm' onClick={() => handleLogin("google")} variant='outline'>
          {t("loginWith")} Google
        </Button>
        <Button className='w-full max-w-sm' onClick={() => handleLogin("github")} variant='outline'>
          {t("loginWith")} GitHub
        </Button>
      </CardContent>
    </Card>
  );
};

export { LoginClient };
