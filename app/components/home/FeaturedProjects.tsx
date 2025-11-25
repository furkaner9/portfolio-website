// app/components/home/FeaturedProjects.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Rocket, Github, ExternalLink, ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getProjectsData } from "@/app/data/projects";
import type { Project } from "@/app/data/projects";
import type { Locale, Dictionary } from "@/app/i18n/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function ProjectCard({ project, index, dictionary, locale }: { project: Project; index: number; dictionary: Dictionary; locale: Locale }) {
  return (
    <motion.div variants={item}>
      <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-blue-600/20 z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              // Fallback gradient if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-20">
            <Badge className="bg-green-500 text-white">
              {project.status === "completed" ? dictionary.projects.status.completed : dictionary.projects.status.inProgress}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1 text-sm text-muted-foreground">
              {project.highlights.slice(0, 2).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="line-clamp-1">{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Date */}
          {project.endDate && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(project.startDate).getFullYear()} -{" "}
                {new Date(project.endDate).getFullYear()}
              </span>
            </div>
          )}
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
                {dictionary.projects.github}
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
                {dictionary.projects.demo}
              </a>
            </Button>
          )}
          <Button size="sm" className="flex-1" asChild>
            <Link href={`/${locale}/projects/${project.id}`}>
              {dictionary.projects.details}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

interface FeaturedProjectsProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function FeaturedProjects({ locale, dictionary }: FeaturedProjectsProps) {
  const projectsData = getProjectsData(locale);
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 hover:bg-primary/20"
          >
            <Rocket className="w-4 h-4 mr-2 inline-block" />
            {dictionary.projects.badge}
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {dictionary.projects.title}
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            {dictionary.projects.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} dictionary={dictionary} locale={locale} />
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <Button size="lg" asChild className="group">
            <Link href={`/${locale}/projects`}>
              {dictionary.projects.viewAll}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="border-2 border-primary/20 bg-linear-to-br from-purple-500/5 to-blue-500/5">
            <CardContent className="p-8 text-center">
              <Github className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">
                {dictionary.projects.moreProjectsTitle}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {dictionary.projects.moreProjectsDescription}
              </p>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  {dictionary.projects.githubProfile}
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}