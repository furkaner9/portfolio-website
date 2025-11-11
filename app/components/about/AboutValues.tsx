"use client";

import { motion } from "framer-motion";
import { Target, Users, Zap, Shield, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Detay Odaklı",
    description: "Her projeye büyük özen gösterir, en küçük detayları bile gözden kaçırmam. Kaliteli kod ve temiz tasarım benim önceliğimdir.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "İşbirlikçi",
    description: "Takım çalışmasına inanırım. Açık iletişim ve bilgi paylaşımı ile projeleri başarıya taşırım.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Hızlı Öğrenen",
    description: "Teknoloji hızla değişiyor ve ben de bu değişime ayak uyduruyorum. Yeni teknolojileri hızlıca öğrenir ve uygularım.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Güvenlik Öncelikli",
    description: "Güvenlik, her projenin temel taşıdır. Best practices ve güvenlik standartlarını titizlikle uygularım.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "Kalite Odaklı",
    description: "Sadece çalışan değil, aynı zamanda sürdürülebilir, test edilebilir ve ölçeklenebilir kod yazarım.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: BookOpen,
    title: "Sürekli Gelişim",
    description: "Kendimi geliştirmeye devam ediyorum. Yeni teknolojiler öğreniyor, makaleler okuyor ve toplulukla etkileşimde bulunuyorum.",
    color: "from-indigo-500 to-purple-500",
  },
];

export function AboutValues() {
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
              Çalışma Prensiplerim
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Başarılı projelerin arkasında güçlü prensipler vardır. 
            İşte benim çalışma değerlerim ve yaklaşımım.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${value.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
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
    </section>
  );
}