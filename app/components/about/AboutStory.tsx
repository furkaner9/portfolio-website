"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, Rocket, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  {
    icon: Lightbulb,
    year: "2018",
    title: "Yolculuğun Başlangıcı",
    description: "Web geliştirme dünyasına ilk adımımı attım. HTML, CSS ve JavaScript ile başlayan bu serüven, benim için bir tutku haline geldi.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Code,
    year: "2019-2020",
    title: "Profesyonel Geçiş",
    description: "İlk profesyonel işime başladım. ASP.NET ve modern web teknolojileri ile gerçek dünya projelerinde çalışma fırsatı buldum.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    year: "2021-2023",
    title: "Uzmanlık ve Büyüme",
    description: "Full Stack Developer olarak kariyerimi ilerlettim. Mikroservis mimarileri, clean code prensipleri ve modern teknolojilerde uzmanlaştım.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    year: "2024",
    title: "Bugün",
    description: "Şu an ASP.NET Core ve React teknolojileri ile ölçeklenebilir, performanslı ve kullanıcı odaklı uygulamalar geliştiriyorum.",
    color: "from-green-500 to-emerald-500",
  },
];

export function AboutStory() {
  return (
    <section className="py-20 lg:py-32">
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
              Benim Hikayem
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Web geliştirme yolculuğum, sürekli öğrenme ve gelişim üzerine kurulu. 
            Her proje, benim için yeni bir öğrenme fırsatı ve deneyim.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/* Icon */}
                        <div className={`shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br ${milestone.color} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`text-sm font-bold px-3 py-1 rounded-full bg-linear-to-r ${milestone.color} text-white`}>
                              {milestone.year}
                            </span>
                            <h3 className="text-2xl font-bold">
                              {milestone.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <Card className="border-2 border-primary/20 bg-linear-to-br from-purple-500/5 to-blue-500/5">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="text-6xl mb-6 text-primary">"</div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-4">
                Kod yazmak sadece bir iş değil, aynı zamanda problemleri 
                çözme ve insanların hayatını kolaylaştırma sanatıdır.
              </p>
              <p className="text-muted-foreground">
                — Geliştirme Felsefem
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}