"use client";

import { useProteinSnapsPath } from "@/components/proteinsnaps/ProteinSnapsPathContext";
import Link from "next/link";
import type { ReactNode } from "react";

export function BlogArticleLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const { href: psHref } = useProteinSnapsPath();

  return (
    <Link href={psHref(href)} className={className}>
      {children}
    </Link>
  );
}
