// Experience.tsx
import liveintechlogo from '@/public/images/liveintech_venturestudio_logo.jpg';
import nodelogo from '@/public/logos/icons8-nodejs.svg';
import expresslogo from '@/public/logos/icons8-express-js.svg';
import mysqllogo from '@/public/logos/icons8-mysql.svg';
import typescriptlogo from '@/public/logos/icons8-typescript.svg';
import redislogo from '@/public/logos/icons8-redis.svg';
import restapilogo from '@/public/logos/api.png';
import { ExperienceCard } from "./ExperienceCard";
import { SectionHeading } from "./SectionHeading";
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
                    logo: nodelogo,
                },
                {
                    name: "Express.js",
                    logo: expresslogo,
                },
                {
                    name: "MySQL",
                    logo: mysqllogo,
                },
                {
                    name: "TypeScript",
                    logo: typescriptlogo,
                },
                {
                    name: "Redis",
                    logo: redislogo,
                },
                {
                    name: "Rest APIs",
                    logo: restapilogo,
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