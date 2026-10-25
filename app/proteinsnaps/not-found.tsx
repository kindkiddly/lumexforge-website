import { BlogArticleLink } from "@/components/proteinsnaps/BlogArticleLink";
import Link from "next/link";

export default function ProteinSnapsNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 pb-16 pt-28 text-center">
      <p className="font-serif text-6xl font-bold text-[#00e6a8]/40">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-[#1A1A1A] sm:text-4xl">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[#555555]">
        That link does not match a page on ProteinSnaps. Try the home page or our free tools.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <BlogArticleLink
          href="/"
          className="inline-flex rounded-full bg-gradient-to-r from-[#00E6A8] to-[#00B386] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,184,130,0.35)]"
        >
          Back to home
        </BlogArticleLink>
        <Link
          href="/blog"
          className="inline-flex rounded-full border border-black/[0.12] bg-white/60 px-6 py-3 text-sm font-semibold text-[#1A1A1A]"
        >
          Read the blog
        </Link>
      </div>
    </div>
  );
}
