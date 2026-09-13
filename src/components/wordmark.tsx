import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-baseline font-medium tracking-tight text-foreground",
        className,
      )}
      aria-label={SITE_NAME}
    >
      CaliX
      <span className="text-primary" aria-hidden>
        .
      </span>
      Build
    </Link>
  );
}
