import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-6 ${className}`}>
      {children}
    </section>
  );
}
