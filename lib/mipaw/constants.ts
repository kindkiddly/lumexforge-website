export const MIPAW_SUPPORT_EMAIL = "MiPaw@lumexforge.com";
export const MIPAW_EFFECTIVE_DATE = "October 19, 2026";
export const MIPAW_APPLE_TEAM_ID = "77AX543484";
export const MIPAW_ANDROID_SHA256 = "{{ANDROID_SHA256}}";

export const MIPAW_APP_ID_SUFFIX = "com.mipaw.lumexforge";
export const MIPAW_ANDROID_PACKAGE = "com.mipaw.lumexforge";

export function isMipawPlaceholder(value: string): boolean {
  return value.startsWith("{{") && value.endsWith("}}");
}

/** Public product site (canonical URLs in copy and metadata). */
export const MIPAW_DOMAIN = "https://mipaw.lumexforge.com";
export const MIPAW_CANONICAL_BASE = MIPAW_DOMAIN;

export const MIPAW_PATH_SUFFIX = {
  home: "",
  privacy: "/privacy",
  terms: "/terms",
  support: "/support",
  deleteAccount: "/delete-account",
  authConfirm: "/auth/confirm",
  authCallback: "/auth/callback",
} as const;
