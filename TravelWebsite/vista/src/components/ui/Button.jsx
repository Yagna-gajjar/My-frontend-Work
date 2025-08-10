import { Slot } from "@radix-ui/react-slot";
import { twMerge } from "tailwind-merge";

export function Button({
  asChild = false,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  // Base styles
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:pointer-events-none";

  // Variants
  const variants = {
    default: "bg-brand text-text-light hover:bg-brand-dark",
    secondary: "bg-brand-contrast text-brand-dark hover:bg-brand-contrast/70",
    outline: "border-2 border-brand text-brand font-bold hover:bg-brand/20",
    ghost: "bg-transparent hover:bg-background/10",
    link: "bg-transparent underline-offset-4 hover:underline text-brand",
  };

  // Sizes
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8 text-base",
    icon: "h-10 w-10 p-2",
  };

  return (
    <Comp
      className={twMerge(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
