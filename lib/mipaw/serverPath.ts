import { headers } from "next/headers";

export async function getMipawBasePath(): Promise<string> {
  const headerList = await headers();
  return headerList.get("x-mipaw-subdomain") === "1" ? "" : "/mipaw";
}

export function mipawHref(basePath: string, path: string): string {
  if (path === "/" || path === "") {
    return basePath || "/";
  }
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${suffix}`;
}
