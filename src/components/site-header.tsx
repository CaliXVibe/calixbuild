import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-cyan/10 bg-navy/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Wordmark className="text-base sm:text-lg" />
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/shop"
            className="rounded-md px-2.5 py-1.5 text-sm text-paper-muted transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"
          >
            Shop
          </Link>
          <a
            href={CONTACT_MAILTO}
            className="rounded-md px-2.5 py-1.5 text-sm text-paper-muted transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"
          >
            Contact
            <span className="sr-only"> ({CONTACT_EMAIL})</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
