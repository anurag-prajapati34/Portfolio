import { Icons, Images } from "@/public";

export const experiences = [
  {
    company: "Liveintech (LivIntuitions Technologies)",
    role: "Software Engineer (Backend)",
    startDate: "2025-07-01",
    companyLogo: Images.liveIntechLogoImage,
    location: "Bangalore, India",
    isCurrent: false,
    endDate: "2026-08-03",
    description:
      "Built scalable backend systems for a fintech wealth management platform supporting investment products such as Mutual Funds, PMS, AIF, Insurance, and other financial services.",
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
      {
        name: "Zod",
        logo: Icons.zodIcon,
      },
      {
        name: "JWT",
        logo: Icons.jwtIcon,
      },
      {
        name: "BullMQ",
        logo: Icons.bullmqIcon,
      },
      {
        name: "Drizzle",
        logo: Icons.drizzleIcon,
      },
      {
        name: "SQL",
        logo: Icons.sqlIcon,
      },
      {
        name: "Git",
        logo: Icons.gitIcon,
      },
      {
        name: "Postman",
        logo: Icons.postmanIcon,
      },
    ],
    highlights: [
      "Developed backend APIs and services powering fintech investment workflows.",
      "Built asynchronous processing pipelines using Redis, jobs, workers, queues, and cron-based scheduling.",
      "Designed and implemented production-grade SMS and email notification systems with reliable background processing.",
      "Optimized MySQL queries using Prisma ORM, reducing API response times by approximately 40%.",
    ],
  },
];
