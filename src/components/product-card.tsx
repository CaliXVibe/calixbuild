import Link from "next/link";
import { BuyButton } from "@/components/buy-button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPrice, type Product } from "@/data/products";
import { TradeIcon } from "@/lib/icons";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="h-full bg-card/80 ring-cyan/15 transition-colors hover:ring-primary/40">
      <CardHeader>
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-cyan-soft text-primary">
            <TradeIcon trade={product.trade} className="size-5" />
          </span>
          <Badge variant="outline" className="border-cyan/25 text-paper-muted">
            {formatPrice(product.price)}
          </Badge>
        </div>
        <CardTitle className="font-sans text-lg text-paper">
          <Link
            href={`/shop/${product.slug}`}
            className="rounded-sm outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"
          >
            {product.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-pretty text-paper-muted">
          {product.summary}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-xs text-muted-foreground">
        Digital operator pack · instant download
      </CardContent>
      <CardFooter className="mt-auto gap-2 border-cyan/10 bg-navy-deep/40">
        <BuyButton product={product} size="default" className="flex-1" />
      </CardFooter>
    </Card>
  );
}
