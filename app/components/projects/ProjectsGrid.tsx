"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { projectsData } from "@/app/data/projects";
import { ProjectsFilter, type FilterState } from "./ProjectsFilter";
import type { Project } from "@/app/data/projects";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={item}>
      <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-blue-600/20" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <Badge className={project.status === "completed" ? "bg-green-500" : "bg-yellow-500"}>
              {project.status === "completed" ? "Tamamlandı" : "Devam Ediyor"}
            </Badge>
            {project.featured && (
              <Badge className="bg-primary">Öne Çıkan</Badge>
            )}
          </div>
        </div>

        <CardHeader>
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline" className="text-xs">
                {project.category}
              </Badge>
              {project.endDate && (
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(project.endDate).getFullYear()}
                </span>
              )}
            </div>
            
            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors line-clamp-1">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex gap-2 pt-4 border-t">
          {project.githubUrl && (
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
          <Button size="sm" className="flex-1" asChild>
            <Link href={`/projects/${project.id}`}>
              Detay
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function ProjectsGrid() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "all",
    technologies: [],
    status: "all",
  });
  
  const [sortBy, setSortBy] = useState<string>("date-desc");

  // Filter projects
  const filteredProjects = useMemo(() => {
    let filtered = [...projectsData];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower) ||
          p.technologies.some((t) => t.toLowerCase().includes(searchLower))
      );
    }

    // Category filter
    if (filters.category !== "all") {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    // Status filter
    if (filters.status !== "all") {
      filtered = filtered.filter((p) => p.status === filters.status);
    }

    // Technologies filter
    if (filters.technologies.length > 0) {
      filtered = filtered.filter((p) =>
        filters.technologies.some((tech) =>
          p.technologies.some((pTech) =>
            pTech.toLowerCase().includes(tech.toLowerCase())
          )
        )
      );
    }

    // Sort
    switch (sortBy) {
      case "date-desc":
        filtered.sort((a, b) => {
          const dateA = new Date(a.endDate || a.startDate);
          const dateB = new Date(b.endDate || b.startDate);
          return dateB.getTime() - dateA.getTime();
        });
        break;
      case "date-asc":
        filtered.sort((a, b) => {
          const dateA = new Date(a.endDate || a.startDate);
          const dateB = new Date(b.endDate || b.startDate);
          return dateA.getTime() - dateB.getTime();
        });
        break;
      case "name-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {filteredProjects.length}
            </span>{" "}
            proje bulundu
          </p>
        </div>

        {/* Sort */}
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Sırala" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date-desc">En Yeni</SelectItem>
            <SelectItem value="date-asc">En Eski</SelectItem>
            <SelectItem value="name-asc">İsim (A-Z)</SelectItem>
            <SelectItem value="name-desc">İsim (Z-A)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold mb-2">Proje Bulunamadı</h3>
          <p className="text-muted-foreground mb-6">
            Arama kriterlerinize uygun proje bulunamadı. Filtreleri değiştirmeyi
            deneyin.
          </p>
          <Button
            variant="outline"
            onClick={() =>
              setFilters({
                search: "",
                category: "all",
                technologies: [],
                status: "all",
              })
            }
          >
            Tüm Projeleri Göster
          </Button>
        </div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      )}

      {/* Hidden Filter Component for State Management */}
      <div className="hidden">
        <ProjectsFilter onFilterChange={setFilters} />
      </div>
    </div>
  );
}