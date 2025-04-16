import { LoadingComponent } from "@/components/custom/Loading";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { getProfile } from "./actions";
import { Profile } from "./dynamic";
import { FormClient } from "./form.client";

export const dynamic = "force-dynamic";

type User = SupabaseUser & {
  nickname?: string;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("profile");
  return {
    title: t("title")
  };
}

export default async function Page() {
  const { data, error } = await getProfile();

  if (error) {
    throw new Error(error.message);
  }
  const user = data?.payload as User;

  return (
    <section className='flex flex-col space-y-2 w-[400px]'>
      <Suspense fallback={<LoadingComponent />}>
        <FormClient nickname={user?.nickname || ""} />
      </Suspense>
      <Suspense fallback={<LoadingComponent />}>
        <Profile user={user} />
      </Suspense>
    </section>
  );
}
