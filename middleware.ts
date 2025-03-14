import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/routing';

export default createMiddleware({
  locales,
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

