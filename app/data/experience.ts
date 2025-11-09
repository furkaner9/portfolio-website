// app/data/experience.ts
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

export const experienceData: Experience[] = [
  {
    id: "1",
    company: "Tech Company A",
    position: "Senior Full Stack Developer",
    location: "İstanbul, Türkiye",
    type: "full-time",
    startDate: "2022-01",
    endDate: "Present",
    description: "ASP.NET Core ve React teknolojileri ile kurumsal web uygulamaları geliştirme.",
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
    description: ".NET ve modern JavaScript framework'leri ile çeşitli projeler geliştirme.",
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
    description: "Web uygulamaları geliştirme ve bakım süreçlerinde görev aldım.",
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
    description: "Küçük ve orta ölçekli işletmeler için web çözümleri geliştirme.",
    responsibilities: [
      "Müşteri web siteleri geliştirme",
      "E-ticaret platformları kurulumu",
      "Responsive web tasarım",
      "SEO optimizasyonu",
      "Müşteri ilişkileri yönetimi",
    ],
    technologies: [
      "ASP.NET",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
    achievements: [
      "10+ müşteriye başarılı projeler teslim ettim",
      "Müşteri memnuniyeti oranı %95 üzeri",
    ],
  },
];