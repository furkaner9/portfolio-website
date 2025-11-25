import type { Metadata } from "next";
import { BlogList } from "@/app/components/blog/BlogList";
import { BlogSidebar } from "@/app/components/blog/BlogSidebar";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Web geliştirme, ASP.NET Core, React ve modern teknolojiler hakkında yazılar.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 hover:bg-primary/20"
          >
            <BookOpen className="w-4 h-4 mr-2 inline-block" />
            Blog
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Blog Yazıları
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground">
            Web geliştirme, backend teknolojileri ve best practices hakkında
            düşüncelerim ve deneyimlerim.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <BlogList />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}