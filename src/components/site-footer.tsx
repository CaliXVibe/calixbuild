import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { CONTACT_EMAIL, CONTACT_MAILTO, SITE_NAME } from "@/lib/site";

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/do-not-sell", label: "Do Not Sell" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-cyan/10 bg-navy-deep">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <Wordmark className="text-base" />
            <p className="max-w-sm text-sm text-paper-muted">
              Cali X Desk studio. Night Desk operator packs for desks that
              still pick up after nine.
            </p>
          </div>
          <a
            href={CONTACT_MAILTO}
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <div className="flex flex-col gap-3 border-t border-cyan/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
          >
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-paper-muted transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE_NAME}. Estimated costs are
            planning ranges — not a contract.
          </p>
        </div>
      </div>
    </footer>
  );
}
