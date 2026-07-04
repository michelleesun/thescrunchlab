import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ProductGallery from "@/components/ProductGallery";
import HowToOrder from "@/components/HowToOrder";
import FaqAccordion from "@/components/FaqAccordion";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { products, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} | The ScrunchLab`,
    description: product.tagline,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  return (
    <>
      <Section className="pt-12">
        <Button href="/shop" variant="ghost" className="text-xs">
          ← Back to Shop
        </Button>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <FadeIn>
            <ProductGallery images={product.gallery} name={product.name} />
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blush-500">
              {product.tagline}
            </span>
            <h1 className="mt-3 font-serif text-4xl text-clay-900">{product.name}</h1>
            <p className="mt-4 font-serif text-2xl text-blush-600">
              ${product.price.toFixed(2)} {product.currency}
            </p>
            <p className="mt-6 text-base leading-relaxed text-clay-500">
              {product.description}
            </p>

            <ul className="mt-6 space-y-2">
              {product.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-clay-700">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-400" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl2 bg-sage-50 p-5 text-sm leading-relaxed text-sage-500 ring-1 ring-sage-100">
              <span className="font-semibold text-sage-500">Sustainability note: </span>
              {product.sustainabilityNote}
            </div>

            <HowToOrder className="mt-8" />
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-clay-50/60">
        <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" />
        <div className="mx-auto mt-10 max-w-2xl">
          <FaqAccordion faqs={product.faqs} />
        </div>
      </Section>
    </>
  );
}
