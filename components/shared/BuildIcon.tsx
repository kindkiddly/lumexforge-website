interface BuildIconProps {
  icon: string;
  className?: string;
}

export function BuildIcon({ icon, className = "h-6 w-6" }: BuildIconProps) {
  const icons: Record<string, React.ReactNode> = {
    mobile: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    ai: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 7.37l-.813-2.846a4.5 4.5 0 00-3.09-3.09L12 0l-.813 2.846a4.5 4.5 0 00-3.09 3.09L5.25 6.75l2.846.813a4.5 4.5 0 003.09 3.09L12 12.75l.813-2.846a4.5 4.5 0 003.09-3.09l2.846-.813z" />
      </svg>
    ),
    agent: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    automation: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    platform: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3.122A2.25 2.25 0 0119.5 9v.878M6 12h.008v.008H6V12zm0 2.25h.008v.008H6v-.008zm0 2.25h.008v.008H6V18zm2.25-4.5h.008v.008H8.25V15zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V21zm2.25-6.75h.008v.008H10.5V15zm0 2.25h.008v.008H10.5v-.008zm0 2.25h.008v.008H10.5V21zm2.25-6.75h.008v.008H13.5V15zm0 2.25h.008v.008H13.5v-.008zm0 2.25h.008v.008H13.5V21zm2.25-6.75h.008v.008H16.5V15zm0 2.25h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V21z" />
      </svg>
    ),
    future: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0a11.953 11.953 0 01-4.093 5.411m0 0L21 21l-3.162-3.162a3.375 3.375 0 00-1.323-.76m0 0a11.953 11.953 0 01-4.093-5.411" />
      </svg>
    ),
  };

  return icons[icon] || icons.future;
}
