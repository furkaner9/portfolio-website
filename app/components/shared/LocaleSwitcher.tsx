"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { i18n, localeNames, localeFlags, type Locale } from "@/app/i18n/config";

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    if (currentLocale === newLocale) return;

    // Split pathname into segments
    const segments = pathname.split("/");

    // segments[0] is always empty string because pathname starts with /
    // segments[1] should be the locale

    // Check if the first segment is a valid locale
    if (segments.length > 1 && i18n.locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
    // If not (e.g. root path or missing locale), prepend the new locale
    // But since we are using middleware, this case should be rare for pages
    // However, to be safe, if we can't find the locale, we might want to just navigate to /{newLocale}
    // or try to preserve the path.

      // If we are at root "/", segments is ["", ""]
      if (pathname === "/") {
        segments[1] = newLocale;
      } else {
        // Path doesn't start with locale, so prepend it
        segments.splice(1, 0, newLocale);
      }
    }

    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLocale(locale)}
            className="cursor-pointer"
          >
            <span className="mr-2">{localeFlags[locale]}</span>
            {localeNames[locale]}
            {currentLocale === locale && (
              <span className="ml-auto text-primary">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}