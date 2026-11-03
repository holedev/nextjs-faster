import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { LoadingComponent } from "@/components/custom/loading";
import { getProfile, type ProfileType } from "./actions";
import { Profile } from "./dynamic";
import { FormClient } from "./form.client";

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
  const profile = data?.payload as ProfileType;

  return (
    <section className='flex w-[400px] flex-col space-y-2'>
      <Suspense fallback={<LoadingComponent />}>
        <FormClient nickname={profile.nickname || ""} />
      </Suspense>
      <Suspense fallback={<LoadingComponent />}>
        <Profile profile={profile} />
      </Suspense>
    </section>
  );
}
