import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

/**
 * Props
 * - variant: "horizontal" | "square" | "feedback"
 * - image: string
 * - title: string
 * - subtitle?: string
 * - location?: string
 * - rating?: number (0-5)
 * - price?: string | number
 * - tags?: string[]
 * - href?: string
 */
export default function Card({
    variant = "horizontal",
    image,
    title,
    subtitle,
    location,
    rating,
    price,
    tags = [],
    href,
    className = "",
}) {
    if (variant === "square") {
        return <SquareCard {...{ image, title, subtitle, location, rating, price, tags, href, className }} />;
    }

    if (variant === "feedback") {
        return <FeedbackCard {...{ image, title, subtitle, rating, className }} />;
    }

    // default: horizontal
    return <HorizontalCard {...{ image, title, subtitle, location, rating, price, tags, href, className }} />;
}


/* ------------------ Variants ------------------ */

function HorizontalCard({
    image,
    title,
    subtitle,
    location,
    rating,
    price,
    tags,
    href,
    className,
}) {
    const Comp = href ? Link : "div";
    const compProps = href ? { to: href } : {};

    return (
        <Comp
            {...compProps}
            className={
                "group sm:flex sm:h-44 w-full overflow-hidden rounded-xl border border-border shadow-sm transition hover:shadow-md " +
                className
            }
        >
            <div className="relative h-44 w-full sm:w-44 shrink-0 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-3 w-full px-4 py-2 justify-between">
                <div>
                    <div className="flex justify-between items-center">
                        <h3 className="line-clamp-1 text-lg text-text font-semibold">{title}</h3>
                        {rating && (
                            <div>
                                <span className="flex items-center py-1 px-2 sm:py-2 sm:px-3 rounded-3xl bg-background-dark/20 backdrop-blur text-xs sm:text-sm text-text-light">
                                    <Star fill="hsl(var(--color-text-light))" className="me-1 h-3 w-3 sm:h-4 sm:w-4" />
                                    {rating.toFixed(1)}
                                </span>
                            </div>)}
                    </div>
                    {subtitle && (
                        <p className="mt-0.5 line-clamp-2 truncate text-sm text-text/80">
                            {subtitle}
                        </p>
                    )}
                    {location && (
                        <p className="mt-1 text-xs text-text/60">{location}</p>
                    )}
                </div>

                {price && (
                    <span className="text-lg font-semibold">
                        {typeof price === "number" ? `₹${price}` : price}
                    </span>
                )}

                {tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {tags.map((t) => (
                            <span
                                key={t}
                                className="rounded-full bg-brand-light/50 px-2 py-0.5 text-xs text-text"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Comp>
    );
}

function SquareCard({
    image,
    title,
    subtitle,
    location,
    rating,
    price,
    tags,
    href,
    className,
}) {
    const Comp = href ? Link : "div";
    const compProps = href ? { to: href } : {};
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [isMounted, setIsMounted] = useState(0);
    useEffect(() => {
        setIsMounted(isMounted + 1);
        console.log(isMounted);
        console.log(`Image loaded: ${imageLoaded}, Error: ${imageError}`);
    }, [imageLoaded, imageError]);
    return (
        <Comp
            {...compProps}
            className={
                "group relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-background shadow-sm transition hover:shadow-md " +
                className
            }
        >
            <img
                src={imageLoaded && !imageError ? image : "/image-placeholder.png"}
                alt={title}
                className={`h-full w-full object-cover transition group-hover:scale-105 ${imageLoaded && !imageError ? "" : "p-14"}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                    setImageError(true);
                    setImageLoaded(true);
                }}
            />

            {/* gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* content */}
            <div>
                <div className="absolute top-0 right-0 flex items-end p-4">
                    {rating && (
                        <div>
                            <span className="flex items-center py-1 px-2 sm:py-2 sm:px-3 rounded-3xl bg-background-dark/20 backdrop-blur text-xs sm:text-sm text-text-light">
                                <Star fill="hsl(var(--color-text-light))" className="mx-1 w-3 sm:w-4 h-3 sm:h-4" />
                                {rating.toFixed(1)}
                            </span>
                        </div>)}
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 text-text-light">
                <h3 className="line-clamp-1 text-text-light text-lg font-semibold">{title}</h3>
                <div className="flex justify-between">
                    {subtitle && (
                        <p className="line-clamp-2 text-sm text-text-light/60">{subtitle}</p>
                    )}
                    {price && (
                        <span className="rounded-md bg-background px-2 py-0.5 text-xs font-semibold text-text">
                            {typeof price === "number" ? `₹${price}` : price}
                        </span>
                    )}
                </div>

                {location && (
                    <p className="mt-1 text-xs text-text-light/50">{location}</p>
                )}

                {tags?.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                        {tags.map((t) => (
                            <span
                                key={t}
                                className="rounded-full bg-background/20 px-2 py-0.5 text-xs text-text-light"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Comp>
    );
}

function FeedbackCard({
    image,
    title,
    subtitle,
    rating,
    className,
}) {
    return (
        <div
            className={
                "group relative bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition " +
                className
            }
        >
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={image || "/avatar-placeholder.png"}
                    alt={title}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h4 className="text-sm font-semibold text-text">{title}</h4>
                    {rating && (
                        <div className="flex items-center gap-1 text-xs text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    fill={i < Math.round(rating) ? "currentColor" : "none"}
                                    stroke="currentColor"
                                />
                            ))}
                            <span className="text-text-light ml-1">{rating.toFixed(1)}</span>
                        </div>
                    )}
                </div>
            </div>
            {subtitle && (
                <p className="text-sm text-text/80 w-64">{subtitle}</p>
            )}
        </div>
    );
}
