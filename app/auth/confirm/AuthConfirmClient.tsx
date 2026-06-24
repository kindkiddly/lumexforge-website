'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const APP_SCHEME = 'proteinsnap'
// Update this URL once ProteinSnap is published on Google Play
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.lumexforge.proteinsnap'

type Status = 'redirecting' | 'no-app' | 'error'

export function AuthConfirmClient() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<Status>('redirecting')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const error = searchParams.get('error')
    const errorDescription = searchParams.get('error_description')

    if (error) {
      setErrorMessage(
        errorDescription
          ? decodeURIComponent(errorDescription.replace(/\+/g, ' '))
          : 'Verification failed. Please try again.',
      )
      setStatus('error')
      return
    }

    // Forward all Supabase params (token_hash, type, code, etc.) to the mobile app
    const params = searchParams.toString()
    const deepLink = `${APP_SCHEME}://auth/confirm${params ? `?${params}` : ''}${typeof window !== 'undefined' ? window.location.hash : ''}`

    window.location.href = deepLink

    // If still on this page after 2.5 s, the app is probably not installed
    const timer = setTimeout(() => setStatus('no-app'), 2500)
    return () => clearTimeout(timer)
  }, [searchParams])

  if (status === 'error') {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="glass w-full max-w-sm rounded-2xl p-8 text-center">
          <div className="mb-5 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
            <svg
              className="h-6 w-6 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <h1 className="mb-2 text-xl font-semibold text-foreground">Link Expired</h1>
          <p className="text-sm text-foreground-secondary">{errorMessage}</p>
          <p className="mt-4 text-xs text-foreground-muted">
            Please request a new link from within the ProteinSnap app.
          </p>
        </div>
      </div>
    )
  }

  if (status === 'no-app') {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="glass w-full max-w-sm rounded-2xl p-8 text-center">
          <div className="mb-5 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-primary/10">
            <svg
              className="h-6 w-6 text-accent-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3"
              />
            </svg>
          </div>
          <h1 className="mb-2 text-xl font-semibold text-foreground">App Not Found</h1>
          <p className="mb-6 text-sm text-foreground-secondary">
            ProteinSnap doesn&apos;t appear to be installed on this device. Download it to continue.
          </p>
          <a
            href={PLAY_STORE_URL}
            className="inline-flex items-center justify-center rounded-xl bg-accent-primary px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Download ProteinSnap
          </a>
        </div>
      </div>
    )
  }

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
        <h1 className="mb-2 text-xl font-semibold text-foreground">Verifying your account</h1>
        <p className="text-sm text-foreground-secondary">
          Opening ProteinSnap to complete verification&hellip;
        </p>
      </div>
    </div>
  )
}
