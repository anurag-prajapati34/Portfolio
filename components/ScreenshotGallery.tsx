// ScreenshotGallery.tsx
"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const ScreenshotGallery = ({
    screenshots,
    title,
}: {
    screenshots: string[] | StaticImageData[];
    title: string;
}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    if (!screenshots || screenshots.length === 0) return null;

    const close = () => setActiveIndex(null);
    const prev = () =>
        setActiveIndex((i) => (i === null ? null : (i - 1 + screenshots.length) % screenshots.length));
    const next = () =>
        setActiveIndex((i) => (i === null ? null : (i + 1) % screenshots.length));

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {screenshots.map((src, i) => (
                    <button
                        key={src.toString()}
                        onClick={() => setActiveIndex(i)}
                        className="relative aspect-video rounded-lg overflow-hidden border border-zinc-900 hover:border-zinc-700 transition-colors"
                    >
                        <Image
                            src={src}
                            alt={`${title} screenshot ${i + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </button>
                ))}
            </div>

            {activeIndex !== null && (
                <div
                    onClick={close}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
                >
                    <button
                        onClick={close}
                        aria-label="Close"
                        className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {screenshots.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prev();
                                }}
                                aria-label="Previous screenshot"
                                className="absolute left-3 md:left-6 flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    next();
                                }}
                                aria-label="Next screenshot"
                                className="absolute right-3 md:right-6 flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </>
                    )}

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl aspect-video"
                    >
                        <Image
                            src={screenshots[activeIndex]}
                            alt={`${title} screenshot ${activeIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
};