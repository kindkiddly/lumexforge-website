interface LandscapeBannerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function LandscapeBanner({
  eyebrow,
  title,
  subtitle,
  className = "",
}: LandscapeBannerProps) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#050811] ps-glow-frame ${className}`}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#00e6a8]/10 via-[#050811] to-[#00c2ff]/10"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#00e6a8]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#00c2ff]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00e6a8]/40 to-transparent"
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col items-center justify-center px-8 text-center sm:px-12">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c2ff]">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-foreground-secondary">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
