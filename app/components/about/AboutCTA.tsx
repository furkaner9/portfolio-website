// app/components/about/AboutCTA.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AboutCTA() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2 bg-linear-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Birlikte Çalışalım!
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Yeni bir proje mi planlıyorsunuz? İşbirliği fırsatlarını 
                  konuşmak veya herhangi bir sorunuz için benimle iletişime geçin.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      <Mail className="w-5 h-5 mr-2" />
                      İletişime Geç
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                  <Button size="lg" variant="outline" asChild>
                    <Link href="/projects">
                      <FileText className="w-5 h-5 mr-2" />
                      Projelerimi İncele
                    </Link>
                  </Button>
                </div>

                {/* Additional Info */}
                <div className="pt-8 border-t">
                  <p className="text-sm text-muted-foreground">
                    📧 Email: <a href="mailto:sizin@email.com" className="text-primary hover:underline">sizin@email.com</a>
                    {" · "}
                    📍 Konum: Bursa, Türkiye
                    {" · "}
                    ⏰ Genellikle 24 saat içinde yanıt veriyorum
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}