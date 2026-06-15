"use client";

import { BaseLayout } from "@/components/custom/base-layout";
import { ErrorContent } from "@/components/custom/error-content";

type ErrorType = { error: Error & { digest?: string }; reset: () => void };

export default function ErrorGlobal({ error: _, reset }: ErrorType) {
  return (
    <BaseLayout locale='en'>
      <ErrorContent reset={reset} />
    </BaseLayout>
  );
}
