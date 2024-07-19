"use client";
import { Label } from "@/components/ui/label";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void; // re-renders the page
}) {
  return (
    <>
      return <Label>{error.message}</Label>;
      <button onClick={reset}>Try again</button>
    </>
  );
}
