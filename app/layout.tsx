import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MovingStarMover - Professional Moving Services Nationwide",
  description: "Professional moving services nationwide. From local moves to international relocations, we make your transition smooth and stress-free. Get your free quote today!",
  keywords: "moving company, moving services, long distance moving, international moving, household moving, corporate moving, military moving, auto transport",
  authors: [{ name: "MovingStarMover" }],
  openGraph: {
    title: "MovingStarMover - Professional Moving Services Nationwide",
    description: "Professional moving services nationwide. From local moves to international relocations, we make your transition smooth and stress-free.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MovingStarMover - Professional Moving Services Nationwide",
    description: "Professional moving services nationwide. From local moves to international relocations, we make your transition smooth and stress-free.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`antialiased font-sans dark:!text-black ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
