// app/data/projects.ts
import { Locale } from "@/app/i18n/config";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: "web-app" | "api" | "mobile" | "desktop" | "other";
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  status: "completed" | "in-progress" | "archived";
  startDate: string;
  endDate?: string;
  highlights?: string[];
}

const projectsTr: Project[] = [
  {
    id: "1",
    title: "E-Ticaret Platformu",
    description:
      "ASP.NET Core ve React ile geliştirilmiş tam özellikli e-ticaret uygulaması. Ödeme entegrasyonu, admin paneli ve gerçek zamanlı stok takibi.",
    longDescription:
      "Modern e-ticaret çözümü ile kullanıcılar ürün arayabilir, sepete ekleyebilir ve güvenli ödeme yapabilir. Admin paneli ile stok, sipariş ve müşteri yönetimi yapılabilir.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["ASP.NET Core", "React", "E-Commerce", "Full Stack"],
    category: "web-app",
    featured: true,
    githubUrl: "https://github.com/furkaner9/ecommerce-platform",
    liveUrl: "https://demo-ecommerce.vercel.app",
    technologies: [
      "ASP.NET Core 8",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SignalR",
      "Stripe API",
    ],
    status: "completed",
    startDate: "2023-06",
    endDate: "2024-01",
    highlights: [
      "Clean Architecture prensiplerine uygun geliştirildi",
      "CQRS pattern ile scalable yapı",
      "JWT authentication ve authorization",
      "Real-time bildirimler (SignalR)",
      "Responsive ve modern UI/UX",
    ],
  },
  {
    id: "2",
    title: "Blog & CMS Sistemi",
    description:
      "ASP.NET Core Web API ve Next.js ile headless CMS. Markdown desteği, kategori yönetimi ve SEO optimizasyonu.",
    longDescription:
      "İçerik yönetimi ve blog yazıları için modern bir CMS sistemi. Admin paneli ile kolay içerik yönetimi, SEO araçları ve analytics entegrasyonu.",
    image: "/images/projects/cms.jpg",
    tags: ["CMS", "Blog", "Headless", "SEO"],
    category: "web-app",
    featured: true,
    githubUrl: "https://github.com/yourusername/headless-cms",
    liveUrl: "https://demo-cms.vercel.app",
    technologies: [
      "ASP.NET Core 8",
      "Entity Framework Core",
      "PostgreSQL",
      "Next.js 15",
      "React",
      "Markdown",
      "Tailwind CSS",
      "Redis Cache",
    ],
    status: "completed",
    startDate: "2023-03",
    endDate: "2023-08",
    highlights: [
      "RESTful API design",
      "Markdown ve HTML içerik desteği",
      "Image upload ve optimization",
      "SEO friendly URL yapısı",
      "Redis ile caching",
    ],
  },
  {
    id: "3",
    title: "Task Management API",
    description:
      "Mikroservis mimarisinde geliştirilmiş proje ve görev yönetim sistemi. Docker containerization ve CI/CD pipeline.",
    longDescription:
      "Agile takımlar için görev yönetimi API'si. Scrum board, sprint planning ve team collaboration özellikleri.",
    image: "/images/projects/task-api.jpg",
    tags: ["API", "Microservices", "Docker", "CI/CD"],
    category: "api",
    featured: true,
    githubUrl: "https://github.com/yourusername/task-management-api",
    technologies: [
      "ASP.NET Core 8",
      "Clean Architecture",
      "Docker",
      "RabbitMQ",
      "MongoDB",
      "Redis",
      "Azure DevOps",
      "Swagger",
    ],
    status: "completed",
    startDate: "2023-01",
    endDate: "2023-05",
    highlights: [
      "Microservices architecture",
      "Event-driven design (RabbitMQ)",
      "Docker & Kubernetes ready",
      "Comprehensive API documentation",
      "Unit & Integration tests",
    ],
  },
  {
    id: "4",
    title: "Real-Time Chat Application",
    description:
      "SignalR ile gerçek zamanlı mesajlaşma uygulaması. Grup sohbetleri, dosya paylaşımı ve online durum göstergesi.",
    longDescription:
      "WebSocket tabanlı gerçek zamanlı iletişim platformu. Bireysel ve grup mesajlaşma, dosya paylaşımı ve emoji desteği.",
    image: "/images/projects/chat-app.jpg",
    tags: ["Real-time", "SignalR", "WebSocket", "Chat"],
    category: "web-app",
    featured: true,
    githubUrl: "https://github.com/yourusername/realtime-chat",
    liveUrl: "https://demo-chat.vercel.app",
    technologies: [
      "ASP.NET Core 8",
      "SignalR",
      "SQL Server",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JWT",
    ],
    status: "completed",
    startDate: "2022-10",
    endDate: "2023-02",
    highlights: [
      "Real-time messaging with SignalR",
      "Private & group chats",
      "File sharing capability",
      "Online/offline status",
      "Message read receipts",
    ],
  },
  {
    id: "5",
    title: "Weather Dashboard",
    description:
      "Hava durumu API'si ile entegre dashboard. Grafik ve haritalar ile görselleştirme.",
    image: "/images/projects/weather.jpg",
    tags: ["Dashboard", "API Integration", "Data Visualization"],
    category: "web-app",
    featured: false,
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://demo-weather.vercel.app",
    technologies: [
      "Next.js",
      "React",
      "Chart.js",
      "Tailwind CSS",
      "OpenWeather API",
    ],
    status: "completed",
    startDate: "2022-08",
    endDate: "2022-09",
  },
  {
    id: "6",
    title: "Inventory Management System",
    description:
      "Stok takibi, tedarikçi yönetimi ve raporlama özellikleriyle envanter yönetim sistemi.",
    image: "/images/projects/inventory.jpg",
    tags: ["ERP", "Management", "Reports"],
    category: "web-app",
    featured: false,
    githubUrl: "https://github.com/yourusername/inventory-system",
    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Blazor",
      "DevExpress",
    ],
    status: "completed",
    startDate: "2022-05",
    endDate: "2022-10",
  },
];

const projectsEn: Project[] = [
  {
    ...projectsTr[0],
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce application developed with ASP.NET Core and React. Payment integration, admin panel, and real-time stock tracking.",
    longDescription:
      "With this modern e-commerce solution, users can search for products, add to cart, and make secure payments. Admin panel allows stock, order, and customer management.",
    highlights: [
      "Developed using Clean Architecture principles",
      "Scalable structure with CQRS pattern",
      "JWT authentication and authorization",
      "Real-time notifications (SignalR)",
      "Responsive and modern UI/UX",
    ],
  },
  {
    ...projectsTr[1],
    title: "Blog & CMS System",
    description:
      "Headless CMS with ASP.NET Core Web API and Next.js. Markdown support, category management, and SEO optimization.",
    longDescription:
      "Modern CMS system for content management and blog posts. Easy content management with admin panel, SEO tools, and analytics integration.",
    highlights: [
      "RESTful API design",
      "Markdown and HTML content support",
      "Image upload and optimization",
      "SEO friendly URL structure",
      "Caching with Redis",
    ],
  },
  {
    ...projectsTr[2],
    title: "Task Management API",
    description:
      "Project and task management system developed in microservices architecture. Docker containerization and CI/CD pipeline.",
    longDescription:
      "Task management API for Agile teams. Scrum board, sprint planning, and team collaboration features.",
    highlights: [
      "Microservices architecture",
      "Event-driven design (RabbitMQ)",
      "Docker & Kubernetes ready",
      "Comprehensive API documentation",
      "Unit & Integration tests",
    ],
  },
  {
    ...projectsTr[3],
    title: "Real-Time Chat Application",
    description:
      "Real-time messaging application with SignalR. Group chats, file sharing, and online status indicator.",
    longDescription:
      "WebSocket-based real-time communication platform. Individual and group messaging, file sharing, and emoji support.",
    highlights: [
      "Real-time messaging with SignalR",
      "Private & group chats",
      "File sharing capability",
      "Online/offline status",
      "Message read receipts",
    ],
  },
  {
    ...projectsTr[4],
    title: "Weather Dashboard",
    description:
      "Dashboard integrated with Weather API. Visualization with charts and maps.",
  },
  {
    ...projectsTr[5],
    title: "Inventory Management System",
    description:
      "Inventory management system with stock tracking, supplier management, and reporting features.",
  },
];

export const getProjectsData = (locale: Locale) => {
  return locale === "tr" ? projectsTr : projectsEn;
};

// Backward compatibility
export const projectsData = projectsTr;
export const featuredProjects = projectsData.filter(
  (project) => project.featured
);

// Kategoriye göre filtreleme
export const getProjectsByCategory = (
  category: Project["category"],
  locale: Locale = "tr"
) => {
  const data = getProjectsData(locale);
  return data.filter((project) => project.category === category);
};

// Teknolojiye göre filtreleme
export const getProjectsByTechnology = (
  technology: string,
  locale: Locale = "tr"
) => {
  const data = getProjectsData(locale);
  return data.filter((project) =>
    project.technologies.some((tech) =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};