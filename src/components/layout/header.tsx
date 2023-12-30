import { SHOW_RESUME } from '~/config';
import Link from 'next/link';
import { type ReactElement } from 'react';

function LinkHeader(args: { href: string; children: React.ReactNode; target?: string }): ReactElement {
  return (
    <Link className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4" href={args.href} target={args.target}>
      {args.children}
    </Link>
  );
}

export default function Header(): ReactElement {
  return (
    <header className="flex items-center justify-between py-10">
      <Link className="hidden h-6 text-2xl font-semibold sm:block color" href="/">
        Marcelo Adamatti
      </Link>
      <div className="flex items-center text-base leading-5">
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
      </div>
    </header>
  );
}
