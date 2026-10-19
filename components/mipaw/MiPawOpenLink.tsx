import type { ReactNode } from "react";

type MiPawOpenLinkProps = {
  authPath: "confirm" | "callback";
  queryString: string;
  children: ReactNode;
  className?: string;
};

/** Server-rendered deep link; optional tiny script appends URL hash for Supabase tokens. */
export function MiPawOpenLink({
  authPath,
  queryString,
  children,
  className = "inline-flex min-h-[44px] items-center justify-center rounded-lg bg-accent-secondary px-6 py-3 text-base font-semibold text-background transition-opacity hover:opacity-90",
}: MiPawOpenLinkProps) {
  const baseHref = `mipaw://auth/${authPath}${queryString ? `?${queryString}` : ""}`;
  const linkId = `mipaw-open-${authPath}`;

  return (
    <>
      <a id={linkId} href={baseHref} className={className}>
        {children}
      </a>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var a=document.getElementById(${JSON.stringify(linkId)});if(!a)return;var p='mipaw://auth/${authPath}'+(window.location.search||'')+(window.location.hash||'');a.href=p;}catch(e){}})();`,
        }}
      />
    </>
  );
}
