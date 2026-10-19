import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTEINSNAPS_HOSTS = ["proteinsnaps.lumexforge.com", "proteinsnaps.localhost:3000"];
const MIPAW_HOSTS = ["mipaw.lumexforge.com", "mipaw.localhost:3000"];
const MIPAW_PUBLIC_ORIGIN = "https://mipaw.lumexforge.com";

function isProteinSnapsHost(host: string) {
  const normalized = host.toLowerCase();
  return PROTEINSNAPS_HOSTS.some(
    (h) => normalized === h || normalized.startsWith("proteinsnaps."),
  );
}

function isMipawHost(host: string) {
  const normalized = host.toLowerCase();
  return MIPAW_HOSTS.some((h) => normalized === h || normalized.startsWith("mipaw."));
}

function hostWithoutPort(host: string) {
  return host.toLowerCase().split(":")[0] ?? host;
}

function isLocalDevHost(host: string) {
  const h = hostWithoutPort(host);
  return h === "localhost" || h === "127.0.0.1";
}

function isProductionWwwOrApex(host: string) {
  const h = hostWithoutPort(host);
  return h === "www.lumexforge.com" || h === "lumexforge.com";
}

function mipawPublicRedirectPath(pathname: string): string {
  if (pathname === "/mipaw") return "";
  if (pathname.startsWith("/mipaw/")) return pathname.slice("/mipaw".length);
  return pathname;
}

function mipawTrailingSlashRewrite(
  request: NextRequest,
  pathname: string,
): NextResponse | null {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.rewrite(url);
  }
  return null;
}

function mipawWellKnownRewrite(request: NextRequest, pathname: string): NextResponse | null {
  if (pathname === "/.well-known/apple-app-site-association") {
    const url = request.nextUrl.clone();
    url.pathname = "/mipaw-well-known/apple-app-site-association";
    const response = NextResponse.rewrite(url);
    response.headers.set("Content-Type", "application/json");
    return response;
  }
  if (pathname === "/.well-known/assetlinks.json") {
    const url = request.nextUrl.clone();
    url.pathname = "/mipaw-well-known/assetlinks.json";
    const response = NextResponse.rewrite(url);
    response.headers.set("Content-Type", "application/json");
    return response;
  }
  return null;
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  if (!isMipawHost(host) && pathname.startsWith("/.well-known")) {
    return NextResponse.next();
  }

  if (isMipawHost(host)) {
    const wellKnown = mipawWellKnownRewrite(request, pathname);
    if (wellKnown) return wellKnown;

    const url = request.nextUrl.clone();
    url.pathname =
      pathname === "/" || pathname === "" ? "/mipaw" : `/mipaw${pathname}`;
    const trailing = mipawTrailingSlashRewrite(request, url.pathname);
    const response = trailing ?? NextResponse.rewrite(url);
    response.headers.set("x-mipaw-site", "1");
    response.headers.set("x-mipaw-subdomain", "1");
    return response;
  }

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

  if (
    isProductionWwwOrApex(host) &&
    (pathname === "/mipaw" || pathname.startsWith("/mipaw/"))
  ) {
    const suffix = mipawPublicRedirectPath(pathname);
    const destination = `${MIPAW_PUBLIC_ORIGIN}${suffix}${request.nextUrl.search}`;
    return NextResponse.redirect(destination, 308);
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

  if (
    isLocalDevHost(host) &&
    (pathname === "/mipaw" || pathname.startsWith("/mipaw/"))
  ) {
    const trailing = mipawTrailingSlashRewrite(request, pathname);
    const response = trailing ?? NextResponse.next();
    response.headers.set("x-mipaw-site", "1");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images).*)"],
};
