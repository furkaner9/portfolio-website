"use client";

import { motion } from "framer-motion";
import { BlogCard } from "./BlogCard";
import { blogPosts } from "@/app/data/blog";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function BlogList() {
  const publishedPosts = blogPosts.filter((post) => post.published);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {publishedPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Henüz blog yazısı yayınlanmadı.
          </p>
        </div>
      ) : (
        publishedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))
      )}
    </motion.div>
  );
}