import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products, PRODUCT_PRICE, formatPrice } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Nine Night Desk operator packs for home-service desks. Thirty-nine dollars each. Instant download via Gumroad when listings are live.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
        Shop
      </p>
      <h1 className="mt-3 font-heading text-4xl text-paper italic sm:text-6xl">
        Night Desk packs
      </h1>
      <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-paper-muted">
        Nine trades. {formatPrice(PRODUCT_PRICE)} each. Operator prompt plus a
        sample lead, instant download. Checkout is Gumroad — buy is disabled
        until a live URL is pasted into the product data file.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <li key={product.slug}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
