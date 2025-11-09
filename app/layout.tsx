// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Your Name - Full Stack Developer & Designer",
    template: "%s | Your Name",
  },
  description:
    "Full Stack Developer ve UI/UX Designer. Modern web teknolojileri ile kullanıcı odaklı çözümler üretiyorum.",
  keywords: [
    "full stack developer",
    "web developer",
    "ui/ux designer",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://yourwebsite.com",
    title: "Your Name - Full Stack Developer & Designer",
    description:
      "Full Stack Developer ve UI/UX Designer. Modern web teknolojileri ile kullanıcı odaklı çözümler üretiyorum.",
    siteName: "Your Name",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Full Stack Developer & Designer",
    description:
      "Full Stack Developer ve UI/UX Designer. Modern web teknolojileri ile kullanıcı odaklı çözümler üretiyorum.",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-16 lg:pt-20">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}