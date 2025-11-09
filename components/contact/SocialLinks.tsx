// app/components/contact/SocialLinks.tsx
"use client";

import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
    color: "hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
    color: "hover:bg-blue-600 hover:text-white",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: Twitter,
    color: "hover:bg-sky-500 hover:text-white",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yourusername",
    icon: Instagram,
    color: "hover:bg-linear-to-br from-purple-600 to-pink-600 hover:text-white",
  },
];

export function SocialLinks() {
  return (
    <Card className="border-2">
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-4">Sosyal Medya</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Sosyal medya hesaplarımdan beni takip edebilir ve iletişime geçebilirsiniz.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Button
                key={social.name}
                variant="outline"
                className={`h-auto py-4 flex-col space-y-2 transition-all duration-300 ${social.color}`}
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-medium">{social.name}</span>
                </a>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}