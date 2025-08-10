"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { twMerge } from "tailwind-merge";


export const Input = (
    (
        {
            asChild = false,
            variant = "default",
            size = "default",
            className = "",
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "input";

        // Base styles
        const base =
            "w-full rounded-md border text-sm transition-colors " +
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
            "disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-400";

        // Variants
        const variants = {
            default:
                "bg-background border border-border text-text focus:border-0 focus-visible:ring-brand/50 focus:border-brand",
            outline:
                "border-2 border-brand bg-transparent text-brand placeholder:text-brand/60 focus-visible:ring-brand/50",
            ghost:
                "border-transparent bg-transparent text-gray-900 focus-visible:ring-brand/50",
        };

        // Sizes
        const sizes = {
            default: "h-10 px-4 py-2 text-sm",
            sm: "h-9 px-3 text-sm",
            lg: "h-11 px-4 text-base",
        };

        return (
            <Comp
                ref={ref}
                className={twMerge(base, variants[variant], sizes[size], className)}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";
