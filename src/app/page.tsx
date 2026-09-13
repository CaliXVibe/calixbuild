import Link from "next/link";
import { ArrowRight, Download, MessageSquareText, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, CONTACT_MAILTO, SITE_TAGLINE } from "@/lib/site";
import { PRODUCT_PRICE, products } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="desk-grid pointer-events-none absolute inset-0 opacity-80"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[78svh] w-full max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            Cali X Desk · operator packs
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl leading-[0.95] text-paper italic sm:text-7xl">
            {SITE_TAGLINE}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-paper-muted sm:text-lg">
            Night Desk packs for home-service companies that still take the
            phone after nine. One trade, one operator prompt, one sample lead.
            Instant download. {products.length} packs at ${PRODUCT_PRICE} each.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" asChild>
              <Link href="/shop">
                Shop Night Desk
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={CONTACT_MAILTO}>Contact {CONTACT_EMAIL}</a>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="night-desk"
        className="border-t border-cyan/10 bg-navy-deep/60"
      >
        <div className="mx-auto flex min-h-[70svh] w-full max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            What Night Desk is
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-4xl text-paper italic sm:text-5xl">
            A desk you can run tonight.
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-paper-muted">
            Night Desk is a digital operator pack — not a contractor, not a
            CRM, not a monthly subscription. You download the pack, drop the
            prompt on your desk, and use the sample lead to see how after-hours
            intake should sound.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: NotebookPen,
                title: "Operator prompt",
                copy: "A trade-specific script for the person — or model — sitting the night desk.",
              },
              {
                icon: MessageSquareText,
                title: "Sample lead",
                copy: "One realistic after-hours ticket so the pack is usable the same night.",
              },
              {
                icon: Download,
                title: "Instant download",
                copy: "Digital only. Checkout on Gumroad when the listing is live. No field work.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-cyan/10 bg-navy-elevated/80 p-5"
              >
                <item.icon className="size-5 text-primary" aria-hidden />
                <h3 className="mt-4 text-base font-medium text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-paper-muted">
                  {item.copy}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            CaliX.Build is not a licensed contractor and does not perform field
            work. Estimated costs are planning ranges — not a contract.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/shop">See all {products.length} packs</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-cyan/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-heading text-3xl text-paper italic">
              Contact only.
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-6 text-paper-muted">
              Questions about Night Desk, a pack, or an opt-out request — email
              the studio. This is the public address. There is no other inbox.
            </p>
          </div>
          <Button size="lg" asChild>
            <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
          </Button>
        </div>
      </section>
    </>
  );
}
