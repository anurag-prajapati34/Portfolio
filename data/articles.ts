import { Images } from "@/public";
import { StaticImageData } from "next/image";

export type Article = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  thumbnail: string | StaticImageData;
  categories: string[];
};

export const articles: Article[] = [
  {
    title: "The 10 Best JavaScript Frameworks for 2023",
    link: "https://www.freecodecamp.org/news/10-best-javascript-frameworks-for-2023/",
    pubDate: "2023-01-01",
    excerpt:
      "Discover the top 10 JavaScript frameworks for 2023, including React, Vue, Angular, Svelte, and more.",
    thumbnail: Images.notivoPreviewImage,
    categories: ["JavaScript", "Frontend"],
  },
  {
    title: "The 10 Best JavaScript Frameworks for 2023",
    link: "https://www.freecodecamp.org/news/10-best-javascript-frameworks-for-2023/",
    pubDate: "2023-01-01",
    excerpt:
      "Discover the top 10 JavaScript frameworks for 2023, including React, Vue, Angular, Svelte, and more.",
    thumbnail: Images.booklyPreviewImage,
    categories: ["JavaScript", "Frontend"],
  },
  {
    title: "The 10 Best JavaScript Frameworks for 2023",
    link: "https://www.freecodecamp.org/news/10-best-javascript-frameworks-for-2023/",
    pubDate: "2023-01-01",
    excerpt:
      "Discover the top 10 JavaScript frameworks for 2023, including React, Vue, Angular, Svelte, and more.",
    thumbnail: Images.knowledgeBasePreviewImage,
    categories: ["JavaScript", "Frontend"],
  },
  {
    title: "The 10 Best JavaScript Frameworks for 2023",
    link: "https://www.freecodecamp.org/news/10-best-javascript-frameworks-for-2023/",
    pubDate: "2023-01-01",
    excerpt:
      "Discover the top 10 JavaScript frameworks for 2023, including React, Vue, Angular, Svelte, and more.",
    thumbnail: Images.collabxPreviewImage,
    categories: ["JavaScript", "Frontend"],
  },
];
