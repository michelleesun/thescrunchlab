import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About | The ScrunchLab",
  description:
    "The story behind The ScrunchLab: teaching sewing, reducing textile waste, and making sustainability accessible to young people.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A lab for stitching small habits into big change"
        description="The ScrunchLab began with a needle, a pile of leftover fabric, and a simple question: what if reducing waste could start with something as small as a scrunchie?"
      />

      <Section className="grid gap-14 md:grid-cols-2 md:items-center">
        <FadeIn className="relative aspect-[4/5] overflow-hidden rounded-xl2 shadow-card ring-1 ring-clay-100">
          <Image
            src="/images/about-story.jpg"
            alt="Friends showing off their rescued-fabric scrunchies"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 45vw, 90vw"
          />
        </FadeIn>
        <div>
          <SectionHeading
            align="left"
            eyebrow="How We Started"
            title="From a school project to a small studio"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-clay-500">
            <p>
              The ScrunchLab started small: a stack of fabric scraps that were
              never going to be used, a borrowed sewing machine, and a group
              of friends who wanted to make something out of what was already
              there instead of buying something new.
            </p>
            <p>
              What began as a handful of hand-sewn scrunchies for friends
              turned into a real question. Could we teach other young people
              to do the same? Could sewing become something approachable
              again, instead of a lost skill?
            </p>
            <p>
              Today, every scrunchie and every DIY kit we send out carries
              that same idea forward: small, accessible, hands-on
              sustainability, one stitch at a time.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-blush-50/50">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <SectionHeading align="left" eyebrow="Our Mission" title="Why we do this" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-clay-500">
              <p>
                Our mission is simple: teach sewing, reduce textile waste, and
                make sustainability accessible to young people. We think all
                three have to happen together. You can&rsquo;t reduce waste
                long-term without the skills to reuse what you already have,
                and skills only spread when they&rsquo;re genuinely
                approachable.
              </p>
              <p>
                That&rsquo;s why every kit is designed for a first-timer, every
                scrunchie is priced to be an easy yes, and every piece of
                fabric we use already existed before we touched it.
              </p>
            </div>
          </div>
          <FadeIn delay={0.1} className="relative order-1 aspect-[4/5] overflow-hidden rounded-xl2 shadow-card ring-1 ring-clay-100 md:order-2">
            <Image
              src="/images/community-hug.jpg"
              alt="Two friends embracing, wearing rescued-fabric scrunchies"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
          </FadeIn>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Why Sewing Matters"
          title="A skill worth keeping alive"
          description="Sewing isn't just nostalgic. It's one of the most practical sustainability skills there is."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "It extends the life of what you own",
              body: "A ripped seam or a loose hem doesn't have to mean the end of a garment, just a fifteen-minute fix.",
            },
            {
              title: "It changes how you shop",
              body: "Once you understand how something is made, it's easier to spot what's built to last, and what isn't.",
            },
            {
              title: "It's genuinely calming",
              body: "There's something quietly satisfying about making something with your hands, start to finish.",
            },
          ].map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1} className="rounded-xl2 bg-white/70 p-7 shadow-card ring-1 ring-clay-100">
              <h3 className="font-serif text-lg text-clay-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-clay-500">{item.body}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-sage-50/60">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="The Bigger Picture"
              title="Understanding textile waste"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-clay-500">
              <p>
                Textiles are one of the fastest-growing waste categories on
                the planet. Fast fashion has made clothing cheaper and
                faster to produce than ever, but that speed comes at a cost:
                mountains of fabric offcuts, unsold stock, and worn-out
                garments end up in landfill instead of getting a second life.
              </p>
              <p>
                Most of that fabric is still perfectly usable. It just needs
                someone willing to rescue it, and the skills to turn it into
                something new. That&rsquo;s the gap The ScrunchLab is trying
                to fill, one scrunchie and one kit at a time.
              </p>
            </div>
            <Button href="/learn" variant="secondary" className="mt-8">
              Learn More
            </Button>
          </div>
          <FadeIn delay={0.1} className="relative aspect-[4/5] overflow-hidden rounded-xl2 shadow-card ring-1 ring-clay-100">
            <Image
              src="/images/community-group.jpg"
              alt="A group of friends standing together, arms around shoulders"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
