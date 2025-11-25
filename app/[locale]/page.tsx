import { Hero } from "@/app/components/home/Hero";
import { Skills } from "@/app/components/home/Skills";
import { FeaturedProjects } from "@/app/components/home/FeaturedProjects";
import { Experience } from "@/app/components/home/Experience";
import { getDictionary } from "@/app/i18n/utils";
import type { Locale } from "@/app/i18n/config";

export default async function Home({
  params: { locale },
}: {
    params: { locale: Locale };
}) {
  const dictionary = await getDictionary(locale);

  return (
    <div className="flex flex-col gap-20 lg:gap-32 pb-20 lg:pb-32">
      <Hero dictionary={dictionary} />
      <Skills locale={locale} dictionary={dictionary} />
      <FeaturedProjects locale={locale} dictionary={dictionary} />
      <Experience locale={locale} dictionary={dictionary} />
    </div>
  );
}
