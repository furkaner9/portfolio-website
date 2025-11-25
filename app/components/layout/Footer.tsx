import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Locale, Dictionary } from "@/app/i18n/utils";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
];

interface FooterProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function Footer({ locale, dictionary }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { name: dictionary.nav.home, href: "/" },
      { name: dictionary.nav.about, href: "/about" },
      { name: dictionary.nav.projects, href: "/projects" },
      { name: dictionary.nav.blog, href: "/blog" },
    ],
    resources: [
      { name: dictionary.nav.contact, href: "/contact" },
      { name: dictionary.footer.privacy, href: "/privacy" },
      { name: dictionary.footer.terms, href: "/terms" },
      { name: "RSS", href: "/feed.xml" },
    ],
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              href={`/${locale}`}
              className="text-2xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent inline-block"
            >
              Your Name
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              {dictionary.footer.description}
            </p>
            <div className="flex items-center space-x-3 mt-6">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{dictionary.footer.navigation}</h3>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{dictionary.footer.resources}</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Your Name. {dictionary.footer.rights}
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            {dictionary.footer.madeWith} <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" /> using Next.js 15 & Tailwind CSS 4
          </p>
        </div>
      </div>
    </footer>
  );
}