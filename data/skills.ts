import { Icons } from "@/public";
import { StaticImageData } from "next/image";

export type Skill = { name: string; logo: StaticImageData | string };
export const skills = [
  // Backend framework & tooling
  {
    name: "Node.js",
    logo: Icons.nodeIcon,
  },
  {
    name: "Express.js",
    logo: Icons.expressIcon,
  },
  {
    name: "FastAPI",
    logo: Icons.fastapiIcon,
  },
  {
    name: "Pydantic",
    logo: Icons.pydanticIcon,
  },
  {
    name: "Celery",
    logo: Icons.celeryIcon,
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
  // Data layer
  {
    name: "MySQL",
    logo: Icons.mysqlIcon,
  },
  {
    name: "MongoDB",
    logo: Icons.mongodbIcon,
  },
  {
    name: "PostgreSQL",
    logo: Icons.postgresQlIcon,
  },
  {
    name: "Redis",
    logo: Icons.redisIcon,
  },
  {
    name: "Prisma",
    logo: Icons.prismaIcon,
  },
  {
    name: "SQLAlchemy",
    logo: Icons.sqlalchemyIcon,
  },
  {
    name: "Langchain",
    logo: Icons.langchainIcon,
  },
  {
    name: "Drizzle",
    logo: Icons.drizzleIcon,
  },
  // Frontend
  {
    name: "React",
    logo: Icons.reactIcon,
  },
  {
    name: "Next.js",
    logo: Icons.nextjsIcon,
  },
  {
    name: "Redux",
    logo: Icons.reduxIcon,
  },
  {
    name: "TailwindCSS",
    logo: Icons.tailwindtIcon,
  },
  // Core language
  {
    name: "Python",
    logo: Icons.pythonIcon,
  },
  {
    name: "TypeScript",
    logo: Icons.tsIcon,
  },
  {
    name: "JavaScript",
    logo: Icons.jsIcon,
  },
  {
    name: "C++",
    logo: Icons.cppIcon,
  },
  {
    name: "SQL",
    logo: Icons.sqlIcon,
  },

  // API layer
  {
    name: "REST APIs",
    logo: Icons.restAPiIcon,
  },

  //Tools
  {
    name: "Docker",
    logo: Icons.dockerIcon,
  },
  {
    name: "Git",
    logo: Icons.gitIcon,
  },
  {
    name: "Github",
    logo: Icons.githubIcon,
  },
  {
    name: "Postman",
    logo: Icons.postmanIcon,
  },
];
