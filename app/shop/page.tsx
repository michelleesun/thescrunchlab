import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import FadeIn from "@/components/FadeIn";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop | The ScrunchLab",
  description: "Browse Sustainable Scrunchies and DIY Scrunchie Kits made from rescued fabric.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Two ways to stitch the change"
        description="Every piece is made from rescued fabric, in small batches, by hand. Choose a finished scrunchie or a kit to make your own."
      >
        <p className="mt-6 text-sm text-clay-500">
          To order, send us a message on Instagram or email us.{" "}
          <span className="text-clay-400">We&rsquo;ll confirm details and availability with you.</span>
        </p>
      </PageHero>
      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          {products.map((product, index) => (
            <FadeIn key={product.slug} delay={index * 0.1}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
