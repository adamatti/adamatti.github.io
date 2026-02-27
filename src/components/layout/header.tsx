import Link from 'next/link';
import type { ReactElement } from 'react';
import { SHOW_RESUME } from '~/config';
import ThemeToggle from './theme-toggle';

function LinkHeader(args: {
  href: string;
  children: React.ReactNode;
  target?: string;
}): ReactElement {
  return (
    <Link
      className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
      href={args.href}
      target={args.target}
    >
      {args.children}
    </Link>
  );
}

export default function Header(): ReactElement {
  return (
    <header className="flex items-center justify-between py-10">
      <Link
        className="color hidden h-6 font-semibold text-2xl sm:block"
        href="/"
      >
        Marcelo Adamatti
      </Link>
      <div className="ml-auto flex items-center text-base leading-5 sm:ml-0">
        <div className="hidden sm:block">
          {SHOW_RESUME && <LinkHeader href="/resume">Resume</LinkHeader>}
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
