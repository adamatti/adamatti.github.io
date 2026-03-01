import Link from 'next/link';
import type { ReactElement } from 'react';
import { emitAnalyticsEvent } from '~/analytics/analytics';
import { ffShowResume } from '~/feature-flags';
import ThemeToggle from './theme-toggle';

function LinkHeader(args: {
  href: string;
  children: React.ReactNode;
  target?: string;
}): ReactElement {
  return (
    <Link
      className="p-2 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
      href={args.href}
      onClick={() =>
        emitAnalyticsEvent('nav_link_clicked', {
          href: args.href,
          label: String(args.children),
        })
      }
      target={args.target}
    >
      {args.children}
    </Link>
  );
}

export default function Header(): ReactElement {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-white/75 pt-3 pb-0 backdrop-blur-md transition-colors duration-300 sm:pt-4 sm:pb-0 dark:bg-gray-900/75">
      <Link
        className="color h-6 font-semibold text-2xl"
        href="/"
        onClick={() =>
          emitAnalyticsEvent('nav_link_clicked', { href: '/', label: 'home' })
        }
      >
        <span className="sr-only">Marcelo Adamatti</span>
        <span className="hidden sm:inline">Marcelo Adamatti</span>
        <span className="sm:hidden">Adamatti</span>
      </Link>
      <div className="ml-auto flex items-center text-base leading-5 sm:ml-0">
        <div className="flex items-center">
          {ffShowResume && <LinkHeader href="/resume">Resume</LinkHeader>}
          <LinkHeader href="/blog">Blog</LinkHeader>
          <LinkHeader href="https://github.com/adamatti" target="_blank">
            Github
          </LinkHeader>
          <LinkHeader href="http://twitter.com/adamatti" target="_blank">
            Twitter
          </LinkHeader>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
