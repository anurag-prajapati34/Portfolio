// ProjectCard.tsx
"use client";

import { ProjectType, Status } from "@/data/projects";
import { ArrowUpRight, Play, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const statusStyles: Record<Status, string> = {
    Live: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
    Building: "bg-rose-400/10 text-rose-400 border-rose-400/20",
    "Not Started": "bg-zinc-400/10 text-zinc-400 border-zinc-400/20",
    "Coming Soon": "bg-zinc-400/10 text-zinc-400 border-zinc-400/20",
};

const statusDot: Record<Status, string> = {
    Live: "bg-emerald-400",
    Building: "bg-rose-400",
    "Not Started": "bg-zinc-400",
    "Coming Soon": "bg-zinc-400",
};

// Extracts a YouTube video ID from common URL formats (watch?v=, youtu.be/, embed/)
const getYouTubeId = (url: string) => {
    const match = url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
};

export const ProjectCard = ({ project }: { project: ProjectType }) => {
    const { title, description, thumbnail, status, technologies, links, ytVideoLink, slug } = project;
    const [showVideo, setShowVideo] = useState(false);
    const router = useRouter();

    const videoId = ytVideoLink ? getYouTubeId(ytVideoLink) : null;
    const link = links.live ?? links.github ?? "";

    return (
        <>
            <div
                onClick={() => router.push(`/projects/${slug}`)}
                className="border border-zinc-900 hover:border-zinc-800 rounded-xl overflow-hidden transition-colors group cursor-pointer"
            >
                {/* Thumbnail */}
                <div className="relative w-full aspect-video bg-zinc-950 overflow-hidden">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {videoId && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowVideo(true);
                            }}
                            aria-label={`Play ${title} video`}
                            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                        >
                            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/90 group-hover:scale-110 transition-transform shadow-lg">
                                <Play className="w-6 h-6 text-black fill-black ml-0.5" />
                            </span>
                        </button>
                    )}
                </div>

                <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="text-white font-bold text-base">{title}</h3>
                        <span
                            className={`shrink-0 flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full border ${statusStyles[status]}`}
                        >
                            <span className={`w-1.5 h-1.5 rounded-full ${statusDot[status]}`} />
                            {status}
                        </span>
                    </div>

                    <p className="text-zinc-400 text-sm mt-1.5 leading-relaxed line-clamp-2">
                        {description}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                            {technologies.slice(0, 5).map((tech) => (
                                <span
                                    key={tech.name}
                                    title={tech.name}
                                    className="w-6 h-6 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-md"
                                >
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={14}
                                        height={14}
                                        className="object-contain"
                                    />
                                </span>
                            ))}
                            {technologies.length > 5 && (
                                <span className="text-zinc-500 text-xs">+{technologies.length - 5}</span>
                            )}
                        </div>

                        {link ? (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1 text-white text-sm font-semibold hover:text-sky-400 transition-colors"
                            >
                                View Project
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        ) : (
                            <span className="flex items-center gap-1 text-zinc-600 text-sm font-semibold cursor-not-allowed">
                                View Project
                                <ArrowUpRight className="w-4 h-4" />
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Video modal */}
            {showVideo && videoId && (
                <div
                    onClick={() => setShowVideo(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
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