import type { ReactNode } from "react";
import FadeIn from "./FadeIn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <div className="border-b border-clay-100 bg-blush-50/60">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10 lg:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blush-500">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-balance font-serif text-4xl text-clay-900 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-clay-500">
              {description}
            </p>
          )}
          {children}
        </FadeIn>
      </div>
    </div>
  );
}
