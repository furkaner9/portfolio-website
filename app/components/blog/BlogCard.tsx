"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { BlogPost } from "@/app/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div variants={item}>
      <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Image */}
          <Link
            href={`/blog/${post.slug}`}
            className="relative h-64 md:h-auto bg-muted overflow-hidden"
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-blue-600/20" />
            {post.featured && (
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-primary text-white">Öne Çıkan</Badge>
              </div>
            )}
          </Link>

          {/* Content */}
          <div className="md:col-span-2">
            <CardContent className="p-6 space-y-4">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} dk okuma
                </span>
                <Badge variant="secondary">{post.category}</Badge>
              </div>

              {/* Title */}
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
              </Link>

              {/* Excerpt */}
              <p className="text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between">
              {/* Author */}
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
                <span className="text-sm font-medium">{post.author.name}</span>
              </div>

              {/* Read More */}
              <Button variant="ghost" size="sm" asChild className="group/btn">
                <Link href={`/blog/${post.slug}`}>
                  Devamını Oku
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}