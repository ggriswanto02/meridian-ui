import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

const variants = {
  primary: "bg-primary text-surface hover:bg-primary-hover",
  secondary: "border border-line text-ink hover:bg-background",
} as const;

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
