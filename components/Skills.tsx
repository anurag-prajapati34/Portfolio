import { skills } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";
import { SkillCard } from "./SkillCard";


export default function Skills() {
    return (
        <div className="w-full text-white font-sans text-start mt-8">
            <SectionHeading title="Skills & Technologies" />
            <div className="flex flex-wrap gap-2 mt-3">
                {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </div>
    );
}