import type { ReactNode } from "react";
import { LEGAL_UPDATED, SITE_NAME } from "@/lib/site";

export function LegalArticle({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="legal mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
        {SITE_NAME}
      </p>
      <h1 className="mt-3 font-heading text-4xl text-paper sm:text-5xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-paper-muted">Last updated {LEGAL_UPDATED}</p>
      <div className="legal-body mt-10 space-y-6 text-pretty text-[15px] leading-7 text-paper-muted [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:pt-4 [&_h2]:font-sans [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-paper [&_li]:pl-1 [&_strong]:font-medium [&_strong]:text-paper [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </article>
  );
}
