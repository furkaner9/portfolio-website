import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/app/components/shared/theme-provider";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { i18n, type Locale } from "@/app/i18n/config";
import { getDictionary } from "@/app/i18n/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
    params: { locale: Locale };
}): Promise<Metadata> {
  const dictionary = await getDictionary(locale);
  return {
    title: `Furkan Eriç | ${dictionary.hero.title}`,
    description: dictionary.hero.description,
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const dictionary = await getDictionary(locale);
  console.log("RootLayout locale:", locale);
  console.log("RootLayout dictionary.nav.home:", dictionary.nav.home);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header locale={locale} dictionary={dictionary} />
            <main className="flex-1 pt-16 lg:pt-20">{children}</main>
            <Footer locale={locale} dictionary={dictionary} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
