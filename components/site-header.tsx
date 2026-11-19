import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-sky bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" aria-label="Carlton City Cleaning home">
          <Image
            src="/brand/logo-primary.svg"
            alt="Carlton City Cleaning"
            width={506}
            height={120}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>
        <Link
          href="/quote"
          className="rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy"
        >
          Get a quote
        </Link>
      </div>
    </header>
  );
}
