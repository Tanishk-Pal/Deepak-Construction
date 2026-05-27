import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScrolls from "@/components/animations/SmoothScrolls";
import LoaderProvider from "@/components/loaders/LoaderProvider";
import PageTransition from "@/components/loaders/PageTransition";

import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Deepak Construction",
  description:
    "Premium infrastructure, pipeline and construction company website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-[#f5f3ee] text-black overflow-x-hidden antialiased">

        {/* PREMIUM SMOOTH SCROLL */}
        <SmoothScrolls />

        {/* PAGE CONTENT */}

        <LoaderProvider>

          <PageTransition>
            {children}
          </PageTransition>

        </LoaderProvider>
      </body>
    </html>
  );
}