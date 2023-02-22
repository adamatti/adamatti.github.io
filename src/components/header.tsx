import { type ReactElement } from 'react';

function LinkHeader(args: { href: string; children: React.ReactNode; target?: string }): ReactElement {
  return (
    <a className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4" href={args.href} target={args.target}>
      {args.children}
    </a>
  );
}

export default function Header(): ReactElement {
  return (
    <header className="flex items-center justify-between py-10">
      <a className="hidden h-6 text-2xl font-semibold sm:block color" href="/">
        Marcelo Adamatti
      </a>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          <LinkHeader href="/resume">Resume</LinkHeader>
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
