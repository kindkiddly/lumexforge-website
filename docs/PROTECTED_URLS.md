# Protected URLs (ProteinSnaps)

Do **not** delete, move, rename, or change behaviour for the items below without updating the ProteinSnaps mobile apps and Supabase Auth configuration first.

## Supabase Auth redirect URLs (ProteinSnap project)

Registered in **Auth → URL Configuration → Redirect URLs**:

- `https://lumexforge.com/auth/confirm`
- `https://lumexforge.com/auth/callback`
- `https://www.lumexforge.com/auth/confirm`
- `https://www.lumexforge.com/auth/callback`
- `proteinsnap://auth/callback`
- `proteinsnap://**`

## Web routes that serve those redirects

| URL path | Files |
|----------|--------|
| `/auth/confirm` | `app/auth/confirm/page.tsx`, `app/auth/confirm/AuthConfirmClient.tsx` |
| `/auth/callback` | `app/auth/callback/page.tsx`, `app/auth/callback/AuthCallbackClient.tsx` |

Behaviour: forward Supabase query parameters (and hash on confirm) to `proteinsnap://auth/confirm` or `proteinsnap://auth/callback`; show error and Play Store fallback when the app is not installed.

## Universal Links / App Links (ProteinSnap only)

Served from the main site host (www / lumexforge.com), **not** from product subdomains:

- `public/.well-known/apple-app-site-association` (ProteinSnap `appID` and paths `/auth/confirm`, `/auth/callback`, `/auth/*`)
- `public/.well-known/assetlinks.json` (ProteinSnap Android package and SHA-256 fingerprints)

## ProteinSnaps legal pages (current)

Use these URLs in App Store Connect and Google Play Console:

- `https://www.lumexforge.com/proteinsnaps-privacy`
- `https://www.lumexforge.com/proteinsnaps-terms`
- `https://www.lumexforge.com/proteinsnaps-deletion`

Legacy singular paths (`/proteinsnap-privacy`, `/proteinsnap-terms`, `/proteinsnap-deletion`) redirect with **308** to the plural URLs for old listings and bookmarks.

**Update the ProteinSnaps Privacy / Terms / Deletion URLs in App Store Connect and Play Console to the `/proteinsnaps-*` URLs (old ones redirect meanwhile).**
