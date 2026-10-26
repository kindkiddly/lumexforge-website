import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTEINSNAPS_HOSTS = ["proteinsnaps.lumexforge.com", "proteinsnaps.localhost:3000"];

function isProteinSnapsHost(host: string) {
  const normalized = host.toLowerCase();
  return PROTEINSNAPS_HOSTS.some(
    (h) => normalized === h || normalized.startsWith("proteinsnaps.")
  );
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  if (isProteinSnapsHost(host)) {
    const url = request.nextUrl.clone();
    url.pathname =
      pathname === "/" || pathname === ""
        ? "/proteinsnaps"
        : `/proteinsnaps${pathname}`;
    const response = NextResponse.rewrite(url);
    response.headers.set("x-proteinsnaps-site", "1");
    response.headers.set("x-proteinsnaps-subdomain", "1");
    return response;
  }

  if (pathname === "/proteinsnap-privacy") {
    return NextResponse.redirect(new URL("/proteinsnaps-privacy", request.url), 308);
  }
  if (pathname === "/proteinsnap-terms") {
    return NextResponse.redirect(new URL("/proteinsnaps-terms", request.url), 308);
  }
  if (pathname === "/proteinsnap-deletion") {
    return NextResponse.redirect(new URL("/proteinsnaps-deletion", request.url), 308);
  }

  if (pathname === "/proteinsnaps" || pathname.startsWith("/proteinsnaps/")) {
    const response = NextResponse.next();
    response.headers.set("x-proteinsnaps-site", "1");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|blog/|\\.well-known).*)",
  ],
};
