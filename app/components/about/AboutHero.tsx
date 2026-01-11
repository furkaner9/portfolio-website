"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, MapPin, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AboutHero() {
  return (
    <section className="py-20 lg:py-32 bg-linear-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72  rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
              
              {/* Profile Image */}
              <div className="relative z-10">
                <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                  <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-blue-600/20 z-10" />
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      // Fallback gradient
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20"
                >
                  <Badge className="px-6 py-3 text-lg bg-background border-2 shadow-lg">
                    ✨ Full Stack Developer
                  </Badge>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-primary font-semibold text-lg mb-3"
              >
                Merhaba, Ben
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span className="bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Furkan Eriç
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                Bursa merkezli Full Stack Developer . 
                ASP.NET Core ve modern JavaScript teknolojileri ile 
                kullanıcı odaklı web uygulamaları geliştiriyorum.
              </motion.p>
            </div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Konum</p>
                  <p className="font-semibold">Bursa, TR</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-semibold text-sm">sizin@email.com</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  CV İndir
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t"
            >
              <div>
                <p className="text-3xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  2+
                </p>
                <p className="text-sm text-muted-foreground">Yıl Deneyim</p>
              </div>
              <div>
                <p className="text-3xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  15+
                </p>
                <p className="text-sm text-muted-foreground">Proje</p>
              </div>
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}