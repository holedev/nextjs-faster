import { AlertTriangleIcon, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Suspense } from "react";
import { BaseLayout } from "@/components/custom/BaseLayout";
import { LoadingComponent } from "@/components/custom/Loading";
import { Button } from "@/components/ui/button";

function NotFound() {
  const t = useTranslations("defaultPage.notFound");

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-gray-50 to-gray-100 px-4 text-center dark:from-gray-900 dark:to-gray-800'>
      <AlertTriangleIcon className='mx-auto mb-4 h-12 w-12 text-red-500' />
      <p className='mb-6 font-semibold text-2xl text-gray-600 md:text-3xl dark:text-gray-300'>{t("title")}</p>
      <p className='mb-8 max-w-md text-gray-500 text-lg md:text-xl dark:text-gray-400'>{t("description")}</p>
      <Link href='/' passHref prefetch={true}>
        <Button className='flex items-center gap-2' size='lg' variant='outline'>
          <ArrowLeft className='h-4 w-4' />
          {t("redirect")}
        </Button>
      </Link>
    </div>
  );
}

export default function SuspenseNotFound() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <BaseLayout locale='en'>
        <NotFound />
      </BaseLayout>
    </Suspense>
  );
}
