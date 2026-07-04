import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact | The ScrunchLab",
  description: "Get in touch with The ScrunchLab.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Say hello"
        description="Questions about an order, a partnership, or just want to talk sewing? We'd love to hear from you."
      />

      <Section className="grid gap-14 md:grid-cols-[1fr_1.3fr]">
        <FadeIn className="space-y-8">
          <div>
            <h3 className="font-serif text-lg text-clay-900">Instagram</h3>
            <a
              href="https://instagram.com/thescrunchlab"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm text-blush-600 hover:text-blush-500"
            >
              @thescrunchlab
            </a>
          </div>
          <div>
            <h3 className="font-serif text-lg text-clay-900">Email</h3>
            <a
              href="mailto:thescrunchlab.contact@gmail.com"
              className="mt-2 inline-block break-all text-sm text-blush-600 hover:text-blush-500"
            >
              thescrunchlab.contact@gmail.com
            </a>
          </div>
          <div className="rounded-xl2 bg-sage-50 p-6 text-sm leading-relaxed text-sage-500 ring-1 ring-sage-100">
            We&rsquo;re a small team, so replies may take a couple of days, but we
            read every message.
          </div>
          <div className="rounded-xl2 bg-blush-50 p-6 ring-1 ring-blush-100">
            <p className="text-sm leading-relaxed text-clay-900">
              To order, send us a message on Instagram or email us.
            </p>
            <p className="mt-1 text-xs text-clay-500">
              We&rsquo;ll confirm details and availability with you.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="rounded-xl2 bg-white/70 p-8 shadow-card ring-1 ring-clay-100">
          <ContactForm />
        </FadeIn>
      </Section>
    </>
  );
}
