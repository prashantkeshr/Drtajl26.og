"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  icon?: ReactNode;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  icon,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out";

  const variants = {
    primary:
      "bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-[length:200%_auto] text-black shadow-[0_0_0_0_rgba(201,168,76,0.5)] hover:bg-[position:100%_0] hover:shadow-[0_0_30px_4px_rgba(201,168,76,0.35)] hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "text-white hover:text-gold",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
