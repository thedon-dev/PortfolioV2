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
  title: "Victor Jack | Portfolio",
  description: "Victor Jack is a Fullstack Developer",
  keywords:
    "Fullstack Developer, Portfolio, Victor Jack, Web Developer in Nigeria, Web Designer in Nigeria, Software Engineer in Nigeria, Frontend Developer in Nigeria, Backend Developer in Nigeria, React Developer in Nigeria, Next.js Developer in Nigeria, Node.js Developer in Nigeria, JavaScript Developer in Nigeria, TypeScript Developer in Nigeria",
  authors: [{ name: "Victor Jack" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
