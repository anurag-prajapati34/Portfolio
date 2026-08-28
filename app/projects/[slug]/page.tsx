import { ArrowLeft, ArrowUpRight, GitBranch, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectHero } from "@/components/ProjectHero";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { projects } from "@/data/projects";

const statusStyles: Record<string, string> = {
    Live: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
    Building: "bg-rose-400/10 text-rose-400 border-rose-400/20",
    "Not Started": "bg-zinc-400/10 text-zinc-400 border-zinc-400/20",
    "Coming Soon": "bg-zinc-400/10 text-zinc-400 border-zinc-400/20",
};

const statusDot: Record<string, string> = {
    Live: "bg-emerald-400",
    Building: "bg-rose-400",
    "Not Started": "bg-zinc-400",
    "Coming Soon": "bg-zinc-400",
};

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) return notFound();

    const { title, tagline, description, thumbnail, ytVideoLink, screenshots, status, technologies, highlights, links } = project;

    return (
        <main className="w-full max-w-3xl mx-auto text-white font-sans px-4 py-10">
            {/* Back link */}
            <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to projects
            </Link>

            {/* Title + status + links */}
            <div className="flex items-start justify-between gap-4 mt-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">{title}</h1>
                    <p className="text-zinc-400 text-sm md:text-base mt-2 max-w-lg">{tagline}</p>
                </div>
                <span
                    className={`shrink-0 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${statusStyles[status]}`}
                >
                    <span className={`w-1.5 h-1.5 rounded-full ${statusDot[status]}`} />
                    {status}
                </span>
            </div>

            {/* Links row */}
            {(links?.live || links?.github) && (
                <div className="flex items-center gap-3 mt-5">
                    {links.live && (
                        <a
                            href={links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 bg-white text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors"
                        >
                            View Live
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    )}
                    {links.github && (
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 border border-zinc-800 text-sm font-semibold px-4 py-2 rounded-full hover:border-zinc-600 transition-colors"
                        >
                            <GitBranch className="w-4 h-4" />
                            GitHub
                        </a>
                    )}
                </div>
            )}

            {/* Hero video/thumbnail */}
            <div className="mt-8">
                <ProjectHero title={title} thumbnail={thumbnail} ytVideoLink={ytVideoLink} />
            </div>

            {/* Description */}
            <section className="mt-10">
                <h2 className="text-lg font-bold">About the project</h2>
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mt-3">
                    {description}
                </p>
            </section>

            {/* Key highlights */}
            {highlights?.length > 0 && (
                <section className="mt-10">
                    <h2 className="text-lg font-bold">Key highlights</h2>
                    <ul className="space-y-3 mt-4">
                        {highlights.map((point, i) => (
                            <li key={i} className="flex gap-3 text-zinc-300 text-sm md:text-base leading-relaxed">
                                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-sky-500" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Tech stack */}
            {technologies?.length > 0 && (
                <section className="mt-10">
                    <h2 className="text-lg font-bold">Built with</h2>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {technologies.map((tech) => (
                            <span
                                key={tech.name}
                                className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm px-3 py-1.5 rounded-full"
                            >
                                <Image
                                    src={tech.logo}
                                    alt={tech.name}
                                    width={16}
                                    height={16}
                                    className="object-contain"
                                />
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {/* Screenshots */}
            {screenshots && screenshots.length > 0 && (
                <section className="mt-10 mb-4">
                    <h2 className="text-lg font-bold mb-4">Screenshots</h2>
                    <ScreenshotGallery screenshots={screenshots} title={title} />
                </section>
            )}
        </main>
    );
}

export async function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}