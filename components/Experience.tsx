// Experience.tsx
import liveintechlogo from '@/public/images/liveintech_venturestudio_logo.jpg';
import { ExperienceCard } from "./ExperienceCard";
import { SectionHeading } from "./SectionHeading";
import { Icons } from '@/public';
export default function Experience() {
    const experiences = [
        {
            company: "Liveintech (LivIntuitions Technologies)",
            role: "Software Engineer (Backend)",
            startDate: "2025-07-01",
            companyLogo: liveintechlogo,
            location: "Bangalore, India",
            isCurrent: false,
            endDate: "2026-08-03",
            description: "Built scalable backend systems for a fintech wealth management platform supporting investment products such as Mutual Funds, PMS, AIF, Insurance, and other financial services.",
            technologies: [
                {
                    name: "Node.js",
                    logo: Icons.nodeIcon,
                },
                {
                    name: "Express.js",
                    logo: Icons.expressIcon,
                },
                {
                    name: "MySQL",
                    logo: Icons.mysqlIcon,
                },
                {
                    name: "TypeScript",
                    logo: Icons.tsIcon,
                },
                {
                    name: "Redis",
                    logo: Icons.redisIcon,
                },
                {
                    name: "Rest APIs",
                    logo: Icons.restAPiIcon,
                },
            ],
            highlights: [
                "Developed backend APIs and services powering fintech investment workflows.",
                "Built asynchronous processing pipelines using Redis, jobs, workers, queues, and cron-based scheduling.",
                "Designed and implemented production-grade SMS and email notification systems with reliable background processing.",
                "Optimized MySQL queries using Prisma ORM, reducing API response times by approximately 40%."
            ],
        },
    ];

    return (
        <div className="w-full text-white font-sans text-start mt-8">
            <SectionHeading title="Experience" />
            <div className="flex flex-col gap-4 mt-4">
                {experiences.map((exp, i) => (
                    <ExperienceCard key={i} experience={exp} />
                ))}
            </div>
        </div>
    );
}