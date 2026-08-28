// ProjectHero.tsx
"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Play, X } from "lucide-react";

const getYouTubeId = (url: string) => {
    const match = url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
};

export const ProjectHero = ({
    title,
    thumbnail,
    ytVideoLink,
}: {
    title: string;
    thumbnail: string | StaticImageData;
    ytVideoLink?: string;
}) => {
    const [showVideo, setShowVideo] = useState(false);
    const videoId = ytVideoLink ? getYouTubeId(ytVideoLink) : null;

    return (
        <>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    priority
                    className="object-cover"
                />

                {videoId && (
                    <button
                        onClick={() => setShowVideo(true)}
                        aria-label={`Play ${title} video`}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                    >
                        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 group-hover:scale-110 transition-transform shadow-lg">
                            <Play className="w-7 h-7 text-black fill-black ml-0.5" />
                        </span>
                    </button>
                )}
            </div>

            {showVideo && videoId && (
                <div
                    onClick={() => setShowVideo(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
                    >
                        <button
                            onClick={() => setShowVideo(false)}
                            aria-label="Close video"
                            className="absolute -top-10 right-0 md:top-2 md:right-2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title={`${title} video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                </div>
            )}
        </>
    );
};