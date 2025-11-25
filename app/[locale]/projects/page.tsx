import type { Metadata } from "next";
import { ProjectsGrid } from "@/app/components/projects/ProjectsGrid";
import { ProjectsFilter } from "@/app/components/projects/ProjectsFilter";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Projeler",
  description: "ASP.NET Core, React ve modern teknolojiler ile geliştirdiğim projeler. Web uygulamaları, API'ler ve daha fazlası.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 hover:bg-primary/20"
          >
            <Rocket className="w-4 h-4 mr-2 inline-block" />
            Tüm Projeler
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projelerim
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground">
            Modern web teknolojileri ile geliştirdiğim projeler. ASP.NET Core,
            React, Next.js ve daha fazlasıyla oluşturulmuş uygulamalar.
          </p>
        </div>

        {/* Filter & Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <ProjectsFilter />
          </div>

          {/* Main Content - Projects Grid */}
          <div className="lg:col-span-3">
            <ProjectsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}