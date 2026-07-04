import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Learn | The ScrunchLab",
  description:
    "Sewing basics, sustainability tips, and future DIY ideas from The ScrunchLab.",
};

const basics = [
  {
    title: "Threading a needle",
    body: "Wet the thread tip, cut it at an angle, and push it through the eye of the needle in one steady motion. Knot the end so it doesn't slip through your fabric.",
  },
  {
    title: "The running stitch",
    body: "The simplest stitch there is: up, down, up, down, in a straight line. It's what holds most of our scrunchie seams together.",
  },
  {
    title: "Gathering fabric",
    body: "Loosen your stitch tension slightly and pull the thread gently after sewing a long edge. This is how a flat piece of fabric becomes a scrunchie's signature ruffle.",
  },
  {
    title: "Finishing an elastic loop",
    body: "Overlap the elastic ends by about an inch and stitch back and forth a few times so the loop can stretch without pulling apart.",
  },
];

const sustainabilityTips = [
  {
    title: "Mend before you replace",
    body: "A five-minute repair can add years to a favorite piece of clothing.",
  },
  {
    title: "Save your scraps",
    body: "Leftover fabric from old projects is often exactly what a small accessory like a scrunchie needs.",
  },
  {
    title: "Shop secondhand first",
    body: "Thrifted and rescued fabric means less demand for new textile production.",
  },
  {
    title: "Learn one skill at a time",
    body: "You don't need to be an expert seamstress, just knowing one stitch opens up a lot of possibilities.",
  },
];

const futureIdeas = [
  "Fabric scrap hair bows",
  "Patchwork tote bags from offcuts",
  "No-sew fabric wrapping for gifts",
  "Reworked t-shirt headbands",
  "Denim scrap coasters",
  "Mini drawstring pouches",
];

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Sewing is a skill, not a talent"
        description="Everything here is written for someone who has never picked up a needle. Start with the basics, then keep going."
      />

      <Section>
        <SectionHeading eyebrow="Sewing Basics" title="Four skills to get you started" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {basics.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={index * 0.08}
              className="rounded-xl2 bg-white/70 p-7 shadow-card ring-1 ring-clay-100"
            >
              <span className="font-serif text-sm text-blush-500">Basic 0{index + 1}</span>
              <h3 className="mt-2 font-serif text-lg text-clay-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-clay-500">{item.body}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 text-center">
          <Button href="/shop/diy-scrunchie-kit" variant="primary">
            Practice with a DIY Kit
          </Button>
        </FadeIn>
      </Section>

      <Section className="grid gap-14 bg-blush-50/50 md:grid-cols-2 md:items-center">
        <FadeIn className="relative order-2 aspect-[4/5] overflow-hidden rounded-xl2 shadow-card ring-1 ring-clay-100 md:order-1">
          <Image
            src="/images/lifestyle-mirror.jpg"
            alt="Tying a scrunchie into a ponytail in the mirror"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 45vw, 90vw"
          />
        </FadeIn>
        <div className="order-1 md:order-2">
          <SectionHeading eyebrow="Sustainability" align="left" title="Small habits worth building" />
          <div className="mt-8 space-y-6">
            {sustainabilityTips.map((tip, index) => (
              <FadeIn key={tip.title} delay={index * 0.06} className="flex gap-4">
                <span className="font-serif text-2xl text-sage-300">{index + 1}</span>
                <div>
                  <h3 className="font-serif text-base text-clay-900">{tip.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-clay-500">{tip.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What's Next"
          title="Future DIY ideas we're dreaming up"
          description="Scrunchies are just the beginning. Here's what's on our sketchpad for future kits."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {futureIdeas.map((idea, index) => (
            <FadeIn key={idea} delay={index * 0.04}>
              <span className="inline-flex items-center rounded-full bg-sage-100 px-5 py-2.5 text-sm font-medium text-sage-500 ring-1 ring-sage-200">
                {idea}
              </span>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
