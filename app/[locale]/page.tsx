import { Hero } from "@/app/components/home/Hero";
import { Skills } from "@/app/components/home/Skills";
import { FeaturedProjects } from "@/app/components/home/FeaturedProjects";
import { Experience } from "@/app/components/home/Experience";

import { getDictionary } from "@/app/i18n/utils";
import type { Locale } from "@/app/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Experience />
      
    </>
  );
}
