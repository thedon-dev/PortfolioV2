import type { Metadata } from "next";
import "./globals.css";
import { EmailJsProvider } from "@/components/EmailJsProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import WhatsAppButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
  title: "Victor Jack | Software Engineer",
  description:
    "Victor Jack is a Software Engineer specialized in building exceptional digital experiences",
  keywords:
    "Software Engineer, Portfolio, Victor Jack, Web Developer in Nigeria, Software Engineer Portfolio",
  authors: [{ name: "Victor Jack" }],
  metadataBase: new URL("https://victorjack.vercel.app"),
  icons: {
    icon: "/portfolioHero.png",
    shortcut: "/portfolioHero.png",
    apple: "/portfolioHero.png",
  },
  openGraph: {
    title: "Victor Jack | Software Engineer",
    description:
      "Software Engineer specialized in building exceptional digital experiences",
    url: "https://victorjack.vercel.app",
    siteName: "Victor Jack Portfolio",
    images: [
      {
        url: "/portfolioHero.png",
        width: 1200,
        height: 630,
        alt: "Victor Jack - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Jack | Software Engineer",
    description:
      "Software Engineer specialized in building exceptional digital experiences",
    creator: "@prime_sui",
    images: ["/portfolioHero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics
          GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}
        />
      </head>
      <body>
        <EmailJsProvider />
        {children}
        <WhatsAppButton phoneNumber="9057696490" />
      </body>
    </html>
  );
}
