import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-clay-500 text-cream hover:bg-clay-900 shadow-soft",
  secondary:
    "bg-transparent border border-clay-500 text-clay-500 hover:bg-clay-500 hover:text-cream",
  ghost:
    "bg-blush-100 text-clay-900 hover:bg-blush-200",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal && !href.startsWith("mailto:")
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
