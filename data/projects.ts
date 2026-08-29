import { Icons, Images } from "@/public";
import { StaticImageData } from "next/image";

export type Status = "Live" | "Building" | "Not Started" | "Coming Soon";

export type Technology = {
  name: string;
  logo: string;
};

export type ProjectType = {
  slug: string;
  title: string;
  tagline: string; // short one-liner for cards
  description: string; // longer description for detail page
  thumbnail: string | StaticImageData;
  ytVideoLink?: string;
  screenshots?: string[] | StaticImageData[]; // extra images for the gallery
  status: Status;
  technologies: Technology[];
  highlights: string[]; // key points / what you built
  links: {
    live?: string;
    github?: string;
  };
};

export const projects: ProjectType[] = [
  {
    slug: "notivo",
    title: "Notivo",
    description:
      "Notivo is a multi-tenant email notification delivery platform built for developers. It provides a single REST API to send emails without managing delivery infrastructure, templates, queues, retries, or tracking",
    tagline: "",
    thumbnail: Images.notivoPreviewImage,
    status: "Live" as const,
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
        name: "Drizzle",
        logo: Icons.drizzleIcon,
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
        name: "BullMQ",
        logo: Icons.bullmqIcon,
      },
      {
        name: "Rest APIs",
        logo: Icons.restAPiIcon,
      },
      {
        name: "React",
        logo: Icons.reactIcon,
      },
      {
        name: "TailwindCSS",
        logo: Icons.tailwindtIcon,
      },
    ],
    highlights: [
      "Built a multi-tenant email notification platform enabling developers to send transactional emails through a single REST API using customizable templates.",
      "Designed an asynchronous email delivery pipeline using BullMQ, Redis, and background workers with automatic retries and exponential backoff.",
      "Developed REST APIs for email delivery, template management, SMTP credential management, delivery logs, and analytics dashboards.",
      "Implemented email lifecycle tracking (Pending, Processing, Sent, Failed) with detailed logs for monitoring and debugging.",
    ],
    screenshots: [
      Images.notivoDashboardImage,
      Images.notivoEmailsImage,
      Images.notivoTemplatesImage,
      Images.notivoCredsImage,
      Images.notivoSendEmailImage,
      Images.notivoEmailLogsImage,
      Images.notivoCreateTemplateImage,
    ],
    links: {
      live: "https://notivo.anuragdev.com/",
      github: "https://github.com/anurag-prajapati34/Notivo",
    },
  },
  {
    slug: "knowledgebase",
    title: "KnowledgeBase",
    description:
      "A multi-tenant Retrieval-Augmented Generation platform where users create isolated knowledge bases, upload documents (PDF/MD/TXT), and ask questions answered by an LLM grounded in their own data",
    tagline: "",
    thumbnail: Images.knowledgeBasePreviewImage,
    status: "Live" as const,
    technologies: [
      {
        name: "FastAPI",
        logo: Icons.fastapiIcon,
      },
      {
        name: "PostgreSQL",
        logo: Icons.postgresQlIcon,
      },
      {
        name: "Python",
        logo: Icons.pythonIcon,
      },

      {
        name: "celery",
        logo: Icons.celeryIcon,
      },
      {
        name: "Pydantic",
        logo: Icons.pydanticIcon,
      },
      {
        name: "SQLAlchemy",
        logo: Icons.sqlalchemyIcon,
      },
      {
        name: "Rest APIs",
        logo: Icons.restAPiIcon,
      },
      {
        name: "TypeScript",
        logo: Icons.tsIcon,
      },
      {
        name: "React",
        logo: Icons.reactIcon,
      },
      {
        name: "TailwindCSS",
        logo: Icons.tailwindtIcon,
      },
    ],
    highlights: [
      "Built a multi-tenant RAG platform enabling users to create isolated bases, upload documents, (PDF,MD,TXT),and query them via an LLM with source-cited answers.",
      "Designed an asynchronous document ingestion pipeline using Celery and Redis to extract, chunk and embed documents via sentence-transformers without blocking API requests.",
      "Implemented semantic search using PostgreSQL with pgvector, performing cosine-similarity retrieval scoped per knowledge base to groud LLM responses in relevant context.",
      "Integrated LangChain to abstract LLM and embedding providers and google Gemini for context grounded answer generation with per chunk source citations.",
    ],
    screenshots: [
      Images.knowledgeDashboardImage,
      Images.knowledgeCreateImage,
      Images.knowledgeUploadImage,
      Images.knowledgeChatScreenImage,
      Images.knowledgeQueryImage,
    ],
    links: { github: "https://github.com/anurag-prajapati34/Knowledge" },
  },
  {
    slug: "collabx",
    title: "CollabX",
    description:
      "Collabx is an realtime collaborative platform made using Next js , Convex , Clerk , liveblocks . It allows users to create and join collaborative sessions for real-time document editing and communication",
    tagline: "",
    thumbnail: Images.collabxPreviewImage,
    status: "Live" as const,
    technologies: [
      {
        name: "Next.js",
        logo: Icons.nextjsIcon,
      },
      {
        name: "TypeScript",
        logo: Icons.tsIcon,
      },
      {
        name: "TailwindCSS",
        logo: Icons.tailwindtIcon,
      },
      {
        name: "Convex",
        logo: Icons.convexIcon,
      },
      {
        name: "Clerk",
        logo: Icons.clerkIcon,
      },
    ],
    highlights: [
      "Built realtime cursor presence and multiplayer sync using Liveblocks, so every stroke and shape updates instantly across all connected clients.",
      "Designed an infinite canvas with pan, zoom, and shape tools (rectangle, ellipse, freehand, text) rendered on top of a custom coordinate system.",
      "Used Convex as the backend for persistence, so boards survive refreshes and can be reopened with full history intact.",
      "Integrated Clerk for authentication and per-board access control, supporting both owners and invited collaborators.",
    ],
    screenshots: [
      Images.collabx1Image,
      Images.collabx2Image,
      Images.collabx3Image,
      Images.collabx4Image,
      Images.collabx5Image,
      Images.collabx6Image,
    ],
    links: {
      live: "https://collabx-six.vercel.app/",
      github: "https://github.com/anurag-prajapati34/CollabX",
    },
    ytVideoLink:
      "https://www.youtube.com/embed/LM8lq6xjyJw?si=nOIRudiCHq4Nschl",
  },
  {
    slug: "bookly",
    title: "Bookly",
    description:
      "Bookly is an online bookstore offering a wide range of books across various categories.Developed with React, Vanilla CSS, and Tailwind CSS, it integrates APIs like Google Books API and New York Times",
    tagline: "",
    thumbnail: Images.booklyPreviewImage,
    status: "Live" as const,
    technologies: [
      {
        name: "React",
        logo: Icons.reactIcon,
      },
      {
        name: "TailwindCSS",
        logo: Icons.tailwindtIcon,
      },
      {
        name: "JavaScript",
        logo: Icons.jsIcon,
      },
      {
        name: "API",
        logo: Icons.restAPiIcon,
      },

      {
        name: "CSS",
        logo: Icons.cssIcon,
      },
    ],
    highlights: [
      "Online bookstore offering a wide range of books across various categories.",
      "Integrates APIs like Google Books API and New York Times.",
      "Built with React, Vanilla CSS, and Tailwind CSS for a sleek and responsive user interface.",
      "Utilizes React Router for navigation and React Context for state management.",
    ],
    links: {
      live: "https://bookly-6t46.onrender.com/",
      github: "https://github.com/anurag-prajapati34/Bookly",
    },
    ytVideoLink:
      "https://www.youtube.com/embed/VJ891E_YcuA?si=NvXcSEcudcDehx1W",
    screenshots: [
      Images.booklyHeroImage,
      Images.booklyBestSellersImage,
      Images.booklyScrollImage,
      Images.booklyFavoritesImage,
      Images.booklyAboutImage,
      Images.booklyContactImage,
    ],
  },
];
