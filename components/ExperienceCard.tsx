// ExperienceCard.tsx
"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronDown } from "lucide-react";

type Technology = {
    name: string;
    logo: string;
};



type ExperienceType = {
    company: string;
    companyLogo: StaticImageData | string;
    role: string;
    location: string;
    startDate: string;
    isCurrent: boolean;
    endDate: string | null;
    description: string;
    highlights?: string[];
    technologies: Technology[];
};

const formatDate = (date: string | null, isCurrent: boolean) => {
    if (isCurrent) return "Present";
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });
};

export const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
    const [expanded, setExpanded] = useState(false);

    const {
        company,
        location,
        companyLogo,
        role,
        startDate,
        endDate,
        isCurrent,
        description,
        highlights,
        technologies,
    } = experience;

    return (
        <div
            onClick={() => setExpanded((prev) => !prev)}
            className="border border-zinc-900 hover:border-zinc-800  px-4 py-3 cursor-pointer transition-colors"
        >
            <div className="flex gap-3">
                <Image
                    width={45}
                    height={45}
                    src={companyLogo}
                    alt={company}
                    className="w-9 h-9 object-contain rounded-full shrink-0"
                />
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h3 className="text-white font-bold text-base leading-tight">{role}</h3>
                            <p className="text-sky-500 text-sm font-medium mt-0.5">{company}</p>
                        </div>
                        <ChevronDown
                            className={`w-4 h-4 text-zinc-500 shrink-0 mt-1 transition-transform duration-300 ${expanded ? "rotate-180" : ""
                                }`}
                        />
                    </div>

                    <div className="mt-2">
                        <p className="text-white text-sm font-medium">
                            {formatDate(startDate, false)} — {formatDate(endDate, isCurrent)}
                        </p>
                        <p className="text-zinc-500 text-xs mt-1">{location}</p>
                    </div>

                    {!expanded && (
                        <p className="text-zinc-300 text-sm mt-2 leading-relaxed line-clamp-2">
                            {description}
                        </p>
                    )}
                </div>
            </div>
            <div
                className={`grid transition-all duration-400 ease-in-out ${expanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="text-zinc-300 text-sm leading-relaxed">{description}</p>

                    {highlights && highlights.length > 0 && (
                        <ul className="space-y-3 mt-4 text-zinc-300 text-sm leading-relaxed">
                            {highlights.map((point, i) => (
                                <li key={i} className="flex gap-2">
                                    <span className="text-zinc-600 mt-1.5 text-[8px]">●</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {technologies?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    {technologies.map((tech) => (
                        <span
                            key={tech.name}
                            className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-full"
                        >
                            <Image src={tech.logo} alt={tech.name} width={14} height={14} className="object-contain" />
                            {tech.name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};