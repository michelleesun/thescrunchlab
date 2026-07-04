import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import SponsorBanner from "@/components/SponsorBanner";
import InstagramGrid from "@/components/InstagramGrid";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { products } from "@/lib/products";

const steps = [
  {
    number: "01",
    title: "We rescue the fabric",
    description:
      "Offcuts, remnants, and donated textiles are collected before they ever reach a landfill.",
  },
  {
    number: "02",
    title: "We sew, by hand",
    description:
      "Each piece is washed, cut, and hand-sewn in small batches, right down to the last stitch.",
  },
  {
    number: "03",
    title: "You learn, or you wear",
    description:
      "Shop a finished scrunchie, or grab a DIY kit and learn to make your own with our tutorial video.",
  },
  {
    number: "04",
    title: "The cycle continues",
    description:
      "Every purchase keeps fabric in circulation and puts sewing skills in more hands.",
  },
];

const testimonials = [
  {
    quote:
      "I didn't think I could sew anything, but the DIY kit walked me through it so gently. My scrunchie is a little wonky and I love it more for that.",
    name: "Priya",
    role: "First-time sewist",
  },
  {
    quote:
      "The fabric is so soft and every piece feels genuinely one-of-a-kind. Knowing it's rescued makes it feel even better to wear.",
    name: "Maya",
    role: "Repeat customer",
  },
  {
    quote:
      "We partnered with The ScrunchLab for a school sustainability fair and the girls were floored by how much textile waste they'd already diverted.",
    name: "Ms. Chen",
    role: "Educator",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section className="grid gap-14 md:grid-cols-2 md:items-center">
        <FadeIn className="relative order-2 aspect-[5/4] overflow-hidden rounded-xl2 shadow-card ring-1 ring-clay-100 md:order-1">
          <Image
            src="/images/community-group.jpg"
            alt="A group of friends with arms around each other, wearing scrunchies"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 45vw, 90vw"
          />
        </FadeIn>
        <div className="order-1 md:order-2">
          <SectionHeading
            align="left"
            eyebrow="Our Mission"
            title="Sewing skills and less textile waste, in every scrunchie."
            description="The ScrunchLab exists to teach sewing, reduce textile waste, and make sustainability accessible to young people. We believe the smallest habits, like reaching for a rescued scrunchie instead of a new one, add up to real change."
          />
          <Button href="/about" variant="secondary" className="mt-8">
            Read Our Story
          </Button>
        </div>
      </Section>

      <Section className="bg-clay-50/60">
        <SectionHeading
          eyebrow="Featured"
          title="Shop the Lab"
          description="Two ways to join the movement: wear one, or learn to make your own."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {products.map((product, index) => (
            <FadeIn key={product.slug} delay={index * 0.1}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Sustainability Impact"
              title="The fashion industry wastes more than you'd think."
              description="Textile waste is one of the fastest-growing categories of landfill waste worldwide. Every rescued yard of fabric we sew into a scrunchie is a small act of resistance against a system built on 'new.'"
            />
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <p className="font-serif text-3xl text-blush-600">92M</p>
                <p className="mt-1 text-xs leading-snug text-clay-500">
                  tonnes of textile waste generated globally each year
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-blush-600">100%</p>
                <p className="mt-1 text-xs leading-snug text-clay-500">
                  rescued fabric in every scrunchie we make
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-blush-600">0</p>
                <p className="mt-1 text-xs leading-snug text-clay-500">
                  new fabric produced for our products
                </p>
              </div>
            </div>
          </div>
          <FadeIn delay={0.1} className="relative aspect-[5/4] overflow-hidden rounded-xl2 shadow-card ring-1 ring-clay-100">
            <Image
              src="/images/sustainability.jpg"
              alt="Friends together, wearing rescued-fabric scrunchies"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-blush-50/50">
        <SectionHeading
          eyebrow="How It Works"
          title="From rescued fabric to finished scrunchie"
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.08} className="relative">
              <p className="font-serif text-4xl text-blush-200">{step.number}</p>
              <h3 className="mt-3 font-serif text-lg text-clay-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-clay-500">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Testimonials"
          title="Stitched into our community"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <TestimonialCard {...testimonial} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <FadeIn>
          <SponsorBanner />
        </FadeIn>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Community"
          title="Follow along @thescrunchlab"
          description="Real moments from real hands, sewing, gifting, and wearing rescued fabric."
        />
        <div className="mt-12">
          <FadeIn>
            <InstagramGrid />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
