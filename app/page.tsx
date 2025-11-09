// app/page.tsx
import { Experience } from "@/components/home/Experience";
import { Hero } from "@/components/home/Hero";
import { Skills } from "@/components/home/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      {/* Diğer sectionlar buraya eklenecek */}
    </>
  );
}