// app/components/home/Experience.tsx
"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getExperienceData } from "@/app/data/experience";
import type { Experience } from "@/app/data/experience";
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
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

function formatDate(dateStr: string | "Present", dictionary: Dictionary): string {
  if (dateStr === "Present") return dictionary.experience.present;
  const [year, month] = dateStr.split("-");
  // Assuming month names are not in dictionary for now, using hardcoded Turkish or English based on locale?
  // Ideally should use dictionary or Intl.DateTimeFormat
  // But for now let's use a simple mapping or just Intl
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return new Intl.DateTimeFormat(dictionary.nav.home === "Home" ? "en-US" : "tr-TR", { month: "long", year: "numeric" }).format(date);
}

function calculateDuration(start: string, end: string | "Present", dictionary: Dictionary): string {
  const startDate = new Date(start);
  const endDate = end === "Present" ? new Date() : new Date(end);
  
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                 (endDate.getMonth() - startDate.getMonth());
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  const yearText = dictionary.experience.time.year;
  const monthText = dictionary.experience.time.month;

  if (years === 0) return `${remainingMonths} ${monthText}`;
  if (remainingMonths === 0) return `${years} ${yearText}`;
  return `${years} ${yearText} ${remainingMonths} ${monthText}`;
}

function getTypeLabel(type: Experience["type"], dictionary: Dictionary): string {
  const labels = {
    "full-time": dictionary.experience.type.fullTime,
    "part-time": dictionary.experience.type.partTime,
    "freelance": dictionary.experience.type.freelance,
    "contract": dictionary.experience.type.contract
  };
  return labels[type];
}

function getTypeColor(type: Experience["type"]): string {
  const colors = {
    "full-time": "from-green-500 to-emerald-600",
    "part-time": "from-blue-500 to-blue-600",
    "freelance": "from-purple-500 to-purple-600",
    "contract": "from-orange-500 to-orange-600"
  };
  return colors[type];
}

function ExperienceCard({ exp, index, dictionary }: { exp: Experience; index: number; dictionary: Dictionary }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={item}
      className={`relative flex items-center ${isEven ? "flex-row" : "flex-row-reverse"} gap-8`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isEven ? "text-right pr-8" : "text-left pl-8"}`}>
        <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
          <CardHeader>
            <div className={`flex items-start gap-4 ${isEven ? "flex-row-reverse" : "flex-row"}`}>
              <div className={`flex-1 ${isEven ? "text-right" : "text-left"}`}>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {exp.position}
                </h3>
                <p className="text-lg font-semibold text-muted-foreground mt-1">
                  {exp.company}
                </p>
                <div className={`flex items-center gap-4 mt-3 text-sm text-muted-foreground ${isEven ? "justify-end" : "justify-start"}`}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(exp.startDate, dictionary)} - {formatDate(exp.endDate, dictionary)}
                  </span>
                  <span className="text-primary font-medium">
                    {calculateDuration(exp.startDate, exp.endDate, dictionary)}
                  </span>
                </div>
                <div className={`flex items-center gap-2 mt-2 ${isEven ? "justify-end" : "justify-start"}`}>
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{exp.location}</span>
                  <Badge className={`ml-2 bg-linear-to-r ${getTypeColor(exp.type)}`}>
                    {getTypeLabel(exp.type, dictionary)}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{exp.description}</p>

            {/* Responsibilities */}
            <div>
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {dictionary.experience.responsibilities}
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-sm mb-2">{dictionary.experience.technologies}</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {exp.achievements && exp.achievements.length > 0 && (
              <div className="pt-2 border-t">
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  {dictionary.experience.achievements}
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">★</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Timeline Dot */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background ring-offset-4 ring-offset-muted" />
      </div>

      {/* Empty space for layout */}
      <div className="flex-1" />
    </motion.div>
  );
}

interface ExperienceProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function Experience({ locale, dictionary }: ExperienceProps) {
  const experienceData = getExperienceData(locale);

  return (
    <section className="py-20 lg:py-32 bg-background relative">
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
            <Briefcase className="w-4 h-4 mr-2 inline-block" />
            {dictionary.experience.badge}
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {dictionary.experience.title}
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            {dictionary.experience.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-primary to-transparent -translate-x-1/2 hidden lg:block" />

          {/* Experience Items */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 lg:space-y-24"
          >
            {experienceData.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} dictionary={dictionary} />
            ))}
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <Card className="text-center border-2">
            <CardContent className="p-6">
              <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                5+
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {dictionary.hero.stats.experience}
              </p>
            </CardContent>
          </Card>
          <Card className="text-center border-2">
            <CardContent className="p-6">
              <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                50+
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {dictionary.hero.stats.projects}
              </p>
            </CardContent>
          </Card>
          <Card className="text-center border-2">
            <CardContent className="p-6">
              <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                15+
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {dictionary.experience.stats.technologies}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}