// Projects.tsx
import { projects } from "@/data/projects";
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
        </div>
    );
}