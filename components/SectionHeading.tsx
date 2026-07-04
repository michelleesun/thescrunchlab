import FadeIn from "./FadeIn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";

  return (
    <FadeIn className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blush-500">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-serif text-3xl text-clay-900 sm:text-4xl">{title}</h2>
      {description && (
        <p className="text-balance text-base leading-relaxed text-clay-500">{description}</p>
      )}
    </FadeIn>
  );
}
