// app/data/experience.ts
import { Locale } from "@/app/i18n/config";

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  type: "full-time" | "part-time" | "freelance" | "contract";
  startDate: string;
  endDate: string | "Present";
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

const experienceTr: Experience[] = [
  {
    id: "1",
    company: "Tech Company A",
    position: "Senior Full Stack Developer",
    location: "İstanbul, Türkiye",
    type: "full-time",
    startDate: "2022-01",
    endDate: "Present",
    description:
      "ASP.NET Core ve React teknolojileri ile kurumsal web uygulamaları geliştirme.",
    responsibilities: [
      "Mikroservis mimarisinde RESTful API'ler geliştirme",
      "React ve Next.js ile modern frontend uygulamaları oluşturma",
      "Entity Framework Core ile veritabanı yönetimi",
      "Azure DevOps ile CI/CD pipeline kurulumu",
      "Takım liderliği ve kod review süreçlerinin yönetimi",
    ],
    technologies: [
      "ASP.NET Core",
      "C#",
      "React",
      "Next.js",
      "TypeScript",
      "SQL Server",
      "Azure",
      "Docker",
    ],
    achievements: [
      "Uygulamanın performansını %40 artırdım",
      "Clean Architecture prensiplerini projeye entegre ettim",
      "3 kişilik geliştirici takımına mentorluk yaptım",
    ],
  },
  {
    id: "2",
    company: "Software House B",
    position: "Full Stack Developer",
    location: "İstanbul, Türkiye",
    type: "full-time",
    startDate: "2020-06",
    endDate: "2021-12",
    description:
      ".NET ve modern JavaScript framework'leri ile çeşitli projeler geliştirme.",
    responsibilities: [
      "ASP.NET Core Web API geliştirme",
      "React ve Redux ile SPA uygulamaları oluşturma",
      "SQL Server veritabanı tasarımı ve optimizasyonu",
      "REST API entegrasyonları",
      "Unit test ve integration test yazma",
    ],
    technologies: [
      "ASP.NET Core",
      "C#",
      "React",
      "Redux",
      "JavaScript",
      "SQL Server",
      "Git",
    ],
    achievements: [
      "5+ başarılı proje teslimi",
      "Code quality metriklerinde %30 iyileşme sağladım",
    ],
  },
  {
    id: "3",
    company: "Startup C",
    position: "Junior Full Stack Developer",
    location: "Bursa, Türkiye",
    type: "full-time",
    startDate: "2019-03",
    endDate: "2020-05",
    description:
      "Web uygulamaları geliştirme ve bakım süreçlerinde görev aldım.",
    responsibilities: [
      "ASP.NET MVC ile web uygulamaları geliştirme",
      "jQuery ve JavaScript ile frontend geliştirme",
      "SQL Server veritabanı işlemleri",
      "Bug fixing ve feature development",
      "Müşteri gereksinimleri analizi",
    ],
    technologies: [
      "ASP.NET MVC",
      "C#",
      "JavaScript",
      "jQuery",
      "SQL Server",
      "HTML/CSS",
    ],
    achievements: [
      "İlk profesyonel projeyi başarıyla tamamladım",
      "Agile metodolojisini öğrendim ve uyguladım",
    ],
  },
  {
    id: "4",
    company: "Freelance",
    position: "Freelance Web Developer",
    location: "Remote",
    type: "freelance",
    startDate: "2018-01",
    endDate: "2019-02",
    description:
      "Küçük ve orta ölçekli işletmeler için web çözümleri geliştirme.",
    responsibilities: [
      "Müşteri web siteleri geliştirme",
      "E-ticaret platformları kurulumu",
      "Responsive web tasarım",
      "SEO optimizasyonu",
      "Müşteri ilişkileri yönetimi",
    ],
    technologies: ["ASP.NET", "C#", "HTML", "CSS", "JavaScript", "Bootstrap"],
    achievements: [
      "10+ müşteriye başarılı projeler teslim ettim",
      "Müşteri memnuniyeti oranı %95 üzeri",
    ],
  },
];

const experienceEn: Experience[] = [
  {
    ...experienceTr[0],
    description:
      "Developing enterprise web applications with ASP.NET Core and React technologies.",
    responsibilities: [
      "Developing RESTful APIs in microservices architecture",
      "Creating modern frontend applications with React and Next.js",
      "Database management with Entity Framework Core",
      "Setting up CI/CD pipelines with Azure DevOps",
      "Team leadership and code review process management",
    ],
    achievements: [
      "Increased application performance by 40%",
      "Integrated Clean Architecture principles into the project",
      "Mentored a team of 3 developers",
    ],
  },
  {
    ...experienceTr[1],
    description:
      "Developing various projects with .NET and modern JavaScript frameworks.",
    responsibilities: [
      "Developing ASP.NET Core Web APIs",
      "Creating SPA applications with React and Redux",
      "SQL Server database design and optimization",
      "REST API integrations",
      "Writing unit and integration tests",
    ],
    achievements: [
      "Delivered 5+ successful projects",
      "Achieved 30% improvement in code quality metrics",
    ],
  },
  {
    ...experienceTr[2],
    description:
      "Took part in web application development and maintenance processes.",
    responsibilities: [
      "Developing web applications with ASP.NET MVC",
      "Frontend development with jQuery and JavaScript",
      "SQL Server database operations",
      "Bug fixing and feature development",
      "Customer requirements analysis",
    ],
    achievements: [
      "Successfully completed the first professional project",
      "Learned and applied Agile methodology",
    ],
  },
  {
    ...experienceTr[3],
    description:
      "Developing web solutions for small and medium-sized businesses.",
    responsibilities: [
      "Developing customer websites",
      "Setting up e-commerce platforms",
      "Responsive web design",
      "SEO optimization",
      "Customer relationship management",
    ],
    achievements: [
      "Delivered successful projects to 10+ clients",
      "Customer satisfaction rate over 95%",
    ],
  },
];

export const getExperienceData = (locale: Locale) => {
  return locale === "tr" ? experienceTr : experienceEn;
};

// Backward compatibility
export const experienceData = experienceTr;