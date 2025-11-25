// app/data/skills.ts
import { Locale } from "@/app/i18n/config";

export interface Skill {
  name: string;
  icon: string;
  color: string;
  level: number; // 1-100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skills: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React",
        icon: "⚛️",
        color: "from-cyan-400 to-blue-500",
        level: 95,
      },
      {
        name: "Next.js",
        icon: "▲",
        color: "from-gray-700 to-gray-900",
        level: 90,
      },
      {
        name: "TypeScript",
        icon: "TS",
        color: "from-blue-500 to-blue-700",
        level: 92,
      },
      {
        name: "JavaScript",
        icon: "JS",
        color: "from-yellow-400 to-yellow-600",
        level: 95,
      },
      {
        name: "Tailwind CSS",
        icon: "🎨",
        color: "from-cyan-400 to-blue-600",
        level: 93,
      },
      {
        name: "HTML5",
        icon: "🌐",
        color: "from-orange-500 to-red-500",
        level: 98,
      },
      {
        name: "CSS3",
        icon: "💅",
        color: "from-blue-400 to-blue-600",
        level: 95,
      },
      {
        name: "Redux",
        icon: "🔄",
        color: "from-purple-500 to-purple-700",
        level: 85,
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        name: "ASP.NET Core",
        icon: "🟣",
        color: "from-purple-600 to-purple-800",
        level: 95,
      },
      {
        name: "C#",
        icon: "C#",
        color: "from-purple-500 to-indigo-600",
        level: 93,
      },
      {
        name: ".NET 8",
        icon: "⚡",
        color: "from-blue-600 to-purple-600",
        level: 92,
      },
      {
        name: "Entity Framework",
        icon: "🔗",
        color: "from-purple-500 to-blue-600",
        level: 90,
      },
      {
        name: "SQL Server",
        icon: "💾",
        color: "from-red-600 to-orange-600",
        level: 88,
      },
      {
        name: "REST API",
        icon: "🔌",
        color: "from-indigo-500 to-indigo-700",
        level: 93,
      },
      {
        name: "SignalR",
        icon: "📡",
        color: "from-blue-500 to-cyan-500",
        level: 80,
      },
      {
        name: "Dapper",
        icon: "⚙️",
        color: "from-gray-600 to-gray-800",
        level: 85,
      },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      {
        name: "Git",
        icon: "🔱",
        color: "from-orange-500 to-red-600",
        level: 92,
      },
      {
        name: "Docker",
        icon: "🐳",
        color: "from-blue-400 to-blue-600",
        level: 75,
      },
      {
        name: "Azure",
        icon: "☁️",
        color: "from-blue-500 to-blue-700",
        level: 80,
      },
      { name: "Vercel", icon: "▲", color: "from-gray-800 to-black", level: 88 },
      {
        name: "Visual Studio",
        icon: "💻",
        color: "from-purple-500 to-blue-600",
        level: 95,
      },
      {
        name: "Postman",
        icon: "📮",
        color: "from-orange-400 to-orange-600",
        level: 90,
      },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      {
        name: "UI/UX Design",
        icon: "✨",
        color: "from-pink-400 to-purple-500",
        level: 87,
      },
      {
        name: "Responsive Design",
        icon: "📱",
        color: "from-green-400 to-blue-500",
        level: 95,
      },
      {
        name: "Microservices",
        icon: "🏗️",
        color: "from-teal-400 to-blue-500",
        level: 82,
      },
      {
        name: "Clean Architecture",
        icon: "🎯",
        color: "from-indigo-400 to-purple-500",
        level: 88,
      },
      {
        name: "SOLID Principles",
        icon: "📐",
        color: "from-blue-500 to-indigo-600",
        level: 90,
      },
      {
        name: "Agile/Scrum",
        icon: "🔄",
        color: "from-teal-400 to-teal-600",
        level: 85,
      },
    ],
  },
];

const skillsTr: SkillCategory[] = [
  {
    ...skills[0],
    title: "Frontend Geliştirme",
  },
  {
    ...skills[1],
    title: "Backend Geliştirme",
  },
  {
    ...skills[2],
    title: "Araçlar & Teknolojiler",
  },
  {
    ...skills[3],
    title: "Diğer Yetenekler",
  },
];

export const getSkillsData = (locale: Locale) => {
  return locale === "tr" ? skillsTr : skills;
};

// Backward compatibility
export const skillsData = skills;