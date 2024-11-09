import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales, pathnames } from './config';

export default createMiddleware({
  locales,
  localePrefix,
  pathnames,
  defaultLocale,
  localeDetection: true
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
