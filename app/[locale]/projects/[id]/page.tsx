// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectDetail } from "@/app/components/projects/ProjectDetail";
import { RelatedProjects } from "@/app/components/projects/RelatedProjects";
import { projectsData } from "@/app/data/projects";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Proje Bulunamadı",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Get related projects (same category, exclude current)
  const relatedProjects = projectsData
    .filter(
      (p) => p.category === project.category && p.id !== project.id
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <ProjectDetail project={project} />
      {relatedProjects.length > 0 && (
        <RelatedProjects projects={relatedProjects} />
      )}
    </div>
  );
}