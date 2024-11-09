import { createNavigation } from 'next-intl/navigation';
import { defaultLocale, localePrefix, locales, pathnames } from './config';

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation({
    defaultLocale,
    locales,
    pathnames,
    localePrefix
  });
