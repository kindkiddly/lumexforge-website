import { MIPAW_DOMAIN, MIPAW_PATH_SUFFIX } from "@/lib/mipaw/constants";
import type { Metadata } from "next";

const PAGE_PATHS: Record<string, string> = {
  Home: "",
  "Privacy Policy": MIPAW_PATH_SUFFIX.privacy,
  "Terms of Use": MIPAW_PATH_SUFFIX.terms,
  Support: MIPAW_PATH_SUFFIX.support,
  "Delete Account": MIPAW_PATH_SUFFIX.deleteAccount,
  "Email confirmed": MIPAW_PATH_SUFFIX.authConfirm,
  "Reset password": MIPAW_PATH_SUFFIX.authCallback,
};

export function mipawPageMetadata(pageName: string, description: string): Metadata {
  const pathSuffix = PAGE_PATHS[pageName] ?? "";
  const canonical = `${MIPAW_DOMAIN}${pathSuffix}`;

  return {
    title: `MiPaw – ${pageName}`,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical },
  };
}
