import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BuyButton } from "@/components/buy-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  formatPrice,
  getProduct,
  products,
} from "@/data/products";
import { TradeIcon } from "@/lib/icons";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/shop/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    return { title: "Pack not found" };
  }
  return {
    title: product.title,
    description: product.summary,
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/shop/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Button variant="ghost" size="sm" asChild className="-ml-2">
        <Link href="/shop">
          <ArrowLeft data-icon="inline-start" />
          All packs
        </Link>
      </Button>
      <div className="mt-8 flex items-center gap-3">
        <span className="flex size-12 items-center justify-center rounded-xl bg-cyan-soft text-primary">
          <TradeIcon trade={product.trade} className="size-6" />
        </span>
        <Badge variant="outline" className="border-cyan/25 text-paper-muted">
          {formatPrice(product.price)}
        </Badge>
      </div>
      <h1 className="mt-6 font-heading text-4xl text-paper italic sm:text-5xl">
        {product.title}
      </h1>
      <p className="mt-4 text-lg leading-7 text-paper-muted">{product.summary}</p>
      <p className="mt-6 text-pretty leading-7 text-paper-muted">
        {product.description}
      </p>
      <ul className="mt-8 space-y-2 text-sm text-paper-muted">
        <li>Digital operator pack — not a field visit.</li>
        <li>Checkout on Gumroad when this listing is live.</li>
        <li>CaliX.Build is not a licensed contractor.</li>
      </ul>
      <div className="mt-8">
        <BuyButton product={product} />
      </div>
    </div>
  );
}
