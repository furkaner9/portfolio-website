"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Search, ArrowLeft, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative inline-block"
            >
              <h1 className="text-[150px] md:text-[200px] lg:text-[250px] font-bold leading-none">
                <span className="bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  404
                </span>
              </h1>
              
              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-20 h-20 border-4 border-purple-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-16 h-16 border-4 border-blue-500/30 rounded-full"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center space-y-6 mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-muted">
                <FileQuestion className="w-16 h-16 text-muted-foreground" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Sayfa Bulunamadı
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. 
              Belki URL'de bir yazım hatası var?
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* Quick Links */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Hızlı Bağlantılar
                </h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/">
                      <Home className="w-4 h-4 mr-2" />
                      Ana Sayfa
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/projects">
                      <FileQuestion className="w-4 h-4 mr-2" />
                      Projeler
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/blog">
                      <FileQuestion className="w-4 h-4 mr-2" />
                      Blog
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/contact">
                      <FileQuestion className="w-4 h-4 mr-2" />
                      İletişim
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Search */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Arama Yap
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Aradığınızı bulamadınız mı? Anahtar kelime ile arama yapın.
                </p>
                <div className="space-y-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Ara..."
                      className="pl-10"
                    />
                  </div>
                  <Button className="w-full">
                    <Search className="w-4 h-4 mr-2" />
                    Ara
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild className="group">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Ana Sayfaya Dön
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild className="group">
              <Link href="/contact">
                Yardım İste
              </Link>
            </Button>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Card className="border-2 border-primary/20 bg-primary/5 inline-block">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Bilgi:</strong> 404 hatası, HTTP status code'larından biridir 
                  ve "Not Found" (Bulunamadı) anlamına gelir. İlk kez 1992 yılında 
                  kullanılmaya başlanmıştır.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}