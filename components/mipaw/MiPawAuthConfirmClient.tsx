"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const APP_SCHEME = "mipaw";

type Status = "redirecting" | "no-app" | "error";

export function MiPawAuthConfirmClient() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("redirecting");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const error = searchParams.get("error");
    const errorDescription = searchParams.get("error_description");

    if (error) {
      setErrorMessage(
        errorDescription
          ? decodeURIComponent(errorDescription.replace(/\+/g, " "))
          : "Verification failed. Please try again.",
      );
      setStatus("error");
      return;
    }

    const params = searchParams.toString();
    const deepLink = `${APP_SCHEME}://auth/confirm${params ? `?${params}` : ""}${typeof window !== "undefined" ? window.location.hash : ""}`;

    window.location.href = deepLink;

    const timer = setTimeout(() => setStatus("no-app"), 2500);
    return () => clearTimeout(timer);
  }, [searchParams]);

  if (status === "error") {
    return (
      <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-6 text-center">
        <h2 className="mb-2 text-lg font-semibold text-foreground">Link expired</h2>
        <p className="text-sm text-foreground-secondary">{errorMessage}</p>
        <p className="mt-4 text-xs text-foreground-muted">
          Request a new link from the MiPaw sign-in screen.
        </p>
      </div>
    );
  }

  if (status === "no-app") {
    return (
      <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-6 text-center">
        <h2 className="mb-2 text-lg font-semibold text-foreground">App not found</h2>
        <p className="text-sm text-foreground-secondary">
          Install MiPaw on your iPhone or Android phone, then open this link again.
        </p>
        {/* TODO: App Store and Google Play download links when store URLs are ready */}
      </div>
    );
  }

  return (
    <p className="text-sm text-foreground-secondary" aria-live="polite">
      Opening MiPaw&hellip;
    </p>
  );
}
