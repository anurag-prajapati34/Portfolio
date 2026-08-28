import { Skill } from "@/data/skills"
import Image from "next/image"

export const SkillCard = ({ skill }: { skill: Skill }) => {
    return (
        <span
            key={skill.name}
            className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-full"
        >
            <Image src={skill.logo} alt={skill.name} width={14} height={14} className="object-contain" />
            {skill.name}
        </span>
    )
}