"use client";

import { ErrorContent } from "@/components/custom/error-content";

type ErrorType = { error: Error & { digest?: string }; reset: () => void };

export default function ErrorGlobal({ error: _, reset }: ErrorType) {
  return <ErrorContent reset={reset} />;
}
