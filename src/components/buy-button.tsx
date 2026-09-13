import { Button } from "@/components/ui/button";
import { formatPrice, type Product } from "@/data/products";

export function BuyButton({
  product,
  size = "lg",
  className,
}: {
  product: Product;
  size?: "default" | "lg" | "sm";
  className?: string;
}) {
  if (!product.gumroadUrl) {
    return (
      <Button size={size} className={className} disabled aria-disabled="true">
        Coming soon · {formatPrice(product.price)}
      </Button>
    );
  }

  return (
    <Button size={size} className={className} asChild>
      <a
        href={product.gumroadUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy on Gumroad · {formatPrice(product.price)}
      </a>
    </Button>
  );
}
