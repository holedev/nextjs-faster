"use client";

import { BaseLayout } from "@/components/custom/BaseLayout";
import { ErrorContent } from "@/components/custom/ErrorContent";

type ErrorType = { error: Error & { digest?: string }; reset: () => void };

export default function ErrorGlobal({ error: _, reset }: ErrorType) {
  return (
    <BaseLayout locale='en'>
      <ErrorContent reset={reset} />
    </BaseLayout>
  );
}
