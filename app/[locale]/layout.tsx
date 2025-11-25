import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/app/components/shared/theme-provider";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

import { i18n, type Locale } from "@/app/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400"]
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: {
      default: "Your Name - Full Stack Developer & Designer",
      template: "%s | Your Name",
    },
    description:
      "Full Stack Developer ve UI/UX Designer. Modern web teknolojileri ile kullanıcı odaklı çözümler üretiyorum.",
    openGraph: {
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      url: "https://yourwebsite.com",
      title: "Your Name - Full Stack Developer & Designer",
      description:
        "Full Stack Developer ve UI/UX Designer. Modern web teknolojileri ile kullanıcı odaklı çözümler üretiyorum.",
      siteName: "Your Name",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
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
            <Header locale={locale} />
            <main className="flex-1 pt-16 lg:pt-20">{children}</main>
            <Footer locale={locale} />
          </div>
          <Toaster position="top-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
