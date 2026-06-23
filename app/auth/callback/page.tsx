import { authCallbackMetadata } from '@/lib/metadata'
import { Suspense } from 'react'
import { AuthCallbackClient } from './AuthCallbackClient'

export const metadata = authCallbackMetadata

function RedirectingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <div className="relative mb-6 mx-auto h-16 w-16">
          <div className="absolute inset-0 rounded-2xl bg-accent-primary/10 ring-1 ring-accent-primary/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="h-7 w-7 animate-spin text-accent-primary" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        </div>
        <h1 className="mb-2 text-xl font-semibold text-foreground">Opening ProteinSnap</h1>
        <p className="text-sm text-foreground-secondary">
          You&apos;ll be redirected to the app shortly&hellip;
        </p>
      </div>
    </div>
  )
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<RedirectingFallback />}>
      <AuthCallbackClient />
    </Suspense>
  )
}
