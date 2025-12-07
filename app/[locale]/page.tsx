import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import { LoadingComponent } from "@/components/custom/Loading";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { locale } from "@/types/global";
import { UserList } from "./dynamic";

type PageType = {
  params: Promise<{ locale: locale }>;
};

export async function generateMetadata({ params }: PageType): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: t("title")
  };
}

const techs: string[] = ["NextJS 15", "TailwindCSS 4", "Shadcn", "Prisma 6", "Supabase", "Swagger"];

export default async function Page({ params }: PageType) {
  const { locale } = await params;
  setRequestLocale(locale as locale);

  return (
    <section className='h-full space-y-4 p-4'>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {techs.map((tech, _) => (
          <Badge className='rounded-md text-xl' key={tech}>
            {tech}
          </Badge>
        ))}
      </div>
      <Separator />
      <Suspense fallback={<LoadingComponent />}>
        <UserList />
      </Suspense>
    </section>
  );
}
