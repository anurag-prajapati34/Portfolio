// Experience.tsx
import { experiences } from '@/data/experiences';
import { ExperienceCard } from "./ExperienceCard";
import { SectionHeading } from "./SectionHeading";
export default function Experience() {


    return (
        <div id="experience" className="w-full text-white font-sans text-start mt-8">
            <SectionHeading title="Experience" />
            <div className="flex flex-col gap-4 mt-4">
                {experiences.map((exp, i) => (
                    <ExperienceCard key={i} experience={exp} />
                ))}
            </div>
        </div>
    );
}