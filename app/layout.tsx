import "./globals.css";
import { Inter } from "next/font/google";
import { ServerThemeProvider } from "next-themes";
import Providers from "./providers";
import { aboutData } from "@/data/about";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${aboutData.name} - ${aboutData.jobTitle}`,
  description: aboutData.about,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    siteName: `${aboutData.name} - ${aboutData.jobTitle}`,
    title: `${aboutData.name} - ${aboutData.jobTitle}`,
    description: aboutData.about,
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: `${aboutData.name} - ${aboutData.jobTitle}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en">
        <body className={`${inter.className} dark:bg-neutral-900`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
