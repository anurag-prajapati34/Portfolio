import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anurag Prajapati",
  description:
    "Software Engineer",

  openGraph: {
    title: "Anurag Prajapati",
    description:
      "Software Engineer",
    url: "https://anuragdev.com",
    siteName: "Anurag Prajapati",
    images: [
      {
        url: "https://anuragdev.com/profile.jpeg",
        width: 1200,
        height: 1200,
        alt: "Anurag Prajapati",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag Prajapati",
    description:
      "Software Engineer",
    images: ["https://anuragdev.com/profile.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
      <GoogleAnalytics gaId="G-6YJX46BD23" />
    </html>
  );
}
