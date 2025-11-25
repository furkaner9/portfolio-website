export const i18n = {
  defaultLocale: "tr",
  locales: ["tr", "en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
};

export const localeFlags: Record<Locale, string> = {
  tr: "🇹🇷",
  en: "🇺🇸",
};