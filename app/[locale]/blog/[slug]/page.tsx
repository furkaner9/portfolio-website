import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogPostDetail } from "@/app/components/blog/BlogPostDetail";
import { blogPosts, getPostBySlug } from "@/app/data/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Yazı Bulunamadı",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostDetail post={post} />;
}