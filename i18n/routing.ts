import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'es'] as const;
export type Locale = typeof locales[number];

export const routing = defineRouting({
  locales: locales,
  defaultLocale: 'es' as Locale
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
