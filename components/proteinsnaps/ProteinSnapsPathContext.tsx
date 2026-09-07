"use client";

import { createContext, useContext } from "react";

const ProteinSnapsPathContext = createContext("/proteinsnaps");

export function ProteinSnapsPathProvider({
  basePath,
  children,
}: {
  basePath: string;
  children: React.ReactNode;
}) {
  return (
    <ProteinSnapsPathContext.Provider value={basePath}>
      {children}
    </ProteinSnapsPathContext.Provider>
  );
}

export function useProteinSnapsPath() {
  const basePath = useContext(ProteinSnapsPathContext);

  function href(path: string) {
    if (path === "/") return basePath || "/";
    return `${basePath}${path}`;
  }

  return { basePath, href };
}
