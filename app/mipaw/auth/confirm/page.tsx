import { MiPawAuthConfirmClient } from "@/components/mipaw/MiPawAuthConfirmClient";
import { MiPawAuthPage } from "@/components/mipaw/MiPawAuthPage";
import { MiPawOpenLink } from "@/components/mipaw/MiPawOpenLink";
import { searchParamsToQueryString } from "@/lib/mipaw/searchParams";
import { mipawPageMetadata } from "@/lib/mipaw/metadata";
import { Suspense } from "react";

export const metadata = mipawPageMetadata(
  "Email confirmed",
  "Your MiPaw email is confirmed. Open the app to sign in.",
);

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function MiPawAuthConfirmPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const queryString = searchParamsToQueryString(params);

  return (
    <MiPawAuthPage title="Email confirmed">
      <p>
        Thanks! If MiPaw didn&apos;t open automatically, open the MiPaw app on your
        phone and sign in.
      </p>
      <MiPawOpenLink authPath="confirm" queryString={queryString}>
        Open MiPaw
      </MiPawOpenLink>
      <p className="text-sm text-foreground-muted">
        Using a computer? Open the email on the phone where MiPaw is installed (iPhone
        or Android).
      </p>
      <Suspense fallback={null}>
        <MiPawAuthConfirmClient />
      </Suspense>
    </MiPawAuthPage>
  );
}
