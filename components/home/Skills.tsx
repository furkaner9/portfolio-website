// app/components/home/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skillsData } from "@/app/data/skills";
import type { Skill, SkillCategory } from "@/app/data/skills";

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

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="group cursor-pointer overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-3">
            {/* Icon with gradient background */}
            <div
              className={`w-16 h-16 rounded-2xl bg-linear-to-br ${skill.color} flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-shadow`}
            >
              {skill.icon}
            </div>

            {/* Skill name */}
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {skill.name}
            </h3>

            {/* Progress bar */}
            <div className="w-full space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Proficiency</span>
                <span className="font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`h-full bg-linear-to-r ${skill.color} rounded-full`}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SkillCategorySection({ category }: { category: SkillCategory }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="h-1 w-12 bg-linear-to-r from-purple-600 to-blue-600 rounded-full" />
        <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
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
            <Code2 className="w-4 h-4 mr-2 inline-block" />
            Yetenekler & Teknolojiler
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Teknoloji Yığınım
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Modern web teknolojileri ve araçlarıyla çalışarak, ölçeklenebilir ve
            performanslı uygulamalar geliştiriyorum.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillsData.map((category, index) => (
            <SkillCategorySection key={index} category={category} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Card className="inline-block border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Sürekli Öğreniyorum</h3>
              <p className="text-muted-foreground max-w-md">
                Teknoloji dünyasındaki yenilikleri takip ediyor ve kendimi
                geliştirmek için sürekli yeni şeyler öğreniyorum.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}