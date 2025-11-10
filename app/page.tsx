// app/page.tsx
import { Experience } from "@/app/components/home/Experience";
import { Hero } from "@/app/components/home/Hero";
import { Skills } from "@/app/components/home/Skills";
import { FeaturedProjects } from "./components/home/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <FeaturedProjects />
      {/* Diğer sectionlar buraya eklenecek */}
    </>
  );
}