import Image from "next/image";
import type { Product } from "@/lib/products";
import Button from "./Button";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl2 bg-white/70 shadow-card ring-1 ring-clay-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-blush-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(min-width: 768px) 40vw, 90vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="font-serif text-xl text-clay-900">{product.name}</h3>
          <p className="mt-1 text-sm text-clay-500">{product.tagline}</p>
        </div>
        <p className="font-serif text-lg text-blush-600">
          ${product.price.toFixed(2)} {product.currency}
        </p>
        <div className="mt-auto pt-2">
          <Button href={`/shop/${product.slug}`} variant="secondary" className="w-full">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
