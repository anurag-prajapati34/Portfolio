// Projects.tsx
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
export default function Projects() {


    return (
        <div id="projects" className="w-full text-white font-sans text-start mt-10">
            <SectionHeading title="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </div>
            <div className="flex w-full justify-center items-center mt-2">
                <a
                    href="https://github.com/anurag-prajapati34"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-1 items-center rounded-xl px-4 py-1 "
                >
                    <p className="
                     text-zinc-400 hover:text-white transition-colors text-sm
                    "> View all</p>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 hover:text-white transition-colors text-sm text-end" />
                </a>
            </div>
        </div>
    );
}