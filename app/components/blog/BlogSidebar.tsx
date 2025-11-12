"use client";

import Link from "next/link";
import { Search, Tag, FolderOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { categories, allTags } from "@/app/data/blog";

export function BlogSidebar() {
  return (
    <div className="space-y-6 sticky top-24">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Search className="w-5 h-5" />
            Ara
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Blog yazılarında ara..."
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <FolderOpen className="w-5 h-5" />
            Kategoriler
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="w-full justify-start"
                asChild
              >
                <Link href={`/blog/category/${category.toLowerCase()}`}>
                  {category}
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Tag className="w-5 h-5" />
            Popüler Etiketler
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                asChild
              >
                <Link href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                  {tag}
                </Link>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-2">📬 Bültene Abone Ol</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Yeni blog yazıları ve güncellemeler için email adresinizi bırakın.
          </p>
          <div className="space-y-2">
            <Input type="email" placeholder="Email adresiniz" />
            <Button className="w-full">Abone Ol</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}