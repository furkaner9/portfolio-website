// app/data/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  readingTime: number; // minutes
  featured: boolean;
  published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "ASP.NET Core 8'de Clean Architecture ile Proje Geliştirme",
    slug: "aspnet-core-8-clean-architecture",
    excerpt: "Clean Architecture prensiplerine uygun olarak ASP.NET Core 8 projesi nasıl geliştirilir? CQRS, MediatR ve best practices.",
    content: `
# ASP.NET Core 8'de Clean Architecture

Clean Architecture, yazılım projelerinde sürdürülebilirlik ve test edilebilirlik sağlayan modern bir mimari yaklaşımdır.

## Neden Clean Architecture?

- **Bağımsızlık**: Framework'lerden bağımsız
- **Test Edilebilirlik**: Kolay unit test yazımı
- **Sürdürülebilirlik**: Değişikliklere açık
- **Okunabilirlik**: Temiz ve anlaşılır kod

## Katmanlar

### 1. Domain Layer
En içteki katman, business logic içerir.

\`\`\`csharp
public class Product : BaseEntity
{
    public string Name { get; set; }
    public decimal Price { get; set; }
    public int Stock { get; set; }
}
\`\`\`

### 2. Application Layer
Use case'ler ve CQRS pattern.

\`\`\`csharp
public class CreateProductCommand : IRequest<int>
{
    public string Name { get; set; }
    public decimal Price { get; set; }
}
\`\`\`

### 3. Infrastructure Layer
Veritabanı, external services.

### 4. Presentation Layer
API controllers, minimal APIs.

## Sonuç

Clean Architecture ile projeleriniz daha sürdürülebilir ve test edilebilir hale gelir.
    `,
    coverImage: "/images/blog/clean-architecture.jpg",
    date: "2024-01-15",
    author: {
      name: "Furkan Eriç",
      avatar: "/images/profile.jpg",
    },
    category: "Backend",
    tags: ["ASP.NET Core", "Clean Architecture", "C#", "Design Patterns"],
    readingTime: 8,
    featured: true,
    published: true,
  },
  {
    id: "2",
    title: "Next.js 15 ve React Server Components ile Performans Optimizasyonu",
    slug: "nextjs-15-server-components-performance",
    excerpt: "Next.js 15'in yeni özellikleri ve React Server Components ile nasıl daha hızlı web uygulamaları geliştirebiliriz?",
    content: `
# Next.js 15 ve Server Components

Next.js 15, React Server Components ile birlikte performans açısından çok önemli iyileştirmeler getiriyor.

## Server Components Nedir?

Server Components, React bileşenlerini sunucu tarafında render etmenizi sağlar.

\`\`\`tsx
// Server Component (default)
export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  return <article>{post.content}</article>;
}
\`\`\`

## Avantajları

1. **Daha Az JavaScript**: Client'a daha az kod gönderilir
2. **Doğrudan Veri Erişimi**: Server'da direkt DB sorgusu
3. **SEO**: Server-side rendering
4. **Güvenlik**: API keys server'da kalır

## Best Practices

- Client Components'ı minimize edin
- Suspense ile loading states kullanın
- Streaming SSR ile hızlı ilk yükleme

Detaylı örnekler ve daha fazlası için devam edin...
    `,
    coverImage: "/images/blog/nextjs-15.jpg",
    date: "2024-01-10",
    author: {
      name: "Furkan Eriç",
      avatar: "/images/profile.jpg",
    },
    category: "Frontend",
    tags: ["Next.js", "React", "Performance", "Server Components"],
    readingTime: 6,
    featured: true,
    published: true,
  },
  {
    id: "3",
    title: "Entity Framework Core: Performance Tips ve Tricks",
    slug: "entity-framework-core-performance-tips",
    excerpt: "EF Core ile çalışırken performansı artırmak için dikkat etmeniz gereken noktalar ve N+1 problem çözümleri.",
    content: `
# Entity Framework Core Performance

Entity Framework Core kullanırken performans optimizasyonu kritik önem taşır.

## N+1 Problemi

\`\`\`csharp
// ❌ Kötü - N+1 Problem
var orders = context.Orders.ToList();
foreach(var order in orders) {
    var customer = order.Customer; // Her iterasyonda DB sorgusu!
}

// ✅ İyi - Include kullan
var orders = context.Orders
    .Include(o => o.Customer)
    .ToList();
\`\`\`

## AsNoTracking

Sadece okuma işlemlerinde kullanın.

\`\`\`csharp
var products = context.Products
    .AsNoTracking()
    .ToList();
\`\`\`

## Select ile Projection

Sadece ihtiyacınız olan alanları çekin.

\`\`\`csharp
var products = context.Products
    .Select(p => new { p.Id, p.Name })
    .ToList();
\`\`\`

Daha fazla optimization teknikleri...
    `,
    coverImage: "/images/blog/ef-core.jpg",
    date: "2024-01-05",
    author: {
      name: "Furkan Eriç",
      avatar: "/images/profile.jpg",
    },
    category: "Backend",
    tags: ["Entity Framework", "C#", "Performance", "Database"],
    readingTime: 10,
    featured: true,
    published: true,
  },
  {
    id: "4",
    title: "TypeScript ile Tip Güvenli API Client Oluşturma",
    slug: "typescript-type-safe-api-client",
    excerpt: "TypeScript kullanarak tip güvenli ve maintainable API client'ları nasıl oluşturulur?",
    content: `
# TypeScript API Client

TypeScript ile tip güvenli API client oluşturmak, hata oranını düşürür.

## Generic API Client

\`\`\`typescript
class ApiClient {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
  }
  
  async post<T>(url: string, data: any): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    return response.json();
  }
}
\`\`\`

## Type-safe kullanım

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const api = new ApiClient();
const user = await api.get<User>('/api/users/1');
// user.name ✅ Type-safe
\`\`\`

Best practices ve daha fazlası...
    `,
    coverImage: "/images/blog/typescript.jpg",
    date: "2023-12-28",
    author: {
      name: "Furkan Eriç",
      avatar: "/images/profile.jpg",
    },
    category: "Frontend",
    tags: ["TypeScript", "API", "Type Safety", "JavaScript"],
    readingTime: 7,
    featured: false,
    published: true,
  },
  {
    id: "5",
    title: "Tailwind CSS 4: Yenilikler ve Migrasyon Rehberi",
    slug: "tailwind-css-4-whats-new",
    excerpt: "Tailwind CSS 4'ün yeni özellikleri, Oxide engine performansı ve v3'ten migrasyon adımları.",
    content: `
# Tailwind CSS 4 Yenilikler

Tailwind CSS 4, Rust tabanlı Oxide engine ile çok daha hızlı.

## Yeni Syntax

\`\`\`css
/* v3 */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* v4 */
@import "tailwindcss";
\`\`\`

## Gradient Değişikleri

\`\`\`html
<!-- v3 -->
<div class="bg-gradient-to-r">

<!-- v4 -->
<div class="bg-linear-to-r">
\`\`\`

## Performance

- %50 daha hızlı build
- Daha küçük CSS dosyaları
- Better tree-shaking

Migrasyon rehberi devam ediyor...
    `,
    coverImage: "/images/blog/tailwind-4.jpg",
    date: "2023-12-20",
    author: {
      name: "Furkan Eriç",
      avatar: "/images/profile.jpg",
    },
    category: "Frontend",
    tags: ["Tailwind CSS", "CSS", "Performance", "Migration"],
    readingTime: 5,
    featured: false,
    published: true,
  },
  {
    id: "6",
    title: "Docker ile ASP.NET Core Uygulamalarını Containerize Etme",
    slug: "docker-aspnet-core-containerization",
    excerpt: "ASP.NET Core uygulamalarınızı Docker ile nasıl containerize eder ve production'a deploy edersiniz?",
    content: `
# Docker ile ASP.NET Core

Docker, uygulamalarınızı her ortamda tutarlı çalıştırmanızı sağlar.

## Dockerfile Örneği

\`\`\`dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["MyApp.csproj", "./"]
RUN dotnet restore
COPY . .
RUN dotnet build -c Release -o /app/build

FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyApp.dll"]
\`\`\`

## Docker Compose

\`\`\`yaml
version: '3.8'
services:
  api:
    build: .
    ports:
      - "5000:80"
    environment:
      - ASPNETCORE_ENVIRONMENT=Production
\`\`\`

Best practices ve production tips...
    `,
    coverImage: "/images/blog/docker.jpg",
    date: "2023-12-15",
    author: {
      name: "Furkan Eriç",
      avatar: "/images/profile.jpg",
    },
    category: "DevOps",
    tags: ["Docker", "ASP.NET Core", "DevOps", "Containerization"],
    readingTime: 9,
    featured: false,
    published: true,
  },
];

// Featured posts
export const featuredPosts = blogPosts.filter((post) => post.featured && post.published);

// Get all categories
export const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

// Get all tags
export const allTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags))
);

// Get posts by category
export const getPostsByCategory = (category: string) => {
  return blogPosts.filter(
    (post) => post.category === category && post.published
  );
};

// Get posts by tag
export const getPostsByTag = (tag: string) => {
  return blogPosts.filter(
    (post) => post.tags.includes(tag) && post.published
  );
};

// Get post by slug
export const getPostBySlug = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug && post.published);
};