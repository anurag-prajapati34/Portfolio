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
    title: "Socket.io beginners guide",
    link: "https://medium.com/@anurag-prajapati/socket-io-beginners-guide-cd3193286460",
    pubDate: "2025-09-30",
    excerpt: "How Socket.io works and how to use it in a real project.",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*xYMzNocUDj4i5Doq4wOrGA.webp",
    categories: ["API", "Backend"],
  },
  {
    title: "What is an API",
    link: "https://medium.com/@anurag-prajapati/what-are-rest-apis-how-to-create-use-rest-apis-9bb2841b406e",
    pubDate: "2025-09-21",
    excerpt: "Learn what is an API.",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7loh_L4ArzbkhVSEM_v8Pw.png",
    categories: ["API", "Backend"],
  },
  {
    title: "HTTP Polling vs HTTP Long Polling vs WebSocket",
    link: "https://medium.com/@anurag-prajapati/http-polling-vs-http-long-polling-vs-websocket-adf12b6a18b3",
    pubDate: "2025-09-02",
    excerpt: "HTTP Polling vs HTTP Long Polling vs WebSocket",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*M0exhu9_pbrzYpql_VRi4w.jpeg",
    categories: ["API", "Backend"],
  },
];
