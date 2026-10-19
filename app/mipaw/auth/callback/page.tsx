import { MiPawAuthCallbackClient } from "@/components/mipaw/MiPawAuthCallbackClient";
import { MiPawAuthPage } from "@/components/mipaw/MiPawAuthPage";
import { MiPawOpenLink } from "@/components/mipaw/MiPawOpenLink";
import { searchParamsToQueryString } from "@/lib/mipaw/searchParams";
import { mipawPageMetadata } from "@/lib/mipaw/metadata";
import { Suspense } from "react";

export const metadata = mipawPageMetadata(
  "Reset password",
  "Open MiPaw on your phone to set a new password.",
);

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function MiPawAuthCallbackPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const queryString = searchParamsToQueryString(params);

  return (
    <MiPawAuthPage title="Reset your MiPaw password">
      <p>
        Open this link on the phone where MiPaw is installed to set a new password in
        the app.
      </p>
      <MiPawOpenLink authPath="callback" queryString={queryString}>
        Open MiPaw
      </MiPawOpenLink>
      <p className="text-sm text-foreground-muted">
        Link expired? Request a new reset email from the MiPaw sign-in screen.
      </p>
      <Suspense fallback={null}>
        <MiPawAuthCallbackClient />
      </Suspense>
    </MiPawAuthPage>
  );
}
