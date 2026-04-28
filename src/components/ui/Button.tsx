import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";
type Size    = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
}

/* B2B-appropriate: rounded-lg not rounded-full */
const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#1A56DB] text-white hover:bg-[#1342B8] shadow-[0_2px_12px_rgba(26,86,219,0.30)] hover:shadow-[0_4px_20px_rgba(26,86,219,0.40)]",
  secondary:
    "bg-[#0D9488] text-white hover:bg-[#0B7A6E] shadow-[0_2px_12px_rgba(13,148,136,0.28)]",
  outline:
    "border border-[#1A56DB] text-[#1A56DB] hover:bg-[#1A56DB] hover:text-white",
  ghost:
    "text-[#1A56DB] hover:bg-blue-50",
  white:
    "bg-white text-[#1A56DB] hover:bg-slate-50 shadow-sm",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A56DB] focus-visible:ring-offset-2 active:scale-[0.98] whitespace-nowrap";

  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (href.startsWith("/")) {
      return <Link href={href} className={classes}>{children}</Link>;
    }

    return <a href={href} className={classes}>{children}</a>;
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
