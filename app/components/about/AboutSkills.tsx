"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Cloud, GitBranch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "React & Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 93 },
      { name: "HTML/CSS", level: 98 },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    color: "from-purple-500 to-purple-700",
    skills: [
      { name: "ASP.NET Core", level: 95 },
      { name: "C#", level: 93 },
      { name: "Entity Framework", level: 90 },
      { name: "REST API Design", level: 93 },
    ],
  },
  {
    icon: Database,
    title: "Database & Caching",
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "SQL Server", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "Redis", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    color: "from-green-500 to-emerald-600",
    skills: [
      { name: "Azure", level: 80 },
      { name: "Docker", level: 75 },
      { name: "CI/CD Pipelines", level: 78 },
      { name: "Git", level: 92 },
    ],
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    color: "from-pink-500 to-rose-600",
    skills: [
      { name: "Responsive Design", level: 95 },
      { name: "User Interface", level: 87 },
      { name: "Figma", level: 85 },
      { name: "Prototyping", level: 80 },
    ],
  },
  {
    icon: GitBranch,
    title: "Best Practices",
    color: "from-indigo-500 to-purple-600",
    skills: [
      { name: "Clean Architecture", level: 88 },
      { name: "SOLID Principles", level: 90 },
      { name: "Design Patterns", level: 85 },
      { name: "Testing", level: 78 },
    ],
  },
];

export function AboutSkills() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Teknik Yeteneklerim
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Modern teknolojiler ve best practices ile sürekli kendimi geliştiriyor, 
            kaliteli kod yazmaya özen gösteriyorum.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-linear-to-br ${category.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-lg">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}